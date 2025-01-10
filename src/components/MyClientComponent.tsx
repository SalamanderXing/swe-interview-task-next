// WARNING: You can modify the content of this file as much as you like! Except for the content of **loadDataFromServer**, as the warning says.
// NOTE: Wherever you see that there is a delay, you must display a suspense/loader/spinner.
// TODO: You must put a button that, when clicked, loads the data from loadDataFromServer.
// TODO: After the data is loaded, display it in a component that is as similar as possible to the figma shared by Daniele

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const loadDataFromServer = async (size: number) => {
  // WARNING: you can move around this function as much as you like, but but you cannot edit the conent of this function!
  // NOTE: this function can only run from the server!
  if (typeof window !== "undefined") {
    throw new Error("Yo ure on the client!");
  }
  console.log("hello from the server");

  await new Promise((resolve) => setTimeout(resolve, 2_000));

  function generateMockProfileSVG(i: number): string {
    const colors = [
      "#E57373", // Red-ish
      "#F06292", // Pink-ish
      "#BA68C8", // Purple-ish
      "#9575CD", // Deep Purple-ish
      "#7986CB", // Indigo-ish
      "#64B5F6", // Blue-ish
      "#4FC3F7", // Light Blue-ish
      "#4DD0E1", // Cyan-ish
    ];

    const color = colors[i % colors.length];
    const radius = size * 0.5; // Make radius 40% of the size for proper scaling

    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 ${size} ${size}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="${color}" />
    </svg>
  `.trim();
  }

  const ratingDataWithoutProfiles = [
    {
      "rating": 5,
      "review":
        "The team at AI Kosmo exceeded our expectations. Their ability to understand our needs and deliver a tailored solution was remarkable. Their professionalism and dedication are truly unmatched!",
      "name": "Luca Bertolini",
      "role": "Hotelier, Grand Hotel Venezia",
    },
    {
      "rating": 4,
      "review":
        "Working with AI Kosmo was a fantastic experience. They combined innovation with a personal touch, creating a chatbot that feels like a real conversation partner. Highly recommended!",
      "name": "Giulia Mancini",
      "role": "CEO, Relax and Renew Spas",
    },
    {
      "rating": 3,
      "review":
        "We were impressed by their creativity and focus on user satisfaction. AI Kosmo delivered a solution that has transformed the way we engage with our clients. Exceptional work!",
      "name": "Alessandro Rossi",
      "role": "Owner, Tranquilo Boutique Hotels",
    },
    {
      "rating": 5,
      "review":
        "The AI Kosmo team is professional, approachable, and always available for support. They turned our vague ideas into a cutting-edge chatbot solution. We're thrilled with the results!",
      "name": "Sofia Rinaldi",
      "role": "Marketing Manager, GreenStay Hotels",
    },
    {
      "rating": 4,
      "review":
        "AI Kosmo's expertise and attention to detail are extraordinary. Our new chatbot has improved customer satisfaction and reduced response times. A big thank you to the team!",
      "name": "Matteo Bianchi",
      "role": "General Manager, Urban Suites",
    },
    {
      "rating": 3,
      "review":
        "Daniele and Giulio provided outstanding service, delivering a chatbot that fits perfectly with our company’s needs. Their innovative approach has set a new standard for our user interactions.",
      "name": "Elena Ferraro",
      "role": "Founder, Inspire Consulting",
    },
  ];
  return ratingDataWithoutProfiles.map((datum, i) => ({
    ...datum,
    profile: generateMockProfileSVG(i),
  }));
};

type Testimonials = Awaited<ReturnType<typeof loadDataFromServer>>;

export default function () {
  // Again, feel free to modify whatever you want in this component. These are just suggestions.
  const [testimonials, setTestimonials] = useState<Testimonials | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clicked, setClicked] = useState(false);

  const click = async () => {
    setClicked(true);
    const data = await loadDataFromServer(48);
    setTestimonials(data);
  };

  const nextSlide = () => {
    if (!testimonials) return;
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      {/* WARNING: we need the following button to load the data! Then you may make this button disappear if u like. */}
      <Button onClick={click}>Load Data Already</Button>
    </div>
  );
}
