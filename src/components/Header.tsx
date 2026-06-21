import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Specialties', href: '#specialties' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Patient Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#hero')}>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <div className="ml-3">
                <div className="font-serif text-xl font-semibold text-text">Chennai Health</div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Emergency CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917550389284"
              className="flex items-center gap-2 text-emergency font-semibold hover:text-emergency/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden lg:inline">Emergency</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text-muted hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+917550389284"
                className="flex items-center gap-2 text-emergency font-semibold py-2"
              >
                <Phone className="w-5 h-5" />
                Emergency Hotline
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white px-6 py-3 rounded-full font-medium text-center hover:bg-primary/90 transition-all"
              >
                Book an Appointment
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
