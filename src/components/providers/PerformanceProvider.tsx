// src/components/providers/PerformanceProvider.tsx
import { createContext, useEffect, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface PerformanceMetrics {
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  totalBlockingTime?: number;
  [key: string]: number | undefined;
}

interface PerformanceContextType {
  metrics: PerformanceMetrics;
  logMetric: (name: string, value: number) => void;
  isPerfMode: boolean;
  togglePerfMode: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

function PerformanceProvider({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useLocalStorage<PerformanceMetrics>('perf-metrics', {});
  const [isPerfMode, setIsPerfMode] = useLocalStorage<boolean>('perf-mode', false);

  // Memoize the logMetric function to prevent unnecessary re-renders
  const logMetric = useCallback((name: string, value: number) => {
    setMetrics((prev: PerformanceMetrics) => ({
      ...prev,
      [name]: value,
    }));
  }, [setMetrics]);

  const togglePerfMode = useCallback(() => {
    setIsPerfMode((prev: boolean) => !prev);
  }, [setIsPerfMode]);

  useEffect(() => {
    if (!isPerfMode) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          const metric = entry as PerformancePaintTiming;
          logMetric(metric.name, Math.round(metric.startTime));
        } else if (entry.entryType === 'largest-contentful-paint') {
          logMetric('largestContentfulPaint', Math.round(entry.startTime));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, [isPerfMode, logMetric]); // Add logMetric to dependencies

  const value = useMemo(() => ({
    metrics,
    logMetric,
    isPerfMode,
    togglePerfMode,
  }), [metrics, logMetric, isPerfMode, togglePerfMode]);

  return (
    <PerformanceContext.Provider value={value}>
      {children}
      {isPerfMode && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg text-xs z-50">
          <div className="font-bold mb-1">Performance Metrics:</div>
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key}>
              {key}: {typeof value === 'number' ? `${value}ms` : 'N/A'}
            </div>
          ))}
        </div>
      )}
    </PerformanceContext.Provider>
  );
}

// Export the provider and context separately
export { PerformanceProvider, PerformanceContext };