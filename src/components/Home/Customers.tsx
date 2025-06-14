import React from "react";

interface Customer {
  name: string;
  logo: string;
  description: string;
}

const customers: Customer[] = [
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    description: "Adidas AG",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: "Amazon EU S.à r.l",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Google LLC",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Apple Inc.",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    description: "Netflix, Inc.",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    description: "Samsung Electronics Co., Ltd.",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    description: "Oracle Corporation",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    description: "Dell Technologies Inc.",
  },
];

const Customers: React.FC = () => {
  return (
    <section className="my-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          References & customer opinions
        </h2>
        {/* <a href="#" className="text-xs sm:text-sm text-red-600">[more references]</a> */}
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {customers.map((cust, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
            <img
              src={cust.logo}
              alt={cust.name}
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
            <p className="text-xs sm:text-sm text-gray-700">{cust.description}</p>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {customers.map((cust, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-1 sm:space-y-2"
          >
            <img
              src={cust.logo}
              alt={cust.name}
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
            <p className="text-xs sm:text-sm text-gray-700">
              {cust.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
