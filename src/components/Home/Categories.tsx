import React from "react";
import categorie1 from '../../assets/categorie1.png';
import categorie2 from '../../assets/categorie2.png';
import categorie3 from '../../assets/categorie3.png';
import categorie4 from '../../assets/categorie4.png';
import categorie5 from '../../assets/categorie5.png';
import categorie6 from '../../assets/categorie6.png';

interface Category {
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    title: 'Scaffolding & construction nets',
    image: categorie1
  },
  {
    title: 'Hay nets',
    image: categorie2
  },
  {
    title: 'Load securing nets',
    image: categorie3
  },
  {
    title: 'Cat nets',
    image: categorie4
  },
  {
    title: 'Privacy nets',
    image: categorie5
  },
  {
    title: 'Pallet racking nets',
    image: categorie6
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