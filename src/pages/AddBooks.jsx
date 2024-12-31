import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "./../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const AddBooks = () => {
  const { user } = useContext(UserContext);

  const addBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const title = form.title.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const author = form.author.value;
    const formData = {
      img,
      title,
      quantity: parseInt(quantity),
      author,
      category,
      description,
      rating,
      userEmail: user?.email,
    };

    // to post data in the server
    await axios
      .post("https://library-server-five.vercel.app/books", formData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <Helmet>
        <title>BookQuill | Add Books</title>
      </Helmet>
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Book</h2>
      <form onSubmit={addBook} className="space-y-6">
        {/* Book Cover Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium">
            Book Cover Image
          </label>
          <input
            type="text"
            placeholder="Book Cover Image URL"
            id="image"
            name="image"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Book Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Quantity */}
        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-lg font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter book quantity"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Author Name */}
        <div className="flex flex-col">
          <label htmlFor="author" className="text-lg font-medium">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author's name"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-medium">
            Book Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
            defaultValue={"Book Category"}
          >
            <option value="Book Category">Book Category</option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>
        {/* Short Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Enter a short description"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        {/* Rating */}
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-lg font-medium">
            Book Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            placeholder="Enter rating"
            className="mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Add Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary transition w-full"
          >
            Add Book
          </button>
        </div>
        {/* Book Content (Static Text) */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Book Content</h3>
          <p className="text-gray-600 mt-2">
            This book offers a unique perspective on its subject, providing
            readers with engaging and valuable insights. It is a must-read for
            anyone looking to explore this topic in-depth. The author’s expert
            narrative style combines storytelling and facts, making it an
            enjoyable read for both beginners and experts.
          </p>
        </div>{" "}
      </form>
    </div>
  );
};

export default AddBooks;
