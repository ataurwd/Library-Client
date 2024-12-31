import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const categories = [
  {
    name: "Novel",
    image:
      "https://i.ibb.co.com/r632Vbn/graphic-novel-book-icon-flat-style-vector-removebg-preview.png",
  },
  {
    name: "Thriller",
    image:
      "https://i.ibb.co.com/0s9Fc9g/thriller-book-icon-flat-illustration-thriller-book-vector-icon-isolated-white-background-98396-49507.png",
  },
  {
    name: "Drama",
    image:
      "https://i.ibb.co.com/LZKc211/drama-literary-genre-book-icon-flat-isolated-vector-removebg-preview.png",
  },
  {
    name: "Sci-Fi",
    image: "https://i.ibb.co.com/gP5LsSR/images-removebg-preview.png",
  },
];

const App = () => {
  return (
    <div className="lg:px-20 md:px-14 px-4 lg:my-10 md:my-6 my-3">
      <h1 className="text-3xl font-semibold font-customRubik text-primary underline">
        Featured Categories
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name}`}
            className="group relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform bg-secondary py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#5F55E9] to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <img
              src={category.image}
              alt={category.name}
              className=" md:h-32 w-32 object-cover z-10 mx-auto pb-4"
            />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold text-center z-20 top-50">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
