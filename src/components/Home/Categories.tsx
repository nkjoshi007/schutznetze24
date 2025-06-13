import React from "react";

interface Category {
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    title: 'Scaffolding & construction nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Scaffolding_example.jpg'
  },
  {
    title: 'Hay nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Horse_with_hay_net.jpg'
  },
  {
    title: 'Load securing nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cargo_net_on_truck.jpg'
  },
  {
    title: 'Cat nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Cats_on_balcony.jpg'
  },
  {
    title: 'Privacy nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Balcony_netting.jpg'
  },
  {
    title: 'Pallet racking nets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Warehouse_safety_netting.jpg'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center sm:text-left">
        Popular categories
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md cursor-pointer overflow-hidden shadow hover:text-green-600 transition-colors"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white">
              <p className="text-sm sm:text-base font-semibold">
                {cat.title}
              </p>
              <div className="text-white bg-orange-500 p-2 sm:p-2.5 rounded-tr-md rounded-bl-md">
                <span className="text-base sm:text-lg">➤</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;