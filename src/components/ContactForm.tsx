import { motion } from 'motion/react';
import { Send, MapPin, Phone, User, Building2, Mail, Facebook, Instagram, Twitter, MessageCircle, AtSign } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-alt relative overflow-hidden border-t border-slate-800 section-optimized">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none performance-layer">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-teal-500 rounded-full blur-[100px] pointer-events-none performance-layer" 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* Left Column */}
          <div className="section-padding lg:pr-20 flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter italic">
            Claim Your Free Audit
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            We'll analyze your current Google Maps ranking, website speed, and local search presence.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-sky-400 border border-slate-800 shadow-xl">
                <User className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-white text-lg tracking-tight uppercase">KALASH KATYAYAN</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:contact@higgsin.com" className="flex items-center gap-4 text-slate-400 hover:text-sky-400 transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>contact@higgsin.com</span>
              </a>
              <a href="tel:+917079067581" className="flex items-center gap-4 text-slate-400 hover:text-sky-400 transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+91 7079067581</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-all shadow-lg hover:shadow-blue-500/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-all shadow-lg hover:shadow-pink-500/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-lg hover:shadow-white/10">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all shadow-lg hover:shadow-sky-400/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/917079067581" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-green-500 transition-all shadow-lg hover:shadow-green-500/10">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-slate-500 text-sm font-medium uppercase tracking-widest border-l-2 border-sky-500 pl-6">
            Bengaluru, Karnataka, India
          </div>
        </div>

        {/* Right Column / Form Box */}
        <div className="bg-slate-900 border-l border-slate-800 p-8 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 italic">Audit Requested!</h3>
                <p className="text-slate-400 italic">
                  One of our growth specialists will contact you on WhatsApp within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Business Name</label>
                  <motion.div whileTap={{ scale: 0.995 }}>
                    <input
                      required
                      type="text"
                      placeholder="e.g. FitLife Gym"
                      className="input-field"
                    />
                  </motion.div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Owner Name</label>
                  <motion.div whileTap={{ scale: 0.995 }}>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="input-field"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">WhatsApp No.</label>
                    <motion.div whileTap={{ scale: 0.995 }}>
                      <input
                        required
                        type="tel"
                        placeholder="+91"
                        className="input-field"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Location</label>
                    <motion.div whileTap={{ scale: 0.995 }}>
                      <input
                        required
                        type="text"
                        placeholder="City"
                        className="input-field"
                      />
                    </motion.div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-black py-5 rounded-xl mt-4 uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-sky-500/30 text-base"
                >
                  Analyze My Business
                </button>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                  <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest font-bold">
                    Secure Neural Link established
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
