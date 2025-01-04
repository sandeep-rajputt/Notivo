import React from "react";
import BlueButton from "@components/ui/BlueButton";
import OrangeButton from "@components/ui/OrangeButton";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  planName: string;
  image: string;
  price: string;
  disc: string;
  highlight: boolean;
  includes: { text: string; tick: boolean }[];
};

const PricingCard = ({
  image,
  planName,
  disc,
  price,
  includes,
  highlight,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={`w-full h-full grid grid-rows-[auto_auto_auto_1fr_auto] py-12 base:px-12 px-8 gap-7 base:max-w-96 rounded-xl ${
        planName === "Standard Plan" ? "bg-primary text-white" : "bg-white"
      }`}
    >
      <div>
        <Image
          src={image}
          alt={planName}
          width={100}
          height={100}
          className="select-none"
          draggable="false"
        />
      </div>
      <div>
        <p
          className={`text-xl font-bold  ${
            highlight ? "text-white" : "text-primary-dark"
          }`}
        >
          {planName}
        </p>
        <p className="text-base leading-8">{disc}</p>
      </div>
      <div className="my-5">
        <p className="flex items-end">
          <span
            className={`text-5xl font-bold  ${
              highlight ? "text-white" : "text-primary"
            }`}
          >
            ₹{price}
          </span>
          <span>/month</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {includes.map((item, index) => (
          <div
            key={index}
            className={`text-lg flex ${
              highlight ? "text-white" : "text-primary-word"
            }`}
          >
            <div className="inline-block h-full">
              <div
                className={`w-fit h-fit p-1 rounded-full flex items-center justify-center border mr-2 ${
                  item.tick
                    ? !highlight
                      ? "border-emerald-500"
                      : "border-white"
                    : !highlight
                    ? "border-red-500/50"
                    : "border-white"
                }`}
              >
                {item.tick ? (
                  <MdOutlineDone
                    className={`inline-block ${
                      item.tick
                        ? !highlight
                          ? "text-emerald-500"
                          : "text-white"
                        : "text-red-500/50"
                    }`}
                  />
                ) : (
                  <IoClose
                    className={`inline-block ${
                      item.tick
                        ? !highlight
                          ? "text-emerald-500"
                          : "text-white"
                        : !highlight
                        ? "text-red-500/50"
                        : "text-white"
                    }`}
                  />
                )}
              </div>
            </div>
            <p className={`${!item.tick && "line-through"}`}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        {planName !== "Standard Plan" ? (
          <BlueButton className="text-lg">Buy Now</BlueButton>
        ) : (
          <OrangeButton className="text-lg">Buy Now</OrangeButton>
        )}
      </div>
    </motion.div>
  );
};

export default PricingCard;
