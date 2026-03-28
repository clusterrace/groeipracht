"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Heart } from "lucide-react";

const navLinks = [
  { href: "#visie", label: "Visie" },
  { href: "#aanbod", label: "Aanbod" },
  { href: "#over-mij", label: "Over Mij" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-sand">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl text-sand mb-3">
              Groeipracht
            </h2>
            <p className="font-heading text-sm text-sand/70 italic mb-6">
              Groei met zachte kracht.
            </p>
            <p className="font-body text-xs text-sand/50 leading-relaxed max-w-xs">
              Natuurcoaching in de regio Kempen. Individuele begeleiding,
              groepssessies en teamtrajecten in de natuur.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-body text-xs text-sand/50 tracking-[0.2em] uppercase mb-5">
              Navigatie
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-sand/70 hover:text-sand transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-body text-xs text-sand/50 tracking-[0.2em] uppercase mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:Hannah@groeipracht.be"
                className="font-body text-sm text-sand/70 hover:text-sand transition-colors duration-200"
              >
                Hannah@groeipracht.be
              </a>
              <a
                href="tel:+32495236875"
                className="font-body text-sm text-sand/70 hover:text-sand transition-colors duration-200"
              >
                0495 23 68 75
              </a>
              <span className="font-body text-sm text-sand/50">
                Biezenhoek 8, 2275 Poederlee
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/groeipracht"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-sand/20 flex items-center justify-center hover:border-sand/50 hover:bg-sand/10 transition-all duration-200"
              >
                <Facebook size={15} className="text-sand/60" />
              </a>
              <a
                href="https://instagram.com/hannahgroeicoach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-sand/20 flex items-center justify-center hover:border-sand/50 hover:bg-sand/10 transition-all duration-200"
              >
                <Instagram size={15} className="text-sand/60" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-sand/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-sand/40">
            © 2025 Groeipracht. Alle rechten voorbehouden.
          </p>
          <p className="font-body text-xs text-sand/30 flex items-center gap-1.5">
            Gemaakt met <Heart size={10} className="text-rose-warm/60" /> in de Kempen
          </p>
        </div>
      </div>
    </footer>
  );
}
