"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OfflineDetector() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    setOffline(!navigator.onLine);

    const goOffline = () => setOffline(true);
    const goOnline = () => setOffline(false);

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/auth-bg.png"
          alt=""
          fill
          className="object-cover opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
      </div>
      <div className="container-wide relative z-10 py-16 text-center">
        <h1 className="font-serif text-5xl font-medium text-foreground sm:text-6xl">
          Hors connexion
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Votre appareil n&apos;est pas connecté à internet.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Vérifiez votre connexion et réessayez.
        </p>
      </div>
    </div>
  );
}
