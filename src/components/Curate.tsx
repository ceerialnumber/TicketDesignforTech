import { motion } from 'motion/react';
import { Search, Check, X } from 'lucide-react';

export default function Curate({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        <button onClick={onBack} className="text-primary hover:opacity-80 transition-opacity">
          <X size={24} />
        </button>
        <h1 className="text-primary font-headline font-bold tracking-tight uppercase text-sm">ADD TO COLLECTION</h1>
        <button onClick={onBack} className="text-primary hover:opacity-80 transition-opacity">
          <Check size={24} />
        </button>
      </header>

      <main className="pb-32 px-6 pt-8 max-w-2xl mx-auto">
        <section className="mb-12">
          <h2 className="font-headline font-black text-6xl leading-[0.9] tracking-tighter uppercase mb-6">
            CURATE YOUR <br /> <span className="text-primary">COLLECTION</span>
          </h2>
          <div className="relative group">
            <input 
              className="w-full bg-white border-none rounded-2xl py-6 px-8 text-on-surface placeholder:text-outline-variant font-headline font-bold text-xl focus:ring-2 focus:ring-primary transition-all editorial-shadow" 
              placeholder="Search for a masterpiece" 
              type="text"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary">
              <Search size={28} />
            </div>
          </div>
        </section>

        <div className="space-y-12">
          <SearchResult 
            year="1954"
            genre="NOIR CRIME"
            title="Sunset Boulevard"
            director="Billy Wilder"
            image="https://picsum.photos/seed/sunset/400/600"
            rotation="-2deg"
          />
          <SearchResult 
            year="2019"
            genre="DRAMA"
            title="Portrait of a Lady on Fire"
            director="Céline Sciamma"
            image="https://picsum.photos/seed/portrait/400/600"
            rotation="3deg"
            reverse
          />
          <SearchResult 
            year="1960"
            genre="THRILLER"
            title="L'Avventura"
            director="Michelangelo Antonioni"
            image="https://picsum.photos/seed/avventura/400/600"
            rotation="-1deg"
          />
        </div>

        <div className="mt-16 bg-on-surface p-12 rounded-[3rem] relative overflow-hidden editorial-shadow transform -rotate-1">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <img 
              src="https://picsum.photos/seed/texture/800/800" 
              alt="Texture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center">
            <h4 className="font-headline text-background text-2xl font-black uppercase mb-2">Can't find it?</h4>
            <p className="text-background/60 font-body mb-6 text-sm">Our archives are deep, but sometimes a masterpiece slips through. Request an addition to the library.</p>
            <button className="bg-yellow-400 text-on-surface font-headline font-black px-8 py-3 rounded-full uppercase text-xs tracking-[0.2em] hover:opacity-90 transition-opacity">
              Request Archival
            </button>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

function SearchResult({ year, genre, title, director, image, rotation, reverse = false }: any) {
  return (
    <div className={`relative flex gap-6 items-end group ${reverse ? 'flex-row-reverse text-right' : ''}`}>
      <motion.div 
        style={{ rotate: rotation }}
        className="w-32 h-48 sm:w-40 sm:h-60 flex-shrink-0 relative overflow-hidden rounded-xl editorial-shadow group-hover:rotate-0 transition-transform duration-500"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="flex-grow pb-2">
        <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block mb-1">{year} • {genre}</span>
        <h3 className="font-headline text-3xl font-black uppercase leading-none mb-1 tracking-tight">{title}</h3>
        <p className="text-outline-variant font-medium mb-4">{director}</p>
        <button className={`font-headline font-black px-6 py-2 rounded-full uppercase text-sm tracking-widest transition-all active:scale-95 ${reverse ? 'bg-on-surface text-background' : 'bg-primary text-white'}`}>
          ADD
        </button>
      </div>
    </div>
  );
}
