import { useEffect, useRef, useState } from "react";

const MIN_DURATION = 1800; // ms the intro stays up at minimum
const EXIT_DURATION = 700; // ms, keep in sync with duration-700 below

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const pageLoaded = useRef(
    typeof document !== "undefined" && document.readyState === "complete"
  );

  // Track the real page load
  useEffect(() => {
    const onLoad = () => (pageLoaded.current = true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Lock scroll while the intro is visible
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  // Drive the counter: crawl to 90% until the page is loaded
  // (and the minimum time has passed), then finish to 100%
  useEffect(() => {
    let raf;
    let value = 0;
    const start = performance.now();
    let last = start;

    const tick = (now) => {
      const dt = now - last;
      last = now;

      const ready = pageLoaded.current && now - start >= MIN_DURATION;
      const target = ready ? 100 : 90;
      const step = Math.max(((target - value) * dt) / 500, dt * 0.012);
      value = Math.min(target, value + step);
      setProgress(value);

      if (value >= 100) {
        setExiting(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Fire onComplete after the exit animation
  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(() => onComplete?.(), EXIT_DURATION);
    return () => clearTimeout(t);
  }, [exiting, onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        exiting ? "pointer-events-none -translate-y-8 opacity-0" : ""
      }`}
    >
      <div className="flex items-center gap-7 px-6">
        {/* Spinner ring with soft blue glow */}
        <div className="relative h-[70px] w-[70px] shrink-0 rounded-full border border-[#1b2a6b]/60 shadow-[0_0_40px_rgba(37,67,214,0.25)]">
          <div className="absolute inset-[-1px] animate-spin rounded-full border border-transparent border-t-[#2543d6] motion-reduce:animate-none" />
        </div>

        {/* Wordmark, percentage, bar */}
        <div className="w-[min(52vw,245px)]">
          <div className="flex items-baseline justify-between">
            <h1 className="text-[22px] font-extrabold leading-none tracking-tight text-blue-900">
              Loading.......
            </h1>
            <span className="text-sm tabular-nums text-neutral-500">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="mt-2 h-[2px] w-full overflow-hidden bg-white/10">
            <div
              className="h-full w-full origin-left bg-[#2543d6]"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}