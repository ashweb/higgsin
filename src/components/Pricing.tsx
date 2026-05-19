import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Day Sprint",
    duration: "1 Day",
    price: 829,
    originalPrice: 1036,
    discount: "20%",
    description: "Instant boost for your local visibility. Perfect for testing our lead engine.",
    features: ["Hyper-Local Ads Setup", "WhatsApp Automation (24h)", "Basic Lead Dashboard"],
    featured: true
  },
  {
    name: "Growth Catalyst",
    duration: "3 Days",
    price: 1699,
    originalPrice: 2360,
    discount: "28%",
    description: "Establish consistency in your neighborhood. Build real local momentum.",
    features: ["Local Radius Ads (3 Days)", "WhatsApp Response Engine", "Full Performance Tracking"]
  },
  {
    name: "Business Scale",
    duration: "1 Week",
    price: 2999,
    originalPrice: 4998,
    discount: "40%",
    description: "Our most popular entry level for established local businesses.",
    features: ["Sales Optimized Landing Page", "Weekly Local Ad Campaign", "AI Powered Lead Nurturing", "Live Proof Dashboard"]
  },
  {
    name: "Market Authority",
    duration: "1 Month",
    price: 7929,
    originalPrice: 22025,
    discount: "64%",
    description: "Complete hands-off growth. We become your outsourced marketing engine.",
    features: ["Full Digital Ecosystem", "Month-Long Local Ad Engine", "AI Review & Chat Automation", "Priority Specialist Support"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 section-optimized">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-professional text-3xl md:text-5xl mb-4 uppercase">OUR SUPER EXCLUSIVE PRICING</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto italic">
            Exponential growth shouldn't be expensive. Choose a plan that fits your current business stage.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-4 md:p-8 rounded-2xl md:rounded-3xl border transition-all hover:bg-slate-900/50 flex flex-col ${plan.featured ? 'border-accent bg-slate-900/40' : 'border-slate-800 bg-slate-950'}`}
            >
              {plan.featured && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-2.5 md:px-4 py-0.5 md:py-1 bg-accent text-slate-950 text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Best Seller
                </div>
              )}
              
              <div className="mb-4 md:mb-8">
                <span className="text-sky-400 font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-1.5 md:mb-2 block">{plan.duration}</span>
                <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2 tracking-tight">{plan.name}</h3>
                
                <div className="mt-2 md:mt-4">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <span className="text-slate-500 line-through text-xs md:text-sm">₹{plan.originalPrice}</span>
                    <span className="bg-green-500/10 text-green-500 text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded border border-green-500/20">-{plan.discount} OFF</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5 md:mt-1">
                    <span className="text-lg md:text-3xl font-black text-white">₹{plan.price}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-[10px] md:text-xs mt-3 md:mt-6 leading-normal md:leading-relaxed min-h-[32px] md:min-h-[40px] italic">"{plan.description}"</p>
              </div>

              <div className="space-y-2 md:space-y-4 mb-6 md:mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-[10px] md:text-xs leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-2.5 md:py-4 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest transition-all ${plan.featured ? 'bg-accent text-slate-950 hover:bg-sky-300' : 'border border-slate-700 text-white hover:bg-slate-800'}`}>
                Activate Plan
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">* All prices are inclusive of setup and technical integration fees.</p>
        </div>
      </div>
    </section>
  );
}
