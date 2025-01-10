import React from "react";
import aboutGif from '../assets/Library (1).gif'

const About = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="md:w-1/2 grid place-items-center">
          <img src={aboutGif} alt="" />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            Welcome to our Library Management System! Our platform is dedicated
            to simplifying the process of borrowing and returning books while
            ensuring a seamless experience for both students and staff. With a
            wide collection of books, we aim to foster a love for reading and
            lifelong learning.
          </p>
          <p className="mt-4 text-gray-600">
            Our mission is to empower education through easy access to
            knowledge. We provide features like real-time book availability,
            borrowing limits, and notifications to keep users informed. Join us
            in making your library experience smarter and more efficient.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
