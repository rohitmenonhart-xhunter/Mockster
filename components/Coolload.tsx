"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const loadingStates = [
  { text: "The call for your trainer has been placed..." },
  { text: "Take a deep breath. Hydrate and get ready." },
  { text: "Stay calm. It's your time to shine." },
  { text: "Your trainer has been identified. They’re ready for you." },
  { text: "Get in the zone. Your mock interview is about to begin." },
  { text: "Focus. Confidence is key." },
  { text: "You’ve got this. Let’s ace this interview." },
  { text: "Time to Mockster!!" },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);

  const startLoader = () => {
    setLoading(true);
    const totalDuration = loadingStates.length * 2000; // Total animation time
    setTimeout(() => {
      window.location.href = "https://h1-mock.vercel.app/"; // Redirect
    }, totalDuration);
  };

  return (
    <div className="w-full h-[5vh] flex items-center justify-center mb-5">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <a
        href="https://m1-mock.vercel.app/"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          startLoader(); // Trigger the loader and redirection logic
        }}
      >
        <MagicButton
          title="Call trainer"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
}
