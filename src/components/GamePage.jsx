"use client";
import React, { useState } from "react";

export default function GamePage() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    // Additional logic can be added here if needed
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Pick a Number from 1 to 10
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-full text-2xl font-semibold ${
              selectedNumber === number
                ? "bg-yellow-400 text-black"
                : "bg-white text-indigo-600"
            } hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out shadow-lg`}
          >
            {number}
          </button>
        ))}
      </div>
      {selectedNumber && (
        <div className="mt-8 text-2xl md:text-3xl text-white">
          You picked: <span className="font-bold">{selectedNumber}</span>
        </div>
      )}
    </div>
  );
}
