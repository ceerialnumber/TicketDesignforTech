import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Explore from './components/Explore';
import Tickets from './components/Tickets';
import Archive from './components/Archive';
import Curate from './components/Curate';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore');

  const renderContent = () => {
    switch (activeTab) {
      case 'explore':
        return <Explore key="explore" />;
      case 'tickets':
        return <Tickets key="tickets" />;
      case 'archive':
        return <Archive key="archive" />;
      case 'profile':
        return (
          <div className="px-6 py-12 text-center">
            <h2 className="font-headline text-4xl font-black uppercase mb-4">Profile</h2>
            <p className="text-on-surface-variant">User profile settings and preferences.</p>
          </div>
        );
      default:
        return <Explore key="explore" />;
    }
  };

  return (
    <>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </Layout>

      <AnimatePresence>
        {activeTab === 'curate' && (
          <Curate onBack={() => setActiveTab('explore')} />
        )}
      </AnimatePresence>
    </>
  );
}
