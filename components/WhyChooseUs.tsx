import React from 'react'
import PSerifFont from './PSerifFont'
import Image from 'next/image'
import { BsPeopleFill } from 'react-icons/bs'
import { whyChooseUs } from '@/constants/data'

function WhyChooseUs() {
  return (
    <section id="solutions" className="mt-10 sm:mt-0">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 md:px-20">
        <div className="relative text-center">
          <h1 className="text-xl text-gray-300 font-semibold py-2 uppercase tracking-[0.5rem]">
            Kenapa memilih kami
          </h1>
          <PSerifFont className="text-xl xl:text-2xl pb-4">
            Kualitas Terbaik untuk Kenangan yang Tidak Terlupakan
          </PSerifFont>
          <span className="block absolute bottom-0 left-[50%] -translate-x-[50%] w-full max-w-[600px] h-[1px] rounded bg-gray-600" />
        </div>
        <div className="mt-10">
          <ul className="max-w-[500px] md:max-w-none mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
            {whyChooseUs.features.map((feature) => (
              <li
                className="relative mb-4 px-6 sm:px-10 py-6 rounded-md overflow-hidden"
                key={feature.id}
              >
                <span className="flex justify-center items-center w-[60px] sm:w-[70px] aspect-square bg-gradient-to-tr from-[#009FFD] to-[#2A2A72] border rounded-full">
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-semibold mt-4">
                  {feature.title}
                </h3>
                <PSerifFont className="sm:text-xl text-gray-400">
                  {feature.description}
                </PSerifFont>

                <div
                  className="absolute bottom-0 left-[50%] translate-y-[70%] -translate-x-[50%] w-[100px] aspect-square bg-white -z-[1] rounded-full"
                  style={{
                    filter: 'blur(100px)'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs