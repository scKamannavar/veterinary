import React from 'react';
import { Button } from './Button';
import '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-12 relative -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 overflow-hidden">
       
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none select-none rounded-t-[3rem]">
          <div className="absolute top-20 left-10 text-6xl rotate-12"><ion-icon name="paw"></ion-icon></div>
          <div className="absolute top-40 right-20 text-6xl -rotate-12"><ion-icon name="bone"></ion-icon></div>
          <div className="absolute bottom-20 left-1/3 text-6xl rotate-45"><ion-icon name="paw"></ion-icon></div>
          <div className="absolute top-1/2 right-1/3 text-8xl opacity-20"><ion-icon name="heart"></ion-icon></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-brand-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                <ion-icon name="paw"></ion-icon>
              </div>
              <span className="text-3xl font-extrabold tracking-tight font-serif">Paws<span className="text-brand-300">&</span>Care</span>
            </div>
            <p className="text-brand-100 text-lg leading-relaxed font-sans">
              Compassionate veterinary care that treats your pets like family. Because they are.
            </p>
            <div className="flex gap-4">
              {['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-youtube'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-brand-800 hover:bg-white hover:text-brand-600 flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1">
                  <ion-icon name={icon}></ion-icon>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-brand-50">Quick Links</h4>
            <ul className="space-y-4 font-sans">
              {['Services', 'About Us', 'Meet the Team', 'Book Appointment'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-200 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                    <ion-icon name="chevron-forward" class="text-brand-400 text-sm"></ion-icon> 
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-brand-50">Visit Us</h4>
            <ul className="space-y-4 text-brand-100 font-sans">
              <li className="flex items-start gap-3">
                <ion-icon name="location" class="text-2xl text-brand-400 shrink-0 mt-1"></ion-icon>
                <span>123 Puppy Lane,<br/>Barktown, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <ion-icon name="call" class="text-2xl text-brand-400 shrink-0"></ion-icon>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                 <ion-icon name="mail" class="text-2xl text-brand-400 shrink-0"></ion-icon>
                 <span>hello@pawsandcare.com</span>
              </li>
               <li className="flex items-center gap-3">
                 <ion-icon name="time" class="text-2xl text-brand-400 shrink-0"></ion-icon>
                 <span>Mon-Sat: 8am - 7pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-brand-50">Join Our Pack</h4>
            <p className="text-brand-200 mb-4 text-sm font-sans">Get pet health tips and clinic news delivered to your inbox!</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-full bg-brand-800 border border-brand-700 focus:border-brand-400 focus:ring-2 focus:ring-brand-400 outline-none text-white placeholder-brand-400 transition-all shadow-inner font-sans"
              />
              <Button variant="white" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-300 text-sm font-medium relative z-20 pb-8 md:pb-0 font-sans">
          <p>&copy; {new Date().getFullYear()} Paws & Care Veterinary Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Peeking Cat Image Decoration - Bottom Left */}
       <div className="absolute -bottom-4 left-0 w-32 h-32 lg:w-48 lg:h-48 z-10 pointer-events-none opacity-90 hidden sm:block">
          <div className="relative w-full h-full transition-transform hover:-translate-y-2 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=500&auto=format&fit=crop" 
              alt="Peeking Cat" 
              className="w-full h-full object-cover rounded-tr-[80px] border-t-8 border-r-8 border-brand-800 shadow-2xl"
            />
          </div>
       </div>

      {/* Peeking Dog Image Decoration - Bottom Right */}
       <div className="absolute -bottom-4 right-0 w-40 h-40 lg:w-56 lg:h-56 z-10 pointer-events-none opacity-90">
          <div className="relative w-full h-full transition-transform hover:-translate-y-2 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop" 
              alt="Peeking Dog" 
              className="w-full h-full object-cover rounded-tl-[100px] border-t-8 border-l-8 border-brand-800 shadow-2xl"
            />
          </div>
       </div>
    </footer>
  );
};