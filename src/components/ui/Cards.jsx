import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";

const ROTATION_RANGE      = 10;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const springConfig        = { stiffness: 120, damping: 18, mass: 0.6 };

const Cards = ({ title, description, img, link, github, tags = [] }) => {
  const ref     = useRef(null);
  const x       = useMotionValue(0);
  const y       = useMotionValue(0);
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const tilt    = useMotionTemplate`perspective(900px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top)  / rect.height * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY =  (e.clientX - rect.left) / rect.width  * ROTATION_RANGE - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        transform: tilt,
        background: "linear-gradient(145deg, #2a1f3d 0%, #1a1228 100%)",
        border: "1px solid rgba(180,143,224,0.25)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(180,143,224,0.08)",
      }}
      className="w-full sm:w-[340px] flex flex-col rounded-2xl overflow-hidden"
    >

      {/* Imagen  */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0 group">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradiente inferior */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 40%, #1a1228 100%)" }}
        />
        {/* Tags sobre la imagen */}
        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: "rgba(15,10,26,0.85)",
                  color: "#b48fe0",
                  border: "1px solid rgba(180,143,224,0.4)",
                  backdropFilter: "blur(6px)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Texto  */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <h3
          className="text-lg font-bold leading-snug"
          style={{ color: "#f0eaff", fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#9b8aad", fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>

        {/* Divisor */}
        <div className="w-full h-px" style={{ background: "rgba(180,143,224,0.12)" }} />

        {/* Botones */}
        <div className="flex items-center gap-2.5">

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 flex-1 py-2.5 px-4 rounded-xl
                       text-sm font-semibold transition-all duration-200
                       hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #685281)",
              color: "#f0eaff",
              border: "1px solid rgba(180,143,224,0.3)",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 15px rgba(139,92,246,0.2)",
            }}
          >
            Ver demo <IoArrowForward size={14} />
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver código en GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0
                         transition-all duration-200 hover:brightness-125 active:scale-95"
              style={{
                background: "rgba(180,143,224,0.1)",
                border: "1px solid rgba(180,143,224,0.25)",
                color: "#b48fe0",
              }}
            >
              <IoLogoGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Cards;