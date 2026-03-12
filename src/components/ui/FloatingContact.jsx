import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubblesOutline } from "react-icons/io5";
import ContactPanel from "./ContactPanel";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ContactPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-30 flex items-center gap-2.5 px-5 py-3.5 rounded-full font-semibold text-sm"
        style={{
          background: "linear-gradient(135deg,#8b5cf6 0%,#685281 100%)",
          color: "#f0eaff",
          border: "1px solid rgba(180,143,224,0.4)",
          boxShadow: "0 8px 32px rgba(104,82,129,0.5),0 0 0 1px rgba(180,143,224,0.1)",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.06em",
        }}
      >
        <IoChatbubblesOutline size={18} />
        CONTACTO
        <span className="absolute inset-0 rounded-full pointer-events-none"
          style={{ animation: "contactPulse 2.5s ease-out infinite", border: "2px solid rgba(139,92,246,0.5)" }} />
      </motion.button>

      <style>{`
        @keyframes contactPulse {
          0%   { transform:scale(1);    opacity:0.8; }
          70%  { transform:scale(1.35); opacity:0;   }
          100% { transform:scale(1.35); opacity:0;   }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;