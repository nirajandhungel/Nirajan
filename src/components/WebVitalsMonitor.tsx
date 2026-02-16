'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, Metric } from 'web-vitals';

/**
 * Web Vitals Monitoring Component
 * Tracks Core Web Vitals and sends to analytics
 */

function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
  }

  // Send to custom analytics endpoint (if needed)
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        url: window.location.href,
        timestamp: Date.now(),
      }),
      keepalive: true,
    }).catch(console.error);
  }
}

export function WebVitalsMonitor() {
  useEffect(() => {
    // Track all Core Web Vitals
    onCLS(sendToAnalytics);  // Cumulative Layout Shift
    onFCP(sendToAnalytics);  // First Contentful Paint
    onFID(sendToAnalytics);  // First Input Delay (deprecated, use INP)
    onINP(sendToAnalytics);  // Interaction to Next Paint
    onLCP(sendToAnalytics);  // Largest Contentful Paint
    onTTFB(sendToAnalytics); // Time to First Byte

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      try {
        // Monitor long tasks (TBT indicator)
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('[Performance] Long Task detected:', {
                duration: entry.duration,
                startTime: entry.startTime,
              });
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Monitor resource timing
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const resourceEntry = entry as PerformanceResourceTiming;
            
            // Flag slow resources (>1s)
            if (resourceEntry.duration > 1000) {
              console.warn('[Performance] Slow resource:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                type: resourceEntry.initiatorType,
              });
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });

      } catch (error) {
        console.error('[Performance] Observer error:', error);
      }
    }
  }, []);

  return null;
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params: Record<string, unknown>
    ) => void;
  }
}
