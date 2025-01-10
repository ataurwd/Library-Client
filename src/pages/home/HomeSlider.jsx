import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const HomeSlider = () => {
    const slides = [ 
        {
            id: 1,
            title: "Welcome to Our Library Management System",
            description: "Our library management system offers easy access to book categories, borrowing, returning, and updating books. A user-friendly interface designed to enhance the library experience.",
            bgImage:
              "https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg", // Replace with your image
        },
        {
            id: 2,
            title: "Efficient Book Management",
            description: "Manage your library’s book collection with ease. Add, update, and track books effortlessly, ensuring a seamless experience for both users and librarians.",
            bgImage:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/LOC_Main_Reading_Room_Highsmith.jpg/1200px-LOC_Main_Reading_Room_Highsmith.jpg", // Replace with your image
        },
        {
            id: 3,
            title: "Easy Borrowing and Returning",
            description: "Borrow and return books with a simple click. Track your borrowed books and ensure you never miss a due date with automatic reminders and easy access to your library's resources.",
            bgImage:
              "https://www.visitphilly.com/wp-content/uploads/2018/02/The-Free-Library-main-exterior-VP-2200x1237.jpg", // Replace with your image
        },
    ];
    
  return (
    <div>
      <AwesomeSlider bullets={false} style={{ height: "80vh" }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              position: "relative",
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              margin: 0, 
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                zIndex: 1,
              }}
            />
            {/* Content */}
            <div className="relative z-20 -top-16">
              <h1 className="md:text-5xl text-2xl mb-4 px-5 font-bold text-white">
                {slide.title}
              </h1>
              <p className="md:text-xl mx-auto max-w-2xl px-5">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default HomeSlider;