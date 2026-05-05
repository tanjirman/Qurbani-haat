import React from 'react';
import { FiShield, FiTruck } from 'react-icons/fi'; 
import { MdOutlineScale } from 'react-icons/md';
import { LuHeartPulse } from 'react-icons/lu';

const QurbaniTips = () => {
  const tips = [
    {
      title: "Health Inspection",
      desc: "Look for bright eyes and a shiny coat. The animal should be active and free from visible wounds or limping.",
      icon: <FiShield className="w-8 h-8 text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Age Verification",
      desc: "For cows, ensure they are at least 2 years old (indicated by two front teeth). Goats must be at least 1 year old.",
      icon: <MdOutlineScale className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Stress-Free Transit",
      desc: "Ensure the transport vehicle is well-ventilated. Give the animal at least 6 hours of rest and water after arrival.",
      icon: <FiTruck className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Ethical Treatment",
      desc: "Feed the animal well and keep it in a cool, shaded area. Kindness to the animal is a core part of the Sunnah.",
      icon: <LuHeartPulse className="w-8 h-8 text-red-600" />,
      color: "bg-red-50"
    }
  ];

  return (
    // Changed to bg-slate-50 for that very light, clean look
    <section className="py-24 bg-slate-50/50"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-xs">Expert Guidance</span>
            <h2 className="text-5xl font-black text-slate-900 mt-4 leading-tight">
              Essential Tips for a <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-400">
                Blessed Qurbani
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            Everything you need to know about selecting, caring for, and preparing your animal for the holy sacrifice.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2.5rem] border border-slate-200/60 bg-white hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500"
            >
              <div className={`${tip.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {tip.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{tip.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;