import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handelUpdate = async (e, id) => {
    e.preventDefault();

    // Extracting form values
    const form = e.target;
    const img = form.image.value;
    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const formData = { img, title, author, category, rating };
    axios
      .patch(`https://library-server-five.vercel.app/update/${id}`, formData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book Updated successfully",
            draggable: false,
          });
          navigate("/all-books");
        }
      })
      .catch((err) => {
        console.error("Error updating book:", err);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg ">
      <Helmet>
        <title>BookQuill | {data.title}</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Update Book
      </h2>
      <form onSubmit={(e) => handelUpdate(e, data._id)} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Book Cover Image
          </label>
          <input
            defaultValue={data.img}
            type="text"
            id="image"
            name="image"
            placeholder="Enter Image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Book Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Book Title
          </label>
          <input
            defaultValue={data.title}
            type="text"
            id="name"
            name="title"
            placeholder="Enter Book Title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Author Name */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author Name
          </label>
          <input
            defaultValue={data.author}
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
            defaultValue={data.category}
          >
            <option value="">Select a category</option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rating (1-5)
          </label>
          <input
            defaultValue={data.rating}
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter Rating"
            min="1"
            max="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBooks;
