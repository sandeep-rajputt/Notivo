"use client";
import SectionsTemplate from "@/app/components/SectionsTemplate";
import TestimonialCard from "@/app/components/TestimonialCard";

const testimonialsData = [
  {
    name: "Parveen Saini",
    feedback:
      "Notivo has completely transformed how I manage my tasks. I never miss important deadlines anymore!",
    rating: 5,
    image: "/piku.jpg",
  },
  {
    name: "Gaurav Rana",
    feedback:
      "The recurring reminders feature is a lifesaver! It’s simple, efficient, and keeps me on track daily.",
    rating: 5,
    image: "/guri.jpg",
  },
  {
    name: "Amit Rajput",
    feedback:
      "I love how reminders are sent directly to my Telegram. It’s fast and so convenient for my busy schedule.",
    rating: 5,
    image: "/amit.jpg",
  },
  {
    name: "Johny Parmar",
    feedback:
      "Notivo is super easy to use, and it helps me stay organized, both at work and in my personal life.",
    rating: 5,
    image: "/johny.jpg",
  },
  {
    name: "Chintu Don",
    feedback:
      "I’ve tried many reminder tools, but Notivo stands out for its simplicity and reliability. Highly recommend!",
    rating: 5,
    image: "/chintu.jpg",
  },
  {
    name: "Yuvraj Singh",
    feedback:
      "Thanks to Notivo, I never miss any important updates. It’s like having a personal assistant in my pocket.",
    rating: 5,
    image: "/yuvraj.jpg",
  },
];

export default function Testimonials() {
  return (
    <SectionsTemplate
      heading="What Other People Say"
      disc="Helping people stay organized and on time, no matter where they are. Join a worldwide community of users who trust Notivo for timely reminders and notifications."
    >
      <div
        className="grid grid-cols-3 items-center justify-center justify-items-center gap-10"
        role="list"
      >
        {testimonialsData.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={`testimonial-${testimonial.name}-${index}`}
              name={testimonial.name}
              feedback={testimonial.feedback}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          );
        })}
      </div>
    </SectionsTemplate>
  );
}
