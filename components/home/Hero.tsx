"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroIntro from "./HeroIntro";
import ScrollIndicator from "./ScrollIndicator";
import MenuCard from "./MenuCard";
import OfferBadge from "./OfferBadge"
export default function Hero() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <HeroIntro onFinish={() => setIntroDone(true)} />}

      <section className="bg-stone-900  h-screen pb-10">
        <div className="relative w-full h-full  overflow-hidden flex flex-col justify-center items-center bg-stone-900">

          {/* EST */}
          <p className="text-[clamp(0.5rem,3vw,1rem)] tracking-[0.1em] text-stone-500 z-20 mb-2 sm:mb-4">
            20% off on 4 monthly orders
          </p>

          {/* Background Typography */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={introDone ? { opacity: 0.08 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute text-[clamp(5rem,20vw,28rem)] font-extrabold text-white pointer-events-none select-none">
            آریانا بهشت
          </motion.h1>

          {/* Food Image Overlapping Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="relative z-10 w-[clamp(20rem,30vw,40rem)] h-[clamp(10rem,40vh,65rem)] lg:h-[clamp(10rem,55vh,65rem)] mb-2 sm:mb-4"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/image/jojeh_kebab.png"
                alt="Roasted Chicken"
                width={800}
                height={800}
                className="w-[85%] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-[clamp(1rem,3vw,1.5rem)] text-stone-400 uppercase z-20 mb-10 text-center flex items-center justify-center gap-3"
          >
            <span>Aryana Behesht</span>
            <span className="text-stone-500 opacity-50">•</span>
            <span>Persian Cuisine</span>
          </motion.p>

          {introDone && <ScrollIndicator />}
        </div>
      </section>
    </>
  );
}