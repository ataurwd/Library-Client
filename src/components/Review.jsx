import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Review = () => {
  const reviews = [
    {
      name: "John Doe",
      content: "Great service! Borrowing books was super easy and hassle-free.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      content:
        "The library staff were so helpful. Highly recommend this place!",
      rating: 4,
    },
    {
      name: "Alice Brown",
      content: "Amazing selection of books and a seamless borrowing process.",
      rating: 5,
    },
    {
      name: "Mark Wilson",
      content: "Loved the quiet atmosphere. Perfect for book lovers.",
      rating: 4,
    },
    {
      name: "Emily Johnson",
      content: "An excellent place to find and borrow your favorite books.",
      rating: 5,
    },
  ];
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Users Say
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600 italic mb-4">"{review.content}"</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-yellow-500 mt-2">
                  {"⭐".repeat(review.rating)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
