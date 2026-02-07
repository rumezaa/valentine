"use client";

import { useState } from "react";

const BALLOON_COLORS = [
  "#ff6b9d",
  "#c44569",
  "#f8b500",
  "#6bcb77",
  "#4d96ff",
  "#9b59b6",
  "#e74c3c",
  "#00d2d3",
];

function Balloons() {
  return (
    <div className="balloon-container" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            animationDelay: `${i * 0.4}s`,
            backgroundColor: BALLOON_COLORS[i % BALLOON_COLORS.length],
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white relative">
      {clicked && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in-bg"
          style={{ backgroundImage: "url(/image.png)" }}
          aria-hidden
        />
      )}
      {clicked && <Balloons />}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center w-full">
        {!clicked ? (
          <button
            type="button"
            onClick={() => setClicked(true)}
            className="px-8 py-4 text-xl font-semibold rounded-2xl bg-rose-400 text-white shadow-lg hover:bg-rose-500 hover:scale-105 active:scale-95 transition-all duration-200 select-none cursor-pointer border-2 border-rose-600/30"
          >
            don&apos;t click me
          </button>
        ) : (
          <div className="flex flex-col items-center gap-10 animate-fade-in text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 max-w-3xl mx-auto drop-shadow-lg">
              will u be build a passion project with me?
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-red-600 max-w-3xl mx-auto drop-shadow-lg">
              u have to come to ascend (house 831 17th street) on Friday February 13 2026 6-9 pm <span className="emoji-red inline-block" aria-hidden>😡</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
