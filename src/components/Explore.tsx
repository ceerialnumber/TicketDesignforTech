import { motion } from 'motion/react';
import { QrCode } from 'lucide-react';

export default function Explore() {
  return (
    <div className="pb-12">
      <section className="px-6 mb-12">
        <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden bg-on-surface group editorial-shadow">
          <img 
            src="https://picsum.photos/seed/bust/800/1200" 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 group-hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start">
            <span className="px-4 py-1 bg-primary text-white font-headline text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">Feature Presentation</span>
            <h2 className="font-headline text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-4">EXPLORE<br /><span className="text-primary-container">RECENT</span></h2>
            <p className="text-outline-variant font-body text-sm max-w-xs leading-relaxed">A curated selection of cinematic masterpieces, where classical art meets the contemporary screen.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="px-6 flex justify-between items-end mb-8">
          <h3 className="font-headline text-4xl font-bold tracking-tight">My Tickets</h3>
          <span className="text-primary font-bold text-sm tracking-widest uppercase">View All</span>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 pb-12 pt-4">
          <TicketStub 
            color="#FF6B35" 
            title="The Great Gatsby" 
            meta="Admits One" 
            seat="Row G • Seat 12" 
            time="19:30" 
            rotation="-3deg"
            status="Now Showing"
          />
          <TicketStub 
            color="#4361EE" 
            title="Blade Runner" 
            meta="Standard Entry" 
            seat="Row A • Seat 04" 
            time="21:15" 
            rotation="2deg"
            status="IMAX Experience"
          />
          <TicketStub 
            color="#4CC9F0" 
            title="Amélie" 
            meta="Matinee Special" 
            seat="Row C • Seat 21" 
            time="16:45" 
            rotation="-1deg"
            status="Art House Cinema"
          />
        </div>
      </section>

      <section className="px-6 mb-12">
        <h3 className="font-headline text-4xl font-bold tracking-tight mb-8">Recently Added</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-[300px] rounded-[2.5rem] overflow-hidden editorial-shadow">
            <img 
              src="https://picsum.photos/seed/cinema/1200/600" 
              alt="Citizen Kane" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-yellow-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">Masterpiece</span>
              <h4 className="font-headline text-3xl font-black text-white uppercase tracking-tighter">Citizen Kane</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Released 1941 • 119 MIN</p>
            </div>
          </div>
          <SmallCard title="Parasite" meta="Thriller • 2019" image="https://picsum.photos/seed/parasite/400/600" />
          <SmallCard title="Vertigo" meta="Mystery • 1958" image="https://picsum.photos/seed/vertigo/400/600" />
        </div>
      </section>
    </div>
  );
}

function TicketStub({ color, title, meta, seat, time, rotation, status }: any) {
  return (
    <motion.div 
      style={{ rotate: rotation, backgroundColor: color }}
      className="flex-shrink-0 w-80 h-48 rounded-3xl relative shadow-2xl overflow-hidden ticket-cutout"
    >
      <div className="relative z-10 flex h-full">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{meta}</p>
            <p className="font-headline font-black text-2xl text-white leading-none uppercase">{title}</p>
            <p className="text-white/60 text-[10px] font-bold uppercase mt-3 tracking-widest">{seat}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{status}</span>
          </div>
        </div>
        <div className="w-px h-full border-r-2 border-dashed border-white/30" />
        <div className="w-24 p-6 flex flex-col justify-between items-center text-white">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Time</p>
            <span className="font-black text-xl">{time}</span>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <QrCode size={24} className="text-on-surface" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ title, meta, image }: any) {
  return (
    <div className="bg-white rounded-[2rem] p-4 flex flex-col gap-4 editorial-shadow">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h4 className="font-headline text-lg font-bold text-on-surface leading-tight uppercase">{title}</h4>
        <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mt-1">{meta}</p>
      </div>
    </div>
  );
}
