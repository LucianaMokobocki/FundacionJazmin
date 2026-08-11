"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = requestAnimationFrame(() => setCurrent(value));
      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const duration = 650;
      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(value * eased));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <span ref={elementRef} className="stat-number" aria-label={`Más de ${value}${suffix}`}>+{current}{suffix}</span>;
}
