import { motion } from 'motion/react';

export default function Archive() {
  return (
    <div className="px-6 pb-12">
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <span className="font-headline text-primary font-bold tracking-widest uppercase text-xs">Legacy Collection</span>
          <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none">Archive</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
          <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border-l-4 border-primary editorial-shadow">
            <span className="font-headline text-4xl font-bold">42</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Films Seen</span>
          </div>
          <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border-l-4 border-blue-600 editorial-shadow">
            <span className="font-headline text-4xl font-bold">3</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Collections</span>
          </div>
        </div>
      </section>

      <nav className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 hide-scrollbar">
        <button className="bg-on-surface text-background px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">All Time</button>
        <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Year</button>
        <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Genre</button>
        <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Rating</button>
      </nav>

      <div className="space-y-24">
        <TimelineEntry 
          title="The Godfather"
          meta="Francis Ford Coppola • 1972"
          rating="10/10"
          date="Oct 14, 2023"
          theater="Apollo Screen 4"
          image="https://picsum.photos/seed/godfather/800/800"
          label="COPPOLA'S MASTERPIECE"
          rotation="-2deg"
        />
        <TimelineEntry 
          title="Pulp Fiction"
          meta="Quentin Tarantino • 1994"
          rating="9.2"
          date="Sept 02, 2023"
          theater="Grand Lux Cinema"
          image="https://picsum.photos/seed/pulp/800/800"
          label="TARANTINO RETROSPECTIVE"
          rotation="1.5deg"
          reverse
          accentColor="bg-blue-600"
          accentText="text-white"
        />
      </div>
    </div>
  );
}

function TimelineEntry({ title, meta, rating, date, theater, image, label, rotation, reverse = false, accentColor = "bg-white", accentText = "text-on-surface" }: any) {
  return (
    <article className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div 
          style={{ rotate: rotation }}
          className={`${accentColor} ${accentText} p-6 shadow-xl w-full max-w-sm rounded-xl relative overflow-hidden ticket-cutout border-x border-outline-variant/10`}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline text-2xl font-bold leading-tight">{title}</h3>
              <p className="text-xs opacity-70 font-medium">{meta}</p>
            </div>
            <span className="font-headline text-primary text-xl font-bold">{rating}</span>
          </div>
          <div className="border-t-2 border-dashed border-outline-variant/20 my-4" />
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Date</p>
              <p className="font-bold text-sm">{date}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Theater</p>
              <p className="font-bold text-sm">{theater}</p>
            </div>
          </div>
          <div className="w-full h-12 bg-on-surface/10 flex items-center justify-center rounded-lg">
            <div className="flex gap-1 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`h-8 bg-on-surface`} style={{ width: Math.random() * 8 + 2 + 'px' }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] editorial-shadow group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="font-headline text-4xl font-black text-white tracking-tighter leading-none">{label}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
