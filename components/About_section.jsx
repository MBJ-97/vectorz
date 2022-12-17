import About_listing from "./About_listing";
import personnel from "../public/assets/personnel.png";
import rapidite from "../public/assets/rapidite.png";
import securite from "../public/assets/securite.png";

const PROS = [
  {
    id: 1,
    image_link: personnel,
    title: "Personnel qualifié",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atur voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atur voluptates.",
  },
  {
    id: 2,
    image_link: rapidite,
    title: "Rapidité",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atur voluptates.",
  },
  {
    id: 3,
    image_link: securite,
    title: "Securité",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atur voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atur voluptates.",
  },
];

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
        duration: 1.5,
      },
    },
  };
  return (
    <div id="about" className="container mx-auto px-8 py-24 md:py-32">
      <div className="heading flex justify-between flex-wrap md:flex-nowrap pb-16 md:pb-32">
        <div className="title w-full md:w-1/3">
          <p className="text-orange">À propos</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
            Votre partenaire logistique fiable
          </h2>
        </div>
        <div className="title-description w-full md:w-1/2">
          <p>
            Nos offrons des services de livraison de tout type de marchendises
            sur l’ensemble des 58 wilayas. Notre but est de vous proposer un
            service sur mesure et de qualité qui s&#39;adapte à vos besoins et
            aux besoins de vos clients.
          </p>
        </div>
      </div>
      <div className="content flex flex-wrap md:flex-nowrap justify-between gap-10">
        {PROS.map((i) => (
          <About_listing
            key={i.id}
            image_link={i.image_link}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
