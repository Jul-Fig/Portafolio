import React from "react";
import { IoHomeSharp, IoPersonSharp } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "INICIO",            href: "#inicio",    Icon: IoHomeSharp  },
  { label: "PROYECTOS",         href: "#proyectos", Icon: FaFileCode   },
  { label: "SOBRE MÍ",          href: "#sobre-mi",  Icon: IoPersonSharp },
];

const Header = () => (
  <header className="flex items-center justify-between px-10 py-6 lg:flex-row">
    <nav>
      <a href="#inicio"
        className="text-[#ebe9f6] font-extrabold text-3xl tracking-wider"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        JULIAN
      </a>
    </nav>

    <nav className="flex items-center gap-6 font-medium">
      {NAV_ITEMS.map(({ label, href, Icon }) => (
        <a key={label} href={href}
          className="flex flex-col items-center gap-0.5 transition-all duration-150 hover:-translate-y-1 hover:scale-110 text-sm"
          style={{ color: "#ebe9f6" }}>
          <Icon className="lg:hidden" />
          {label}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;