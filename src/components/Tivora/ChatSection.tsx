import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import PopoverButton from "@components/Tivora/PopoverButton";
import TextInput from "@components/Tivora/TextInput";
import DefaultChatScreen from "@components/Tivora/DefaultChatScreen";

const ChatSection = ({
  handleClose,
  handleDelete,
  handleFeedBack,
}: {
  handleClose: () => void;
  handleDelete: () => void;
  handleFeedBack: () => void;
}) => {
  return (
    <motion.div
      className="grid grid-rows-[auto_1fr_auto] absolute md:bottom-16 md:right-6 right-0 bottom-0 bg-white md:h-[75vh] md:w-96 w-[100vw] sm:h-[90vh] h-[100vh] shadow-lg border border-word rounded-lg py-3 px-4 z-[2] gap-1"
      initial={{ opacity: 0, scale: 0.6, y: 95, x: 65 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 95, x: 65 }}
      transition={{ duration: 0.1 }}
    >
      <div className="grid pb-1 items-center grid-cols-[1fr_auto_auto_auto] gap-0.5">
        <div>
          <h3 className="text-lg font-bold text-primary-dark">Tivora</h3>
        </div>
        <PopoverButton
          handleClick={handleFeedBack}
          popupText="Leave Feedback"
          icon={MdOutlineFeedback}
        />
        <PopoverButton
          handleClick={handleDelete}
          popupText="Restart"
          icon={MdDeleteOutline}
        />
        <PopoverButton
          handleClick={handleClose}
          popupText="Close"
          icon={IoClose}
        />
      </div>
      <div className="h-full overflow-scroll flex items-end hide-scrollbar">
        <DefaultChatScreen />
      </div>
      <div className="flex flex-col gap-2">
        <TextInput isLoading={false} />
        <p className="text-center text-xs text-primary-word/80">
          AI may produce inaccurate information
        </p>
      </div>
    </motion.div>
  );
};

export default ChatSection;
