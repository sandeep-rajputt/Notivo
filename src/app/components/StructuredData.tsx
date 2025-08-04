export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Notivo",
    description:
      "The simplest way to never miss important tasks, keep your schedule organized, and receive timely reminders for everything that matters.",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "6",
    },
    featureList: [
      "Discord Reminders",
      "Email Reminders",
      "Telegram Reminders",
      "Recurring Reminders",
      "Scheduled Reminders",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
