import React from 'react'
import PSerifFont from './PSerifFont'
import { services, solutions } from '@/constants/data'
import Image from 'next/image'
import { AiOutlinePhone } from 'react-icons/ai'

function Solutions() {
  return (
    <section id="solutions" className="p-4 sm:p-10 md:p-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="mt-10 sm:mt-0 h-[500px] flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold leading-[75px] text-white">
            Terkesan dengan karya karya kami?
          </h1>
          <button className="self-start mt-10 text-lg flex gap-2 items-center border border-white text-white hover:bg-white hover:text-black hover:border-black py-3 px-6 rounded-lg font-semibold group">
            Hubungi Kami
            <AiOutlinePhone fontSize={24} />
          </button>
        </div>
        <div className="mt-20 w-full flex flex-col lg:flex-row justify-between gap-10 md:gap-20">
          <div className="flex-1">
            <div className="mt-6 relative aspect-square rounded-lg">
              <Image
                src="https://source.unsplash.com/1600x900/?couple"
                alt="special wedding"
                fill={true}
                className="object-cover"
              />
            </div>
            <PSerifFont className="text-xl xl:text-2xl mt-6">
              {solutions.paragraph}
            </PSerifFont>
          </div>
          <div className="flex-[0.75] w-full max-w-[370xpx] px-4 sm:px-0">
            <h1 className="text-4xl sm:text-5xl font-semibold sm:leading-[65px]">
              Solusi yang kamu <br /> butuhkan
            </h1>
            <ul className="mt-4 sm:mt-10">
              {services.lists.map((list, index) => (
                <li className="flex items-center gap-4 mb-2 sm:mb-4" key={index + 1}>
                  <span className="inline-flex justify-center items-center w-[60px] sm:w-[70px] aspect-square rounded-2xl bg-gradient-to-r from-[#FC575E] to-[#F7B42C] text-xl sm:text-2xl font-semibold">
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
      </div>
    </section>
  )
}

export default Solutions