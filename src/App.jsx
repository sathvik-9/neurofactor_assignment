import './App.css'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import OfferSection from './components/OfferSection.jsx';
import DiningExperience from './components/DiningExperience.jsx';
import Specials from './components/Specials.jsx';

function App() {

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Navbar />
      <Hero />
      <OfferSection />
      <DiningExperience />
      <Specials />
    </div>
  )
}

export default App
