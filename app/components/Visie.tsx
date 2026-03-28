"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const beliefs = [
  "Groei ontstaat vanuit rust, niet vanuit druk.",
  "De natuur is geen decor, zij is de methode.",
  "Jij bent meer dan een diagnose. Meer dan wat er mis is.",
  "Als iemand doet wat vanbinnen stroomt, gebeurt er magie.",
  "Jij weet wat je nodig hebt. Soms heeft dat alleen een spiegel nodig.",
];

export default function Visie() {
  return (
    <section id="visie" className="py-20 md:py-32 bg-cream">
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
            Visie
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mt-3 leading-snug">
            Een veilige plek waar je mag landen.
          </h2>
        </motion.div>

        {/* Belief cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream-light rounded-2xl p-6 border border-sand/80 flex items-start gap-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center">
                <Leaf size={15} className="text-forest" />
              </div>
              <p className="font-body text-earth leading-relaxed text-sm md:text-base">
                {belief}
              </p>
            </motion.div>
          ))}

          {/* Closing card spanning wider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sm:col-span-2 lg:col-span-3 bg-forest rounded-2xl p-8 text-center"
          >
            <p className="font-heading text-lg md:text-xl lg:text-2xl text-sand/90 italic leading-relaxed">
              &ldquo;Ik stel niet de vraag wat er mis is met je. Ik vraag wat
              er in je leeft, wat gezien wil worden, wat wil groeien.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
