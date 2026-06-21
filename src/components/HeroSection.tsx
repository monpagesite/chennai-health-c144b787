import React, { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{
        background: '#FAF8F5',
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(10, 92, 92, 0.04), transparent 60%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3" data-reveal>
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text leading-[1.1] mb-6 tracking-tight">
              {siteContent.hero.headline.main}
              <span className="text-primary">{siteContent.hero.headline.highlight}</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mb-8">
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 text-center shadow-lg shadow-primary/20"
              >
                {siteContent.hero.primaryCTA}
              </a>
              <a
                href="#specialties"
                onClick={(e) => handleNavClick(e, '#specialties')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-all text-center"
              >
                {siteContent.hero.secondaryCTA}
              </a>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-text-muted">
              {siteContent.hero.stats.map((stat, index) => (
                <React.Fragment key={stat}>
                  {index > 0 && <span className="text-border">|</span>}
                  <span className="font-medium">{stat}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Visual - 40% */}
          <div className="lg:col-span-2" data-reveal style={{ transitionDelay: '0.2s' }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteContent.hero.heroImage}
                alt="Modern hospital facility"
                className="w-full h-full object-cover"
              />
              {/* Emergency Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-emergency text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                {siteContent.hero.emergencyBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
