import React, { useEffect, useRef } from 'react';
import { Heart, Activity, Shield, Ambulance, Brain, Baby, ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Heart,
  Activity,
  Shield,
  Ambulance,
  Brain,
  Baby,
};

export const SpecialtiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="specialties"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
            {siteContent.specialties.title}
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {siteContent.specialties.subtitle}
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.specialties.cards.map((specialty, index) => {
            const Icon = iconMap[specialty.icon as keyof typeof iconMap];
            return (
              <div
                key={specialty.title}
                data-reveal
                style={{ transitionDelay: `${index * 0.1}s` }}
                className="group bg-white border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-text mb-3">
                  {specialty.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  {specialty.description}
                </p>
                <a
                  href={specialty.link}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
