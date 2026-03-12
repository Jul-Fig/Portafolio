import React from "react";
import { motion } from "framer-motion";
import Social from "../components/ui/Social";
import { config } from "../config/env";
import Julian from "../assets/Julian_Developer.jpeg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 sm:px-10 py-16 md:py-0"
  >
    {/* Social — horizontal en mobile, vertical en desktop */}
    <aside className="flex md:flex-col gap-5 md:gap-4 order-3 md:order-1 md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2">
      <Social />
    </aside>

    {/* Foto */}
    <motion.figure
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="order-1 md:order-2 flex-shrink-0 z-10"
    >
      <img
        className="h-52 w-52 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[380px] lg:w-[380px]
                   object-cover object-top rounded-full animate-borderAnimation"
        style={{ border: "3px solid rgba(180,143,224,0.4)" }}
        src={Julian}
        alt="Julian FullStack"
      />
    </motion.figure>

    {/* Texto */}
    <motion.article
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="order-2 md:order-3 flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-1">
        ¡HOLA!, Soy{" "}
        <span
          className="text-[#f4f3fa] text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Julian
        </span>
      </p>

      <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-1">
        Desarrollador{" "}
        <span
          className="text-[#f4f3fa] text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          FullStack
        </span>
      </p>

      <p
        className="text-base sm:text-lg font-medium mt-3 mb-6 max-w-sm"
        style={{ color: "#c4b4d9" }}
      >
        Construyo experiencias digitales completas, del backend al frontend.
      </p>

      <a href={config.site.cvPath} download aria-label="Descargar CV">
        <button
          className="px-7 py-3 rounded-full font-bold border-2 border-[#80639F] transition-all duration-200
            bg-gradient-to-r from-[#80639F] to-[#80639F] hover:to-[#39274b] text-[#f4f3fa] shadow-lg
            text-sm sm:text-base hover:scale-105 active:scale-95"
        >
          Descargar CV
        </button>
      </a>
    </motion.article>
  </section>
);

export default HeroSection;