"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Purely decorative animated cat that sits beside the chat button. Eyes
 * track the cursor (direct DOM writes via refs, not React state, so this
 * doesn't re-render on every mousemove) and it blinks on a random interval.
 */
export function Mascot() {
  const eyeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      eyeRefs.current.forEach((eye) => {
        if (!eye) return;
        const rect = eye.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
        const dist = Math.min(1.6, Math.hypot(e.clientX - cx, e.clientY - cy) / 30);
        const pupil = eye.firstElementChild as HTMLElement | null;
        if (pupil) {
          pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
        }
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let cancelled = false;
    function scheduleBlink() {
      const delay = 2600 + Math.random() * 2400;
      const id = window.setTimeout(() => {
        if (cancelled) return;
        eyeRefs.current.forEach((eye) => eye?.classList.add("mascot-blink"));
        window.setTimeout(() => {
          eyeRefs.current.forEach((eye) => eye?.classList.remove("mascot-blink"));
        }, 120);
        scheduleBlink();
      }, delay);
      return id;
    }
    const id = scheduleBlink();
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-[92px] md:bottom-9 md:right-28 z-[65] pointer-events-none select-none"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="relative w-11 h-11 md:w-12 md:h-12">
        {/* ears */}
        <div className="absolute -top-2 left-0.5 w-4 h-4 rotate-[-25deg] rounded-sm bg-gradient-to-br from-violet to-cyan" />
        <div className="absolute -top-2 right-0.5 w-4 h-4 rotate-[25deg] rounded-sm bg-gradient-to-bl from-violet to-cyan" />
        {/* head */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-violet to-cyan shadow-lg flex items-center justify-center gap-1.5">
          <span
            ref={(el) => {
              eyeRefs.current[0] = el;
            }}
            className="mascot-eye w-2.5 h-2.5 rounded-full bg-bg flex items-center justify-center overflow-hidden"
          >
            <span className="block w-1 h-1 rounded-full bg-white mascot-pupil" />
          </span>
          <span
            ref={(el) => {
              eyeRefs.current[1] = el;
            }}
            className="mascot-eye w-2.5 h-2.5 rounded-full bg-bg flex items-center justify-center overflow-hidden"
          >
            <span className="block w-1 h-1 rounded-full bg-white mascot-pupil" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
