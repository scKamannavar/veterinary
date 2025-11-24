import React, { useState } from 'react';
import { Button } from './Button';
import '../types';

export const AppointmentSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-20 bg-paw-sky scroll-mt-28">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12 text-center animate-fade-in-up border-4 border-white ring-4 ring-brand-100">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 text-5xl animate-bounce">
              <ion-icon name="paw"></ion-icon>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-4">You're All Set!</h3>
            <p className="text-slate-600 text-lg mb-8 font-medium">
              High five! 🐾 We've received your request. We'll give you a ring shortly to confirm the details.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="secondary">Book Another Pet</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="pt-24 pb-32 bg-gradient-to-b from-white to-paw-sky relative overflow-hidden scroll-mt-28">
       
       {/* Wavy Top */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[60px] text-white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-slate-800 lg:pr-8">
               <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-2 rounded-full text-brand-700 font-bold mb-6">
                 <ion-icon name="calendar"></ion-icon> Online Booking
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                 Ready for a <br/> <span className="text-brand-500">Check-up?</span>
               </h2>
               <p className="text-xl text-slate-600 mb-8">
                 Skip the phone tag! Pick a time that works for you and your furry friend, and we'll handle the rest.
               </p>
               
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center text-2xl">
                   <ion-icon name="call"></ion-icon>
                 </div>
                 <div>
                   <p className="font-bold text-slate-800">Prefer to call?</p>
                   <p className="text-slate-500">(555) 123-4567</p>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 md:p-10 relative border border-slate-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap">
                 Start Here 🐾
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">What do you need?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Check-up', 'Vaccine', 'Sick Pet', 'Grooming'].map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="reason" className="peer sr-only" />
                        <div className="bg-slate-50 border-2 border-slate-100 rounded-xl p-3 text-center text-slate-600 font-bold peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-600 transition-all">
                          {opt}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-400 focus:ring-0 outline-none transition-all font-semibold" placeholder="Human Name" required />
                  </div>
                   <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Pet's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-400 focus:ring-0 outline-none transition-all font-semibold" placeholder="Pet Name" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-400 focus:ring-0 outline-none transition-all font-semibold text-slate-600" required />
                  </div>
                   <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-400 focus:ring-0 outline-none transition-all font-semibold" placeholder="(555)..." required />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg">Request Appointment</Button>
              </form>
            </div>

         </div>
       </div>
    </section>
  );
};