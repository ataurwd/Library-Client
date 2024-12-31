import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              Welcome to our library! We provide access to a wide range of books
              to nurture your knowledge and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400 underline underline-offset-4" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/all-books"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400 underline underline-offset-4" : ""
                  }`
                }
              >
                All Books
              </NavLink>
              <NavLink
                to={"/add-books"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400 underline underline-offset-4" : ""
                  }`
                }
              >
                Add Book
              </NavLink>
              <NavLink
                to={"/browse-books"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400 underline underline-offset-4" : ""
                  }`
                }
              >
                Borrowed Books
              </NavLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@library.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Library Lane, Booktown</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Library. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
