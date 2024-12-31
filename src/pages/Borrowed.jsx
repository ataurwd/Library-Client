import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxios from "../hooks/useAxios";

const Borrowed = () => {
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const secureAxios = useAxios();

  const fetchBorrwed = async () => {
    const res = await secureAxios.get(`/borrow-books?email=${user?.email}`, {
      withCredentials: true,
    });
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: "borrowed",
    queryFn: fetchBorrwed,
  });

  // Handle delete mutation
  const mutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`https://library-server-five.vercel.app/delete/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["borrowed"]);

      // Show success alert
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Book returned successfully!",
        showConfirmButton: true,
        timer: 1500,
      });
    },
    onError: (error) => {
      // Show error alert
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `Failed to return book. ${error.message}`,
        showConfirmButton: true,
      });
    },
  });

  const handleReturn = (id) => {
    mutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:my-10 md:my-5 my-3 pl-5">
      <Helmet>
        <title>BookQuill | Borrowed Books</title>
      </Helmet>
      {data?.length > 0 ? (
        data.map((book) => (
          <div
            key={book._id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-60 object-cover"
              src={book.img}
              alt={book.title}
            />
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-gray-600">{book.category}</p>
              <p className="text-gray-500 mt-2">
                <strong>Borrowed Date:</strong> {book.borrowedDate}
              </p>
              <p className="text-gray-500 mt-1">
                <strong>Return Date:</strong> {book.returnDate}
              </p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
              <button
                onClick={() => handleReturn(book._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Return
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No borrowed books found.</p>
      )}
    </div>
  );
};

export default Borrowed;
