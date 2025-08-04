"use client";
import SectionsTemplate from "@/app/components/SectionsTemplate";
import FeaturesCard from "@/app/components/FeaturesCard";
import {
  FaClock,
  FaRedo,
  FaEnvelope,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

type CardData = {
  heading: string;
  disc: string;
  color: string;
  icon: React.ReactNode;
};

const cardData: CardData[] = [
  {
    heading: "Discord Reminders",
    disc: "Receive reminders in your Discord server, keeping you updated on important tasks and events.",
    color: "blue",
    icon: <FaDiscord className="text-white text-3xl" />,
  },
  {
    heading: "Email Reminders",
    disc: "Get reminders sent straight to your inbox, ensuring you never miss an important update.",
    color: "purple",
    icon: <FaEnvelope className="text-white text-3xl" />,
  },
  {
    heading: "Telegram Reminders",
    disc: "Stay informed with reminders delivered directly to your Telegram, wherever you are.",
    color: "blue",
    icon: <FaTelegram className="text-white text-3xl" />,
  },
  {
    heading: "Recurring Reminders",
    disc: "Create daily, weekly, or monthly reminders, so you never forget recurring tasks or commitments.",
    color: "orange",
    icon: <FaRedo className="text-white text-3xl" />,
  },
  {
    heading: "Scheduled Reminders",
    disc: "Set reminders for specific times, so you're always on top of your important events and deadlines.",
    color: "cyan",
    icon: <FaClock className="text-white text-3xl" />,
  },
];

export default function Features() {
  return (
    <SectionsTemplate
      heading="Features"
      disc="Notivo offers a range of features designed to simplify your life and help you stay organized."
    >
      <div className="grid grid-cols-3 gap-10" role="list">
        {cardData.map((card, index) => (
          <FeaturesCard key={`feature-${index}`} {...card} />
        ))}
      </div>
    </SectionsTemplate>
  );
}
