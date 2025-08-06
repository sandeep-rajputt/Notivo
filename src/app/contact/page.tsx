"use client";

import PageHeading from "@/app/components/PageHeading";
import FAQ from "@/app/components/FAQ";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSend,
  MdCheckCircle,
} from "react-icons/md";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import PrimaryTextarea from "@/components/inputs/PrimaryTextarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqData = [
    {
      question: "How quickly do you respond to messages?",
      answer: "We typically respond within 24 hours during business days.",
    },
    {
      question: "What platforms does Notivo support?",
      answer:
        "Notivo supports Email, Telegram, and Discord for delivering reminders and notifications.",
    },
    {
      question: "Is Notivo free to use?",
      answer:
        "Yes! Notivo is a web-based platform that's completely free to use with no subscription plans required.",
    },
    {
      question: "Is Notivo fully functional yet?",
      answer:
        "Notivo is currently a work in progress. We&apos;re actively developing and refining the platform to make it stable and fully functional.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "Yes! We provide technical support and are happy to help with any questions about Notivo&apos;s features.",
    },
    {
      question: "Can I schedule a demo?",
      answer:
        "Absolutely! Contact us to learn more about Notivo and see how it can help you stay organized.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="mt-20">
      <PageHeading>Get In Touch</PageHeading>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-lg text-primary-word mb-8">
                  Ready to transform how you manage reminders? Have questions
                  about Notivo&apos;s features? We&apos;re here to help! Reach
                  out to us and discover how we can keep you organized and on
                  track.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MdEmail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark">Email</h3>
                    <p className="text-primary-word">hello@notivo.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MdPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark">Phone</h3>
                    <p className="text-primary-word">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MdLocationOn className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark">Address</h3>
                    <p className="text-primary-word">
                      123 Tech Street, Digital City, DC 12345
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <MdCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-primary-word">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-6">
                      Send us a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <PrimaryInput
                      value={formData.name}
                      handeleChange={handleChange}
                      placeholder="Your name"
                      label="Name"
                      required={true}
                      title="name"
                      type="text"
                    />

                    <PrimaryInput
                      value={formData.email}
                      handeleChange={handleChange}
                      placeholder="Your email address"
                      label="Email"
                      required={true}
                      title="email"
                      type="email"
                    />
                  </div>

                  <PrimaryInput
                    value={formData.subject}
                    handeleChange={handleChange}
                    placeholder="What's this about?"
                    label="Subject"
                    required={true}
                    type="text"
                    title="subject"
                  />

                  <PrimaryTextarea
                    value={formData.message}
                    handeleChange={handleChange}
                    placeholder="Tell us more about your inquiry"
                    label="Message"
                    required={true}
                    title="message"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <MdSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ faqData={faqData} />
    </main>
  );
}
