import { motion } from 'motion/react';
import { QrCode, ChevronRight, Sparkles } from 'lucide-react';

export default function Tickets() {
  return (
    <div className="px-6 pb-12">
      <section className="mb-10">
        <h2 className="font-headline text-5xl font-bold tracking-tighter leading-none mb-2">TICKETS<br /><span className="text-primary">&amp; HISTORY</span></h2>
        <p className="text-on-surface-variant font-medium text-sm tracking-wide uppercase">Your Cinematic Archive</p>
      </section>

      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 hide-scrollbar">
        <button className="px-6 py-2 bg-on-surface text-background rounded-full text-xs font-bold uppercase tracking-widest">All</button>
        <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest">Active</button>
        <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest">Past</button>
        <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest">Wishlist</button>
      </div>

      <section className="mb-14 relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline text-xl font-bold tracking-tight">Active Admission</h3>
          <span className="text-primary font-bold text-xs uppercase tracking-tighter">1 New Alert</span>
        </div>
        
        <div className="relative group">
          <motion.div 
            style={{ rotate: '-2deg' }}
            className="bg-white rounded-2xl editorial-shadow border border-outline-variant/10 relative overflow-hidden flex ticket-cutout"
          >
            <div className="flex-grow p-6 pr-4">
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img 
                    src="https://picsum.photos/seed/silent/200/300" 
                    alt="Poster" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-2 py-0.5 bg-yellow-400 text-on-surface text-[9px] font-black uppercase rounded mb-2 w-fit">Premiering Now</span>
                  <h4 className="font-headline text-xl font-bold leading-tight mb-2 uppercase">The Silent<br />Chorus</h4>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-0.5">Seat</p>
                      <p className="font-mono font-bold text-sm text-primary">H12</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-0.5">Row</p>
                      <p className="font-mono font-bold text-sm">H</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-0.5">Screen</p>
                      <p className="font-mono font-bold text-sm">04</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-dashed border-outline-variant/20">
                <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Date & Time</p>
                <p className="font-headline font-bold text-base">OCT 24, 20:45</p>
              </div>
            </div>
            <div className="w-px border-r-2 border-dashed border-outline-variant/30 my-4" />
            <div className="w-24 flex flex-col items-center justify-center p-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-outline-variant/10 mb-3">
                <QrCode size={32} />
              </div>
              <p className="text-[8px] font-mono font-bold uppercase tracking-tighter text-on-surface-variant text-center leading-tight">ADM-982-CHOR</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-xl font-bold tracking-tight">Recent History</h3>
          <button className="text-blue-600 font-bold text-xs uppercase tracking-tighter">View Archive</button>
        </div>
        <div className="space-y-6">
          <HistoryItem title="Elysium Protocol" meta="Oct 12 • Grand Odeon Cinema" image="https://picsum.photos/seed/elysium/200/200" />
          <HistoryItem title="Nocturnal Muse" meta="Sep 28 • The Rialto Loft" image="https://picsum.photos/seed/muse/200/200" />
          <HistoryItem title="Velvet Horizon" meta="Sep 15 • Downtown IMAX" image="https://picsum.photos/seed/velvet/200/200" />
        </div>
      </section>

      <section className="mt-14 mb-8">
        <h3 className="font-headline text-xl font-bold tracking-tight mb-6">Your Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/5 p-6 rounded-[2rem] border border-primary/10">
            <Sparkles size={24} className="text-primary mb-3" />
            <p className="text-4xl font-headline font-black text-primary">12</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Films Seen</p>
          </div>
          <div className="bg-blue-600/5 p-6 rounded-[2rem] border border-blue-600/10 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-headline font-bold text-blue-600">Elite</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600/60">Curator Status</p>
            </div>
            <div className="w-full bg-blue-600/10 h-1.5 rounded-full mt-4">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HistoryItem({ title, meta, image }: any) {
  return (
    <div className="group flex items-center gap-4 bg-white hover:bg-surface-container-high p-3 rounded-3xl transition-all duration-300 cursor-pointer editorial-shadow">
      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="flex-grow">
        <h5 className="font-headline font-bold group-hover:text-primary transition-colors uppercase tracking-tight">{title}</h5>
        <p className="text-xs text-on-surface-variant font-medium">{meta}</p>
      </div>
      <div className="pr-2">
        <ChevronRight size={16} className="text-outline-variant group-hover:text-on-surface transition-colors" />
      </div>
    </div>
  );
}
