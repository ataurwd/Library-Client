import React from "react";

const Fetures = () => {
  const features = [
    {
      id: 1,
      img: "https://i.ibb.co.com/c3Zt3qZ/books.png",
      title: "Wide Range of Books",
      description:
        "Explore thousands of books across various genres and categories.",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/VMtQ2Cb/book.png",
      title: "Affordable Prices",
      description: "We offer competitive pricing and regular discounts.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/QdNmGHv/book-1.png",
      title: "User-Friendly Interface",
      description: "Easily find and borrow books with our simple platform.",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/6ZhxD2R/world-book-day.png",
      title: "Community Events",
      description: "Join book clubs, author talks, and other engaging events.",
    },
  ];
  return (
    <div className="features-section mx-auto max-w-6xl text-center p-6">
      <h2 className="text-3xl font-bold mb-4 font-customRubik text-primary underline">
        Our Features
      </h2>
      <p className="text-gray-600 mb-8">
        Discover what makes our library platform unique and how it serves you
        best.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-card bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-gray-100 transition duration-300 ease-in-out hover:shadow-md cursor-pointer"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetures;
