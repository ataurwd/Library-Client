import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookRating from "./Rating";

const CategoryItem = () => {
  const { category } = useParams();
  const data = useLoaderData();

  const filtaredBooks = data.filter((book) => book.category === category);
  return (
    <div className="max-w-6xl mx-auto md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
      {filtaredBooks.map((book) => (
        <div
          key={book._id}
          className=" border rounded-md hover:shadow-lg bg-white transition"
        >
          <Helmet>
            <title>BookQuill | {book.category}</title>
          </Helmet>
          <img
            src={book.img}
            alt={book.name}
            className="w-full h-64 object-cover rounded-t-md"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {book.name}
            </h3>
            <p className="text-gray-600 mb-1">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> {book.category}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Quantity:</strong> {book.quantity}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Rating:</strong> <BookRating rating={book.rating} />
            </p>
            <Link
              to={`/details/${book._id}`}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
