import React from 'react';
import '../types';

export const About: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-paw-mint/30 relative overflow-hidden scroll-mt-28">
      
      {/* Decorative Tracks */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none hidden md:block">
         <div className="absolute top-10 left-10 text-4xl rotate-45"><ion-icon name="paw"></ion-icon></div>
         <div className="absolute top-40 left-20 text-4xl rotate-12"><ion-icon name="paw"></ion-icon></div>
         <div className="absolute top-80 left-10 text-4xl rotate-45"><ion-icon name="paw"></ion-icon></div>
         <div className="absolute bottom-20 right-20 text-4xl -rotate-12"><ion-icon name="paw"></ion-icon></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Playful Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                  <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] shadow-lg hover:rotate-2 transition-transform duration-300" alt="Pug" />
                  <div className="bg-white p-6 rounded-[2rem] shadow-lg text-center">
                     <h3 className="font-extrabold text-3xl text-brand-500">20+</h3>
                     <p className="font-bold text-slate-500 text-sm uppercase">Years of Love</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-amber-100 p-6 rounded-[2rem] shadow-lg text-center">
                     <ion-icon name="trophy" class="text-4xl text-amber-500 mb-2"></ion-icon>
                     <p className="font-bold text-amber-800 text-sm">Award Winning</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] shadow-lg hover:-rotate-2 transition-transform duration-300" alt="Dogs jumping" />
               </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
              Why Choose <br/>
              <span className="text-brand-500">Paws & Care?</span>
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
              <p className="mb-4">
                Because we know that a pet isn't just an animal—they're a roommate, a best friend, and a family member. 
              </p>
              <p className="p-6 bg-white rounded-2xl border-2 border-dashed border-brand-200 shadow-sm text-brand-800 font-bold">
                💡 Did you know? Animals mask their pain. Regular check-ups are the secret code to understanding what they can't tell us!
              </p>
              <p className="mt-4">
                Our clinic feels more like a playdate than a doctor's office. We use fear-free handling techniques to make sure your pet loves coming to see us (almost) as much as the park.
              </p>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Fear-Free Certified",
                "Separate Cat/Dog Areas",
                "Treats on Arrival",
                "Cozy Exam Rooms"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">
                    <ion-icon name="checkmark"></ion-icon>
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};