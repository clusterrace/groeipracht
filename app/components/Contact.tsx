"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, CheckCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — in production, connect to Formspree / Netlify Forms / API
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "E-mail",
      value: "Hannah@groeipracht.be",
      href: "mailto:Hannah@groeipracht.be",
    },
    {
      icon: Phone,
      label: "Telefoon",
      value: "0495 23 68 75",
      href: "tel:+32495236875",
    },
    {
      icon: MapPin,
      label: "Adres",
      value: "Biezenhoek 8, 2275 Poederlee",
      href: "https://maps.google.com/?q=Biezenhoek+8+Poederlee",
    },
  ];

  const inputClass =
    "w-full font-body text-sm text-earth bg-cream-light border border-sand/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-stone-dark/40";

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body font-medium text-xs tracking-[0.25em] uppercase text-forest">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mt-3">
            Zin om kennis te maken?
          </h2>
          <p className="font-body text-base text-earth mt-4 max-w-xl mx-auto leading-relaxed">
            Heb je een vraag, wil je ontdekken of coaching bij jou past? Je bent
            welkom voor een gratis kennismakingsgesprek. Rustig, zonder
            verplichtingen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact details + social */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading text-xl text-primary mb-8">
              Bereik me via
            </h3>

            <div className="flex flex-col gap-6 mb-10">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.label === "Adres" ? "_blank" : undefined}
                    rel={detail.label === "Adres" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest/20 transition-colors duration-200">
                      <Icon size={16} className="text-forest" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-stone-dark/60 tracking-wide uppercase mb-0.5">
                        {detail.label}
                      </p>
                      <p className="font-body text-sm text-earth group-hover:text-primary transition-colors duration-200">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="font-body text-xs text-stone-dark/60 tracking-[0.2em] uppercase mb-5">
                Volg me op
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/groeipracht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-earth hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sand border border-sand/80 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-200">
                    <Facebook size={15} className="text-earth group-hover:text-primary transition-colors" />
                  </div>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com/hannahgroeicoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-earth hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sand border border-sand/80 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-200">
                    <Instagram size={15} className="text-earth group-hover:text-primary transition-colors" />
                  </div>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-forest" />
                </div>
                <h3 className="font-heading text-2xl text-primary">
                  Bericht verstuurd!
                </h3>
                <p className="font-body text-earth text-sm max-w-xs leading-relaxed">
                  Dankjewel voor je bericht. Ik neem zo snel mogelijk contact met je op.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-body text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors mt-2"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-xs text-stone-dark/70 tracking-wide uppercase mb-2 block"
                  >
                    Naam
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jouw naam"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-xs text-stone-dark/70 tracking-wide uppercase mb-2 block"
                  >
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jouw@email.be"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-xs text-stone-dark/70 tracking-wide uppercase mb-2 block"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Vertel me iets over jezelf of je vraag..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2.5 bg-primary text-white font-body font-medium px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Verstuur bericht
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
