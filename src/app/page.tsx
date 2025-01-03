"use client";

import Features from "@components/sections/Features";
import Hero from "@components/sections/Hero";
import Pricing from "@components/sections/Pricing";

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="py-10">
        <Features />
        <Pricing />
      </div>
    </main>
  );
}
