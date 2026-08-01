'use client';

import type { ChangeEvent } from 'react';
import AuthLayout from '@/components/AuthLayout';
import { useApp } from '@/context/AppContext';
import type { Template, TemplateType } from '@/types';

// ── Single template card ──────────────────────────────────────────────────────
function TemplateCard({
  tmpl,
  onDelete,
}: {
  tmpl: Template;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="tmpl-card">
      <div className="tmpl-preview">
        <img
          src={tmpl.data}
          alt={tmpl.name}
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
        />
      </div>
      <div className="tmpl-body">
        <div className="tmpl-name" title={tmpl.name}>{tmpl.name}</div>
        <div className="tmpl-type-lbl">{tmpl.type}</div>
        <div className="tmpl-actions">
          <button className="btn-sm danger" onClick={() => onDelete(tmpl.id)}>
            ✕ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Upload zone ───────────────────────────────────────────────────────────────
function UploadZone({
  type,
  onUpload,
}: {
  type: TemplateType;
  onUpload: (file: File, type: TemplateType) => void;
}) {
  const accept =
    type === 'badge'
      ? 'image/png,image/jpeg,image/jpg,image/svg+xml'
      : 'image/png,image/jpeg,image/jpg';

  const hint =
    type === 'certificate'
      ? 'PNG or JPG — A4 landscape recommended (1122 × 794 px)'
      : 'PNG or JPG — square format recommended (400 × 400 px)';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file, type);
    e.target.value = ''; // reset so same file can be re-uploaded
  };

  return (
    <label className="upload-tmpl-zone">
      <input type="file" accept={accept} onChange={handleChange} />
      <div style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>＋</div>
      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--navy)' }}>
        Upload {type} template
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
        {hint}
      </div>
    </label>
  );
}

// ── Template section (cert or badge) ─────────────────────────────────────────
function TemplateSection({
  type,
  label,
  icon,
  templates,
  onUpload,
  onDelete,
}: {
  type: TemplateType;
  label: string;
  icon: string;
  templates: Template[];
  onUpload: (file: File, type: TemplateType) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="form-card">
      <div className="form-card-title">
        {icon} {label}{' '}
        <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '0.8rem' }}>
          ({templates.length})
        </span>
      </div>

      {templates.length > 0 && (
        <div className="tmpl-grid" style={{ marginBottom: '1rem' }}>
          {templates.map((t) => (
            <TemplateCard key={t.id} tmpl={t} onDelete={onDelete} />
          ))}
        </div>
      )}

      <UploadZone type={type} onUpload={onUpload} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TemplatesPage() {
  const { tmpls, uploadTemplate, deleteTmpl } = useApp();

  const certTmpls  = tmpls.filter((t) => t.type === 'certificate');
  const badgeTmpls = tmpls.filter((t) => t.type === 'badge');

  return (
    <AuthLayout>
      <div className="section">
        <div className="sec-head">
          <div className="sec-title">Credential templates</div>
          <div className="sec-sub">
            Upload your branded designs — templates are applied when generating credential PNGs
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <TemplateSection
              type="certificate"
              label="Certificate templates"
              icon="📜"
              templates={certTmpls}
              onUpload={uploadTemplate}
              onDelete={deleteTmpl}
            />
          </div>
          <div className="col-md-6">
            <TemplateSection
              type="badge"
              label="Badge templates"
              icon="🏅"
              templates={badgeTmpls}
              onUpload={uploadTemplate}
              onDelete={deleteTmpl}
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
