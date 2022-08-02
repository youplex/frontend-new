import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import AccordionApp from './components/AccordionApp';
import Footer from './components/Footer';


function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Features />
      <AccordionApp />
      <Footer />
    </main>
  );
}

export default App; 
