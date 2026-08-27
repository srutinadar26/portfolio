"use client";

import { useEffect, useState } from "react";

export function useDeviceProfile() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setIsMobile(mobileQuery.matches);
      setPrefersReduced(reducedQuery.matches);
    };
    update();

    mobileQuery.addEventListener("change", update);
    reducedQuery.addEventListener("change", update);
    return () => {
      mobileQuery.removeEventListener("change", update);
      reducedQuery.removeEventListener("change", update);
    };
  }, []);

  return { isMobile, prefersReduced, reduced: isMobile || prefersReduced };
}
