"use client";

import { useEffect, useRef } from "react";

type HScrollProps = {
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

export function HScroll({ className, children, "aria-label": ariaLabel }: HScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      if (node.scrollWidth <= node.clientWidth) return;
      node.scrollLeft += event.deltaY;
      event.preventDefault();
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      role="region"
      aria-label={ariaLabel}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        drag.current = {
          active: true,
          startX: event.clientX,
          startScroll: ref.current?.scrollLeft ?? 0,
          moved: false,
        };
        ref.current?.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!drag.current.active || !ref.current) return;
        const delta = event.clientX - drag.current.startX;
        if (Math.abs(delta) > 6) drag.current.moved = true;
        ref.current.scrollLeft = drag.current.startScroll - delta;
      }}
      onPointerUp={() => {
        drag.current.active = false;
      }}
      onPointerCancel={() => {
        drag.current.active = false;
      }}
      onClickCapture={(event) => {
        if (drag.current.moved) {
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }
      }}
    >
      {children}
    </div>
  );
}
