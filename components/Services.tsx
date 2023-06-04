'use client';

import { useState } from "react";

import { motion } from "framer-motion";
import { exploreWorlds } from "@/constants/data";
import ExploreCard from "./Services/ServiceCard";
import { staggerContainer } from "@/utils/motion";

const Explore = () => {

  const [active, setActive] = useState(exploreWorlds[1].id);

  return (
    <section id="explore" className="p-4 sm:p-10 md:p-20">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1500px] mx-auto"
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[700px] gap-5">
          { exploreWorlds.map((world, index) => (
            <ExploreCard       
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
  
export default Explore;