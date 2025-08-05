import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Notivo - Smart Reminder Management Platform",
  description:
    "Learn about Notivo's mission to revolutionize reminder management. Discover how we help you stay organized with multi-platform notifications across Email, Telegram, and Discord.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
