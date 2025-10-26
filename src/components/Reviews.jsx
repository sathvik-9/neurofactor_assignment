import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Reviews() {

    const reviews =[
        {
            name: 'Anna Mathew',
            time: 1,
            text: 'Amazing food and great ambiance! The staff were friendly and attentive. Highly recommend the lamb kebabs.',
            img: '/assets/anna.png',
        },
        {
            name: 'Gerrin Tom',
            time: 1,
            text: 'Amazing food and great ambiance! The staff were friendly and attentive. Highly recommend the lamb kebabs.',
            img: '/assets/tom.png',
        },
        {
            name: 'Mery Elza',
            time: 1,
            text: 'Amazing food and great ambiance! The staff were friendly and attentive. Highly recommend the lamb kebabs.',
            img: '/assets/mary.png',
        }
    ]

    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center sm:mt-2 lg:mt-10 ">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white">
            reviews
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 italic">
            Hear Our Guests
          </h1>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 flex flex-col gap-3 border-black shadow-lg hover:border-yellow-400 hover:cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-600"
              />
              <div>
                <h3 className="font-semibold text-sm">{review.name}</h3>
                <p className="text-xs text-gray-400">{review.time} day(s) ago</p>
              </div>
            </div>

            <div className="flex text-[#bc995d] mt-2 gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} /> 
              ))}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="w-10 h-10 flex items-center justify-center text-[#bc995d] border border-[#bc995d] rounded-full hover:bg-[#bc995d] hover:text-black hover:cursor-pointer transition">
          <FaArrowLeft />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-[#bc995d] border border-[#bc995d] rounded-full hover:bg-[#bc995d] hover:text-black hover:cursor-pointer transition">
          <FaArrowRight />
        </button>
      </div>
    </div>      
    );
}