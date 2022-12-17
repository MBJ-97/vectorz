import Image from "next/image";
import Link from "next/link";
import Arrow from "../public/assets/arrow.png";

export default function Services_listing({ name, description, image }) {
  return (
    <Link href="#contact">
      <div className="service-box w-full p-8 rounded-lg md:w-3/4 hover:cursor-pointer border-2 border-black hover:border-white transition ease-in delay-50">
        <div className="icon flex items-center justify-between mb-6">
          <Image src={image} width={46} height={46} />
          <div className="arrow opacity-0">
            <Image src={Arrow} alt="arrow" width={19} height={17} />
          </div>
        </div>
        <h4 className="font-bold mb-2"> {name} </h4>
        <p> {description} </p>
      </div>
    </Link>
  );
}
