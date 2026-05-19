import { motion } from 'motion/react';

const steps = [
  {
    step: "01",
    title: "Upfront Setup",
    description: "We build your website, set up your Google Maps engine, and program your custom WhatsApp automation."
  },
  {
    step: "02",
    title: "Switch On the Clicks",
    description: "We launch targeted ads targeting your exact neighborhood demographics. We find people already looking for you."
  },
  {
    step: "03",
    title: "Track the Data",
    description: "You watch live inquiries drop into your dashboard while our system handles the responses automatically."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-alt border-y border-slate-900 overflow-hidden relative">
      <div className="section-padding">
        <div className="text-center mb-24">
          <h2 className="heading-professional text-3xl md:text-5xl mb-6">The Deployment Cycle</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto italic">
            Precision-engineered growth. From first setup to automated ROI.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) with Flowing Light Effect */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-slate-800 -z-10">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-40 h-full bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-950 border border-slate-800 text-sky-400 flex items-center justify-center font-black text-2xl mb-8 relative z-10 transition-all group-hover:border-sky-500/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                  {item.step}
                  <div className="absolute -inset-2 rounded-full border border-slate-800/50 animate-[spin_10s_linear_infinite]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter uppercase">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed italic border-l border-slate-800 pl-4 lg:pl-6 group-hover:border-sky-500/50 transition-colors">
                  "{item.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
