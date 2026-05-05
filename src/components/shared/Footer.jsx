import React from 'react';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* 1. About Section */}
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter">
              Qurbani<span className="text-green-500">Haat</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We are a premium digital livestock marketplace dedicated to simplifying your Qurbani experience. By connecting ethical farms directly with families, we ensure healthy animals and transparent pricing for a blessed sacrifice.
            </p>
          </div>

          {/* 2. Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-500">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <FaEnvelope className="text-slate-400 group-hover:text-white" />
                </div>
                <span className="text-slate-300 text-sm font-medium">support@qurbanihaat.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <FaMapMarkerAlt className="text-slate-400 group-hover:text-white" />
                </div>
                <span className="text-slate-300 text-sm font-medium">Savar, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* 3. Social Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-500">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-green-500 hover:bg-green-600 transition-all group">
                <FaFacebookF className="text-slate-400 group-hover:text-white text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-green-500 hover:bg-green-600 transition-all group">
                <FaWhatsapp className="text-slate-400 group-hover:text-white text-xl" />
              </a>
            </div>
            <p className="text-slate-500 text-xs italic">Follow us for live farm updates and animal arrivals.</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
            © {currentYear} Qurbani Haat. Digital Marketplace Excellence.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Server Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;