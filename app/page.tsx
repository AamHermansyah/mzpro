'use client';

import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <div className="relative mt-20">
        <div className="max-w-[1500px] mx-auto">
          <div className="absolute inset-0 -z-[1]">
            <Image
              src="https://source.unsplash.com/1600x900/?night%20forest"
              alt="forest-bg"
              fill={true}
              className="object-cover opacity-50"
            />
          </div>
          <div className="w-full min-h-[600px] flex flex-col items-start justify-center inner-shadow-bg">
            <div className="p-4 sm:p-10 md:p-20 py-20">
              <h1 className="text-7xl font-bold leading-[75px] text-white">
                Terkesan dengan karya kami?
              </h1>
              <button className="mt-10 text-lg flex gap-2 items-center border border-white text-white hover:bg-white hover:text-black hover:border-black py-3 px-6 rounded-lg font-semibold group">
                Hubungi Kami
                <AiOutlinePhone fontSize={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Solutions />
      <WhyChooseUs />
      <Testimonials />
      <div className="relative bg-white">
        <div className="max-w-[1500px] mt-20 mx-auto p-4 sm:p-10 md:p-20">
          <div className="py-20 flex flex-col items-start justify-center">
            <Image
              src={`https://drive.google.com/uc?export=view&id=1JQoyY9JhwEDw7Xjzc_Nm22Q96dxEHTGh`}
              alt="special wedding"
              fill={true}
              className="absolute inset-0 object-cover opacity-50"
            />
            <div className="z-[1]">
              <h1 className="text-7xl font-bold leading-[75px] text-black">
                Sudah yakin dengan layanan kami?
              </h1>
              <button className="mt-10 text-lg flex gap-2 items-center border border-black text-black hover:bg-black hover:text-white hover:border-black py-3 px-6 rounded-lg font-semibold group">
                Hubungi Kami
                <AiOutlinePhone fontSize={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}
