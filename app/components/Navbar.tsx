"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#visie", label: "Visie" },
  { href: "#aanbod", label: "Aanbod" },
  { href: "#over-mij", label: "Over Mij" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-light/95 backdrop-blur-md shadow-sm border-b border-sand/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-xl md:text-2xl text-primary hover:text-accent transition-colors duration-300"
        >
          Groeipracht
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-earth hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-body text-sm bg-primary text-white px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 tracking-wide"
            >
              Maak kennis
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-earth hover:text-primary transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-light border-t border-sand/60 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-base text-earth hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="font-body text-sm bg-primary text-white px-6 py-3 rounded-full inline-block hover:bg-accent transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Maak kennis
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
