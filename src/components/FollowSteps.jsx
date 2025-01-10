import React from "react";
import { FaSearch, FaClipboardList, FaBookOpen } from "react-icons/fa";
const FollowSteps = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-blue-500" />,
      title: "Find a Book",
      description:
        "Search through our catalog to find the book you want to borrow.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-green-500" />,
      title: "Request the Book",
      description:
        "Add the book to your borrowing list and submit your request.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-purple-500" />,
      title: "Pick Up & Enjoy",
      description:
        "Collect the book from the library and enjoy your reading journey.",
    },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          How to Borrow a Book
        </h2>
        <p className="text-gray-400 mb-8">
          Follow these simple steps to borrow your favorite books effortlessly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-500 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowSteps;
