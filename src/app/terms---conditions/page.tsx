"use client";
import PageHeading from "@components/layout/PageHeading";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Introduction",
    content:
      "Welcome to Notivo! By using our services, you agree to comply with our Terms and Conditions. These terms govern your use of Notivo and outline your rights and responsibilities. If you do not agree, please discontinue using our services.",
  },
  {
    title: "1. Services Provided",
    content:
      "Notivo provides reminder notification services for platforms like Telegram, Discord, and email. These services are available under Basic, Standard, and Premium plans with varying features and limits.",
  },
  {
    title: "2. Account Registration",
    content:
      "Users must create an account and provide accurate information, including social media usernames, for connecting platforms. You are responsible for safeguarding your account credentials and ensuring their confidentiality.",
  },
  {
    title: "3. Subscription Plans",
    list: [
      "Basic Plan: Free plan with limited features.",
      "Standard Plan: ₹15/month with expanded features and platform flexibility.",
      "Premium Plan: ₹19/month with full access to all features.",
    ],
    content:
      "Subscription fees are billed through Razorpay, and plans can be upgraded or downgraded at any time.",
  },
  {
    title: "4. Refund Policy",
    content:
      "Refunds are only available if reminders fail to deliver due to service issues. Requests can be submitted via the Contact Us page with proof of non-delivery. Refunds for other reasons are not supported.",
  },
  {
    title: "5. Use of Services",
    content:
      "Notivo must be used solely for lawful purposes. Misuse, such as spamming or fraud, is prohibited. Platform connections cannot be changed for Basic Plan users, but are flexible for Standard and Premium Plan subscribers.",
  },
  {
    title: "6. Payment and Billing",
    content:
      "All payments are securely processed by Razorpay. Subscription fees are non-refundable unless specified under the refund policy. Pricing is subject to change with prior notice.",
  },
  {
    title: "7. Service Availability",
    content:
      "Notivo strives for high availability but does not guarantee 100% uptime. Downtime may occur due to maintenance or external factors affecting connected platforms.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Notivo is not liable for missed reminders due to platform outages or incorrect user inputs. Maximum liability is limited to the subscription fee for the affected period.",
  },
  {
    title: "9. Intellectual Property",
    content:
      "All content and branding associated with Notivo are owned by us. Unauthorized copying or distribution of our materials is prohibited.",
  },
  {
    title: "10. Termination of Service",
    content:
      "We reserve the right to terminate accounts for violating these terms or engaging in fraudulent activities. Data associated with terminated accounts will be deleted within 30 days.",
  },
  {
    title: "11. Modifications to Terms",
    content:
      "We may update these Terms and Conditions periodically. Continued use of Notivo implies acceptance of the updated terms.",
  },
  {
    title: "12. Contact Us",
    content:
      "For questions or concerns, contact us via email or through the Contact Us page on our website.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeading>Terms & Conditions</PageHeading>
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
