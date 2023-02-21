import Hero from "../public/assets/hero-image.png";
import Image from "next/image";

const Hero_section = () => {
  return (
    <div className="bg-black">
      <div className="border-white pt-20 pb-8 md:pt-28 bg-black text-white flex flex-wrap justify-center md:flex-nowrap gap-6 h-screen px-4 md:px-20 max-w-7xl mx-auto">
        <div className="text-section max-w-sm pt-0 sm:pt-8">
          <h1 className="mb-6 text-3xl sm:text-5xl font-semibold text-orange">
            Votre partenaire logistique fiable.
          </h1>
          <h2>
            Nous livrons vos colis au delai et a l’endroit voulu. Notre but ?
            c’est que vous puissiez vous concentrer sur votre part du travail et
            nous laisser le reste !
          </h2>
        </div>
        <div className="image-section">
          <Image
            src={Hero}
            width={612}
            height={474}
            alt="hero image"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero_section;
