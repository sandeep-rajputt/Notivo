import { useState } from "react";
import { IconType } from "react-icons";

const PopoverButton = ({
  handleClick,
  icon: Icon,
  popupText,
}: {
  handleClick: () => void;
  icon: IconType;
  popupText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={handleClick}
      className="relative p-1.5 hover:bg-gray-100 rounded-md text-primary-word"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={22} />
      {isHovered && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 py-1 px-2 bg-gray-800 text-white text-xs rounded-md ">
          {popupText}
        </div>
      )}
    </button>
  );
};

export default PopoverButton;
