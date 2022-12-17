import Image from "next/image";
import logo from "../public/assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div className="bg-black text-white px-6 md:px-32 py-10">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="brand w-full md:w-1/2">
          <Image src={logo} alt="logo" width={123} height={31} />
          <p className="mt-3 font-light">Unlimited vision.</p>
        </div>
        <div className="social w-full md:w-1/2 mt-4 md:mt-0">
          <p>Suivez nous sur :</p>
          <div className="social-link flex items-center gap-6 mt-3">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange rounded-full p-3"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange rounded-full p-3"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange rounded-full p-3"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-light">
          © Copyright {year} Vectorz, Tous droits réservés. Développé par{" "}
          <span className="text-orange font-semibold">
            <a href="https://www.mahdibeldjoudi.xyz">Mahdi Beldjoudi.</a>
          </span>
        </p>
      </div>
    </div>
  );
}
