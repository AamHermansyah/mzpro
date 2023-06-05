import Masonry from "react-masonry-css";
import PSerifFont from "./PSerifFont";
import Image from "next/image";

const breakpoints = {
  default: 4,
  1700: 3,
  800: 2,
  500: 1
}

const BORDER_COLORS = ['border-violet-300', 'border-red-300', 'border-emerald-300', 'border-yellow-300', 'border-blue-300'];

const dummy_data = [
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sit magni veniam a temporibus nesciunt error quam expedita distinctio pariatur.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, magnam voluptatibus excepturi possimus voluptate? Dolores sit magni veniam a temporibus nesciunt error quam expedita distinctio pariatur. ipsum dolor sit, amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit fugit odit magni assumenda magnam nihil, quae ratione voluptatibus autem consectetur iure dolorum eligendi, totam ab cumque maxime! Iusto, sunt!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, accusamus!',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sit magni veniam a temporibus nesciunt error quam expedita distinctio pariatur. ipsum dolor sit, amet consectetur adipisicing elit.'
];

const dummy_name = ['Aam Hermansyah', 'M. Zidan Fatoni', 'Cristiano Ronaldosiuuu', 'Ankara Messi', 'Zaenal Gay']

function Testimonials() {
  return (
    <section id="testimonials" className="p-4 mt-20">
      <div>
        <h1 className="text-white text-3xl sm:text-5xl uppercase font-bold tracking-[0.5rem] text-center">
          Testimonial
        </h1>
        <PSerifFont className="text-2xl xl:text-3xl font-semibold text-center sm:mt-4">
          Orang orang telah percaya kepada kami untuk mengabadikan momen spesialnya
        </PSerifFont>
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-2 md:gap-2 mt-6"
        >
          {['jungle', 'river', 'people', 'man', 'wedding']
            .map((query, index) => (
              <div className={`p-4 border rounded-md mb-2 ${BORDER_COLORS[index]}`} key={index}>
                <div className="flex gap-6 items-center">
                  <div className="relative w-[70px] aspect-square rounded-full overflow-hidden bg-gray-700">
                    <Image
                      src={`https://source.unsplash.com/random/100x100/?${query}`}
                      alt={query}
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-semibold">{dummy_name[index]}</h3>
                    <p className="text-gray-500">{query}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-300">
                    {dummy_data[index]}
                  </p>
                </div>
              </div>
            ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Testimonials