'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/issue',     label: 'Issue'     },
  { href: '/records',   label: 'Records'   },
  { href: '/templates', label: 'Templates' },
  { href: '/settings',  label: 'Settings'  },
];

export default function Navbar() {
  const { logout, settings } = useApp();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const sheetsConnected = Boolean(settings.sheetsUrl);

  return (
    <nav className="app-nav">
      <div className="nav-brand">
        <span className="nav-star">★</span>
        <span className="nav-title">Stella College</span>
        <span className="nav-badge">STAFF</span>
      </div>

      <div className="nav-right">
        <div className={`sheets-status ${sheetsConnected ? 'connected' : 'disconnected'}`}>
          <div className="sheets-dot" />
          <span>{sheetsConnected ? 'Sheets connected' : 'Sheets not configured'}</span>
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-tab ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}

        <button className="nav-logout" onClick={handleLogout}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
