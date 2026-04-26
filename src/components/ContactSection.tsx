"use client";

import { useState } from "react";
import { SiteConfig } from "@/sanity/queries";

type Props = {
  config: SiteConfig | null;
};

const SUBJECTS = [
  "Développement Logiciel",
  "Audit Infrastructure",
  "Coaching Agile",
  "Intelligence Artificielle",
  "Autre",
];

type FormState = "idle" | "loading" | "success" | "error";
type FormError = string | null;

export default function ContactSection({ config }: Props) {
  const email = config?.email ?? "contact@kayiratech.com";
  const telephone = config?.telephone ?? "+1 (514) 000-0000";

  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<FormError>(null);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: SUBJECTS[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Une erreur est survenue. Veuillez réessayer.");
        setFormState("error");
        return;
      }
      setFormState("success");
      setForm({ nom: "", email: "", sujet: SUBJECTS[0], message: "" });
    } catch {
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
      setFormState("error");
    }
  };

  return (
    <section className="py-32 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[var(--color-primary)] rounded-[40px] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            {/* Left */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                Prêt à transformer votre vision ?
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Discutons de votre prochain défi technologique. Nos experts sont
                à votre écoute pour une consultation gratuite.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <div className="text-sm opacity-60">Email</div>
                    <div className="text-lg font-bold">{email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <div className="text-sm opacity-60">Téléphone</div>
                    <div className="text-lg font-bold">{telephone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-on-surface)]">Message envoyé !</h3>
                  <p className="text-[var(--color-on-surface-variant)]">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-[var(--color-primary)] font-semibold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Nom complet</label>
                      <input
                        name="nom"
                        type="text"
                        placeholder="Jean Dupont"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)]/20 text-[var(--color-on-surface)] outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Email</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="jean@entreprise.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)]/20 text-[var(--color-on-surface)] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">Sujet</label>
                    <select
                      name="sujet"
                      value={form.sujet}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)]/20 text-[var(--color-on-surface)] outline-none"
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-sm font-bold text-slate-500">Message</label>
                      <span className={`text-xs ${form.message.length < 10 ? "text-slate-400" : "text-green-500"}`}>
                        {form.message.length}/10 min
                      </span>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Comment pouvons-nous vous aider ?"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[var(--color-primary)]/20 text-[var(--color-on-surface)] outline-none resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-[var(--color-primary)] text-white py-5 rounded-xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[var(--color-primary)]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? "Envoi en cours..." : "Envoyer mon message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
