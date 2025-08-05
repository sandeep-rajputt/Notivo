import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Notivo - Get In Touch With Our Team",
  description:
    "Have questions about Notivo's reminder platform? Contact our team for support, demos, or inquiries. We're here to help you transform how you manage reminders and stay organized.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
