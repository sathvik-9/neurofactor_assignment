export default function Highlights(){

    const items = [
        {name: 'Adana Kebab', img: '/assets/adana_kabab.png', price: 120},
        {name: 'Meze Platter', img: '/assets/meze_platter.png', price: 120},
        {name: 'Baklava', img: '/assets/baklava.png', price: 120},
        {name: 'Kebab Platter', img: '/assets/kebab_platter.png', price: 120},
    ]

    return (
      <div className="mt-10 mb-10 bg-black text-white min-h-screen flex flex-col">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white">
            our top picks this month
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
            Monthly <span className="text-[#ccad64] italic">Highlights</span>
          </h1>
        </div>

        {/* Items */}
        <div className="mt-2">
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-16">
             {items.map((item) => (
                <div key={item.name} className="flex flex-col justify-between items-center">
                    <div className="w-full p-4 h-80 shadow-md flex items-center justify-center">    
                        <div className="max-w-4xl w-full h-full flex flex-col justify-between items-center bg-cover bg-center" style={{backgroundImage: `url(${item.img})`}}>
                            <p></p>
                            <div className="text-center items-center mt-10 gap-2">
                                <h1 className="bold text-white text-center items-center mt-65">{item.name}</h1>
                                <p className=" text-sm text-[#ccad64]">&euro; {item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
             ))}
           </div>
       </div> 
      </div>
    );
}