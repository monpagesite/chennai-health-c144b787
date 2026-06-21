import React from 'react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <div className="ml-3">
                <div className="font-serif text-xl font-semibold">Chennai Health</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {siteContent.footer.tagline}
            </p>
            <div className="space-y-2">
              {siteContent.footer.accreditations.map((accreditation) => (
                <div key={accreditation} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <span className="text-sm text-gray-400">{accreditation}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">For Patients</h3>
            <ul className="space-y-3">
              {siteContent.footer.patientLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {siteContent.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
