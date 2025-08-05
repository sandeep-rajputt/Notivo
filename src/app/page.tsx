import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Notivo?",
    answer:
      "Notivo is a web-based notification platform that helps you stay organized by sending reminders through Email, Telegram, and Discord.",
  },
  {
    question: "What platforms does Notivo support?",
    answer:
      "Notivo supports Email, Telegram, and Discord for delivering reminders and notifications.",
  },
  {
    question: "Is Notivo free to use?",
    answer:
      "Yes! Notivo is completely free to use with no subscription plans or hidden fees.",
  },
  {
    question: "Can I customize my reminders in Notivo?",
    answer:
      "Yes, you can customize your reminder messages with personalized content, emojis, and rich text formatting.",
  },
  {
    question: "Can I create recurring reminders?",
    answer:
      "Yes, Notivo supports both one-time and recurring reminders with flexible scheduling options including daily, weekly, or custom timing.",
  },
  {
    question: "How does Notivo ensure timely notifications?",
    answer:
      "Notivo uses reliable scheduling algorithms and platform integrations to deliver reminders exactly when you need them.",
  },
  {
    question: "Is Notivo fully functional yet?",
    answer:
      "Notivo is currently a work in progress. We're actively developing and refining the platform to make it stable and fully functional.",
  },
  {
    question: "Can I send notifications to multiple platforms at once?",
    answer:
      "Yes, Notivo allows you to send reminders across Email, Telegram, and Discord simultaneously for maximum reach.",
  },
  {
    question: "How do I get started with Notivo?",
    answer:
      "Getting started with Notivo is simple. Just sign up for a free account and start setting reminders to stay on top of your tasks.",
  },
  {
    question: "Does Notivo store my personal data securely?",
    answer:
      "Yes, Notivo prioritizes data privacy and security. We implement secure account management with user data protection at the core.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ faqData={faqData} />
    </main>
  );
}
