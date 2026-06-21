import React, { useEffect, useRef } from 'react';
import { Clock, FileText, Globe, BookOpen, Pill, Utensils } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Clock,
  FileText,
  Globe,
  BookOpen,
  Pill,
  Utensils,
};

export const PatientResourcesSection: React.FC = () => {
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
      id="resources"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
            {siteContent.resources.title}
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {siteContent.resources.subtitle}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.resources.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${index * 0.1}s` }}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
