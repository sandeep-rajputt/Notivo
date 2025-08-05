"use client";
import SectionsTemplate from "@/app/components/SectionsTemplate";
import { motion, AnimatePresence } from "framer-motion";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function FAQ({
  faqData,
}: {
  faqData: { question: string; answer: string }[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  return (
    <SectionsTemplate
      heading="FAQ - Frequently Asked Questions"
      disc="Notivo aims to provide you with all the information you need. Here are some common questions we receive from our users. If you have any additional inquiries, feel free to reach out!"
    >
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            key={`faq-${index}`}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="w-full cursor-pointer flex items-center justify-between p-6 text-left"
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
          </motion.article>
        ))}
      </div>
    </SectionsTemplate>
  );
}
