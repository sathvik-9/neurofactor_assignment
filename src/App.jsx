import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import OfferSection from './components/OfferSection.jsx';

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <OfferSection />
    </>
  )
}

export default App
