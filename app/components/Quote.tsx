"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full border-2 border-sand" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full border border-sand" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative quote marks */}
          <div className="font-heading text-8xl text-sand/15 leading-none mb-2 select-none">
            &ldquo;
          </div>

          <p className="font-heading text-lg md:text-2xl lg:text-3xl leading-relaxed text-sand/90 italic -mt-8">
            De uitdagingen van het leven mogen je niet verlammen, ze moeten je
            helpen ontdekken wie je bent.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-sand/30" />
            <p className="font-body text-xs text-sand/50 tracking-[0.2em] uppercase">
              Bernice Johnson Reagon
            </p>
            <div className="h-px w-12 bg-sand/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
