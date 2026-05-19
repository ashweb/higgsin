import { Facebook, Instagram, Twitter, MessageCircle, AtSign, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="section-padding py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-slate-950 font-black text-xl">
                H
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase rainbow-text border-b-2 border-sky-500/50">
                HIGGSIN SOLUTIONS PVT LTD
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed italic">
              "We empower local brick-and-mortar businesses with high-level sales automation and tracking tools."
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/917079067581" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6 font-mono">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="font-bold text-white tracking-widest uppercase">KALASH KATYAYAN</li>
              <li><a href="mailto:contact@higgsin.com" className="hover:text-accent transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> contact@higgsin.com</a></li>
              <li><a href="tel:+917079067581" className="hover:text-accent transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7079067581</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6 font-mono">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Digital Infrastructure</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li>Headquartered in Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-medium uppercase tracking-tighter">
          <div>© 2026 Higgsin Solutions Pvt Ltd.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-sky-500/50 rounded-full" />
            Bengaluru, Karnataka, India
          </div>
        </div>
      </div>
    </footer>
  );
}
