"use client";
import React, { memo } from "react";
import RatingStars from "@/app/components/RatingStars";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  feedback: string;
  rating: number;
  image: string;
};

const TestimonialCard = ({ name, feedback, rating, image }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="p-8 h-full rounded-lg bg-white grid grid-rows-[1fr_auto] max-w-[365px]"
      role="listitem"
    >
      <p className="leading-loose text-primary-word text-base font-light ">
        {feedback}
      </p>
      <div className="flex items-center mt-8 -mx-2">
        <Image
          src={image}
          alt={`${name} profile picture`}
          width={56}
          height={56}
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 select-none"
        />
        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 mb-1">{name}</h1>
          <RatingStars rating={rating} />
        </div>
      </div>
    </motion.article>
  );
};

export default memo(TestimonialCard);
