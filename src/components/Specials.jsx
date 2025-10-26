import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Specials() {
  const specials=[
    {
      name: 'Classic Ribeye Steak',
      image: '/src/assets/steak.png',
      price: '€30',
    }
  ];
    return (


      <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white">
            Our menu
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
            Our <span className="text-[#ccad64] italic">Specials</span>
          </h1>
        </div>

        {/* Carousel */}
        
        <div className="relative flex justify-center items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <div
          className="
            bg-gradient-to-b from-[#111] to-black
            rounded-[100px] sm:rounded-[150px]
            p-8 sm:p-12 flex flex-col items-center justify-between
            shadow-lg border border-black
            aspect-[3/5] w-[80%] sm:w-[60%] lg:w-[40%]
          "
        >
          


          <img
            src={specials[0].image}
            alt={specials[0].name}
            className="w-40 sm:w-52 md:w-60 object-contain mb-6"
          />

          <h3 className="text-lg sm:text-xl font-semibold text-center mb-8">
            {specials[0].name}
          </h3>

          <div className="flex items-center gap-6">
            <button className="border border-[#bc995d] text-[#bc995d] hover:bg-[#bc995d] hover:cursor-pointer hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition">
              <FaArrowLeft size={14} />
            </button>
            <button className="border border-[#bc995d] text-[#bc995d] hover:bg-[#bc995d] hover:cursor-pointer hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition">
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      </div>
    );
}