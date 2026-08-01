'use client';

import { useApp } from '@/context/AppContext';
import type { Credential } from '@/types';

function getVerifyUrl(id: string): string {
  if (typeof window === 'undefined') return '';
  return `${window.location.origin}/verify?id=${id}`;
}

export default function IssuedModal() {
  const { issuedModal, setIssuedModal, showToast } = useApp();
  const { open, cred } = issuedModal;

  if (!cred) return null;

  const verifyUrl = getVerifyUrl(cred.id);

  const copyUrl = () => {
    navigator.clipboard.writeText(verifyUrl).then(() => showToast('Verify URL copied!'));
  };

  const shareLinkedIn = () => {
    const url =
      `https://www.linkedin.com/profile/add` +
      `?startTask=CERTIFICATION_NAME` +
      `&name=${encodeURIComponent(cred.course)}` +
      `&organizationName=Stella+College` +
      `&certUrl=${encodeURIComponent(verifyUrl)}` +
      `&certId=${cred.id}`;
    window.open(url, '_blank');
  };

  const close = () => setIssuedModal({ open: false, cred: null });

  return (
    <div
      className={`modal-overlay ${open ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="modal">
        <div className="modal-head">
          <div className="modal-title">✦ Credential issued!</div>
          <button className="modal-close" onClick={close}>✕</button>
        </div>

        <div className="modal-body">
          <ModalRow label="Recipient">
            <strong>{cred.name}</strong>
            <div style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>{cred.email}</div>
          </ModalRow>

          <ModalRow label="Course">
            <strong>{cred.course}</strong>
          </ModalRow>

          <ModalRow label="Credential ID">
            <span className="pill pill-id">{cred.id}</span>
          </ModalRow>

          <ModalRow label="Type">
            {cred.types.map((t) => (
              <span key={t} className={`pill pill-${t} me-1`}>{t}</span>
            ))}
          </ModalRow>

          <div style={{ background: 'var(--off)', borderRadius: '10px', padding: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              Verify URL
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--navy)', wordBreak: 'break-all', fontFamily: 'monospace' }}>
              {verifyUrl}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button className="btn-sm" onClick={copyUrl}>📋 Copy verify URL</button>
            <button className="btn-sm li" onClick={shareLinkedIn}>in Add to LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.3rem' }}>
        {label}
      </div>
      {children}
    </div>
  );
}
