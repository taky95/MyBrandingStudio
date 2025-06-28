'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function ResetMenuOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Give DOM time to render after route change
    const timeout = setTimeout(() => {
      const toggle = document.getElementById('hiddenBtn') as HTMLInputElement | null;
      if (toggle && toggle.checked) {
        toggle.checked = false;
      }
    }, 0); // execute after render

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}