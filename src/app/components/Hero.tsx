"use client";
import React from "react";
import PrimaryArrowLink from "@/components/PrimaryArrowLink";
import { motion } from "framer-motion";
import Image from "next/image";
import SecondaryArrowLink from "@/components/SecondaryArrowLink";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Hero: React.FC = () => {
  const loggedIn = false;
  return (
    <section className="mt-10" aria-label="Hero section">
      <div className="w-full grid grid-cols-[1fr_1fr] pt-20 pb-10 xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center z-30"
        >
          <div className="relative">
            <div className="relative z-10 flex flex-col 2xl:gap-1 gap-3">
              <motion.p
                variants={itemVariants}
                className="flex items-center justify-start  gap-2"
              >
                <Image
                  src={"/instant-message.png"}
                  width={24}
                  height={24}
                  alt="instant message"
                  draggable="false"
                  className="w-6 select-none"
                />
                <span className="text-base  font-bold text-primary-dark">
                  Effortless Notifications, Always On Time
                </span>
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="font-bold text-start mt-4 mb-8"
              >
                <span className="text-primary 2xl:text-6xl text-5xl">
                  Notivo
                </span>
                <br />
                <span className="mt-2 text-5xl inline-block text-primary-dark">
                  Simplify Your Life.
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-primary-word font-normal w-[70%] max-w-full  text-start mx-0"
              >
                The simplest way to never miss important tasks, keep your
                schedule organized, and receive timely reminders for everything
                that matters.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex  items-center justify-start my-4 gap-5"
              >
                <SecondaryArrowLink
                  link="https://github.com/sandeep-rajputt/Notivo"
                  external
                  className="py-2"
                >
                  Github ⭐
                </SecondaryArrowLink>
                <PrimaryArrowLink
                  shine={true}
                  className="py-2.5"
                  link={loggedIn ? "dashboard" : "register"}
                >
                  {loggedIn ? "dashboard" : "Get Started"}
                </PrimaryArrowLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center w-full grid-rows-1 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex items-center justify-center z-10"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                delay: 0,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[80%] max-w-full z-10 select-none"
            >
              <Image
                src="/hero.png"
                alt="Notivo notification dashboard interface showing reminder management"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
                draggable="false"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
