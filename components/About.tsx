import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section id="about" className="my-10">
      <div className="max-w-[1500px] mx-auto sm:p-10 md:p-20">
        <div className="relative rounded-t-full min-h-[600px] sm:aspect-square lg:aspect-[3/2] overflow-hidden">
          <Image
            src={`https://drive.google.com/uc?export=view&id=1Cx7D-JtSg87FxUsM71w7JoLCiKJZLYm3`}
            alt='about us profile'
            fill={true}
            className="object-cover"
          />
          <div className="text-black p-4 sm:p-10 flex flex-col justify-center items-center bg-white w-[75%] h-[90%] sm:h-[87%] lg:h-[80%] mx-auto absolute left-[50%] -translate-x-[50%] bottom-0 rounded-t-full">
            <h1 className="text-3xl font-bold">A bit about us</h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold">
              <span className="text-red-500">MZ</span> PRO
            </h1>
            <p className="mt-4 md:mt-10 text-lg sm:text-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dicta eos deserunt veniam amet voluptates aperiam iusto doloremque rem similique dolorem recusandae in enim vero, fuga consectetur ullam ab rerum? Quam nihil possimus commodi illo debitis esse, et exercitationem minus?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About