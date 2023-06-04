import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      headerRef
        .current!
        .classList
        .toggle('active-navbar', window.scrollY > 0);
    }

    addEventListener('scroll', listener);
    return () => {
      removeEventListener('scroll', listener);
    }
  }, []);

  return (
    <header className="fixed w-full z-[999] transition" ref={headerRef}>
      <div className="w-full max-w-[1500px] mx-auto flex justify-between items-center gap-8 py-4 px-10">
        <div>
          <Link href="/" className="block relative w-[60px] aspect-square">
            <Image src="/images/mz-pro-logo.png" alt="MZ PRO logo" fill={true} className="object-contain" />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-semibold">
            <li>
              <a href="" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">Layanan</a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">Portofolio</a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">Testimoni</a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">Profile</a>
            </li>
          </ul>
        </nav>

        <div>
          <button className="hidden md:flex gap-1 items-center bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg font-semibold group">
            Kontak
            <AiOutlineArrowRight fontSize={20} className="relative group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div
          id="navbar"
          className="relative md:hidden flex justify-between items-center"
        >
          <input
            className="absolute inset-0 z-[5] opacity-0 cursor-pointer"
            type="checkbox"
          />
          <div className="w-[32px] h-[26px] z-[2] flex flex-col justify-between hamburger-lines">
            <span className="w-full h-[4px] rounded-[10px] bg-white line-1"></span>
            <span className="w-full h-[4px] rounded-[10px] bg-white line-2"></span>
            <span className="w-full h-[4px] rounded-[10px] bg-white line-3"></span>
          </div> 
          <nav className="fixed inset-0 menu-items">
            <ul
              className="w-full h-full flex flex-col items-end justify-center p-10 bg-black bg-opacity-50 backdrop-blur"
              style={{ boxShadow: 'inset 0 0 2000px rgba(0, 0, 0);' }}
            >
              <li className="mb-2">
                <a href="" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-gray-400">Layanan</a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-gray-400">Portofolio</a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-gray-400">Testimoni</a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-gray-400">Profile</a>
              </li>
            </ul>
          </nav> 
        </div>
      </div>
    </header>
  )
}

export default Navbar