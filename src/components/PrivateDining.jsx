export default function PrivateDining(){
    return (
      <div className="w-full flex flex-col gap-4 bg-black text-white mt-10 h-auto mb-20">
        <div className="relative group bg-grey-800">
          <img
            src="/assets/private_dining.png"
            alt="Private & Group Dining"
            className="w-full h-130 sm:h-120 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 transition-all duration-300 rounded-lg"></div>
          <div className="absolute bottom-14 left-6 w-full max-w-4xl px-4 py-8 sm:left-8 sm:w-auto md:left-26">
            <p className="text-xs uppercase tracking-[0.2em] text-white">
              booking
            </p>
            <h1 className="text-5xl font-bold italic my-5">Private &</h1>
            <h1 className="text-5xl font-bold italic my-5">Group Dining</h1>
            <p className="text-sm text-gray-200 max-w-xs mt-2 leading-snug">
                At Bavette, we specialize in creating memorable dining experiences, whether you're seeking an intimate gathering or a grand celebration. Our private and group dining options are designed to meet your unique needs with personalized service, exceptional food, and a welcoming atmosphere.
            </p>
            <button className="flex mt-4 px-8 py-3 bg-[#ccad64] text-black font-semibold hover:bg-[#b7984f] transition hover:cursor-pointer">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-1 inline-block ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
}