import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your appointment request. Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', specialty: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
            {siteContent.contact.title}
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8" data-reveal>
            {/* Emergency Hotline - Featured */}
            <div className="bg-emergency/5 border-2 border-emergency/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emergency rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-text mb-1">
                    {siteContent.contact.emergencyHotline.title}
                  </h3>
                  <a
                    href={`tel:${siteContent.contact.emergencyHotline.number.replace(/\s/g, '')}`}
                    className="text-2xl font-bold text-emergency hover:underline"
                  >
                    {siteContent.contact.emergencyHotline.number}
                  </a>
                  <p className="text-sm text-text-muted mt-1">
                    {siteContent.contact.emergencyHotline.available}
                  </p>
                </div>
              </div>
            </div>

            {/* General Enquiries */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-text mb-4">
                {siteContent.contact.generalEnquiries.title}
              </h3>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <a
                    href={`tel:${siteContent.contact.generalEnquiries.phone.replace(/\s/g, '')}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {siteContent.contact.generalEnquiries.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <a
                    href={`mailto:${siteContent.contact.generalEnquiries.email}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {siteContent.contact.generalEnquiries.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-text-muted">
                    {siteContent.contact.generalEnquiries.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-text mb-4">
                {siteContent.contact.address.title}
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-text-muted">
                  <p>{siteContent.contact.address.line1}</p>
                  <p>{siteContent.contact.address.line2}</p>
                  <p>{siteContent.contact.address.line3}</p>
                  <p>{siteContent.contact.address.line4}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src={siteContent.contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Health Location"
              />
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div data-reveal style={{ transitionDelay: '0.2s' }}>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-serif text-text mb-6">
                {siteContent.contact.form.title}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">{siteContent.contact.form.specialtyPlaceholder}</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="oncology">Oncology</option>
                    <option value="emergency">Emergency</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.messagePlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                >
                  {siteContent.contact.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
