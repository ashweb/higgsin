import { motion } from 'motion/react';
import { Users, Send, Settings2 } from 'lucide-react';

const stats = [
  {
    label: "Active Businesses Transformed",
    value: "50+",
    icon: Users
  },
  {
    label: "Automated Responses Sent",
    value: "10,000+",
    icon: Send
  },
  {
    label: "Zero Technical Hassle",
    value: "100%",
    icon: Settings2
  }
];

export default function Impact() {
  return (
    <section className="bg-slate-950 border-y border-slate-900 border-dashed">
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-sky-400 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-black px-4 leading-tight italic">
                {stat.label}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-6xl font-black text-sky-400 mb-3 tracking-tighter animate-pulse">
              24/7
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent font-black px-4 leading-tight italic">
              Autonomous Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
