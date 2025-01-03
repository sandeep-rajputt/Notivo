import SectionsTemplate from "./SectionsTemplate";
import PricingCard from "@components/layout/PricingCard";

const PricingData = [
  {
    planName: "Basic Plan",
    image: "/Basic Plan.svg",
    price: "0",
    disc: "Ideal for Occasional Users.",
    highlight: false,
    includes: [
      { text: "5 Telegram Reminders", tick: true },
      { text: "5 Email Reminders", tick: true },
      { text: "5 Discord Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "Telegram Group", tick: false },
      { text: "Discord Channel", tick: false },
      { text: "Attach Images", tick: false },
    ],
  },

  {
    planName: "Standard Plan",
    image: "/Standard Plan.png",
    price: "15",
    disc: "Great for Everyday Use.",
    highlight: true,
    includes: [
      { text: "35 Telegram Reminders", tick: true },
      { text: "35 Email Reminders", tick: true },
      { text: "35 Discord Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "35 Telegram Group", tick: true },
      { text: "35 Discord Channel", tick: true },
      { text: "Attach Images", tick: false },
    ],
  },
  {
    planName: "Premium Plan",
    image: "/Premium Plan.svg",
    price: "19",
    disc: "Best Value for Power Users.",
    highlight: false,
    includes: [
      { text: "100 Telegram Reminders", tick: true },
      { text: "100 Email Reminders", tick: true },
      { text: "100 Discord Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "100 Telegram Group", tick: true },
      { text: "100 Discord Channel", tick: true },
      { text: "Attach Images", tick: true },
    ],
  },
];

export default function Pricing() {
  return (
    <SectionsTemplate
      heading="Best plans, pay what you use"
      disc="Flexible Plans, Pay As You Go. Choose the perfect plan for your notification needs!"
    >
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 items-center justify-center   justify-items-center gap-10 mt-10">
        {PricingData.map((card, index) => {
          return <PricingCard key={index} {...card} />;
        })}
      </div>
    </SectionsTemplate>
  );
}
