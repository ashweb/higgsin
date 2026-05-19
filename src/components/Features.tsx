import { motion } from 'motion/react';
import { Globe, Target, MessageSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "Free Professional Website",
    description: "A simple, high-speed digital storefront built specifically to convert local visitors into paying customers.",
    icon: Globe,
    color: "bg-blue-500"
  },
  {
    title: "Hyper-Local Radius Ads",
    description: "We show high-intent Google and Meta ads strictly to people within a 5-15 km radius of your shop. No wasted budget.",
    icon: Target,
    color: "bg-red-500"
  },
  {
    title: "24/7 WhatsApp & Social Media Automation",
    description: "Instant automated responses to customer inquiries across WhatsApp and social platforms to never miss a lead.",
    icon: MessageSquare,
    color: "bg-green-500"
  },
  {
    title: "Get Visible on Google Maps at Top",
    description: "AI-driven Google Review management and profile optimization to force your business to rank higher on Maps.",
    icon: (props: { className?: string }) => <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" {...props} />,
    color: "bg-white"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-brand-alt border-y border-slate-900 relative section-optimized">
      <div className="section-padding">
        <div className="text-center mb-24">
          <h2 className="heading-professional text-3xl md:text-5xl mb-6">Autonomous Growth Infrastructure</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto italic">
            Most businesses focus on traffic. We focus on the <span className="text-accent underline underline-offset-4">Capture Engine</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 md:p-8 rounded-2xl md:rounded-3xl ai-glow card-hover flex flex-col items-start h-full"
            >
              <div className="mb-4 md:mb-8 flex items-center justify-between w-full">
                <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl ${item.color} text-white shadow-xl flex items-center justify-center`}>
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-[8px] md:text-[10px] font-black text-slate-800 tracking-normal md:tracking-[0.2em] uppercase">Mod 0{index + 1}</span>
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight line-clamp-2 md:line-clamp-none leading-snug md:leading-normal">{item.title}</h3>
              <p className="text-slate-500 leading-normal text-[11px] md:text-sm italic line-clamp-4 md:line-clamp-none">
                "{item.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
