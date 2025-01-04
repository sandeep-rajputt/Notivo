"use client";
import PageHeading from "@components/layout/PageHeading";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Introduction",
    content:
      "At Notivo, we strive to deliver a reliable reminder notification service. However, we understand that there may be situations where users require cancellation or refunds. This policy outlines the terms for cancellations and refunds.",
  },
  {
    title: "1. Subscription Cancellation",
    content:
      "You can cancel your subscription at any time. Cancellation will prevent further charges for upcoming billing cycles. However, no refunds will be provided for the remaining duration of the active subscription.",
  },
  {
    title: "2. Refund Policy",
    content: "Refunds are only available under the following circumstances:",
    list: [
      "Failure of reminders to deliver to the intended platform (e.g., Telegram, Discord).",
      "Proof of service non-delivery must be provided when submitting a refund request via the Contact Us page.",
    ],
  },
  {
    title: "3. Non-Refundable Cases",
    content: "Refunds are not applicable in the following situations:",
    list: [
      "User errors, such as incorrect social media usernames or settings.",
      "Service disruptions caused by third-party platforms (e.g., Telegram or Discord outages).",
      "Change of mind after subscription payment.",
      "Partial usage of subscription features.",
    ],
  },
  {
    title: "4. Refund Process",
    content: "To request a refund, follow these steps:",
    list: [
      "Submit a refund request through the Contact Us page.",
      "Provide your registered email address and relevant details (e.g., payment ID, proof of service failure).",
      "Our team will review your request and respond within 7 business days.",
    ],
  },
  {
    title: "5. Payment Disputes",
    content:
      "For payment disputes or issues, contact us directly before raising a dispute with your payment provider. We aim to resolve issues promptly.",
  },
  {
    title: "6. Razorpay Payments",
    content:
      "All payments are processed securely via Razorpay. Refunds, if approved, will be credited back to your original payment method within 7–10 business days, subject to Razorpay’s policies.",
  },
  {
    title: "7. Changes to This Policy",
    content:
      "We reserve the right to modify our Cancellation and Refund Policy at any time. Changes will be communicated via our website or email. Continued use of our services indicates acceptance of the updated policy.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have questions or need assistance regarding cancellations or refunds, please contact us through the Contact Us page or email our support team.",
  },
];
export default function Page() {
  return (
    <main>
      <PageHeading>Cancellation & Refund Policies</PageHeading>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-primary-word mb-8">
          Last Updated: Sunday, 5 January 2025
        </p>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-primary-word mb-4">{section.content}</p>
            )}
            {section.list && (
              <ul className="list-disc pl-6 text-primary-word">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </div>
    </main>
  );
}
