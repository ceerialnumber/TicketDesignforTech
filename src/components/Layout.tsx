import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Ticket, History, User, Plus } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const tabs = [
    { id: 'explore', label: 'Explore', icon: LayoutGrid },
    { id: 'tickets', label: 'Tickets', icon: Ticket },
    { id: 'archive', label: 'Archive', icon: History },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="p-1">
            <div className="w-6 h-0.5 bg-on-surface mb-1.5" />
            <div className="w-4 h-0.5 bg-on-surface mb-1.5" />
            <div className="w-6 h-0.5 bg-on-surface" />
          </button>
          <h1 className="font-headline font-black text-2xl tracking-tighter uppercase text-primary">
            CURATOR
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
          <img 
            src="https://picsum.photos/seed/curator-user/100/100" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>

      {/* Floating Action Button */}
      <button 
        onClick={() => setActiveTab('curate')}
        className="fixed bottom-28 right-6 w-16 h-16 bg-primary text-white rounded-3xl shadow-2xl shadow-primary/40 flex items-center justify-center z-50 transform hover:scale-105 transition-transform active:scale-95"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-8 px-4 bg-background/90 backdrop-blur-2xl z-40 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-primary text-white rounded-full w-14 h-14 -mt-6 shadow-lg shadow-primary/40' 
                  : 'text-outline-variant px-4 py-2 hover:text-primary'
              }`}
            >
              <Icon size={isActive ? 24 : 28} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`font-body text-[8px] font-bold uppercase tracking-widest mt-0.5 ${isActive ? 'block' : 'hidden'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
