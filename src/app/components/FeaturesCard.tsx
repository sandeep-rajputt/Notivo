"use client";
import React, { ReactNode, memo } from "react";
import { motion } from "framer-motion";

type ColorMap = {
  [key: string]: {
    from: string;
    to: string;
    shadow: string;
  };
};

const colorMap: ColorMap = {
  green: {
    from: "from-[#22B02A]",
    to: "to-[#32E575]",
    shadow: "0px 10px 50px -10px rgba(34, 176, 42, 0.5)",
  },
  blue: {
    from: "from-[#007BFF]",
    to: "to-[#4285F4]",
    shadow: "0px 10px 50px -10px rgba(0, 123, 255, 0.5)",
  },
  orange: {
    from: "from-[#FF7438]",
    to: "to-[#FF8B59]",
    shadow: "0px 10px 50px -10px rgba(255, 116, 56, 0.5)",
  },
  purple: {
    from: "from-[#9C27B0]",
    to: "to-[#BA68C8]",
    shadow: "0px 10px 50px -10px rgba(156, 39, 176, 0.5)",
  },
  cyan: {
    from: "from-[#06B6D4]",
    to: "to-[#67E8F9]",
    shadow: "0px 10px 50px -10px rgba(6, 182, 212, 0.5)",
  },
};

type Props = {
  heading: string;
  disc: string;
  icon: ReactNode;
  color: keyof typeof colorMap;
};

type SelectedColor = {
  from: string;
  to: string;
  shadow: string;
};

const FeaturesCard = ({ heading, disc, icon, color }: Props): ReactNode => {
  const selectedColor: SelectedColor = colorMap[color] || colorMap.green;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="max-w-[365px] p-12 bg-white rounded-xl grid grid-rows-[auto_auto_1fr] h-full gap-5 justify-self-center"
      role="listitem"
    >
      <div className="flex justify-center items-center py-4">
        <div
          className={`p-4 bg-gradient-to-r ${selectedColor.from} ${selectedColor.to} rounded-full`}
          style={{ boxShadow: selectedColor.shadow }}
        >
          <div>{icon}</div>
        </div>
      </div>
      <h3 className="text-center text-lg font-bold text-primary-dark">
        {heading}
      </h3>
      <p className="text-center text-base font-light leading-8">{disc}</p>
    </motion.article>
  );
};

export default memo(FeaturesCard);
