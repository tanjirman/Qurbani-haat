import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
              Qurbani<span className="text-green-600">Haat</span>
            </Link>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              The most trusted digital marketplace for authentic Qurbani animals. Connecting farms directly to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Marketplace</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/animals" className="hover:text-green-600 transition-colors">All Animals</Link></li>
              <li><Link href="/category/cows" className="hover:text-green-600 transition-colors">Cows & Bulls</Link></li>
              <li><Link href="/category/goats" className="hover:text-green-600 transition-colors">Goats & Sheep</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/how-it-works" className="hover:text-green-600 transition-colors">How it Works</Link></li>
              <li><Link href="/contact" className="hover:text-green-600 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-green-600 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <p className="text-sm text-slate-500 mb-4">Dhaka, Bangladesh</p>
            <p className="text-sm font-bold text-slate-900">support@qurbanihaat.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} Qurbani Haat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;