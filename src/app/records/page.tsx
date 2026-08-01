'use client';

import { useState } from 'react';
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

type FilterType = '' | 'certificate' | 'badge' | 'both';

export default function RecordsPage() {
  const { creds, deleteCred, syncCred, syncAll, setDlModal, showToast } = useApp();
  const [search, setSearch]         = useState('');
  const [filterType, setFilterType] = useState<FilterType>('');

  const q = search.toLowerCase();

  const filtered = creds.filter((c) => {
    const matchSearch = !q || (c.name + c.course + c.email).toLowerCase().includes(q);
    const matchType =
      !filterType ||
      (filterType === 'both'
        ? c.types?.length === 2
        : c.types?.includes(filterType as 'certificate' | 'badge'));
    return matchSearch && matchType;
  });

  const copyVerifyUrl = (id: string) => {
    const url = `${window.location.origin}/verify?id=${id}`;
    navigator.clipboard.writeText(url).then(() => showToast('Verify URL copied!'));
  };

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

  return (
    <AuthLayout>
      <div className="section">
        {/* Header */}
        <div className="sec-head d-flex align-items-start justify-content-between flex-wrap gap-3">
          <div>
            <div className="sec-title">All records</div>
            <div className="sec-sub">
              {filtered.length} of {creds.length} credential{creds.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="d-flex gap-2 align-items-center flex-wrap">
            <input
              type="text"
              placeholder="Search name, email or course…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: '1px solid var(--border)', borderRadius: '8px',
                padding: '0.5rem 0.85rem', fontFamily: 'inherit',
                fontSize: '0.84rem', background: 'var(--white)',
                outline: 'none', width: '240px',
              }}
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as FilterType)}
              style={{
                border: '1px solid var(--border)', borderRadius: '8px',
                padding: '0.5rem 0.75rem', fontFamily: 'inherit',
                fontSize: '0.84rem', background: 'var(--white)', outline: 'none',
              }}
            >
              <option value="">All types</option>
              <option value="certificate">Certificate</option>
              <option value="badge">Badge</option>
              <option value="both">Both</option>
            </select>
            <button className="btn-sm gold" onClick={syncAll}>↻ Sync all to Sheets</button>
          </div>
        </div>

        {/* Table */}
        <div className="form-card" style={{ padding: 0, overflow: 'hidden' }}>
          {filtered.length === 0 ? (
            <div className="empty">
              <div className="empty-ico">📋</div>
              {creds.length === 0 ? 'No credentials issued yet' : 'No records match your search'}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="cred-table">
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Type</th>
                    <th>Issued</th>
                    <th>Expiry</th>
                    <th>ID</th>
                    <th>Sheets</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.id}>
                      <td><strong>{c.name}</strong></td>
                      <td style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{c.email}</td>
                      <td>{c.course}</td>
                      <td><TypePills types={c.types} /></td>
                      <td style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{fmt(c.date)}</td>
                      <td style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{c.expiry ? fmt(c.expiry) : '—'}</td>
                      <td><span className="pill pill-id">{c.id}</span></td>
                      <td>
                        {c.synced
                          ? <span className="pill pill-synced">✓ synced</span>
                          : <span className="pill pill-unsynced">pending</span>}
                      </td>
                      <td>
                        <div className="td-actions">
                          <button className="btn-sm dl" onClick={() => setDlModal({ open: true, cred: c })}>⬇ Download</button>
                          <button className="btn-sm li" onClick={() => shareLinkedIn(c)}>in</button>
                          <button className="btn-sm" onClick={() => copyVerifyUrl(c.id)}>📋</button>
                          {!c.synced && (
                            <button className="btn-sm gold" onClick={() => syncCred(c)}>↻ Sync</button>
                          )}
                          <button className="btn-sm danger" onClick={() => deleteCred(c.id)}>✕</button>
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
