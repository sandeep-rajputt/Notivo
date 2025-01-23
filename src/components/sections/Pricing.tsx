import SectionsTemplate from "@components/sections/SectionsTemplate";
import PricingCard from "@components/layout/PricingCard";

const PricingData = [
  {
    planName: "Basic Plan",
    image: "/Basic Plan.svg",
    price: "0",
    disc: "Ideal for Occasional Users.",
    highlight: false,
    includes: [
      { text: "5 Telegram reminders", tick: true },
      { text: "5 Email reminders", tick: true },
      { text: "5 Discord reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "Telegram group", tick: false },
      { text: "Discord channel", tick: false },
      { text: "Disconnect platform", tick: false },
      { text: "Attach images", tick: false },
    ],
  },

  {
    planName: "Standard Plan",
    image: "/Standard Plan.png",
    price: "15",
    disc: "Great for Everyday Use.",
    highlight: true,
    includes: [
      { text: "35 Telegram reminders", tick: true },
      { text: "35 Email reminders", tick: true },
      { text: "35 Discord reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "35 Telegram group", tick: true },
      { text: "35 Discord channel", tick: true },
      { text: "Disconnect platform", tick: true },
      { text: "Attach images", tick: false },
    ],
  },
  {
    planName: "Premium Plan",
    image: "/Premium Plan.svg",
    price: "19",
    disc: "Best Value for Power Users.",
    highlight: false,
    includes: [
      { text: "100 Telegram reminders", tick: true },
      { text: "100 Email reminders", tick: true },
      { text: "100 Discord reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "100 Telegram group", tick: true },
      { text: "100 Discord channel", tick: true },
      { text: "Disconnect platform", tick: true },
      { text: "Attach images", tick: true },
    ],
  },
];

export default function Pricing() {
  return (
    <SectionsTemplate
      heading="Best plans, pay what you use"
      disc="Flexible Plans, Pay As You Go. Choose the perfect plan for your notification needs!"
    >
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 items-center base:justify-center   justify-items-center gap-10">
        {PricingData.map((card, index) => {
          return <PricingCard key={index} {...card} />;
        })}
      </div>
    </SectionsTemplate>
  );
}
