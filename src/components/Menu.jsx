// src/components/OfferSection.jsx
// import burger from '/assets/burger.png'

const items =[
    {name: 'Italian dishes', img: '/assets/italian.jpg'},
    {name: 'Pastry', img: '/assets/pastry.png'},
    {name: 'Coffee', img: '/assets/coffee.png'},
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 bg-black mt-10 mb-5">
      <div className="text-center mb-2 px-4">
        <p className="text-white text-xs bold max-w-xl mx-auto">EXPLORE MENU</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white italic mb-3">
          Our Menu
        </h2>
      </div>

       <div className="mt-2">
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
             {items.map((item) => (
                <div key={item.name} className="flex flex-col justify-between items-center">
                    <div className="w-full p-4 h-100 shadow-md flex items-center justify-center">    
                        <div className="max-w-4xl w-full h-full flex flex-col justify-between items-center bg-cover bg-center" style={{backgroundImage: `url(${item.img})`}}>
                            <p></p>
                            <h1 className="text-lg font-bold text-white text-center justify-center items-center mt-70">{item.name}</h1>
                            <p className=" text-sm text-[#ccad64]">VIEW MENU</p>
                            
                        </div>
                    </div>
                </div>
             ))}
           </div>
       </div> 











      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-6 md:px-16">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-20 h-80 shadow-md flex items-center justify-center mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-fit h-fit object-contain"
              />
            </div>
            <p className="text-lg bold text-white">{item.name}</p>
          </div>
        ))}
      </div> */}

      <button className="bg-[#ccad64] h-10 w-auto my-10 mx-auto bold px-3 py-2 flex justify-center gap-3">
        VIEW MENU
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mt-2 size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </section>
  );
}
