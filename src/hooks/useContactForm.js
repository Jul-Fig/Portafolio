import { useState } from "react";
import { sendContactEmail } from "../services/emailService";

const INITIAL_FORM = { name: "", email: "", message: "" };


export function useContactForm() {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); 
  const [error, setError]   = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const result = await sendContactEmail(form);

    if (result.ok) {
      setStatus("success");
      setForm(INITIAL_FORM);
    } else {
      setStatus("error");
      setError(result.error ?? "Error desconocido.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setError("");
  };

  return { form, status, error, handleChange, handleSubmit, reset };
}