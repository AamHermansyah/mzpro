'use client';

import { useState } from "react";

import { motion } from "framer-motion";
import { services } from "@/constants/data";
import ServiceCard from "./ServiceCard";
import { staggerContainer } from "@/utils/motion";
import PSerifFont from "../PSerifFont";

const Services = () => {
  const [active, setActive] = useState(services.features[1].id);

  return (
    <section id="services" className="p-4 sm:p-10 md:p-20 mt-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1500px] mx-auto"
      >
        <h1 className="text-3xl sm:text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Layanan
        </h1>
        <PSerifFont className="text-center text-xl xl:text-2xl py-2 sm:py-4 border-b-2">
          Memastikan Kepuasan Anda melalui Layanan Fotografi yang Berkualitas.
        </PSerifFont>
        <div className="mt-6 flex lg:flex-row flex-col min-h-[700px] gap-5">
          {services.features.map((world, index) => (
            <ServiceCard       
              key={ world.id }          
              { ...world }
              index={ index }
              active={ active }
              handleClick={ setActive }
            />
          )) }
        </div>
      </motion.div>
    </section>
  );
};
  
export default Services;