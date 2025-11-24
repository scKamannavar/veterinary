import React from 'react';
import { Button } from './Button';

export const MeetTheVet: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paw-peach rounded-[3rem] p-8 md:p-12 lg:p-20 relative">
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
           <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-rose-300 rounded-full opacity-20 blur-2xl"></div>

           <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              
              {/* Photo Frame */}
              <div className="w-full lg:w-1/3 flex justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-200 rounded-[2rem] transform rotate-6 translate-y-2"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=800&auto=format&fit=crop" 
                      alt="Dr. Sarah" 
                      className="relative rounded-[2rem] w-80 h-96 object-cover border-4 border-white shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg transform rotate-6">
                       <p className="font-extrabold text-brand-500 text-2xl">Dr. Sarah</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Head Vet</p>
                    </div>
                 </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-2/3 lg:pl-10">
                 <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
                    Meet the <span className="text-rose-500">Animal Whisperer</span>
                 </h2>
                 <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
                    "I don't just treat pets; I treat them like my own little furballs. My goal is to make tails wag and motors purr, even during a check-up!"
                 </p>
                 
                 <div className="space-y-4 mb-8">
                    <p className="text-slate-600">
                       Dr. Sarah Jenkins isn't your average vet. With a pocket full of treats and a heart full of love, she's been caring for Barktown's pets for over 15 years. She specializes in tummy rubs, ear scratches, and advanced veterinary medicine (in that order).
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-4">
                    <div className="bg-white/60 backdrop-blur px-6 py-3 rounded-full font-bold text-slate-700 border border-white/50">
                       🎓 UC Davis DVM
                    </div>
                    <div className="bg-white/60 backdrop-blur px-6 py-3 rounded-full font-bold text-slate-700 border border-white/50">
                       🐕 Dog Mom of 3
                    </div>
                    <div className="bg-white/60 backdrop-blur px-6 py-3 rounded-full font-bold text-slate-700 border border-white/50">
                       🐈 Cat Mom of 2
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};