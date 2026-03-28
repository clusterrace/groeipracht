"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-light"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-sand" />

      {/* Decorative concentric circles — top right */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-forest/8 opacity-60" />
      <div className="absolute -top-12 -right-12 w-[380px] h-[380px] rounded-full border border-primary/8 opacity-60" />
      <div className="absolute top-0 right-0 w-[260px] h-[260px] rounded-full bg-sand/30 rounded-full" />

      {/* Decorative dot — bottom left */}
      <div className="absolute bottom-20 -left-10 w-[200px] h-[200px] rounded-full bg-forest/5 border border-forest/10" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Category label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-body font-medium tracking-[0.25em] uppercase text-xs text-forest mb-6 block"
          >
            Natuurcoaching · regio Kempen
          </motion.span>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-6"
          >
            Welkom bij<br />
            Groeipracht.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-xl md:text-2xl lg:text-3xl text-accent italic mb-8"
          >
            Groei met zachte kracht.
          </motion.p>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-body text-base md:text-lg text-earth leading-relaxed mb-10 max-w-xl"
          >
            Ik ben Hannah, groeicoach, oprichtster van Groeipracht en mama van
            twee dochters. Wat mij drijft, is het verlangen om mensen weer in
            verbinding te brengen: met zichzelf, met hun innerlijke kracht en
            met de rust van de natuur.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-medium px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 text-sm md:text-base tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Maak kennis
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-body text-xs text-earth/40 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/30" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
