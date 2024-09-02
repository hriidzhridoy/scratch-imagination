"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function WelcomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/gamepage");
  };
  return (
    <div className="h-screen w-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://sprint24.net/pic/sm/scratch-cards-print-online/c/-/29W78L.png"
            alt="Scratch Card"
            className="w-3/4 transform transition duration-500 hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Wanna craze your partner?
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200">
            Here's our crazy segment where you and your partner can enjoy a
            pleasant time together.
          </p>
          <button
            onClick={handleClick}
            className="mt-6 px-8 py-4 rounded-full text-lg font-semibold text-purple-800 bg-white hover:bg-purple-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Press Here to Play the Game
          </button>
        </div>
      </div>
    </div>
  );
}
