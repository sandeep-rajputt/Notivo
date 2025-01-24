"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TivoraButton from "@components/Tivora/TivoraButton";
import ChatSection from "@components/Tivora/ChatSection";

const Tivora = () => {
  const [showChatSection, setShowChatSection] = useState<boolean>(false);

  function closeChatSection() {
    setShowChatSection(false);
  }

  function deleteChat() {
    console.log("delete chat");
  }

  function handleFeedBack() {
    console.log("Handle Feedback");
  }

  return (
    <div className="fixed bottom-0 right-0 z-[99999]">
      <div className="relative w-full h-full z-[99999]">
        <AnimatePresence>
          {showChatSection && (
            <ChatSection
              handleDelete={deleteChat}
              handleClose={closeChatSection}
              handleFeedBack={handleFeedBack}
            />
          )}
        </AnimatePresence>
        <TivoraButton
          handleClick={() => {
            setShowChatSection(!showChatSection);
          }}
        >
          {showChatSection ? "Close" : "Tivora AI"}
        </TivoraButton>
      </div>
    </div>
  );
};

export default Tivora;
