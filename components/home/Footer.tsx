'use client'
import { FaHeart } from "react-icons/fa";
import { useModalStore } from "@/feature/store/useModalStore";
import RouteLink from "../ui/RouteLink";

export default function Footer() {
  const { openModal } = useModalStore();
  return (
    <footer className="relative bg-stone-900 text-stone-400 py-8 overflow-hidden">


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-12">

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to تجربه something special?
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">

            {/* Reserve */}
            <button
              onClick={() => openModal("reservation")}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:opacity-90 active:scale-95 transition"
            >
              Reserve a Table
            </button>

            {/* Menu */}
            <RouteLink
              href="/menu"
              className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black active:scale-95 transition text-center"
            >
              View Menu
            </RouteLink>

          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-center">

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button className="hover:text-white transition">About</button>
            <button className="hover:text-white transition">Contact</button>
            <button className="hover:text-white transition">Location</button>
          </div>

          {/* Copyright */}
          <div>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved | Aryana Behesht</span>
          </div>

          {/* Credit */}
          <div>
            <span className="text-stone-600">
              Designed & Developed
              by karanroushan
            </span>
          </div>

        </div>

        {/* Background Typography */}
        <span className="flex justify-center items-center text-[clamp(4rem,5vw,10rem)] font-extrabold text-white opacity-5 select-none pointer-events-none">
          آریانا بهشت
        </span>
      </div>
    </footer>
  );
}