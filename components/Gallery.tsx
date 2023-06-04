import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import PSerifFont from "./PSerifFont";
import { textVariant } from "@/utils/motion";

const breakpoints = {
  1700: 4,
  1000: 3,
  800: 2,
  500: 1
}

function Gallery() {
  const [imageSize, setSmageSize] = useState({
    width: 100,
    height: 100
   });

  return (
    <section id="gallery" className="p-4">
      <div>
        <h1 className="text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Gallery
        </h1>
        <PSerifFont className="text-3xl font-semibold text-center">
          {`"Menjadi bagian dari kami"`}
        </PSerifFont>
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-2 md:gap-4 mt-6"
        >
          <div className="border mt-2">
            <img
              src="https://source.unsplash.com/900x900/?jungle"
              alt="gallery-1"
              onLoadingComplete={(target) => {
                setSmageSize({
                  width: target.naturalWidth,
                  height: target.naturalHeight
                });
              }}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full object-contain"
            />
          </div>
          <div className="border mt-2">
            <img
              src="https://source.unsplash.com/900x1600/?tree"
              alt="gallery-1"
              onLoadingComplete={(target) => {
                setSmageSize({
                  width: target.naturalWidth,
                  height: target.naturalHeight
                });
              }}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full object-contain"
            />
          </div>
          <div className="border mt-2">
            <img
              src="https://source.unsplash.com/900x600/?river"
              alt="gallery-1"
              onLoadingComplete={(target) => {
                setSmageSize({
                  width: target.naturalWidth,
                  height: target.naturalHeight
                });
              }}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full object-contain"
            />
          </div>
          <div className="border mt-2">
            <img
              src="https://source.unsplash.com/900x1000/?photographer"
              alt="gallery-1"
              onLoadingComplete={(target) => {
                setSmageSize({
                  width: target.naturalWidth,
                  height: target.naturalHeight
                });
              }}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full object-contain"
            />
          </div>
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