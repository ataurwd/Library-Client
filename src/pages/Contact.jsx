import React from 'react';

const Contact = () => {
    return (
        <section className="py-12 bg-white lg:px-20 md:px-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Contact Details */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Have any questions? We’d love to hear from you. Here’s how you can reach us:
            </p>
  
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <span className="material-icons text-primary mr-3">email</span>
                <p className="text-gray-600">support@library.com</p>
              </div>
              <div className="flex items-center mb-4">
                <span className="material-icons text-primary mr-3">phone</span>
                <p className="text-gray-600">+1 (234) 567-890</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-primary mr-3">location_on</span>
                <p className="text-gray-600">123 Library St, City, Country</p>
              </div>
            </div>
          </div>
  
          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
  
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
  
              <div>
                <label className="block text-gray-700">Your Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;