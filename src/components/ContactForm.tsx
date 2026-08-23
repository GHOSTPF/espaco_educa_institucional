"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", phone: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Conte pra gente o seu nome.";
  }
  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Informe um telefone válido com DDD.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // [MOCK] Este envio é apenas front-end. Conectar a um backend real
    // (ex: API route + serviço de e-mail, ou webhook) antes de publicar.
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 1200);
  }

  const fieldBase =
    "w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm text-brown-dark outline-none transition-colors duration-200 placeholder:text-brown-light/60";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brown-dark">
          Nome
        </label>
        <motion.input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Seu nome"
          whileFocus={{ scale: 1.01 }}
          className={`${fieldBase} ${
            errors.name ? "border-pink-dark" : "border-transparent focus:border-blue-dark"
          }`}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1.5 text-xs text-pink-dark"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brown-dark">
          Telefone / WhatsApp
        </label>
        <motion.input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="(83) 90000-0000"
          whileFocus={{ scale: 1.01 }}
          className={`${fieldBase} ${
            errors.phone ? "border-pink-dark" : "border-transparent focus:border-blue-dark"
          }`}
        />
        <AnimatePresence>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1.5 text-xs text-pink-dark"
            >
              {errors.phone}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brown-dark">
          Mensagem
        </label>
        <motion.textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Conte um pouco sobre o que você procura para o seu filho ou filha"
          whileFocus={{ scale: 1.01 }}
          className={`${fieldBase} resize-none ${
            errors.message ? "border-pink-dark" : "border-transparent focus:border-blue-dark"
          }`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1.5 text-xs text-pink-dark"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-dark px-6 py-3.5 font-heading font-semibold text-white shadow-[var(--shadow-pink)] transition-opacity disabled:opacity-70"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="animate-spin" size={18} /> Enviando...
            </motion.span>
          ) : status === "success" ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={18} /> Mensagem enviada!
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={18} /> Enviar mensagem
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <p className="text-center text-xs text-brown-light/70">
        [Formulário front-end/mockado — conectar a um backend ou serviço de e-mail antes de publicar]
      </p>
    </form>
  );
}
