import { FaInstagram, FaFacebook, FaGoogle, FaTripadvisor } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-black text-white text-center h-auto p-6 mt-10">
            <img src="/src/assets/logo.png" alt="Restaurant Logo" className="mx-auto mb-4 w-32 mt-10 mb-20"/>
            <div className="flex justify-center space-x-8 text-sm font-medium tracking-widest uppercase mb-10">
                <a href="#home" className="hover:text-gray-400">Home</a>
                <a href="#menu" className="hover:text-gray-400">Menu</a>
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
            <div className="flex justify-center space-x-6 text-xl mt-10 mb-10">
                <a href="https://www.instagram.com/" target="_blank" className="text-[#bc995d] hover:text-gray-400"><FaInstagram /></a>
                <a href="https://www.tripadvisor.com/" target="_blank" className="text-[#bc995d] hover:text-gray-400"><FaTripadvisor /></a>
                <a href="https://www.google.com/" target="_blank" className="text-[#bc995d] hover:text-gray-400"><FaGoogle /></a>
                <a href="https://www.facebook.com/" target="_blank" className="text-[#bc995d] hover:text-gray-400"><FaFacebook /></a>
            </div>
            <p className="text-sm text-zinc-700">&copy; 2024 Istanbul Restaurant Manchester. All rights reserved.</p>
        </div>
    );
}