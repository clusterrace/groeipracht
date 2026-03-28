"use client";

import { motion } from "framer-motion";

const textBlocks = [
  {
    text: "Jij bepaalt het tempo. Jij bepaalt hoe diep we gaan. Ik loop een stukje mee, zonder oordeel, zonder agenda.",
  },
  {
    text: "Mijn methodes zijn traag, maar grondig. En dat is het verschil.",
  },
  {
    text: "Voor vrouwen die voelen dat het anders mag. Die willen leven vanuit hun eigen kracht.",
  },
];

export default function Werkwijze() {
  return (
    <section className="py-20 md:py-32 bg-sand relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cream/40 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream/30 rounded-tr-full" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Big question heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-body font-medium text-xs tracking-[0.25em] uppercase text-forest">
            Werkwijze
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mt-4 leading-snug max-w-3xl mx-auto">
            Wat als vertragen het moedigste is wat je vandaag kan doen?
          </h2>
        </motion.div>

        {/* Text blocks with decorative dividers */}
        <div className="max-w-2xl mx-auto space-y-10">
          {textBlocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-body text-base md:text-lg text-earth leading-relaxed">
                {block.text}
              </p>
              {i < textBlocks.length - 1 && (
                <div className="flex items-center justify-center gap-3 mt-10">
                  <div className="h-px w-8 bg-primary/30" />
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 32 48"
                    fill="none"
                    className="text-primary/30"
                  >
                    <path
                      d="M16 0 C16 0 28 12 28 26 C28 36 22 44 16 48 C10 44 4 36 4 26 C4 12 16 0 16 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="h-px w-8 bg-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Final callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-medium px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            Begin jouw verhaal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
