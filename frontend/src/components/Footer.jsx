import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4B1F73] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_innovation-school/artifacts/qkjf44fl_Screenshot%202026-02-08%20at%205.42.27%E2%80%AFPM.png" 
                alt="Punya Academy Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A modern learning environment built to nurture curiosity, confidence, and strong academic foundations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision-mission" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-[#D81B60] text-sm transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D81B60] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  16th Cross, Munireddy Layout Near Lake, Opposite ITI Layout Mangammanapalya Bengaluru – 560068
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#D81B60] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 8951882860</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#D81B60] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@punyaacademy.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#D81B60] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D81B60] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D81B60] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D81B60] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Punya Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
