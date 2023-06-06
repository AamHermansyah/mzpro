import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import PSerifFont from "./PSerifFont";
import { textVariant } from "@/utils/motion";

const breakpoints = {
  default: 4,
  1700: 3,
  800: 2,
  500: 1
}

const imageSizes = ['300x300', '600x900', '1600x900', '400x500', '550x700', '500x500', '900x1600', '300x400'];

function Gallery() {
  return (
    <section id="gallery" className="p-4 mt-10 sm:mt-0">
      <div>
        <h1 className="text-white text-3xl sm:text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Gallery
        </h1>
        <PSerifFont className="text-2xl xl:text-3xl font-semibold text-center sm:mt-4">
          {`"Berkolaborasilah dan menjadi bagian dari kami"`}
        </PSerifFont>
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-2 md:gap-2 mt-6"
        >
          {['1nWCsCcO5w2GI1mL7K5YU9q4VZxAcreJU', '1U0AdKG-uJDTS4K5E_W1ByZVKfxg0WajQ', '1N6Y5RyOiXmB-t40SyMnMmAIgEPi-gsTJ', '1I9MYPu9eNofiJInQ7Gzdc0MLo2iX0wxl', '1v7a5AbLYCpujNmRfNSoR_TE13obj9GS9', '1gofHwSSinVMdzTtozH7ZbWbZKVQWzAOf', '1gwNOCYDUwxKEdgCa6GZy5lcshzEiXudQ', '1EUiVn17sFqvf3-55v7lYOQwWcvvkDs3b']
            .map((id, index) => (
              <img
                key={index}
                src={`https://drive.google.com/uc?export=view&id=${id}`}
                alt={id}
                className="w-full object-contain border mt-2"
              />
            ))}
        </Masonry>
        <motion.button
          variants={textVariant(1.1)}
          className="mx-auto mt-10 text-lg flex gap-2 items-center border border-white text-white hover:border-black hover:bg-white hover:text-black py-3 px-6 rounded-lg font-semibold group"
        >
          Lebih Banyak
        </motion.button>
      </div>
    </section>
  )
}

export default Gallery