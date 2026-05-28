"use client";

import { useCallback, useEffect, useState } from "react";
import Preloader from "@/components/layout/Preloader";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

const PRELOADER_KEY = "ghinel-preloader-seen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(PRELOADER_KEY);
    if (seen) {
      setReady(true);
    } else {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem(PRELOADER_KEY, "1");
    setShowPreloader(false);
    setReady(true);
  }, []);

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <div
        className={ready ? "opacity-100" : "opacity-0"}
        style={{ transition: "opacity 0.5s ease" }}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </>
  );
}
