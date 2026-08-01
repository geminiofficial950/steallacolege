// ── Credential ──────────────────────────────────────────────────────────────
export type CredentialType = 'certificate' | 'badge';

export interface Credential {
  id: string;
  name: string;
  email: string;
  course: string;
  date: string;           // ISO date string "YYYY-MM-DD"
  expiry: string | null;
  desc: string;
  types: CredentialType[];
  certTmplId: string | null;
  badgeTmplId: string | null;
  synced: boolean;
  issuedAt: number;       // Date.now() timestamp
}

// ── Template ─────────────────────────────────────────────────────────────────
export type TemplateType = 'certificate' | 'badge';

export interface Template {
  id: string;
  type: TemplateType;
  name: string;
  data: string;           // base64 data URL
  mime: string;
}

// ── Settings ─────────────────────────────────────────────────────────────────
export interface Settings {
  sheetsUrl?: string;
}

// ── Stats ─────────────────────────────────────────────────────────────────────
export interface Stats {
  total: number;
  cert: number;
  badge: number;
  courses: number;
}

// ── Issue Form ────────────────────────────────────────────────────────────────
export interface IssueForm {
  first: string;
  last: string;
  email: string;
  course: string;
  date: string;
  expiry: string;
  desc: string;
  certTmplId: string;
  badgeTmplId: string;
}

export interface IssueTypes {
  cert: boolean;
  badge: boolean;
}

// ── Toast ─────────────────────────────────────────────────────────────────────
export type ToastClass = '' | 'error' | 'success-t';

export interface ToastState {
  msg: string;
  cls: ToastClass;
  show: boolean;
}

// ── Modal States ──────────────────────────────────────────────────────────────
export interface IssuedModalState {
  open: boolean;
  cred: Credential | null;
}

export interface DlModalState {
  open: boolean;
  cred: Credential | null;
}

// ── Sheets Test ───────────────────────────────────────────────────────────────
export type TestStatus = 'testing' | 'ok' | 'error';

export interface SheetsTestResult {
  status: TestStatus;
  msg: string;
}

// ── App Context ───────────────────────────────────────────────────────────────
export interface AppContextValue {
  isAuth: boolean;
  hydrated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;

  creds: Credential[];
  tmpls: Template[];
  settings: Settings;

  saveCreds: (creds: Credential[]) => void;
  saveTmpls: (tmpls: Template[]) => void;
  saveSettings: (settings: Settings) => void;

  issueCred: (data: Omit<Credential, 'id' | 'synced' | 'issuedAt'>) => Credential;
  syncCred: (cred: Credential, credList?: Credential[], sheetsUrl?: string) => Promise<void>;
  syncAll: () => void;
  deleteCred: (id: string) => void;

  uploadTemplate: (file: File, type: TemplateType) => Promise<Template>;
  deleteTmpl: (id: string) => void;

  stats: Stats;

  toast: ToastState;
  showToast: (msg: string, cls?: ToastClass) => void;

  issuedModal: IssuedModalState;
  setIssuedModal: (state: IssuedModalState) => void;

  dlModal: DlModalState;
  setDlModal: (state: DlModalState) => void;
}
