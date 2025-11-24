import React from 'react';
import { Button } from './Button';
import '../types';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-paw-cream">
        {/* Sophisticated Background Blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
           <div className="absolute top-10 left-10 text-6xl text-brand-100/50 rotate-12 font-serif italic">&</div>
           <div className="absolute bottom-20 right-20 text-8xl text-brand-100/50 -rotate-12 font-serif italic">Care</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Text Content - Editorial Style */}
                <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-200/50 bg-white/50 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase text-brand-800 shadow-sm">
                        Est. 2010 • Barktown
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tight font-serif">
                        Modern <br />
                        <span className="font-light italic text-brand-600 pr-4">Veterinary</span> <br />
                        Medicine.
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium font-sans">
                        Experience a new standard of pet care. Where cutting-edge medicine meets the comfort of home for your best friend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Button size="lg" className="shadow-xl shadow-brand-500/20 rounded-full px-10" onClick={() => document.getElementById('appointment')?.scrollIntoView({behavior: 'smooth'})}>
                            Book Check-up
                        </Button>
                        <Button variant="white" size="lg" className="border-2 border-slate-100 text-slate-600 hover:text-brand-600 hover:border-brand-200 rounded-full px-10" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                            Our Services
                        </Button>
                    </div>

                    {/* Minimal Trust Stats */}
                    <div className="mt-16 border-t border-brand-900/5 pt-8 flex justify-center lg:justify-start gap-12">
                        <div>
                            <p className="text-3xl font-serif font-black text-slate-800">15k+</p>
                            <p className="text-xs text-brand-600 font-bold uppercase tracking-widest mt-1">Happy Pets</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-black text-slate-800">7 Days</p>
                            <p className="text-xs text-brand-600 font-bold uppercase tracking-widest mt-1">Open Weekly</p>
                        </div>
                    </div>
                </div>

                {/* Image Content - Arch Design */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    {/* Arch Mask Container */}
                    <div className="relative w-full max-w-md mx-auto lg:mr-0 group">
                        {/* The Image Container with Arch Mask */}
                        <div className="relative z-10 rounded-t-[15rem] rounded-b-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[8px] border-white h-[550px] md:h-[650px] transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(13,148,136,0.2)]">
                            <img 
                                src="https://images.unsplash.com/photo-1629740032638-d83e134e940b?q=80&w=1200&auto=format&fit=crop" 
                                alt="Playful healthy dog and cat interacting happily" 
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                            />
                            
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Floating Glass Card */}
                        <div className="absolute bottom-12 -left-4 md:-left-12 z-20 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50 max-w-[16rem] animate-float hidden sm:block">
                            <div className="flex text-amber-400 mb-2 text-base">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>
                            <p className="text-slate-700 font-serif italic mb-3 text-sm leading-relaxed">"The most beautiful clinic I've ever seen. They truly care about every detail."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
                                     <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="User" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Sarah & Barnaby</p>
                                    <p className="text-[10px] text-brand-500 uppercase font-bold tracking-wider">Verified Client</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle behind */}
                        <div className="absolute top-20 -right-10 w-48 h-48 bg-brand-300 rounded-full blur-3xl -z-10 opacity-50 animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl -z-10 opacity-40 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};