import Image from "next/image";

export default function Apropos_listing({ image_link, title, description }) {
  return (
    <div className="w-full md:w-1/3 py-12 px-6 md:px-10 rounded-lg shadow-custom hover:-translate-y-2 transition ease-in delay-100">
      <div className="mb-8 flex justify-start">
        <Image src={image_link} alt={title} width={40} height={40} />
      </div>
      <h3 className="font-bold text-orange">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
