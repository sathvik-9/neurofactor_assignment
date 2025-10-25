// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 md:mt-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-black">Home</a></li>
          <li><a href="#menu" className="hover:text-black">Menu</a></li>
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Logo */}
        <img src="/src/assets/logo.png" alt="ChutNee Logo" className="h-10" />
        
        <button className="bg-[#ccad64] h-10 w-auto px-3 py-2 flex justify-center gap-3">BOOK TABLE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
        </button>
        

        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
