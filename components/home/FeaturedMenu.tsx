"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModalStore } from "@/feature/store/useModalStore";



const dishes = [
  {
    name: "Shishlik Kebab",
    type: "lamb",
    price: "$26.99",
    servedWith: "Saffron rice & grilled vegetables",
    image: "/image/shishlik_kebab.png",
    description:
      "Juicy lamb chops marinated with aromatic spices and grilled over charcoal for a rich, smoky flavor.",
    weights: ["250g", "500g", "1kg"],
  },
  {
    name: "Afghan Tikka Kebab",
    type: "lamb",
    price: "$18.99",
    servedWith: "Saffron rice & fresh salad",
    image: "/image/afgani_tikka_kebab.png",
    description:
      "Marinated lamb skewers infused with onion, garlic and olive oil, grilled to a smoky finish.",
    weights: ["250g", "500g", "1kg"],
  },
  {
    name: "Barg Kebab",
    type: "beef",
    price: "$25.99",
    servedWith: "Saffron rice & grilled tomato",
    image: "/image/barg_kebab.png",
    description:
      "Premium beef tenderloin marinated with saffron, onion juice and butter, grilled to perfection.",
    weights: ["250g", "500g", "1kg"],
  },
  {
    name: "Tandoori Boneless Chicken",
    type: "chicken",
    price: "$16.99",
    servedWith: "Lemon, onion & fresh salad",
    image: "/image/boneless.png",
    description:
      "Boneless chicken thigh marinated with spices and lemon, grilled for a smoky and juicy flavor.",
    weights: ["250g", "500g", "1kg"],
  },
];

export default function FeaturedMenu() {
  const { openModal } = useModalStore();

  return (
    <>
      {/* Marquee */}
      <div className="overflow-hidden bg-black p-8">
        <motion.div
          className="flex gap-10 text-[clamp(1.5rem,5vw,3rem)] font-bold text-stone-400 uppercase whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>ORDER NOW</span>
              <span className="text-stone-600">•</span>
              <span>ORDER NOW</span>
              <span className="text-stone-600">•</span>
              <span>ORDER NOW</span>
              <span className="text-stone-600">•</span>

            </span>
          ))}
        </motion.div>
      </div>

      {/* Menu */}
      <section className="bg-stone-900 text-white">
        <div className="grid md:grid-cols-2 w-full">
          {dishes.map((dish, i) => (
            <button
              key={dish.name}
              onClick={() =>
                openModal("product", {
                  ...dish,
                  category: dish.type,
                })
              }
              className={`
          group flex flex-col items-center justify-center text-center 
          p-10 transition duration-300 
          min-h-[420px] md:min-h-[520px] lg:min-h-[600px]

          ${i % 2 === 0 ? "bg-stone-800" : "bg-stone-900"}
          hover:bg-stone-700
        `}
            >
              {/* Image */}
              <Image
                src={dish.image}
                alt={dish.name}
                width={320}
                height={320}
                className="object-contain mb-6 transition duration-500 group-hover:scale-110 w-[clamp(200px,30vw,420px)] 
                  h-[clamp(200px,28vw,420px)] lg:h-[clamp(20rem,30vw,30rem)]"
              />

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold tracking-wide mb-3">
                {dish.name}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-stone-400 leading-relaxed line-clamp-2 max-w-md">
                {dish.description}
              </p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}