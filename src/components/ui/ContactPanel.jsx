import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoSend, IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";
import { useContactForm } from "../../hooks/useContactForm";
import { SOCIAL_LINKS } from "../../constants/skills";

const ContactPanel = ({ isOpen, onClose }) => {
  const { form, status, error, handleChange, handleSubmit, reset } = useContactForm();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 flex flex-col"
            style={{
              background: "linear-gradient(160deg, #1e1530 0%, #150f24 60%, #0f0a1a 100%)",
              borderLeft: "1px solid rgba(180,143,224,0.2)",
              boxShadow: "-20px 0 60px rgba(104,82,129,0.25)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4"
              style={{ borderBottom: "1px solid rgba(180,143,224,0.12)" }}>
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "#b48fe0", fontFamily: "'DM Mono', monospace" }}>
                  Contacto
                </p>
                <h2 className="text-2xl font-bold mt-0.5"
                  style={{ color: "#f0eaff", fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
                  Hablemos
                </h2>
              </div>
              <button onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(180,143,224,0.1)", color: "#b48fe0" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(180,143,224,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(180,143,224,0.1)"}
              >
                <IoClose size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {status === "success" ? (
                <SuccessState onReset={reset} />
              ) : (
                <ContactForm
                  form={form}
                  status={status}
                  error={error}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>

            {/* Footer */}
            <div className="p-6 pt-4" style={{ borderTop: "1px solid rgba(180,143,224,0.1)" }}>
              <p className="text-xs text-center" style={{ color: "#5a4a6a", fontFamily: "'DM Mono', monospace" }}>
                También puedes escribirme por{" "}
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"
                  style={{ color: "#b48fe0" }} className="hover:underline">
                  LinkedIn
                </a>
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};



const SuccessState = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center h-full gap-4 text-center"
  >
    <div className="w-16 h-16 rounded-full flex items-center justify-center"
      style={{ background: "rgba(134,239,172,0.1)" }}>
      <IoCheckmarkCircle size={40} style={{ color: "#86efac" }} />
    </div>
    <h3 className="text-xl font-bold" style={{ color: "#f0eaff", fontFamily: "'Syne', sans-serif" }}>
      ¡Mensaje enviado!
    </h3>
    <p style={{ color: "#b48fe0" }} className="text-sm leading-relaxed">
      Gracias por escribirme. Te responderé a la brevedad.
    </p>
    <button onClick={onReset}
      className="mt-4 px-6 py-2 rounded-full text-sm font-medium"
      style={{ background: "rgba(180,143,224,0.15)", color: "#b48fe0", border: "1px solid rgba(180,143,224,0.3)" }}>
      Enviar otro mensaje
    </button>
  </motion.div>
);

const fieldStyle = {
  base: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(180,143,224,0.2)",
    color: "#f0eaff",
    fontFamily: "'DM Sans', sans-serif",
  },
};

const ContactForm = ({ form, status, error, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <p className="text-sm leading-relaxed mb-2" style={{ color: "#9b8aad" }}>
      ¿Tienes un proyecto en mente o simplemente quieres saludar? Escríbeme.
    </p>

    {[
      { name: "name",    label: "Nombre",  type: "text",  placeholder: "Tu nombre"        },
      { name: "email",   label: "Email",   type: "email", placeholder: "tu@email.com"     },
    ].map(({ name, label, type, placeholder }) => (
      <div key={name} className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#b48fe0", fontFamily: "'DM Mono', monospace" }}>
          {label}
        </label>
        <input
          type={type} name={name} value={form[name]}
          onChange={onChange} required placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
          style={fieldStyle.base}
          onFocus={e => e.currentTarget.style.borderColor = "rgba(180,143,224,0.6)"}
          onBlur={e  => e.currentTarget.style.borderColor = "rgba(180,143,224,0.2)"}
        />
      </div>
    ))}

    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#b48fe0", fontFamily: "'DM Mono', monospace" }}>
        Mensaje
      </label>
      <textarea
        name="message" value={form.message} onChange={onChange}
        required rows={5} placeholder="Cuéntame sobre tu proyecto..."
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
        style={fieldStyle.base}
        onFocus={e => e.currentTarget.style.borderColor = "rgba(180,143,224,0.6)"}
        onBlur={e  => e.currentTarget.style.borderColor = "rgba(180,143,224,0.2)"}
      />
    </div>

    {status === "error" && (
      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
        style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }}>
        <IoAlertCircle size={16} />
        {error}
      </motion.div>
    )}

    <button type="submit" disabled={status === "loading"}
      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-1"
      style={{
        background: status === "loading" ? "rgba(180,143,224,0.2)" : "linear-gradient(135deg,#8b5cf6,#685281)",
        color: "#f0eaff",
        border: "1px solid rgba(180,143,224,0.3)",
        letterSpacing: "0.04em",
        fontFamily: "'DM Mono', monospace",
        opacity: status === "loading" ? 0.7 : 1,
        cursor: status === "loading" ? "not-allowed" : "pointer",
      }}>
      {status === "loading" ? (
        <>
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"
              strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" />
          </svg>
          Enviando...
        </>
      ) : (
        <><IoSend size={15} /> Enviar mensaje</>
      )}
    </button>
  </form>
);

export default ContactPanel;