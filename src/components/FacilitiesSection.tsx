import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const FacilitiesSection: React.FC = () => {
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
      id="facilities"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
            {siteContent.facilities.title}
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {siteContent.facilities.subtitle}
          </p>
        </div>

        {/* Facilities Grid - Alternating Layout */}
        <div className="space-y-20">
          {siteContent.facilities.features.map((feature, index) => (
            <div
              key={feature.title}
              data-reveal
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-serif text-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <span className="text-text-muted">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
