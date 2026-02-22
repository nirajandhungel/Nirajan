'use client';

import { useEffect, useState, type ReactNode } from 'react';

/**
 * Loads WebVitalsMonitor and ServiceWorkerRegistration after hydration/idle
 * so they don't block main thread or enlarge the critical JS bundle.
 * Renders nothing until loaded; then mounts components so their useEffects run.
 */
export function DeferredScripts() {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    const load = () => {
      Promise.all([
        import('../components/WebVitalsMonitor'),
        import('../components/ServiceWorkerRegistration'),
      ]).then(([{ WebVitalsMonitor }, { ServiceWorkerRegistration }]) => {
        setContent(
          <>
            <WebVitalsMonitor />
            <ServiceWorkerRegistration />
          </>
        );
      }).catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
        .requestIdleCallback(load, { timeout: 3000 });
    } else {
      setTimeout(load, 2000);
    }
  }, []);

  return <>{content}</>;
}
