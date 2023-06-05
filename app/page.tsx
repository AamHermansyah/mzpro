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
import { AiOutlinePhone } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Solutions />
      <WhyChooseUs />
      <Testimonials />
      <div className="bg-white">
        <div className="max-w-[1500px] mt-20 mx-auto p-4 sm:p-10 md:p-20">
          <div className="py-20 flex flex-col items-start justify-center">
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
      <About />
      <Footer />
    </>
  )
}
