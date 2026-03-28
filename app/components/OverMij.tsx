"use client";

import { motion } from "framer-motion";
import { Sprout, BookOpen, Heart } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    text: "Meer dan 10 jaar coachingervaring",
  },
  {
    icon: Heart,
    text: "Maatschappelijk assistent van opleiding",
  },
  {
    icon: Sprout,
    text: "Zelf door een burnout gegroeid",
  },
];

export default function OverMij() {
  return (
    <section id="over-mij" className="py-20 md:py-32 bg-cream-light">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body font-medium text-xs tracking-[0.25em] uppercase text-forest">
                Over mij
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mt-3 mb-6 leading-snug">
                Ik ben Hannah. En ik loop graag een stukje mee.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="font-body text-base md:text-lg text-earth leading-relaxed mb-6">
                Na meer dan 10 jaar coachen, weet ik hoe belangrijk het is om
                écht gezien te worden. Als maatschappelijk assistent werkte ik
                jarenlang met mensen in kwetsbare situaties.
              </p>
              <p className="font-body text-base md:text-lg text-earth leading-relaxed mb-8">
                Toen ik zelf tegen een burnout aanliep, ontdekte ik de kracht
                van de natuur. Sindsdien combineer ik mijn coachingervaring met
                wandelingen in het bos — omdat de natuur iets doet wat woorden
                alleen niet kunnen.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-forest" />
                    </div>
                    <span className="font-body text-sm text-earth">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-sand/80" />
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-primary/20" />
              {/* Inner fill */}
              <div className="absolute inset-12 rounded-full bg-cream flex flex-col items-center justify-center text-center p-8">
                <p className="font-heading text-4xl md:text-5xl text-primary/20 mb-1">
                  HJ
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-forest font-medium">
                  Groeicoach
                </p>
                <div className="mt-4 h-px w-10 bg-primary/30 mx-auto" />
                <p className="font-heading text-sm text-earth/60 mt-4 italic leading-relaxed">
                  &ldquo;Groei met zachte kracht.&rdquo;
                </p>
              </div>

              {/* Decorative leaves */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <svg
                  width="32"
                  height="48"
                  viewBox="0 0 32 48"
                  fill="none"
                  className="text-forest/30"
                >
                  <path
                    d="M16 0 C16 0 28 12 28 26 C28 36 22 44 16 48 C10 44 4 36 4 26 C4 12 16 0 16 0Z"
                    fill="currentColor"
                  />
                  <path d="M16 8 L16 48" stroke="white" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-180">
                <svg
                  width="24"
                  height="36"
                  viewBox="0 0 32 48"
                  fill="none"
                  className="text-primary/20"
                >
                  <path
                    d="M16 0 C16 0 28 12 28 26 C28 36 22 44 16 48 C10 44 4 36 4 26 C4 12 16 0 16 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
