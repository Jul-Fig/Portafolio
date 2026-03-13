import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoHomeSharp, IoPersonSharp, IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";

const NAV_ITEMS = [
  /*{ label: "INICIO",    href: "#inicio",    Icon: IoHomeSharp   },*/
  { label: "PROYECTOS", href: "#proyectos", Icon: FaFileCode    },
  { label: "SOBRE MÍ",  href: "#sobre-mi",  Icon: IoPersonSharp },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 sm:px-10 py-5 z-20">
      {/* Logo */}
      <a
        href="#inicio"
        className="text-[#ebe9f6] font-extrabold text-2xl sm:text-3xl tracking-wider"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        JULIAN
      </a>

      {/* Nav desktop */}
      <nav className="hidden md:flex items-center gap-6 font-medium">
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm tracking-wider transition-all duration-150 hover:-translate-y-1 hover:scale-110"
            style={{ color: "#ebe9f6" }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hamburger mobile */}
      <button
        className="md:hidden z-30 p-2 rounded-lg transition-colors duration-200"
        style={{ color: "#ebe9f6", background: "rgba(180,143,224,0.1)" }}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <IoCloseSharp size={24} /> : <IoMenuSharp size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 z-30 flex flex-col justify-center gap-8 px-10 md:hidden"
              style={{
                background: "linear-gradient(160deg,#1e1530,#0f0a1a)",
                borderLeft: "1px solid rgba(180,143,224,0.2)",
              }}
            >
              {NAV_ITEMS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-semibold tracking-wider transition-all duration-150 hover:translate-x-2"
                  style={{ color: "#ebe9f6", fontFamily: "'Syne', sans-serif" }}
                >
                  <Icon style={{ color: "#b48fe0" }} size={20} />
                  {label}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;