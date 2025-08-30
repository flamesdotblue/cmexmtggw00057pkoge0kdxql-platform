import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-['IBM_Plex_Sans',_ui-sans-serif,_system-ui]">
      <NavBar />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
