

export default async (req, context) => {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método no permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Body inválido." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, message } = body;

  // Validación básica
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Todos los campos son obligatorios." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portafolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL],
        subject: `Mensaje de portafolio — ${name}`,
        html: `
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
        `,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      return new Response(JSON.stringify({ error: data?.message ?? "Error al enviar." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Error de red. Intenta de nuevo." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/contact",
};