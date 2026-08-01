'use client';

import { useApp } from '@/context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  return (
    <div className={`toast-custom ${toast.cls} ${toast.show ? 'show' : ''}`}>
      {toast.msg}
    </div>
  );
}
