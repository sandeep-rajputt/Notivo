"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import PageHeading from "@components/layout/PageHeading";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <main>
      <PageHeading>Conact Us</PageHeading>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md text-center max-w-md mx-auto"
          >
            <div className="inline-block p-4 bg-primary rounded-full mb-4">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-word mb-2">
              Email Us
            </h3>
            <p className="text-primary-word">support@notivo.com</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 mb-40 bg-white shadow-md rounded-lg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-word mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-word mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-word mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary-word mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-word mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
