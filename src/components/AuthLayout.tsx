'use client';

import { useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import Navbar from './Navbar';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { isAuth, hydrated } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (hydrated && !isAuth) router.replace('/login');
  }, [isAuth, hydrated, router]);

  // Don't render anything until hydration is complete
  // This prevents a flash of the protected content before redirect
  if (!hydrated || !isAuth) return null;

  return (
    <>
      <Navbar />
      <main className="page-fade">{children}</main>
    </>
  );
}
