import React, { ReactNode } from "react";

type ColorMap = {
  [key: string]: {
    from: string;
    to: string;
    shadow: string;
  };
};

// Color mapping
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

const Card = ({ heading, disc, icon, color }: Props): ReactNode => {
  const selectedColor: SelectedColor = colorMap[color] || colorMap.green;
  return (
    <div className="max-w-[365px] p-12 bg-white rounded-xl grid grid-rows-[auto_auto_1fr] h-full gap-5 justify-self-center">
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
    </div>
  );
};

export default Card;
