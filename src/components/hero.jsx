// src/components/Hero.jsx
//import myVideo from '/src/assets/hero.mp4';
function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={"/src/assets/hero.mp4"} type="video/mp4" />
        {/* Or src="/myVideo.mp4" if in public */}
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.5))]" />

      {/* Text */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Cafe Italia</h1>
        <button className="flex justify-center items-center gap-4 w-full">
          <a
            href="#menu"
            className="bg-[#ccad64] text-black px-6 py-3 text-lg transition"
          >
            VIEW MENU
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto flex justify-center size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </button>
      </div>

      {/*<div className=" items-center absolute justify-right-end h-27 w-25 mt-107 rounded-full mx-4 p-2 bg-black text-white hover:bg-gray-800 cursor-pointer bottom-0 right-0 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 mx-auto flex justify-center mb-1 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
        <p className=" mx-auto flex justify-center mb">VIEW</p>
        <p className=" mx-auto flex justify-center mb-1">MENU</p>
      </div> */}
    </section>
  );
}


export default Hero;