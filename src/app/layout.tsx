import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: "Notivo - Effortless Notifications, Always On Time",
  description:
    "The simplest way to never miss important tasks, keep your schedule organized, and receive timely reminders for everything that matters.",
  keywords:
    "notifications, reminders, discord, telegram, email, scheduling, productivity, task management",
  authors: [{ name: "Notivo Team" }],
  creator: "Notivo",
  publisher: "Notivo",
  robots: "index, follow",
  openGraph: {
    title: "Notivo - Effortless Notifications, Always On Time",
    description:
      "The simplest way to never miss important tasks, keep your schedule organized, and receive timely reminders for everything that matters.",
    type: "website",
    locale: "en_US",
    siteName: "Notivo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notivo - Effortless Notifications, Always On Time",
    description:
      "The simplest way to never miss important tasks, keep your schedule organized, and receive timely reminders for everything that matters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-[9999]"
        >
          Skip to main content
        </a>
        <StructuredData />
        <Header />
        <Container>
          <div id="main-content">{children}</div>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
