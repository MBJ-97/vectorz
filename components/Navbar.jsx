import { useState } from "react";
import Icon from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-black text-white flex justify-between items-center pt-6 px-4 md:px-20">
        <Link href="/">
          <Image src={Icon} alt="logo vectorz" width={123} height={31} />
        </Link>
        <div className="block md:hidden">
          <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div className="links hidden md:flex gap-10 items-center font-normal">
          <ul className="flex gap-10">
            <li>
              <Link href="#about">À propos</Link>
            </li>
            <li>
              <Link href="#services">Nos services</Link>
            </li>
          </ul>
          <Link href="#contact">
            <button className="bg-orange px-10 py-3 rounded-lg">
              Contacter
            </button>
          </Link>
        </div>
      </div>
      {isOpen && ( // mobile menu
        <div className="mobile-links absolute h-screen w-full bg-black text-white text-center gap-10 items-center font-normal">
          <div className="pt-12 flex flex-col gap-4 items-center justify-center ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#about">À propos</Link>
              </li>
              <li>
                <Link href="#services">Nos services</Link>
              </li>
            </ul>
            <button className="bg-orange px-10 py-3 rounded-lg">
              Contacter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
