
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
        <source src={"/assets/hero.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.5))]" />

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
    </section>
  );
}


export default Hero;