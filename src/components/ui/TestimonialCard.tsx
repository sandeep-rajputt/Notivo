import React from "react";
import RatingStars from "@components/ui/RatingStars";
import Image from "next/image";

type Props = {
  name: string;
  feedback: string;
  rating: number;
  image: string;
};

const TestimonialCard = ({ name, feedback, rating, image }: Props) => {
  return (
    <div className="p-8 h-full rounded-lg bg-white grid grid-rows-[1fr_auto] max-w-[365px]">
      <p className="leading-loose text-primary-word text-base font-light ">
        {feedback}
      </p>
      <div className="flex items-center mt-8 -mx-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 select-none"
        />
        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 mb-1">{name}</h1>
          <RatingStars rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
