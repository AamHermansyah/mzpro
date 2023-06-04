'use client';

import { useState } from "react";

import { motion } from "framer-motion";
import { services } from "@/constants/data";
import ServiceCard from "./Services/ServiceCard";
import { staggerContainer } from "@/utils/motion";
import PSerifFont from "./PSerifFont";
import Image from "next/image";

const Services = () => {
  const [active, setActive] = useState(services.card[1].id);

  return (
    <section id="services" className="p-4 sm:p-10 md:p-20 mt-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1500px] mx-auto"
      >
        <h1 className="text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Layanan
        </h1>
        <PSerifFont className="text-center text-xl py-2 sm:py-4 border-b-2">
          Memastikan Kepuasan Anda melalui Layanan Fotografi yang Berkualitas.
        </PSerifFont>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[700px] gap-5">
          {services.card.map((world, index) => (
            <ServiceCard       
              key={ world.id }          
              { ...world }
              index={ index }
              active={ active }
              handleClick={ setActive }
            />
          )) }
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 md:gap-20 mt-20">
          <div className="flex-1">
            <PSerifFont className="text-xl">
              {services.paragraph}
            </PSerifFont>
            <div className="mt-6 relative aspect-square rounded-lg">
              <Image
                src="https://source.unsplash.com/1600x900/?couple"
                alt="special wedding"
                fill={true}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex-[0.75] w-full max-w-[370xpx]">
            <h4 className="text-3xl sm:text-5xl font-semibold uppercase sm:leading-[60px]">
              Solusi yang kamu butuhkan
            </h4>
            <ul className="mt-4 sm:mt-10">
              {services.lists.map((list, index) => (
                <li className="flex items-center gap-4 mb-2 sm:mb-4" key={index + 1}>
                  <span className="inline-flex justify-center items-center w-[60px] sm:w-[70px] aspect-square rounded-2xl bg-gray-600 bg-opacity-50 text-xl sm:text-2xl font-semibold">
                    0{index + 1}
                  </span>
                  <p className="sm:text-xl tracking-wider text-gray-400 uppercase whitespace-pre-wrap sm:whitespace-nowrap lg:whitespace-pre-wrap">
                    {list}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
  
export default Services;