'use client';

import { useState, useEffect, type KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const { login, isAuth, hydrated } = useApp();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (hydrated && isAuth) router.replace('/dashboard');
  }, [isAuth, hydrated, router]);

  const handleLogin = () => {
    if (login(username.trim(), password)) {
      router.push('/dashboard');
    } else {
      setHasError(true);
      setPassword('');
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLogin();
    if (hasError) setHasError(false);
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        {/* <span className="login-star">★</span> */}
        <div className="login-title">Stella College</div>
        <div className="login-sub">Staff Portal — restricted access</div>

        <label className="login-label">Username</label>
        <input
          className="login-input"
          type="text"
          placeholder="staff username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />

        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKey}
        />

        <button className="login-btn" onClick={handleLogin}>
          Sign in
        </button>

        {hasError && (
          <div style={{ color: '#ff7675', fontSize: '0.82rem', textAlign: 'center', marginTop: '0.75rem' }}>
            Incorrect username or password
          </div>
        )}
      </div>
    </div>
  );
}
