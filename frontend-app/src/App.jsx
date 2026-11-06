// Importa el nuevo componente al inicio de tu App.jsx
import PanelAdmin from './components/organisms/PanelAdmin';

import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ReglamentoView from './pages/ReglamentoView';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [session, setSession] = useState(null);

  const handleLoginSuccess = (userData) => {
    setSession(userData);
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      {currentView === 'landing' && (
        <LandingPage 
          onViewReglamento={() => setCurrentView('reglamento')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentView === 'reglamento' && (
        <ReglamentoView 
          onBack={() => setCurrentView('landing')}
        />
      )}

      {currentView === 'dashboard' && (
        <PanelAdmin 
          session={session} 
          onLogout={() => { setSession(null); setCurrentView('landing'); }} 
        />
      )}

    </div>
  );
}
