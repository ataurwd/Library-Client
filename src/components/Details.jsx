import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Details = () => {
  const book = useLoaderData();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const img = book.img;
    const title = book.title;
    const category = book.category;
    const borrowedDate = new Date().toLocaleDateString("en-US");
    const returnDate = e.target.returnDate.value;

    const bookedData = {
      email,
      name,
      img,
      title,
      borrowedDate,
      category,
      returnDate,
      jobId: book._id,
    };

    try {
      const { data } = await axios.post(
        "https://library-server-five.vercel.app/borrow",
        bookedData
      );

      if (data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Book Borrowed",
          showConfirmButton: true,
          timer: 1500,
        });
        form.reset();
        navigate("/browse-books");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data || `Failed ${error}. Please try again.`;
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: errorMessage,
        showConfirmButton: true,
      });
    }

    // to close modal
    document.getElementById("my_modal_1").close();
  };
  return (
    <div className="max-w-6xl mx-auto p-6 md:my-10">
      <Helmet>
        <title>BookQuill | {book.title}</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 md:flex-row gap-6 max-w-3xl mx-auto">
        {/* Left Side - Book Image */}
        <div className="flex justify-center items-center">
          <img
            src={book.img}
            alt={book.title}
            className="w-full md:w-auto lg:h-[60vh] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Book Content */}
        <div className=" bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {book.title}
          </h2>
          <p className="mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {book.category}
          </p>
          <p className="mb-2">
            <strong>Quantity:</strong> {book.quantity}
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> {book.rating}/5
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Description:</strong> {book.description.slice(0, 200)}...
          </p>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            disabled={book.quantity <= 0} // Disable when quantity is 0 or less
            className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-md transition ${
              book.quantity <= 0
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-blue-700"
            }`}
          >
            Borrow Book
          </button>
        </div>
      </div>
      {/* for modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="userName"
                value={user?.displayName}
                disabled
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                value={user?.email}
                disabled
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="returnDate"
                className="block text-sm font-medium text-gray-700"
              >
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                //   value={returnDate}
                //   onChange={(e) => setReturnDate(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-white w-full"
              >
                Borrow Book
              </button>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
