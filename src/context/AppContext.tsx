'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import type {
  AppContextValue,
  Credential,
  Template,
  TemplateType,
  Settings,
  ToastState,
  ToastClass,
  IssuedModalState,
  DlModalState,
  Stats,
} from '@/types';

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  AUTHENTICATION NOTE
//
//  Credentials are stored as a plain object in client-side code.
//  This is fine for a staff intranet / local tool, but NOT secure for
//  a public-facing production app.
//
//  For production, replace this with:
//    - Next.js route handlers + JWT / session cookies  (recommended)
//    - NextAuth.js  (https://next-auth.js.org)
//    - Clerk / Auth0 / Supabase Auth
//
//  See README.md → "Authentication" for a full explanation.
// ─────────────────────────────────────────────────────────────────────────────
const USERS: Record<string, string> = {
  'stella.admin': 'StC0ll3g3!',
  staff: 'stella2024',
};

// ── Storage keys ─────────────────────────────────────────────────────────────
const KEYS = {
  auth: 'sc_auth',
  creds: 'sc_creds',
  tmpls: 'sc_tmpls',
  settings: 'sc_settings',
} as const;

// ── Helpers ───────────────────────────────────────────────────────────────────
function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function generateId(): string {
  return 'SC-' + Date.now().toString(36).toUpperCase();
}

// ── Context ───────────────────────────────────────────────────────────────────
const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [creds, setCreds] = useState<Credential[]>([]);
  const [tmpls, setTmpls] = useState<Template[]>([]);
  const [settings, setSettings] = useState<Settings>({});
  const [toast, setToast] = useState<ToastState>({ msg: '', cls: '', show: false });
  const [issuedModal, setIssuedModal] = useState<IssuedModalState>({ open: false, cred: null });
  const [dlModal, setDlModal] = useState<DlModalState>({ open: false, cred: null });

  // ── Hydrate from storage (client only) ──────────────────────────────────────
  useEffect(() => {
    setIsAuth(sessionStorage.getItem(KEYS.auth) === '1');
    setCreds(readLocal<Credential[]>(KEYS.creds, []));
    setTmpls(readLocal<Template[]>(KEYS.tmpls, []));
    setSettings(readLocal<Settings>(KEYS.settings, {}));
    setHydrated(true);
  }, []);

  // ── Persist helpers ───────────────────────────────────────────────────────────
  const saveCreds = useCallback((next: Credential[]) => {
    setCreds(next);
    localStorage.setItem(KEYS.creds, JSON.stringify(next));
  }, []);

  const saveTmpls = useCallback((next: Template[]) => {
    setTmpls(next);
    localStorage.setItem(KEYS.tmpls, JSON.stringify(next));
  }, []);

  const saveSettings = useCallback((next: Settings) => {
    setSettings(next);
    localStorage.setItem(KEYS.settings, JSON.stringify(next));
  }, []);

  // ── Auth ──────────────────────────────────────────────────────────────────────
  const login = useCallback((username: string, password: string): boolean => {
    if (USERS[username] === password) {
      sessionStorage.setItem(KEYS.auth, '1');
      setIsAuth(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(KEYS.auth);
    setIsAuth(false);
  }, []);

  // ── Toast ─────────────────────────────────────────────────────────────────────
  const showToast = useCallback((msg: string, cls: ToastClass = '') => {
    setToast({ msg, cls, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3200);
  }, []);

  // ── Sheets sync ───────────────────────────────────────────────────────────────
  const syncCred = useCallback(
    async (cred: Credential, credList?: Credential[], sheetsUrl?: string) => {
      const url = sheetsUrl ?? settings.sheetsUrl;
      if (!url) { showToast('No Sheets URL configured', 'error'); return; }
      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({ action: 'add', ...cred }),
        });
        const list = credList ?? creds;
        saveCreds(list.map((c) => (c.id === cred.id ? { ...c, synced: true } : c)));
        showToast('Synced to Sheets ✓', 'success-t');
      } catch {
        showToast('Sheets sync failed', 'error');
      }
    },
    [creds, settings, saveCreds, showToast],
  );

  // ── Issue credential ──────────────────────────────────────────────────────────
  const issueCred = useCallback(
    (data: Omit<Credential, 'id' | 'synced' | 'issuedAt'>): Credential => {
      const cred: Credential = { ...data, id: generateId(), synced: false, issuedAt: Date.now() };
      const next = [cred, ...creds];
      saveCreds(next);
      if (settings.sheetsUrl) syncCred(cred, next, settings.sheetsUrl);
      return cred;
    },
    [creds, settings, saveCreds, syncCred],
  );

  // ── Sync all ──────────────────────────────────────────────────────────────────
  const syncAll = useCallback(() => {
    if (!settings.sheetsUrl) { showToast('No Sheets URL configured', 'error'); return; }
    const unsynced = creds.filter((c) => !c.synced);
    if (!unsynced.length) { showToast('All records already synced'); return; }
    unsynced.forEach((c) => syncCred(c));
  }, [creds, settings, syncCred, showToast]);

  // ── Delete credential ─────────────────────────────────────────────────────────
  const deleteCred = useCallback(
    (id: string) => {
      if (!confirm('Delete this credential? This cannot be undone.')) return;
      saveCreds(creds.filter((c) => c.id !== id));
      showToast('Credential deleted');
    },
    [creds, saveCreds, showToast],
  );

  // ── Templates ─────────────────────────────────────────────────────────────────
  const uploadTemplate = useCallback(
    (file: File, type: TemplateType): Promise<Template> =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const tmpl: Template = {
            id: 'tmpl-' + Date.now(),
            type,
            name: file.name.replace(/\.[^.]+$/, ''),
            data: e.target!.result as string,
            mime: file.type,
          };
          saveTmpls([...tmpls, tmpl]);
          showToast('Template uploaded: ' + file.name, 'success-t');
          resolve(tmpl);
        };
        reader.readAsDataURL(file);
      }),
    [tmpls, saveTmpls, showToast],
  );

  const deleteTmpl = useCallback(
    (id: string) => {
      if (!confirm('Delete this template?')) return;
      saveTmpls(tmpls.filter((t) => t.id !== id));
      showToast('Template deleted');
    },
    [tmpls, saveTmpls, showToast],
  );

  // ── Derived stats ─────────────────────────────────────────────────────────────
  const stats: Stats = {
    total: creds.length,
    cert: creds.filter((c) => c.types?.includes('certificate')).length,
    badge: creds.filter((c) => c.types?.includes('badge')).length,
    courses: new Set(creds.map((c) => c.course)).size,
  };

  return (
    <AppContext.Provider
      value={{
        isAuth, hydrated, login, logout,
        creds, tmpls, settings,
        saveCreds, saveTmpls, saveSettings,
        issueCred, syncCred, syncAll, deleteCred,
        uploadTemplate, deleteTmpl,
        stats,
        toast, showToast,
        issuedModal, setIssuedModal,
        dlModal, setDlModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}
