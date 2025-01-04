"use client";
import PageHeading from "@components/layout/PageHeading";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Introduction",
    content:
      "At Notivo, we respect your privacy and are committed to protecting the information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you use our services. By accessing or using Notivo, you agree to this Privacy Policy.",
  },
  {
    title: "1. Information We Collect",
    content:
      "We collect the following information to provide and improve our services:",
    list: [
      "Usernames: We collect the usernames of social media platforms (e.g., Telegram, Discord) to connect your account and deliver reminders.",
      "Contact Information: Your email address for account creation and service updates.",
      "Payment Information: Payment details are processed securely via Razorpay. We do not store your credit/debit card information.",
      "Usage Data: Basic usage information, such as the reminders you set and their delivery status, to ensure the service functions correctly.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "The information collected is used for:",
    list: [
      "Connecting your social media accounts for reminder delivery.",
      "Delivering notifications and reminders as per your instructions.",
      "Managing payments and subscriptions via Razorpay.",
      "Providing customer support and improving our services.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    content:
      "We do not sell or rent your personal information to third parties. However, your data may be shared with:",
    list: [
      "Payment Processors: Razorpay handles all payment-related information securely.",
      "Service Providers: Social media platforms like Telegram or Discord to deliver reminders.",
      "Legal Authorities: When required to comply with applicable laws or regulations.",
    ],
  },
  {
    title: "4. Data Security",
    content:
      "We take data security seriously and use encryption and other safeguards to protect your personal information. Payment information is securely handled by Razorpay, and social media usernames are stored in encrypted formats.",
  },
  {
    title: "5. Your Rights",
    content: "You have the right to:",
    list: [
      "View or update your account details.",
      "Delete your account and all associated data by contacting us.",
      "Opt-out of non-essential communications.",
    ],
  },
  {
    title: "6. Refund Policy",
    content:
      "Refunds are only provided if the service fails to deliver reminders. If reminders are not delivered to your social media account, you can request a refund via the Contact Us page with proof of non-delivery.",
  },
  {
    title: "7. Data Retention",
    content: "",
    list: [
      "Social media usernames are retained as long as your account is active to ensure seamless service delivery.",
      "Payment information is managed by Razorpay and is not stored on our servers.",
      "Upon account deletion, all personal data will be removed from our systems within 30 days.",
    ],
  },
  {
    title: "8. Cookies",
    content:
      "We do not use cookies to track or collect unnecessary data. Essential cookies may be used to enhance website functionality.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "This Privacy Policy may be updated periodically. Significant updates will be communicated via email or website notifications.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact us:",
    list: [
      "Email: contact@notivo.in",
      "Contact Form: visit the contact us page on our website",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <PageHeading>Privacy & Policy</PageHeading>
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
