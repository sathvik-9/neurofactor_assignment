export default function DiningExperiencce(){

    const sections =[
        {
            title: 'Food',
            text: 'Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ',
            img: '/src/assets/food.png'
        },
        {
            title: 'Drinks',
            text: 'Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ',
            img: '/src/assets/drinks.png'
        },
        {
            title: 'Atmosphere',
            text: 'Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ',
            img: '/src/assets/atmosphere.png'
        }
    ]

    return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white">We Offer</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
          Unforgettable<br/>
          <span className="italic">Dining </span>
          <span className="text-[#ccad64] italic">Experience</span>
        </h1>
      </div>

      {/* Images Section */}
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {sections.map((item, index) => (
          <div key={index} className="relative group bg-grey-800">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 rounded-lg"></div>
            <div className="absolute bottom-14 left-16">
              <h1 className="text-5xl font-bold italic my-5">{item.title}</h1>
              {item.text && (
                <p className="text-sm text-gray-200 max-w-xs mt-2 leading-snug">
                  {item.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}