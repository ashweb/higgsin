import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'What We Do', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="glass-nav performance-layer">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block uppercase rainbow-text border-b-2 border-sky-500/50">
            HIGGSIN SOLUTIONS PVT LTD
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="text-slate-400 hover:text-accent font-medium transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-sm inline-flex items-center"
          >
            Get a Free Audit
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="text-lg font-medium text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
          >
            Get a Free Audit
          </a>
        </motion.div>
      )}
    </nav>
  );
}
