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

const imageSizes = ['300x300', '600x900', '1600x900', '400x500', '900x1600', '550x700', '500x500', '300x400']

function Gallery() {
  const [imageSize, setSmageSize] = useState({
    width: 100,
    height: 100
   });

  return (
    <section id="gallery" className="p-4 mt-10 sm:mt-0">
      <div>
        <h1 className="text-3xl sm:text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Gallery
        </h1>
        <PSerifFont className="text-2xl xl:text-3xl font-semibold text-center sm:mt-4">
          {`"Berkolaborasilah dan menjadi bagian dari kami"`}
        </PSerifFont>
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-2 md:gap-2 mt-6"
        >
          {['jungle', 'river', 'people', 'man', 'wedding', 'couple', 'tree', 'night']
            .map((query, index) => (
              <img
                key={index}
                src={`https://source.unsplash.com/random/${imageSizes[index]}/?${query}`}
                alt={query}
                className="w-full object-contain border mt-2"
              />
            ))}
        </Masonry>
        <motion.button
          variants={textVariant(1.1)}
          className="mx-auto mt-10 text-lg flex gap-2 items-center border border-white bg-black text-white hover:border-black hover:bg-white hover:text-black py-3 px-6 rounded-lg font-semibold group"
        >
          Lebih Banyak
        </motion.button>
      </div>
    </section>
  )
}

export default Gallery