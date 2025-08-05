"use client";
import PageHeading from "@/app/components/PageHeading";
import { motion, AnimatePresence } from "framer-motion";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function Page() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is Notivo and what does it do?",
      answer:
        "Notivo is a cutting-edge reminder management platform that helps you never miss important events, tasks, or deadlines. It integrates with Email, Telegram, and Discord to deliver notifications across multiple channels, ensuring you stay organized and productive.",
    },
    {
      question: "Which platforms does Notivo support for notifications?",
      answer:
        "Notivo currently supports Email and Telegram notifications, with Discord integration planned for the future. We also mentioned WhatsApp support in our services, allowing you to receive reminders across multiple communication channels.",
    },
    {
      question: "Is Notivo currently available for use?",
      answer:
        "Notivo is currently a work in progress. We are actively developing and refining the platform to ensure it meets the highest standards of functionality and reliability. We appreciate your patience as we work to make Notivo fully operational.",
    },
    {
      question: "Can I set recurring reminders with Notivo?",
      answer:
        "Yes! Notivo will support both one-time and recurring reminders. You'll be able to set up daily, weekly, or custom timing schedules to match your specific needs and preferences.",
    },
    {
      question: "How secure is my data with Notivo?",
      answer:
        "Data privacy and security are at the core of Notivo's design. We implement secure user accounts and ensure that your personal information and reminder data are protected with industry-standard security measures.",
    },
    {
      question: "Can I customize my reminder messages?",
      answer:
        "Absolutely! Notivo will allow you to personalize your reminder content with custom messages, emojis, and rich text formatting to make your notifications more engaging and meaningful.",
    },
    {
      question: "Is Notivo suitable for business use?",
      answer:
        "Yes, Notivo is designed to be scalable and suitable for both personal and business use. Whether you're managing individual tasks or coordinating team reminders, Notivo can adapt to your needs.",
    },
    {
      question: "How many reminders has Notivo sent so far?",
      answer:
        "According to our current statistics, we've sent over 6,000 reminders daily and 450+ reminders each month across all platforms, helping our users stay organized and on top of their tasks.",
    },
    {
      question: "How many users does Notivo currently have?",
      answer:
        "We currently have 20+ users worldwide who trust Notivo to help keep their lives organized and ensure they never miss important tasks or deadlines.",
    },
    {
      question:
        "Can I send notifications to multiple platforms simultaneously?",
      answer:
        "Yes! Notivo supports multi-platform notifications, allowing you to send reminders across supported channels (Email, Telegram, and planned Discord integration) simultaneously for maximum coverage.",
    },
    {
      question: "Will I have a dashboard to manage my reminders?",
      answer:
        "Yes, Notivo will feature a comprehensive dashboard where you can view and manage all your reminders in one centralized location, making it easy to stay organized and track your scheduled notifications.",
    },
    {
      question: "Can I view my reminder history?",
      answer:
        "Absolutely! Notivo will include history logs that allow you to track and reference past reminders, helping you maintain a complete record of your notification activity.",
    },
    {
      question: "How does Notivo integrate with Telegram?",
      answer:
        "Notivo uses Telegram bots to deliver instant messaging notifications directly to your Telegram account, ensuring you receive reminders in real-time through this popular messaging platform.",
    },
    {
      question: "What makes Notivo different from other reminder apps?",
      answer:
        "Notivo stands out with its multi-platform integration, user-focused design, and seamless notification delivery across Email, Telegram, and planned Discord support. We prioritize simplicity, reliability, and comprehensive coverage.",
    },
    {
      question: "Is Notivo free to use?",
      answer:
        "Pricing details will be announced as we approach the official launch. We're committed to providing value and accessibility to our users while maintaining the quality and reliability of our service.",
    },
    {
      question: "How do I get started with Notivo?",
      answer:
        "Since Notivo is currently in development, we recommend staying tuned for our official launch announcement. You can follow our updates and be among the first to know when the platform becomes available.",
    },
    {
      question: "Can I set reminders for different time zones?",
      answer:
        "While specific timezone features are still being developed, Notivo is designed with flexibility in mind to accommodate users worldwide with various scheduling needs and preferences.",
    },
    {
      question: "What types of reminders can I create?",
      answer:
        "Notivo will support various reminder types including task deadlines, event notifications, daily habits, weekly check-ins, and custom scheduled alerts. The platform is designed to handle both simple and complex reminder scenarios.",
    },
    {
      question: "How reliable is Notivo's notification delivery?",
      answer:
        "Reliability is a core focus of Notivo. We're building robust scheduling systems and redundant notification pathways to ensure your reminders are delivered consistently and on time across all supported platforms.",
    },
    {
      question: "Can I get support if I have issues or questions?",
      answer:
        "Yes! We're committed to providing excellent user support. As we develop Notivo, we welcome feedback and questions from our community. Feel free to reach out through our contact channels for assistance or inquiries.",
    },
  ];

  return (
    <main className="mt-20">
      <PageHeading>Your Questions Answered</PageHeading>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary-word">
              Everything you need to know about Notivo&apos;s reminder platform.
              From setup to advanced features, we&apos;ve compiled the most
              common questions to help you get the most out of your experience.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
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
        </div>
      </section>
    </main>
  );
}
