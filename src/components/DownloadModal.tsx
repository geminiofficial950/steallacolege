'use client';

import { useApp } from '@/context/AppContext';
import type { Credential, Template } from '@/types';

// ── Date formatting ───────────────────────────────────────────────────────────
function fmt(d: string | null): string {
  if (!d) return '—';
  return new Date(d + 'T12:00:00').toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Canvas generators ─────────────────────────────────────────────────────────
async function generateCertCanvas(cred: Credential, tmpl?: Template): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1122;
    canvas.height = 794;
    const ctx = canvas.getContext('2d')!;

    const drawOverlay = () => {
      ctx.textAlign = 'center';
      ctx.fillStyle = '#c9a84c';
      ctx.font = 'bold 22px serif';
      ctx.fillText('★ STELLA COLLEGE ★', canvas.width / 2, 200);

      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '20px serif';
      ctx.fillText('Certificate of Completion', canvas.width / 2, 260);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 52px serif';
      ctx.fillText(cred.name, canvas.width / 2, 380);

      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '22px sans-serif';
      ctx.fillText(cred.course, canvas.width / 2, 440);

      ctx.fillStyle = '#c9a84c';
      ctx.font = '18px sans-serif';
      ctx.fillText(fmt(cred.date), canvas.width / 2, 510);

      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = '14px monospace';
      ctx.fillText('ID: ' + cred.id, canvas.width / 2, 700);
    };

    if (tmpl) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        drawOverlay();
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = tmpl.data;
    } else {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#0d1b4b');
      grad.addColorStop(1, '#1a3a6b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#c9a84c';
      ctx.lineWidth = 8;
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
      ctx.strokeStyle = 'rgba(201,168,76,0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

      drawOverlay();
      resolve(canvas.toDataURL('image/png'));
    }
  });
}

async function generateBadgeCanvas(cred: Credential, tmpl?: Template): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d')!;

    const draw = () => {
      if (tmpl) {
        const img = new Image();
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(200, 200, 195, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, 0, 0, 400, 400);
          ctx.restore();
          resolve(canvas.toDataURL('image/png'));
        };
        img.src = tmpl.data;
      } else {
        ctx.fillStyle = '#0d1b4b';
        ctx.beginPath();
        ctx.arc(200, 200, 195, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#c9a84c';
        ctx.lineWidth = 10;
        ctx.stroke();

        ctx.fillStyle = '#c9a84c';
        ctx.font = 'bold 60px serif';
        ctx.textAlign = 'center';
        ctx.fillText('★', 200, 175);

        ctx.fillStyle = '#ffffff';
        ctx.font = '20px sans-serif';
        const words = cred.course.split(' ');
        let line = '';
        let y = 230;
        words.forEach((word) => {
          const test = line + word + ' ';
          if (ctx.measureText(test).width > 300 && line) {
            ctx.fillText(line.trim(), 200, y);
            line = word + ' ';
            y += 28;
          } else {
            line = test;
          }
        });
        ctx.fillText(line.trim(), 200, y);
        resolve(canvas.toDataURL('image/png'));
      }
    };

    draw();
  });
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function DownloadModal() {
  const { dlModal, setDlModal, tmpls } = useApp();
  const { open, cred } = dlModal;

  if (!cred) return null;

  const hasCert  = cred.types?.includes('certificate');
  const hasBadge = cred.types?.includes('badge');
  const certTmpl  = tmpls.find((t) => t.id === cred.certTmplId);
  const badgeTmpl = tmpls.find((t) => t.id === cred.badgeTmplId);

  const download = async (type: 'certificate' | 'badge') => {
    const tmpl = type === 'certificate' ? certTmpl : badgeTmpl;
    const dataUrl =
      type === 'certificate'
        ? await generateCertCanvas(cred, tmpl)
        : await generateBadgeCanvas(cred, tmpl);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `${cred.name.replace(/\s+/g, '_')}_${type}.png`;
    a.click();
  };

  const close = () => setDlModal({ open: false, cred: null });

  return (
    <div
      className={`modal-overlay ${open ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="modal">
        <div className="modal-head">
          <div className="modal-title">⬇ Download credential</div>
          <button className="modal-close" onClick={close}>✕</button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: '1rem' }}>
            <strong>{cred.name}</strong>
            <div style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>{cred.course}</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {hasCert && (
              <button className="btn-sm dl" onClick={() => download('certificate')}>
                ⬇ Certificate (PNG)
              </button>
            )}
            {hasBadge && (
              <button className="btn-sm dl" onClick={() => download('badge')}>
                ⬇ Badge (PNG)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
