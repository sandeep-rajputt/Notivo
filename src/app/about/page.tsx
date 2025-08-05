"use client";
import PageHeading from "@/app/components/PageHeading";
import Testimonials from "@/app/components/Testimonials";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mt-20">
      <PageHeading>About Notivo</PageHeading>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <h3 className="text-xl text-primary-dark mb-4 font-bold">
                Revolutionizing How You Stay Organized and Never Miss What
                Matters
              </h3>
              <div className="space-y-4 text-primary-word">
                <p>
                  At Notivo, we specialize in making sure you never miss an
                  important task or message. We help you set up reminders across
                  WhatsApp, Telegram, email, and more, ensuring you stay on top
                  of everything with ease.
                </p>
                <p>
                  With user-friendly tools and flexible features, we are
                  dedicated to supporting you in staying organized.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-primary-word mb-4">
              Numbers tell our story
            </h2>
            <p className="text-primary-word">
              Notivo helps you stay on top of important reminders,
              notifications, and tasks—keeping your life organized and
              stress-free.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-primary mb-2">450+</h3>
              <p className="text-xl font-semibold text-primary-word mb-2">
                Reminder sent
              </p>
              <p className="text-sm text-primary-word/80">
                Each month across all platforms
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-primary mb-2">20+</h3>
              <p className="text-xl font-semibold text-primary-word mb-2">
                Users worldwide
              </p>
              <p className="text-sm text-primary-word/80">
                Trusting us to keep their lives organized
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-primary mb-2">6k+</h3>
              <p className="text-xl font-semibold text-primary-word mb-2">
                Reminders Sent
              </p>
              <p className="text-sm text-primary-word/80">
                Every day, we help people stay on top of their tasks
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
