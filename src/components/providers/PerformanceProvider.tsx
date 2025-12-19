// src/components/providers/PerformanceProvider.tsx (UPDATED)
  import { createContext, useEffect } from 'react';
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

  useEffect(() => {
    if (!isPerfMode) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          const metric = entry as PerformancePaintTiming;
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            [metric.name]: Math.round(metric.startTime),
          }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          const metric = entry as PerformanceEntry;
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            largestContentfulPaint: Math.round(metric.startTime),
          }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, [isPerfMode, setMetrics]);

  const logMetric = (name: string, value: number) => {
    setMetrics((prev: PerformanceMetrics) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePerfMode = () => setIsPerfMode((prev: boolean) => !prev);

  return (
    <PerformanceContext.Provider
      value={{ metrics, logMetric, isPerfMode, togglePerfMode }}
    >
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