import React from "react";
import OrangeButton from "@components/ui/OrangeButton";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <section>
      <div className="w-full grid xl:grid-cols-[1fr_1fr] grid-cols-1 pt-20 pb-10 xl:gap-3 gap-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center z-30"
        >
          <div className="relative">
            <Image
              src="/color 2.svg"
              alt="Hero Image"
              width={500}
              height={500}
              draggable="false"
              className="absolute xl:-top-[50%] xl:-left-[30%] left-1/4 xl:w-[100%] w-[80%] -top-1/4 z-0 select-none"
            />

            <div className="relative z-10 flex flex-col 2xl:gap-1 gap-3">
              <motion.p
                variants={itemVariants}
                className="flex items-center xl:justify-start justify-center gap-2"
              >
                <Image
                  src={"/instant-message.png"}
                  width={24}
                  height={24}
                  alt="instant message"
                  draggable="false"
                  className="w-6 select-none"
                />
                <span className="2xl:text-base text-sm font-bold text-primary-dark">
                  Effortless Notifications, Always On Time
                </span>
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className=" font-bold xl:text-start text-center mt-4 mb-8"
              >
                <span className="text-primary 2xl:text-6xl text-5xl">
                  Notivo
                </span>
                <br />
                <span className="mt-2 2xl:text-5xl base:text-4xl text-3xl inline-block text-primary-dark">
                  Simplify Your Life.
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-primary-word font-normal md:w-[70%] md:max-w-full max-w-xl xl:text-start text-center mx-auto xl:mx-0"
              >
                The simplest way to never miss important tasks, keep your
                schedule organized, and receive timely reminders for everything
                that matters.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex xl:justify-start justify-center"
              >
                <OrangeButton shine={true} className="mt-8" href="/signup">
                  Get Started
                </OrangeButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center w-full grid-rows-1 z-10">
          <Image
            src="/color 2.svg"
            alt="Hero Image"
            width={500}
            height={500}
            draggable="false"
            className="absolute xl:-top-[50%] xl:-left-[30%] left-1/4 xl:w-[100%] w-[80%] -top-1/4 z-0 select-none"
          />
          <Image
            src="/color.svg"
            alt="Hero Image"
            width={500}
            height={500}
            draggable="false"
            className="absolute xl:top-0 -top-1/4 xl:w-[100%] w-1/2 z-0 select-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex items-center justify-center z-10"
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                delay: 0,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              src="/hero.png"
              alt="Hero Image"
              className="xl:w-[80%] lg:w-[50%] md:w-[70%] md:max-w-full max-w-md w-full z-10 select-none"
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
