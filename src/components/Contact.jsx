export default function Contact(){
    return (
      <div id="contact" className="mt-15 mb-10 bg-[url('/src/assets/contact_bg.png')] text-white h-200 sm:h-200 lg:h-150 flex flex-col">
        <div className="text-center mb-10 mt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-white">
            connect with us
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
            Contact Us
          </h1>
        </div>


        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-10">
        <div className="bg-[#111] border border-gray-800 rounded-lg p-6 transition-all duration-300">
          <p className="uppercase text-white font-bold text-sm mb-1 py-3">Booking Request</p>
          <h3 className="text-[#bc995d] text-lg font-semibold">
            0161 795 5502
          </h3>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded-lg p-6 transition-all duration-300">
          <p className="uppercase text-white font-bold text-sm mb-1 py-3">Location</p>
          <h3 className="text-sm leading-relaxed text-gray-300">
            2 Bury Old Road, <br /> Manchester, M8 9JN
          </h3>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded-lg p-6 transition-all duration-300">
          <p className="uppercase text-white font-bold text-sm mb-1 py-3">Opening Hours</p>
          <h3 className="text-sm leading-relaxed text-gray-400">
            Monday to Saturday <br />
            <span className="text-gray-400">11:00am – 11:30pm</span>
            <br />
            Sunday <span className="text-gray-400">12:00pm – 11:00pm</span>
          </h3>
        </div>
      </div>
        </div>
    );
}