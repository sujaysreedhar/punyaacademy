import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/programs', label: 'Programs' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4B1F73] to-[#D81B60] flex items-center justify-center">
              <span className="text-white font-bold text-xl">PA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#4B1F73] font-bold text-xl leading-tight">Punya Academy</span>
              <span className="text-[#D81B60] text-xs font-medium">The School of Innovation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#D81B60] ${
                  isActive(link.path) ? 'text-[#D81B60]' : 'text-[#2E2E2E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admissions">
              <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white">
                Admissions Open
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#4B1F73]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-[#D81B60]' : 'text-[#2E2E2E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#D81B60] hover:bg-[#c01850] text-white">
                Admissions Open
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
