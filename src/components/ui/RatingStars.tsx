import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default RatingStars;
