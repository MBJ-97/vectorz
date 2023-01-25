import Image from "next/image";

export default function About_listing({ image_link, title, description }) {
  return (
    <div className="w-full md:w-1/3 py-12 px-6 md:px-10 rounded-lg  hover:shadow-custom hover:-translate-y-2 transition ease-in delay-100">
      <div className="mb-8 flex justify-start">
        <Image src={image_link} alt={title} width={50} height={50} />
      </div>
      <h3 className="font-bold text-orange text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
