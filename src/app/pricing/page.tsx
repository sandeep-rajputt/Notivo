"use client";
import PageHeading from "@components/layout/PageHeading";
import FAQ from "@components/sections/FAQ";
import Pricing from "@components/sections/Pricing";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are the pricing plans available in Notivo?",
    answer:
      "Notivo offers three plans: Basic Plan (Free), Standard Plan (₹15/month), and Premium Plan (₹19/month). Each plan provides different features based on your needs.",
  },
  {
    question: "What features are included in the Basic Plan?",
    answer:
      "The Basic Plan is free and includes 5 reminders for Telegram, Email, and Discord, along with daily, weekly, and one-time reminders. However, advanced features like disconnecting platforms and attaching images are not available.",
  },
  {
    question: "What does the Standard Plan offer?",
    answer:
      "The Standard Plan, priced at ₹15/month, includes 35 reminders each for Telegram, Email, and Discord, along with features like disconnecting platforms, attaching images, and recurring reminders.",
  },
  {
    question: "What is included in the Premium Plan?",
    answer:
      "The Premium Plan, priced at ₹19/month, offers 100 reminders each for Telegram, Email, and Discord, along with advanced features like disconnecting platforms, attaching images, and recurring reminders.",
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "Notivo does not provide refunds if the service is functioning as expected. However, if reminders are not being delivered to your DM, you can request a refund through the 'Contact Us' page.",
  },
  {
    question: "Do I need to pay to disconnect or change a platform?",
    answer:
      "Yes, disconnecting or changing a platform is only available in the Standard Plan or Premium Plan.",
  },
  {
    question: "Can I upgrade  my plan at any time?",
    answer:
      "Yes, you can upgrade  your plan at any time to better suit your needs.",
  },
  {
    question:
      "Are there any additional charges apart from the subscription fee?",
    answer:
      "No, the subscription fee covers all features included in your chosen plan without any hidden charges.",
  },
  {
    question: "Does the Premium Plan include unlimited reminders?",
    answer:
      "No, the Premium Plan includes up to 100 reminders for Telegram, Email, and Discord, along with advanced features.",
  },
  {
    question: "How can I purchase a plan on Notivo?",
    answer:
      "To purchase a plan, visit the Pricing section on the website, select your preferred plan, and follow the payment process to activate it.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeading>Pricing</PageHeading>
      <Pricing />
      <FAQ faqData={faqData} />
    </main>
  );
}
