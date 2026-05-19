import { motion } from 'motion/react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-32 section-optimized">
      {/* AI Mesh/Neural Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden performance-layer">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-slate-700" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Animated Orbs (Gemini Vibe) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[140px] pointer-events-none -z-10 performance-layer" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, -50, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[140px] pointer-events-none -z-10 performance-layer" 
      />
      <motion.div 
        animate={{ 
          scale: [0.8, 1, 0.8],
          opacity: [0, 0.1, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500 rounded-full blur-[160px] pointer-events-none -z-10 performance-layer" 
      />
      
      {/* Rotating AI Aura */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-conic from-sky-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none -z-10 performance-layer"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 text-sky-400 text-[10px] font-black mb-10 uppercase tracking-[0.2em] shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Neural Sales Engine • Active in Bengaluru
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-professional text-6xl md:text-8xl mb-8 tracking-[-0.04em]"
          >
            Your Sales Automation<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 animate-gradient-x">
              Got Soooooooo
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 animate-gradient-x vivid-underline">
              Much Easier.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl font-medium"
          >
            We don't do "marketing" in the traditional sense. We deploy AI-driven sales infrastructure that finds, chats with, and converts your local neighbors into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Get Your Free Website Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              See How It Works
            </button>
          </motion.div>

          {/* Social Proof Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-slate-100 pt-12"
          >
            {[
              "High-Speed Website",
              "Expert Google Ads",
              "WhatsApp Automation",
              "Real-time ROI Tracking"
            ].map((feature) => (
              <div key={feature} className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
