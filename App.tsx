import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { MeetTheVet } from './components/MeetTheVet';
import { AppointmentSection } from './components/AppointmentSection';
import { ChatAssistant } from './components/ChatAssistant';
import { Footer } from './components/Footer';
import './types';

function App() {
  return (
    <div className="min-h-screen font-sans bg-paw-cream overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <MeetTheVet />
        
        {/* Testimonial Strip */}
        <section id="testimonials" className="py-24 bg-brand-600 relative overflow-hidden scroll-mt-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 text-6xl rotate-12"><ion-icon name="paw"></ion-icon></div>
             <div className="absolute bottom-10 right-10 text-8xl -rotate-12"><ion-icon name="heart"></ion-icon></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-8 text-white backdrop-blur-sm">
               <ion-icon name="chatbubbles"></ion-icon>
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 leading-tight">
               "Dr. Sarah treats Max like he's her own puppy. I wouldn't trust anyone else with my best friend!"
             </h2>
             <div className="flex flex-col items-center justify-center gap-3">
               <div className="p-1 bg-white/30 rounded-full">
                 <img 
                   src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=150&h=150" 
                   alt="Jennifer and Max" 
                   className="w-20 h-20 rounded-full object-cover border-4 border-white" 
                 />
               </div>
               <div className="text-white">
                 <p className="font-bold text-xl">Jennifer & Max</p>
                 <p className="text-brand-200 text-sm font-bold uppercase tracking-widest">Golden Retriever</p>
               </div>
             </div>
          </div>
        </section>

        <AppointmentSection />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;