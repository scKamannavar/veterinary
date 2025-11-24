import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <nav 
        className={`transition-all duration-300 w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8 rounded-full px-6 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform">
              <ion-icon name="paw"></ion-icon>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-800">
              Paws<span className="text-brand-500">&</span>Care
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Services', 'About Us', 'Testimonials'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="px-5 py-2 text-base font-bold text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            ))}
            <div className="ml-2">
              <Button size="sm" onClick={() => scrollToSection('appointment')}>
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-3xl text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ion-icon name={mobileMenuOpen ? "close-circle" : "menu"}></ion-icon>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-2 md:hidden">
             {['Services', 'About Us', 'Testimonials'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="p-3 text-lg font-bold text-slate-600 hover:bg-brand-50 hover:text-brand-600 rounded-xl text-center w-full"
              >
                {item}
              </button>
            ))}
            <Button className="w-full mt-2" onClick={() => scrollToSection('appointment')}>
              Book Appointment
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};