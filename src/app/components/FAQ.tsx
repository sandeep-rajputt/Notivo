"use client";
import SectionsTemplate from "@/app/components/SectionsTemplate";
import { motion, AnimatePresence } from "framer-motion";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Notivo?",
    answer:
      "Notivo is a reliable notification service that helps you stay organized by sending reminders through platforms like Email, Telegram, and Discord.",
  },
  {
    question: "Can I customize my reminders in Notivo?",
    answer:
      "Yes, but full customization is available only in the Standard Plan or Premium Plan.",
  },
  {
    question: "Does Notivo support password resets?",
    answer:
      "Yes, you can reset your Notivo password easily through the 'Forgot Password' option available on the login page.",
  },
  {
    question: "Can I disconnect or change a connected platform?",
    answer: "Yes, but only if you have the Standard Plan or Premium Plan.",
  },
  {
    question:
      "What are the benefits of upgrading to the Standard Plan or Premium Plan?",
    answer:
      "With these plans, you can disconnect platforms, attach images to reminders, and access more reminders across all supported platforms.",
  },
  {
    question: "What platforms does Notivo currently support?",
    answer:
      "Notivo supports Telegram, Email, and Discord for delivering reminders.",
  },
  {
    question: "What features are included in the Basic Plan?",
    answer:
      "The Basic Plan includes 5 reminders each for Telegram, Email, and Discord, along with daily and weekly reminders. However, advanced features like disconnecting platforms and attaching images are not included.",
  },
  {
    question: "How does Notivo ensure timely notifications?",
    answer:
      "Notivo uses reliable scheduling algorithms and integrations to deliver reminders exactly when you need them.",
  },
  {
    question: "Can I create recurring reminders with Notivo?",
    answer:
      "Yes, recurring reminders can be created in all plans, but advanced scheduling options are available in the Standard Plan or Premium Plan.",
  },
  {
    question: "How do I get started with Notivo?",
    answer:
      "Getting started with Notivo is simple. Just sign up, choose your plan, and start setting reminders to stay on top of your tasks.",
  },
];

export default function FAQ() {
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
