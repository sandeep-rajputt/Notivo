import Image from "next/image";
import React from "react";

const TivoraButton = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={handleClick}
      className="flex absolute right-6 bottom-4 justify-center items-center px-6 py-1.5 gap-2 rounded-full bg-primary-background hover:bg-white border border-primary z-[1]"
    >
      <Image
        src={"/Tivora logo.svg"}
        alt="Tivora logo"
        width={25}
        height={25}
      />
      <p className="text-md font-semibold text-primary whitespace-nowrap">
        {children}
      </p>
    </button>
  );
};

export default TivoraButton;
