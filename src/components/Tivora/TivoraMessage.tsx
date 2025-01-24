import { useState, useEffect } from "react";
import Image from "next/image";

const TivoraMessage = ({ message }: { message?: string }) => {
  const [dots, setDots] = useState<string>(".");

  useEffect(() => {
    if (!message) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 5 ? prev + "." : "."));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [message]);

  return (
    <div className="grid grid-cols-[auto_1fr] gap-2 bg-primary-background p-2 rounded-lg items-start">
      <div className="bg-primary p-1.5 rounded-full flex items-center justify-center">
        <Image
          src="/Tivora white logo.svg"
          alt="Tivora white logo"
          width={13}
          height={13}
        />
      </div>
      <p
        style={{ overflowWrap: "anywhere" }}
        className={`text-primary-word text-sm leading-6 tracking-wide ${
          !message && "animate-pulse"
        }`}
      >
        {message || <span>{`Thinking ${dots}`}</span>}
      </p>
    </div>
  );
};

export default TivoraMessage;
