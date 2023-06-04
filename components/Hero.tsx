import PSerifFont from "@/components/PSerifFont";
import Image from "next/image";
import { BsBoxArrowInDownRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

function Hero() {
  return (
    <section id="hero" className="relative px-4 sm:px-10 md:px-20">
      <motion.div
        variants={ staggerContainer(.2, .1) }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="min-h-[600px] max-w-[1500px] mx-auto flex gap-4 flex-col md:flex-row items-center justify-center py-4 sm:py-10 md:py-20"
      >
        <div
          className="absolute top-[20px] right-[50px] w-[500px] aspect-square bg-sky-500"
          style={{ filter: 'blur(300px)'}}
        />
        <div className="absolute inset-0 -z-[1]">
          <img
            src="https://source.unsplash.com/1600x900/?pattern"
            alt="hero image"
            className="hidden sm:block w-full h-full object-cover opacity-20"
          />
          <img
            src="https://source.unsplash.com/900x1600/?pattern"
            alt="hero image"
            className="block sm:hidden w-full h-full object-cover opacity-20"
          />
        </div>
        <div
          className="mt-32 md:mt-0 md:flex-1"
        >
          <motion.h1
            variants={textVariant(.7)}
            className="text-6xl lg:text-8xl font-extrabold"
          >
            M. Zidan Fatoni
          </motion.h1>
          <motion.div variants={textVariant(1)}>
            <PSerifFont className="mt-4 text-xl text-gray-300">
              Saya adalah seorang potografer berbakat yang menjelajahi keindahan manusia dan alam, menghadirkan keajaiban dalam setiap foto yang saya ambil.
            </PSerifFont>
          </motion.div>
          <motion.button
            variants={textVariant(1.1)}
            className="mt-6 text-lg flex gap-2 items-center bg-blue-primary text-white py-3 px-6 rounded-lg font-semibold group"
          >
            Rekrut Saya
            <BsBoxArrowInDownRight
              fontSize={22}
              className="group-hover:scale-105 transition"
            />
          </motion.button>
        </div>
        <motion.div
          variants={fadeIn('bottom', 'spring', 0.5, 0.75)}
          className="my-10 sm:my-0 relative md:flex-1 w-full aspect-video md:aspect-square overflow-hidden"
        >
          <Image
            src="https://source.unsplash.com/600x600/?photographer"
            alt="hero image"
            fill={true}
            className="object-cover object-top img-clip-path-1"
            onMouseEnter={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.zIndex = "1";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLImageElement;
              setTimeout(() => { 
                target.style.zIndex = "0";
              }, 200);
            }}
          />
          <Image
            src="https://source.unsplash.com/600x600/?camera"
            alt="hero image"
            fill={true}
            className="object-cover object-center img-clip-path-2"
            onMouseEnter={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.zIndex = "1";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLImageElement;
              setTimeout(() => { 
                target.style.zIndex = "0";
              }, 200);
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero