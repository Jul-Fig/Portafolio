// src/services/emailService.js
// Llama a tu Netlify Function — sin API keys en el frontend.

/**
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendContactEmail({ name, email, message }) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { ok: false, error: data?.error ?? "Error al enviar el mensaje." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Sin conexión o error de red. Intenta de nuevo." };
  }
}