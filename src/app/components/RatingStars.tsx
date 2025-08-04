import React, { memo } from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div
      className="flex"
      role="img"
      aria-label={`${rating} out of ${totalStars} stars`}
    >
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={`star-${index}`}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default memo(RatingStars);
