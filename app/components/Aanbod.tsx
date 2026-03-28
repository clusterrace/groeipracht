"use client";

import { motion } from "framer-motion";
import { Heart, TreePine, Sun, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  tagline: string;
  brief: string;
  price: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Heart,
    title: "Individuele Coaching",
    tagline: "Ruimte om weer bij jezelf te komen",
    brief: "Wandelgesprekken in de natuur. Jij bepaalt het tempo, jij bepaalt hoe diep we gaan.",
    price: "€60 / sessie",
  },
  {
    icon: TreePine,
    title: "Bos & Balans",
    tagline: "Samen herbronnen in de natuur",
    brief: "Zachte, geleide natuurervaring in kleine groep. Even adem halen, samen.",
    price: "€20 / persoon",
    featured: true,
  },
  {
    icon: Sun,
    title: "Vier keer Jij",
    tagline: "Meebewegen met het ritme van het jaar",
    brief: "4 seizoenssessies + individueel moment. Een klein, vast groepje vrouwen die samen groeien.",
    price: "vanaf €320",
  },
  {
    icon: Users,
    title: "Tussen de Bomen",
    tagline: "Rustmomenten in de natuur voor teams",
    brief: "Bosbaden en sylvotherapie voor teams. Even stilvallen, samen. Voor meer verbinding op de werkvloer.",
    price: "Op aanvraag",
  },
];

export default function Aanbod() {
  return (
    <section id="aanbod" className="py-20 md:py-32 bg-cream-light">
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
            Aanbod
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mt-3">
            Hoe ik je kan begeleiden
          </h2>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`rounded-2xl p-8 flex flex-col gap-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  service.featured
                    ? "bg-forest border-forest text-white"
                    : "bg-white border-sand/80 hover:border-primary/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    service.featured
                      ? "bg-sand/20"
                      : "bg-forest/8"
                  }`}
                >
                  <Icon
                    size={22}
                    className={service.featured ? "text-sand" : "text-forest"}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`font-heading text-xl md:text-2xl mb-1 ${
                      service.featured ? "text-sand" : "text-primary"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`font-body text-sm italic mb-3 ${
                      service.featured ? "text-sand/70" : "text-accent"
                    }`}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className={`font-body text-sm leading-relaxed ${
                      service.featured ? "text-sand/80" : "text-earth"
                    }`}
                  >
                    {service.brief}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-auto">
                  <span
                    className={`inline-block font-body font-medium text-sm px-4 py-2 rounded-full ${
                      service.featured
                        ? "bg-sand/20 text-sand"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-body text-stone-dark mb-6 text-sm">
            Niet zeker welk traject bij jou past? Neem gerust contact op voor een vrijblijvend gesprek.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary text-primary font-body font-medium px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm tracking-wide"
          >
            Vraag een kennismakingsgesprek
          </a>
        </motion.div>
      </div>
    </section>
  );
}
