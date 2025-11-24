import React from 'react';
import { ServiceItem } from '../types';
import '../types';

const services: (ServiceItem & { color: string, iconColor: string })[] = [
  {
    title: "Wellness Exams",
    description: "Regular nose-to-tail check-ups to keep your best friend happy and healthy for years to come.",
    icon: "heart-circle",
    color: "bg-paw-sky",
    iconColor: "text-blue-500"
  },
  {
    title: "Vaccinations",
    description: "Essential protection against common diseases. We make shots quick and as pain-free as possible.",
    icon: "shield-checkmark",
    color: "bg-paw-mint",
    iconColor: "text-brand-500"
  },
  {
    title: "Pet Dentistry",
    description: "Fresh breath and healthy gums! We offer cleaning and oral care to prevent dental disease.",
    icon: "happy",
    color: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    title: "Surgery",
    description: "From spays/neuters to complex procedures, your pet is in safe hands with our surgical team.",
    icon: "bandage",
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    title: "Emergency Care",
    description: "We're here when you need us most. Quick response for accidents and urgent illnesses.",
    icon: "medkit",
    color: "bg-paw-lavender",
    iconColor: "text-purple-500"
  },
  {
    title: "Pet Nutrition",
    description: "Expert advice on diet and weight management to fuel your pet's playful energy.",
    icon: "nutrition",
    color: "bg-lime-50",
    iconColor: "text-lime-600"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 transform rotate-12">
            <span className="bg-brand-100 text-brand-700 px-4 py-2 rounded-lg font-bold text-sm border-2 border-brand-200 border-dashed">
              Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
            Top-Notch Care for <br/>
            <span className="text-brand-500">Top-Notch Pets</span>
          </h2>
          <p className="text-xl text-slate-600">
            From routine wags to urgent purrs, we cover all your veterinary needs under one woof... I mean, roof!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group border-2 border-transparent hover:border-white/50`}
            >
              {/* Background Pattern */}
              <div className="absolute -right-6 -top-6 opacity-10 text-9xl transform rotate-12 transition-transform group-hover:rotate-45 duration-500">
                <ion-icon name="paw"></ion-icon>
              </div>

              <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl ${service.iconColor} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <ion-icon name={service.icon}></ion-icon>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-slate-700 font-medium leading-relaxed">{service.description}</p>
              
              <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                 <span className="mr-2">Learn more</span>
                 <ion-icon name="arrow-forward"></ion-icon>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};