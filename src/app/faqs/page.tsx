"use state";
import PageHeading from "@components/layout/PageHeading";
import FAQ from "@components/sections/FAQ";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Notivo?",
    answer:
      "Notivo is a reminder and notification service that helps you stay organized by sending timely reminders through platforms like Telegram, Email, and Discord.",
  },
  {
    question: "What platforms does Notivo support for reminders?",
    answer:
      "Notivo supports Telegram, Email, and Discord for sending reminders directly to your DM.",
  },
  {
    question: "Can I customize my reminders in Notivo?",
    answer:
      "Yes, you can customize reminders, including the message content, delivery platform, frequency, and timing.",
  },
  {
    question: "Does Notivo support recurring reminders?",
    answer:
      "Yes, Notivo allows you to set daily, weekly, and monthly recurring reminders.",
  },
  {
    question: "Can I attach images to my reminders?",
    answer:
      "Yes, you can attach images to your reminders, but this feature is only available in the Standard Plan and Premium Plan.",
  },
  {
    question: "Can I reset my password on Notivo?",
    answer:
      "Yes, you can reset your password if needed by following the password recovery process on the login page.",
  },
  {
    question: "What happens if I connect a platform by mistake?",
    answer:
      "Once a platform is connected, you cannot disconnect it unless you are on the Standard Plan or Premium Plan.",
  },
  {
    question: "Does Notivo offer a free plan?",
    answer:
      "Yes, Notivo offers a Basic Plan that is completely free, but it comes with limited features.",
  },
  {
    question: "How can I request a refund if reminders are not delivered?",
    answer:
      "If reminders are not delivered to your DM, you can request a refund through the 'Contact Us' page on the website.",
  },
  {
    question:
      "Can I change the delivery platform of a reminder after creating it?",
    answer:
      "No, you cannot change the delivery platform of a reminder after it has been created. You need to create a new reminder with the desired platform.",
  },
  {
    question: "Does Notivo require any app installation?",
    answer:
      "No, Notivo works directly through web browsers and connected platforms like Telegram, Email, and Discord.",
  },
  {
    question: "Can I manage multiple reminders at once?",
    answer:
      "Yes, Notivo allows you to manage and organize multiple reminders efficiently through your account dashboard.",
  },
  {
    question: "Is there a limit to the number of reminders I can create?",
    answer:
      "Yes, the number of reminders you can create depends on your chosen plan. The Basic Plan includes 5 reminders per platform, while Standard and Premium Plans offer higher limits.",
  },
  {
    question: "Can I schedule reminders for specific times?",
    answer:
      "Yes, you can schedule reminders for any specific date and time as per your requirements.",
  },
  {
    question: "How does Notivo ensure timely delivery of reminders?",
    answer:
      "Notivo uses reliable APIs and servers to deliver reminders on time to the selected platforms.",
  },
  {
    question: "Does Notivo store my personal data securely?",
    answer:
      "Yes, Notivo prioritizes user privacy and ensures that your personal data is stored securely and used only for delivering reminders.",
  },
  {
    question: "Can I use Notivo for team collaboration?",
    answer:
      "Currently, Notivo is designed for individual use. Team collaboration features may be introduced in the future.",
  },
  {
    question:
      "Does Notivo support reminders for group platforms like Telegram Groups or Discord Channels?",
    answer:
      "Yes, but this feature is only available in the Standard Plan and Premium Plan.",
  },
  {
    question:
      "Can I use Notivo to remind me of personal or professional tasks?",
    answer:
      "Absolutely, Notivo is designed to help you manage both personal and professional tasks efficiently.",
  },
  {
    question: "How can I contact Notivo for support or feedback?",
    answer:
      "You can contact Notivo through the 'Contact Us' page on the website for any support or feedback.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeading>Faqs</PageHeading>
      <FAQ faqData={faqData} />
    </main>
  );
}
