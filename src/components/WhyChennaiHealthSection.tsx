import React, { useEffect, useRef } from 'react';
import { Award, Building2, Heart } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Award,
  Building2,
  Heart,
};

export const WhyChennaiHealthSection: React.FC = () => {
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
      id="why-us"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header - Left Aligned */}
        <div className="mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">
            {siteContent.whyUs.title}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            {siteContent.whyUs.subtitle}
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteContent.whyUs.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <div
                key={pillar.title}
                data-reveal
                style={{ transitionDelay: `${index * 0.15}s` }}
                className="flex flex-col"
              >
                <Icon className="w-16 h-16 text-secondary mb-6" />
                <h3 className="text-2xl font-serif text-text mb-4">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-4 flex-grow">
                  {pillar.description}
                </p>
                <div className="text-primary font-semibold text-lg mt-4">
                  {pillar.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
