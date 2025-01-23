import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@store/ReduxProvider";
import Header from "@components/layout/header/Header";
import Container from "@components/ui/Container";
import Footer from "@components/layout/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Notivo - Stay On Top of Your Tasks with Smart Reminders",
  description:
    "Get organized and stay productive with Notivo. From work-related tasks to personal reminders, Notivo makes sure you're always on time and informed. Set reminders now and never forget a thing!",
};

export default function RootLayout({
  children,
  model,
}: Readonly<{
  children: React.ReactNode;
  model: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`antialiased overflow-x-hidden`}>
        <NextTopLoader
          zIndex={99999999999}
          color="#6a49f2"
          showSpinner={false}
        />
        <ReduxProvider>
          <div className="grid grid-rows-[1fr_auto] min-h-screen ">
            {model}
            <Header />
            <div className="pt-20 ">
              <Container>{children}</Container>
            </div>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
