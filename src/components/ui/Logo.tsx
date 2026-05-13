"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export default function Logo({
  className = "",
  width = 180,
  height = 54,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  const [broken, setBroken] = useState(false);

  const onError = useCallback(() => setBroken(true), []);

  if (broken) {
    return (
      <div
        className={`relative flex max-w-full items-center justify-center font-serif font-bold tracking-tight text-white ${className}`}
        style={{
          width: width === 500 ? "auto" : width,
          height: height === 150 ? "auto" : height,
          fontSize: Math.max(14, Math.round(height * 0.45)),
        }}
      >
        Ghinel
      </div>
    );
  }

  return (
    <div
      className={`relative flex max-w-full items-center justify-center ${className}`}
      style={width === 500 ? undefined : { maxWidth: width }}
    >
      <Image
        src="/logoghinel.png"
        alt="Ghinel Logo"
        width={width}
        height={height}
        sizes="(max-width: 640px) 36vw, 180px"
        className="h-auto w-full object-contain"
        priority
        onError={onError}
      />
    </div>
  );
}
