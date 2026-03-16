
export const config = {
  resend: {
    apiKey:    import.meta.env.VITE_RESEND_API_KEY    ?? "",
    toEmail:   import.meta.env.VITE_CONTACT_TO_EMAIL  ?? "",
    fromEmail: import.meta.env.VITE_CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
  },
  site: {
    title: "Julian Figueredo — Full Stack Developer",
    cvPath: "/assets/data/CV_Julian_Lozada_Desarrollador_Software.pdf",
  },
};