import SectionsTemplate from "./SectionsTemplate";
import { motion, AnimatePresence } from "framer-motion";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface Props {
  faqData: { question: string; answer: string }[];
}

export default function FAQ({ faqData }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  return (
    <SectionsTemplate
      heading="FAQ - Frequently Asked Questions"
      disc="Notivo aims to provide you with all the information you need. Here are some common questions we receive from our users. If you have any additional inquiries, feel free to reach out!"
    >
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <BsQuestionCircleFill className="text-primary text-xl flex-shrink-0" />
                <span className="text-primary-dark font-semibold text-lg">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-word text-xl flex-shrink-0"
              >
                {expandedIndex === index ? <IoIosRemove /> : <IoIosAdd />}
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-primary-word">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionsTemplate>
  );
}
