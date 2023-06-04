'use client';

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import type { Services } from "@/constants/data";
import Image from "next/image";
import { RiCustomerServiceLine } from 'react-icons/ri';

type propTypes = Services['features'][0] & {
  index: number,
  active: string,
  handleClick: (id: string) => void
}

const ServiceCard = ({ id, imgUrl, title, caption, index, active, handleClick }: propTypes) => (
    <motion.div
      variants={ fadeIn('right', 'spring', index * 0.5, 0.75) }
      className={ `${ active === id 
                      ? 'lg:flex-[3.5] flex-[10]'
                      : 'lg:flex-[0.5] flex-[2]'
                 } relative flex justify-center items-center min-w-[170px] h-[700px] rounded-[24px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden` }
      onClick={ () => handleClick(id) }
    >
      <div className="absolute w-full h-full">
        <Image
          src={ imgUrl }
          alt={ title }
          className="object-cover"
          fill={true}
        />
      </div>

      { active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-[0] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          { title }
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[24px]">
          <div className="flex items-center justify-center w-[60px] h-[60px] bg-white opacity-50 backdrop-blur-md text-black rounded-[24px] mb-[16px]">
            <RiCustomerServiceLine className="w-1/2 h-1/2" />
          </div>

          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            {caption}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            { title }
          </h2>
        </div>
      )}

    </motion.div>
);

export default ServiceCard;