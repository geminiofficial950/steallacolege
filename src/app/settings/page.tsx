'use client';

import { useState, useEffect } from 'react';
import AuthLayout from '@/components/AuthLayout';
import { useApp } from '@/context/AppContext';
import type { SheetsTestResult } from '@/types';

export default function SettingsPage() {
  const { settings, saveSettings, showToast } = useApp();
  const [sheetsUrl,  setSheetsUrl]  = useState('');
  const [testResult, setTestResult] = useState<SheetsTestResult | null>(null);
  const [verifyBase, setVerifyBase] = useState('');

  // Hydrate from settings after mount (avoids SSR mismatch)
  useEffect(() => {
    setSheetsUrl(settings.sheetsUrl ?? '');
    setVerifyBase(window.location.origin);
  }, [settings]);

  const handleSave = () => {
    saveSettings({ ...settings, sheetsUrl: sheetsUrl.trim() });
    showToast('Settings saved ✓', 'success-t');
  };

  const testSheets = async () => {
    if (!sheetsUrl.trim()) { showToast('Enter a URL first', 'error'); return; }
    setTestResult({ status: 'testing', msg: 'Testing connection…' });
    try {
      await fetch(sheetsUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ action: 'ping' }),
      });
      setTestResult({
        status: 'ok',
        msg: 'Request sent successfully. Check your Google Sheet to confirm a row was added (no-cors mode means we cannot read the response directly).',
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      setTestResult({ status: 'error', msg: `Connection failed: ${msg}` });
    }
  };

  const copyVerifyUrl = () => {
    navigator.clipboard
      .writeText(`${verifyBase}/verify`)
      .then(() => showToast('Verify URL copied!'));
  };

  return (
    <AuthLayout>
      <div className="section">
        <div className="sec-head">
          <div className="sec-title">Settings</div>
          <div className="sec-sub">Configure integrations and portal options</div>
        </div>

        {/* ── Google Sheets ── */}
        <div className="settings-card">
          <div className="settings-card-title">📊 Google Sheets Integration</div>

          <div className="fg">
            <label style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--navy)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Apps Script Web App URL
            </label>
            <div className="settings-row">
              <input
                className="settings-input"
                type="url"
                placeholder="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
                value={sheetsUrl}
                onChange={(e) => { setSheetsUrl(e.target.value); setTestResult(null); }}
              />
              <button className="btn-sm gold" onClick={handleSave}>Save</button>
              <button className="btn-sm" onClick={testSheets}>Test</button>
            </div>
            <div className="settings-hint">
              Every time a credential is issued, a row is automatically POST-ed to this URL.<br />
              To create this URL: open Google Sheets → Extensions → Apps Script → deploy as a Web App.
            </div>
          </div>

          {testResult && (
            <div style={{
              marginTop: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              lineHeight: 1.5,
              background:
                testResult.status === 'ok'    ? 'rgba(45,122,79,0.08)' :
                testResult.status === 'error' ? 'rgba(192,57,43,0.06)' :
                'var(--off)',
              color:
                testResult.status === 'ok'    ? 'var(--success)' :
                testResult.status === 'error' ? 'var(--danger)'  :
                'var(--muted)',
            }}>
              {testResult.msg}
            </div>
          )}
        </div>

        {/* ── Staff accounts ── */}
        <div className="settings-card">
          <div className="settings-card-title">👥 Staff Accounts</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            Login credentials are defined in the <code style={{ background: 'var(--off)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>USERS</code> object
            inside <code style={{ background: 'var(--off)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>context/AppContext.tsx</code>.<br />
            Current accounts: <strong>stella.admin</strong> and <strong>staff</strong><br />
            <span style={{ color: 'var(--danger)', fontSize: '0.78rem' }}>
              ⚠ For production, move authentication to a server-side solution — see the README.
            </span>
          </div>
        </div>

        {/* ── Verify URL ── */}
        <div className="settings-card">
          <div className="settings-card-title">🔗 Public Verify URL</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
            Share this URL with students and employers to let them verify credentials:
          </div>
          <div style={{
            fontFamily: 'monospace', fontSize: '0.82rem',
            background: 'var(--off)', padding: '0.7rem 1rem',
            borderRadius: '8px', color: 'var(--navy)', wordBreak: 'break-all',
          }}>
            {verifyBase ? `${verifyBase}/verify?id=SC-CREDENTIAL-ID` : '—'}
          </div>
          <button className="btn-sm" style={{ marginTop: '0.6rem' }} onClick={copyVerifyUrl}>
            📋 Copy base verify URL
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
