// src/components/OfferSection.jsx
// import burger from '/assets/burger.png'

const items = [
  { name: "Burger", img: '/src/assets/burger.png' },
  { name: "Chaat", img: "./assets/chaat.png" },
  { name: "Dosa", img: "./assets/dosa.png" },
  { name: "Juice", img: "./assets/juice.png" },
  { name: "Dessert", img: "./assets/dessert.png" },
  { name: "Coffee", img: "./assets/coffee.png" },
];

export default function OfferSection() {
  return (
    <section id="menu" className="py-16 bg-black">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
          Our Menu
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From mouthwatering chaats to sizzling dosas, we’ve got something for everyone.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6 md:px-16">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
            </div>
            <p className="font-medium text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
