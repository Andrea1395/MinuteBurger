"use client";
import React from "react";
import SpecialitiesItem from "./SpecialitiesItem";
import { motion } from "framer-motion";
function Specialities() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center lg:justify-start"
        >
          <img src="about-img.png" className="w-1/2 lg:w-3/4" />
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white uppercase mt-4 lg:mt-0">
            Pizze Speciali!
          </h3>
          <p className="text-gray-400 leading-loose mt-4">
            ...
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white mt-8">
            <SpecialitiesItem title="best price" />
            <SpecialitiesItem title="Best Service" />
            <SpecialitiesItem title="Fresh Ingredient" />
            <SpecialitiesItem title="backed buns" />
            <SpecialitiesItem title="natural cheese" />
            <SpecialitiesItem title="veg & non-veg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Specialities;
