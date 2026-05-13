"use client";

import Image from "next/image";

export default function Logo({ className = "", width = 180, height = 54 }: { className?: string; width?: number; height?: number }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: width === 500 ? 'auto' : width, height: height === 150 ? 'auto' : height }}>
      <Image
        src="/logoghinel.png"
        alt="Ghinel Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
