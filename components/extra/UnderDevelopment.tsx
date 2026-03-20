"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteLink from "@/components/ui/RouteLink";

export default function UnderDevelopment() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2500); // redirect after 2.5s

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen bg-stone-900 text-white px-6 text-center overflow-hidden">

      {/* Subtle background branding */}
      <span className="absolute inset-0 flex justify-center items-center text-[clamp(2rem,20vw,230rem)] font-extrabold text-white opacity-5 select-none pointer-events-none">
        آریانا بهشت
      </span>

      {/* Main message */}
      <h1 className="relative text-[clamp(1.3rem,2vw,2rem)] lg:text-[clamp(4rem,10vw,5rem)] font-extrabold mb-2 lg:mb-4">
        This Page is Under Development
      </h1>

      <p className="relative text-stone-400 text-sm sm:text-xl ">
        We're working on this page. Redirecting you to the homepage...
      </p>


    </main>
  );
}