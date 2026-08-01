'use client';

import { useState } from 'react';
import AuthLayout from '@/components/AuthLayout';
import { useApp } from '@/context/AppContext';
import type { IssueForm, IssueTypes } from '@/types';

function fmt(d: string): string {
  if (!d) return '';
  return new Date(d + 'T12:00:00').toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

const today = new Date().toISOString().split('T')[0];

const INITIAL_FORM: IssueForm = {
  first: '', last: '', email: '', course: '',
  date: today, expiry: '', desc: '',
  certTmplId: '', badgeTmplId: '',
};

export default function IssuePage() {
  const { tmpls, issueCred, setIssuedModal, showToast } = useApp();
  const [types, setTypes] = useState<IssueTypes>({ cert: true, badge: false });
  const [form, setForm] = useState<IssueForm>(INITIAL_FORM);

  const certTmpls = tmpls.filter((t) => t.type === 'certificate');
  const badgeTmpls = tmpls.filter((t) => t.type === 'badge');

  const set = <K extends keyof IssueForm>(key: K, value: IssueForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleType = (t: keyof IssueTypes) => {
    setTypes((prev) => {
      const next = { ...prev, [t]: !prev[t] };
      // At least one must be selected
      if (!next.cert && !next.badge) return { ...prev, [t]: true };
      return next;
    });
  };

  const handleSubmit = () => {
    const { first, last, email, course, date } = form;
    if (!first || !last || !email || !course || !date) {
      showToast('Please fill in all required fields (*)', 'error'); return;
    }
    if (!email.includes('@')) {
      showToast('Please enter a valid email address', 'error'); return;
    }

    const credTypes: Array<'certificate' | 'badge'> = [];
    if (types.cert)  credTypes.push('certificate');
    if (types.badge) credTypes.push('badge');

    const cred = issueCred({
      name: `${first} ${last}`,
      email,
      course,
      date,
      expiry: form.expiry || null,
      desc: form.desc,
      types: credTypes,
      certTmplId:  form.certTmplId  || null,
      badgeTmplId: form.badgeTmplId || null,
    });

    setIssuedModal({ open: true, cred });
    showToast('Credential issued successfully!', 'success-t');
    setForm({ ...INITIAL_FORM, date: today });
    setTypes({ cert: true, badge: false });
  };

  // Preview values
  const pFirst  = form.first  || 'Recipient';
  const pLast   = form.last   || 'Name';
  const pCourse = form.course || 'Course Name';
  const certTmpl  = tmpls.find((t) => t.id === form.certTmplId);
  const badgeTmpl = tmpls.find((t) => t.id === form.badgeTmplId);

  return (
    <AuthLayout>
      <div className="section">
        <div className="sec-head">
          <div className="sec-title">Issue credential</div>
          <div className="sec-sub">Select certificate and/or badge — both can be issued at the same time</div>
        </div>

        <div className="row g-4">
          {/* ── Form ── */}
          <div className="col-md-6">
            <div className="form-card">
              <div className="form-card-title">Recipient details</div>

              {/* Type selector */}
              <div className="fg"><label>Issue type — select one or both</label></div>
              <div className="cred-type-group">
                {(['cert', 'badge'] as const).map((t) => (
                  <div
                    key={t}
                    className={`ctype ${types[t] ? 'checked' : ''}`}
                    onClick={() => toggleType(t)}
                  >
                    <div className="ctype-icon">{t === 'cert' ? '📜' : '🏅'}</div>
                    <div>
                      <div className="ctype-label">{t === 'cert' ? 'Certificate' : 'Badge'}</div>
                      <div className="ctype-sub">{t === 'cert' ? 'Formal credential' : 'Digital badge'}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Name */}
              <div className="row g-2">
                <div className="col-6">
                  <div className="fg">
                    <label>First name *</label>
                    <input type="text" placeholder="Sarah" value={form.first}
                      onChange={(e) => set('first', e.target.value)} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="fg">
                    <label>Last name *</label>
                    <input type="text" placeholder="Johnson" value={form.last}
                      onChange={(e) => set('last', e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="fg">
                <label>Email address *</label>
                <input type="email" placeholder="sarah@email.com" value={form.email}
                  onChange={(e) => set('email', e.target.value)} />
              </div>

              <div className="fg">
                <label>Course / skill name *</label>
                <input type="text" placeholder="e.g. Mental Health Professional Development"
                  value={form.course} onChange={(e) => set('course', e.target.value)} />
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="fg">
                    <label>Issue date *</label>
                    <input type="date" value={form.date}
                      onChange={(e) => set('date', e.target.value)} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="fg">
                    <label>Expiry date (optional)</label>
                    <input type="date" value={form.expiry}
                      onChange={(e) => set('expiry', e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="fg">
                <label>Description (optional)</label>
                <textarea rows={2} placeholder="What skills or competencies does this recognise?"
                  value={form.desc} onChange={(e) => set('desc', e.target.value)} />
              </div>

              {types.cert && (
                <div className="fg">
                  <label>Certificate template</label>
                  <select value={form.certTmplId} onChange={(e) => set('certTmplId', e.target.value)}>
                    <option value="">— default (no template) —</option>
                    {certTmpls.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
                  </select>
                </div>
              )}

              {types.badge && (
                <div className="fg">
                  <label>Badge template</label>
                  <select value={form.badgeTmplId} onChange={(e) => set('badgeTmplId', e.target.value)}>
                    <option value="">— default (no template) —</option>
                    {badgeTmpls.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
                  </select>
                </div>
              )}

              <button className="btn-issue" onClick={handleSubmit}>
                ✦ Issue & Generate Credential
              </button>
            </div>
          </div>

          {/* ── Preview ── */}
          <div className="col-md-6">
            <div className="form-card" style={{ marginBottom: '1rem' }}>
              <div className="form-card-title">Live preview</div>
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                {types.cert && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.4rem' }}>Certificate</div>
                    {certTmpl ? (
                      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <img src={certTmpl.data} style={{ width: '100%', display: 'block' }} alt="template" />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                          <div style={{ fontFamily: "'Cormorant Garamond',serif", color: 'var(--navy)', fontSize: '1rem', fontWeight: 600, textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}>{pFirst} {pLast}</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--navy)', opacity: 0.8 }}>{pCourse}</div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ background: 'linear-gradient(135deg,var(--navy),var(--navy3))', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.15em', marginBottom: '0.4rem' }}>★ STELLA COLLEGE ★</div>
                        <div style={{ fontFamily: "'Cormorant Garamond',serif", color: 'white', fontSize: '0.65rem', opacity: 0.8, marginBottom: '0.25rem' }}>Certificate of Completion</div>
                        <div style={{ fontFamily: "'Cormorant Garamond',serif", color: 'white', fontSize: '1rem', fontWeight: 600 }}>{pFirst} {pLast}</div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6rem', marginTop: '0.25rem' }}>{pCourse}</div>
                        <div style={{ color: 'var(--gold)', fontSize: '0.55rem', marginTop: '0.4rem' }}>{form.date ? fmt(form.date) : ''}</div>
                      </div>
                    )}
                  </div>
                )}

                {types.badge && (
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.4rem' }}>Badge</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {badgeTmpl ? (
                        <img src={badgeTmpl.data} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gold)' }} alt="badge" />
                      ) : (
                        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--navy)', border: '3px solid var(--gold)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.15rem' }}>
                          <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
                          <span style={{ color: 'white', fontSize: '0.42rem', textAlign: 'center', padding: '0 6px', lineHeight: 1.3 }}>{pCourse.slice(0, 22)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!types.cert && !types.badge && (
                  <div style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Select a type above</div>
                )}
              </div>
            </div>

            <div className="form-card">
              <div className="form-card-title">Workflow</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 2 }}>
                ① Unique credential ID generated<br />
                ② Row saved to Google Sheets automatically<br />
                ③ Share the link with the student<br />
                ④ Student clicks "Add to LinkedIn"<br />
                ⑤ Download certificate/badge if needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
