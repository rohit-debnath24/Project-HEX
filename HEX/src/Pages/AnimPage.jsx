import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  "Started Learning",
  "Built First App",
  "Won a Hackathon",
  "Got an Internship",
  
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let i = 0;

    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        if (i < timelineData.length) {
          setActiveIndex(i);
          setLineHeight((prev) => prev + 80); // match spacing
          i++;
        } else {
          clearInterval(intervalRef.current);

          // Wait a bit, then reset and restart
          setTimeout(() => {
            setActiveIndex(-1);
            setLineHeight(0);
            i = 0;
            startAnimation();
          }, 500); // delay before looping again
        }
      }, 1500); // speed per step
    };

    startAnimation();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative flex h-150 justify-start pl-0 pt-0  overflow-hidden">
      {/* Animated Vertical Line */}
      <div
        className="absolute left-0 top-0 w-1 bg-blue-500 transition-all duration-500"
        style={{ height: lineHeight }}
      />

      {/* Timeline Boxes */}
      <div className="flex flex-col space-y-2 ml-10 relative z-10">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-box p-6 rounded-lg bg-white shadow-md w-80 transition-transform duration-500 transform"
          >
            {/* Always-visible heading */}
            <h3 className="font-bold text-lg">{item}</h3>

            {/* Expand/Collapse inner text */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="text-sm text-gray-600">
                Description for {item.toLowerCase()}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}