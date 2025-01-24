import { IoSend } from "react-icons/io5";
import { VscLoading } from "react-icons/vsc";

const TextInput = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="border border-primary-word/50 rounded-md py-1 px-2 grid grid-cols-[1fr_auto] gap-2 items-center">
      <input type="text" className="focus:outline-none h-8 text-primary-word" />
      <button
        className="relative p-2 bg-gray-100 rounded-md text-primary-word"
        disabled={isLoading}
      >
        {isLoading ? (
          <VscLoading className="animate-spin" size={20} />
        ) : (
          <IoSend size={20} />
        )}
      </button>
    </div>
  );
};

export default TextInput;
