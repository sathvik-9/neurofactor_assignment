import { FaInstagram } from "react-icons/fa";

export default function Gallery(){

    const photos =[
        '/src/assets/gallery_1.png',
        '/src/assets/gallery_2.png',
        '/src/assets/gallery_3.png',
        '/src/assets/gallery_4.png',
        '/src/assets/gallery_5.png',
        '/src/assets/gallery_6.png',
        '/src/assets/gallery_7.png',
        '/src/assets/gallery_8.png',
    ]

    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
        <div className=" flex justify-around items-center text-end mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white">
              gallery
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
              follow us
            </h1>
          </div>
          <button className="flex w-auto mt-4 px-8 py-3 bg-[#111] uppercase text-white font-bold transition hover:cursor-pointer">
            <FaInstagram className="text-[#bc9995d] mt-1 mr-5" />
            check out our instagram
            <a href="https://www.instagram.com/"></a>
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-items-center mx-auto">
            {photos.map((photo, index) => (
                <div key={index} className="aspect-square w-full max-w-[200px]">
                    <img src={photo} alt={`Gallery image ${index+1}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
      </div>
    );
}