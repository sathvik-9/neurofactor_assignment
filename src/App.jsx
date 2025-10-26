import './App.css'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Menu from './components/Menu.jsx';
import DiningExperience from './components/DiningExperience.jsx';
import Specials from './components/Specials.jsx';
import Highlights from './components/Highlights.jsx';
import PrivateDining from './components/PrivateDining.jsx';
import Reviews from './components/Reviews.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Menu />
      <DiningExperience />
      <Specials />
      <Highlights />
      <PrivateDining />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
