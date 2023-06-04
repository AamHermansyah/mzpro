import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

const navLinksBorderClass = 'absolute bottom-0 left-0 block w-0 group-hover:w-full h-[2px] rounded bg-white transition-all duration-200 ease-in-out';

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
      <div className="w-full max-w-[1500px] mx-auto flex justify-between items-center py-4 px-10">
        <div>
          <Link href="/" className="block relative w-[60px] aspect-square">
            <Image src="/images/mz-pro-logo.png" alt="MZ PRO logo" fill={true} className="object-contain" />
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-6 font-semibold">
            <li className="relative mb-2 py-1 px-4 group">
              <span className={navLinksBorderClass} />
              <a href="" className="hover:text-gray-400">Home</a>
            </li>
            <li className="relative mb-2 py-1 px-4 group">
              <span className={navLinksBorderClass} />
              <a href="" className="hover:text-gray-400">Layanan</a>
            </li>
            <li className="relative mb-2 py-1 px-4 group">
              <span className={navLinksBorderClass} />
              <a href="" className="hover:text-gray-400">Portofolio</a>
            </li>
            <li className="relative mb-2 py-1 px-4 group">
              <span className={navLinksBorderClass} />
              <a href="" className="hover:text-gray-400">Testimoni</a>
            </li>
            <li className="relative mb-2 py-1 px-4 group">
              <span className={navLinksBorderClass} />
              <a href="" className="hover:text-gray-400">Profile</a>
            </li>
          </ul>
        </nav>

        <div>
          <button className="hidden lg:flex gap-1 items-center bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg font-semibold group">
            Kontak
            <AiOutlineArrowRight fontSize={20} className="relative group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div
          id="navbar"
          className="relative lg:hidden flex justify-between items-center"
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
              className="text-xl w-full h-full flex flex-col items-end justify-center p-10 bg-black bg-opacity-50 backdrop-blur"
              style={{ boxShadow: 'inset 0 0 2000px rgba(0, 0, 0);' }}
            >
              <li className="relative mb-2 py-1 px-4 group">
                <span className={navLinksBorderClass} />
                <a href="" className="hover:text-gray-400">Home</a>
              </li>
              <li className="relative mb-2 py-1 px-4 group">
                <span className={navLinksBorderClass} />
                <a href="" className="hover:text-gray-400">Layanan</a>
              </li>
              <li className="relative mb-2 py-1 px-4 group">
                <span className={navLinksBorderClass} />
                <a href="" className="hover:text-gray-400">Portofolio</a>
              </li>
              <li className="relative mb-2 py-1 px-4 group">
                <span className={navLinksBorderClass} />
                <a href="" className="hover:text-gray-400">Testimoni</a>
              </li>
              <li className="relative mb-2 py-1 px-4 group">
                <span className={navLinksBorderClass} />
                <a href="" className="hover:text-gray-400">Profile</a>
              </li>
              <li>
              <button className="mt-4 flex gap-1 items-center bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg font-semibold group">
                Kontak
                <AiOutlineArrowRight fontSize={20} className="relative group-hover:translate-x-1 transition" />
              </button>
              </li>
            </ul>
          </nav> 
        </div>
      </div>
    </header>
  )
}

export default Navbar