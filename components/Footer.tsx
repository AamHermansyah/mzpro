'use client';

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Footer = () => (
    <motion.footer
        variants={ footerVariants }
        initial="hidden"
        whileInView="show"
        className="pb-4 relative"
    >
      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-white opacity-10"/>

        <div className="px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="block relative w-[80px] aspect-square">
              <Image src="/images/mz-pro-logo.png" alt="MZ PRO logo" fill={true} className="object-contain" />
            </Link>
            <div className="md:hidden flex gap-4">
              <Link href="/" rel="noopener noreferrer">
                <BsFacebook className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/" rel="noopener noreferrer">
                <AiFillInstagram className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/" rel="noopener noreferrer">
                <BsWhatsapp className="w-[24px] h-[24px]" />
              </Link>
            </div>
          </div>
          <p className="font-normal text-[14px] text-gray-300 text-center">
            Copyright© MZ Photographer. All rights reserved.
          </p>
          <div className="hidden md:flex gap-4">
            <Link href="/" rel="noopener noreferrer">
              <BsFacebook className="w-[24px] h-[24px]" />
            </Link>
            <Link href="/" rel="noopener noreferrer">
              <AiFillInstagram className="w-[24px] h-[24px]" />
            </Link>
            <Link href="/" rel="noopener noreferrer">
              <BsWhatsapp className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
    </div>
    </motion.footer>
);

export default Footer;