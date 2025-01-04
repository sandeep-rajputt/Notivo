"use client";

import FAQ from "@components/sections/FAQ";
import Features from "@components/sections/Features";
import Hero from "@components/sections/Hero";
import Pricing from "@components/sections/Pricing";
import Testimonials from "@components/sections/Testimonials";

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

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="py-10">
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ faqData={faqData} />
      </div>
    </main>
  );
}
