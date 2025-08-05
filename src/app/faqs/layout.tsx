import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notivo FAQ - Your Questions Answered",
  description:
    "Find answers to common questions about Notivo's reminder platform. Learn about features, setup, security, pricing, and how to get the most out of your reminder management experience.",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
