"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/image/arabic_logo.png"
        alt="Logo"
        width={150}
        height={5}
        priority
      />
    </Link>
  );
}