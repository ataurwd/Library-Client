import React from "react";
import ReactStars from "react-rating-stars-component";

const BookRating = ({ rating }) => {
  return (
    <div className="mt-3">
      <span className="font-medium">Rating:</span>
      <ReactStars
        count={5}
        value={rating}
        size={24}
        activeColor="#ffd700"
        isHalf={true}
        edit={false}
      />
    </div>
  );
};

export default BookRating;
