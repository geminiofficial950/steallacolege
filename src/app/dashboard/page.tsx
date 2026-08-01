'use client';

import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import { useApp } from '@/context/AppContext';
import type { Credential } from '@/types';

function fmt(d: string | null): string {
  if (!d) return '—';
  return new Date(d + 'T12:00:00').toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function TypePills({ types }: { types: Credential['types'] }) {
  if (!types?.length) return <span>—</span>;
  if (types.length === 2) return <span className="pill pill-both">Both</span>;
  return (
    <>
      {types.map((t) => (
        <span key={t} className={`pill pill-${t} me-1`}>{t}</span>
      ))}
    </>
  );
}

export default function DashboardPage() {
  const { stats, creds, setDlModal, showToast } = useApp();

  const recent = creds.slice(0, 10);

  const shareLinkedIn = (c: Credential) => {
    const verifyUrl = `${window.location.origin}/verify?id=${c.id}`;
    const url =
      `https://www.linkedin.com/profile/add` +
      `?startTask=CERTIFICATION_NAME` +
      `&name=${encodeURIComponent(c.course)}` +
      `&organizationName=Stella+College` +
      `&certUrl=${encodeURIComponent(verifyUrl)}` +
      `&certId=${c.id}`;
    window.open(url, '_blank');
  };

  const copyVerifyUrl = (id: string) => {
    const url = `${window.location.origin}/verify?id=${id}`;
    navigator.clipboard.writeText(url).then(() => showToast('Verify URL copied!'));
  };

  return (
    <AuthLayout>
      <div className="section">
        <div className="sec-head">
          <div className="sec-title">Dashboard</div>
          <div className="sec-sub">Overview of all issued credentials</div>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-num">{stats.total}</div>
            <div className="stat-lbl">Total issued</div>
          </div>
          <div className="stat-card copper">
            <div className="stat-num">{stats.cert}</div>
            <div className="stat-lbl">Certificates</div>
          </div>
          <div className="stat-card navy">
            <div className="stat-num">{stats.badge}</div>
            <div className="stat-lbl">Badges</div>
          </div>
          <div className="stat-card success">
            <div className="stat-num">{stats.courses}</div>
            <div className="stat-lbl">Unique courses</div>
          </div>
        </div>

        {/* Recent credentials */}
        <div className="form-card">
          <div className="form-card-title">Recent credentials</div>
          {recent.length === 0 ? (
            <div className="empty">
              <div className="empty-ico">📋</div>
              No credentials yet —{' '}
              <Link href="/issue" style={{ color: 'var(--navy)' }}>issue one now</Link>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="cred-table">
                <thead>
                  <tr>
                    <th>Recipient</th><th>Course</th><th>Type</th>
                    <th>Issued</th><th>Sheets</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((c) => (
                    <tr key={c.id}>
                      <td><strong>{c.name}</strong></td>
                      <td>{c.course}</td>
                      <td><TypePills types={c.types} /></td>
                      <td style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{fmt(c.date)}</td>
                      <td>
                        {c.synced
                          ? <span className="pill pill-synced">✓ synced</span>
                          : <span className="pill pill-unsynced">pending</span>}
                      </td>
                      <td>
                        <div className="td-actions">
                          <button className="btn-sm dl" onClick={() => setDlModal({ open: true, cred: c })}>⬇</button>
                          <button className="btn-sm li" onClick={() => shareLinkedIn(c)}>in</button>
                          <button className="btn-sm" onClick={() => copyVerifyUrl(c.id)}>📋</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
