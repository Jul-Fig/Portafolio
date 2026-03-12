import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ROTATION_RANGE      = 8;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

const Cards = ({ title, description, img, link, tags = [] }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect  = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top)  / rect.height * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY =  (e.clientX - rect.left) / rect.width  * ROTATION_RANGE - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative h-96 w-80 rounded-xl border-double border-4 border-[#685281] bg-gradient-to-br from-[#b3a4d5] bg-transparent"
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 flex flex-col rounded-xl bg-[#32293d] shadow-lg overflow-hidden"
      >
        {/* Imagen */}
        <a href={link} target="_blank" rel="noreferrer" className="block h-40 flex-shrink-0">
          <img
            src={img} alt={title}
            className="w-full h-full object-cover rounded-t-xl animate-borderAnimation"
            style={{ transform: "translateZ(30px)" }}
          />
        </a>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-4 gap-2" style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-lg font-bold text-[#ebe9f6]">{title}</h3>
          <p className="text-sm text-[#c7bfe2] leading-relaxed flex-1">{description}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {tags.map((tag) => (
                <span key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(180,143,224,0.15)", color: "#b48fe0", border: "1px solid rgba(180,143,224,0.25)" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;