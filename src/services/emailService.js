import { config } from "../config/env";

/**
 * 
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendContactEmail({ name, email, message }) {
  const { apiKey, toEmail, fromEmail } = config.resend;

  if (!apiKey) {
    return { ok: false, error: "API key de Resend no configurada (VITE_RESEND_API_KEY)." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Mensaje de portafolio — ${name}`,
        html: buildEmailHtml({ name, email, message }),
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data?.message ?? "Error al enviar el mensaje." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Sin conexión o error de red. Intenta de nuevo." };
  }
}

function buildEmailHtml({ name, email, message }) {
  return `
    <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:24px;
                background:#1a1025;color:#e9d8ff;border-radius:12px;">
      <h2 style="color:#b48fe0;margin-bottom:4px;">Nuevo mensaje desde tu portafolio</h2>
      <hr style="border-color:#3d2f52;margin-bottom:20px;" />
      <p><strong style="color:#b48fe0;">Nombre:</strong> ${name}</p>
      <p><strong style="color:#b48fe0;">Email:</strong> ${email}</p>
      <p><strong style="color:#b48fe0;">Mensaje:</strong></p>
      <p style="background:#2a1f38;padding:14px;border-radius:8px;line-height:1.6;">
        ${message}
      </p>
    </div>
  `;
}