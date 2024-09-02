"use client";
import React, { useState } from "react";

export default function GamePage() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Animation duration
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-500 to-purple-600">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Pick a Number from 1 to 10
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-full text-2xl font-semibold ${
              selectedNumber === number && showPopup
                ? "animate-spin-once bg-yellow-400 text-black"
                : "bg-white text-indigo-600"
            } hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out shadow-lg`}
          >
            {number}
          </button>
        ))}
      </div>
      {showPopup && selectedNumber && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold bg-yellow-400 text-black animate-pop-up">
            {selectedNumber}
          </div>
        </div>
      )}
    </div>
  );
}
