"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroSection() {
  

  return (
    <div suppressHydrationWarning className="flex flex-col-reverse lg:flex-row items-center">
      <div suppressHydrationWarning className="w-full lg:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="flex flex-col"
        >
          <span className="text-yellow-400 text-7xl font-bold capitalize font-Caveat text-center lg:text-start">
            La Marinara
          </span>
          <h1 className="text-4xl text-white uppercase mt-2 font-Lilita text-center lg:text-start">
            Pizzeria d'asporto
          </h1>
          <p className="text-gray-400 mt-8 text-center lg:text-start">
            Forno a legna
            Pizza e Pane Fresco
          </p>
          <button
            type="button"
            className="text-black font-bold bg-yellow-400 rounded-full px-8 py-2 mt-8 max-w-max self-center lg:self-start transition-transform hover:scale-105 shadow-lg shadow-yellow-800"
          >
            Prenota Adesso!
          </button>
        </motion.div>
      </div>

      <div suppressHydrationWarning className="w-full lg:w-1/2">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          <img src="/beef-burger.webp" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
