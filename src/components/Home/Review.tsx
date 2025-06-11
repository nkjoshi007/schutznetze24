const testimonials = [
  {
    rating: 5,
    text: "Excellent quality products and outstanding customer service.",
    author: "John Smith",
  },
  {
    rating: 5,
    text: "Fast delivery and exactly what we needed for our project.",
    author: "Maria Garcia",
  },
  {
    rating: 5,
    text: "Professional team, competitive prices, highly recommended.",
    author: "David Johnson",
  },
];

export default function Review() {
  return (
    <div className="max-w-7xl m-auto border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-center text-lg font-semibold mb-6">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-3">"{testimonial.text}"</p>
              <p className="text-gray-300 text-sm font-medium">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
