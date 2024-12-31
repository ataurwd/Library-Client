import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../components/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookRating from "../../components/Rating";

const AllBooks = () => {
  const [showAvailable, setShowAvailable] = useState(false);
  const [filter, setFilter] = useState("");

  const fetchBooks = async () => {
    const res = await axios.get("https://library-server-five.vercel.app/books");
    return res.data;
  };

  // Use object syntax for useQuery
  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter books based on quantiry
  const filteredBooks = showAvailable
    ? data.filter((book) => book.quantity > 0)
    : data;

  return (
    <div>
      <div className="lg:px-14 grid place-items-center md:px-8 lg:mb-10 md:mb-5 mb-2">
        <Helmet>
          <title>BookQuill | All Books</title>
        </Helmet>
        <div className="text-center md:mt-5 space-y-3">
          <h1 className="lg:text-3xl font-bold text-xl">All Books</h1>
          <p className="w-1/2 mx-auto">
            The All Books page features a clean and user-friendly design with a
            focus on both functionality and aesthetics. It includes a responsive
            grid layout for displaying books either as individual cards or in a
            table format, depending on the user’s preference.
          </p>
        </div>

        {/* Filter Button */}
        <div className="flex justify-between items-center w-full mb-3 px-10 md:px-0">
          <button
            onClick={() => setShowAvailable(!showAvailable)}
            className="bg-primary text-white px-5 py-2 rounded-md mb-5 mt-5"
          >
            {showAvailable ? "Show All Books" : "Show Available Books"}
          </button>

          <div className="">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-primary rounded"
              defaultValue={"Card View"}
            >
              <option value="card">Card View</option>
              <option value="table">Table View</option>
            </select>
          </div>
        </div>
      </div>
      {filter === "table" ? (
        <table className="min-w-[80%] mx-auto table-auto border-collapse border border-gray-300 md:px-14 md:my-10">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Author
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Rating
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Quantity
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id} className="hover:bg-gray-100">
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  {book.title}
                </td>
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  {book.author}
                </td>
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  {book.category}
                </td>
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  {"★".repeat(book.rating)}
                </td>
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  {book.quantity}
                </td>
                <td className="px-6 py-3 border-b text-sm text-gray-700">
                  <button className="mt-3">
                    <Link
                      to={`/all-books/${book._id}`}
                      className="bg-primary text-white px-5 py-1 rounded-md mt-3"
                    >
                      Update{" "}
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 lg:px-14 md:px-8 px-4 mb-10">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Book Image */}
              <img
                className="w-full h-64 object-cover"
                src={book.img}
                alt={book.title}
              />

              <div className="p-4">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  {book.title}
                </h2>

                {/* Author */}
                <p className="text-gray-600 mt-2 text-sm">
                  <span className="font-medium">Author:</span> {book.author}
                </p>

                {/* Category */}
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-medium">Category:</span> {book.category}
                </p>

                {/* Quantity */}
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-medium">Quantity:</span> {book.quantity}
                </p>

                {/* Rating */}
                <div className="mt-3">
                  <span className="font-medium">Rating:</span>
                  <span className={`text-yellow-500`}>
                    {/* {"★".repeat(book.rating)} */}
                    <BookRating rating={book.rating} />
                  </span>
                </div>
                <button className="mt-3">
                  <Link
                    to={`/all-books/${book._id}`}
                    className="bg-primary text-white px-5 py-1 rounded-md mt-3"
                  >
                    Update{" "}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
