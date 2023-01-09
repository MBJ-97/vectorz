import { Fade } from "react-awesome-reveal";
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
      "Vous pouvez compter sur notre personnel pour vous représenter auprès de vos clients de la meilleure des manières.",
  },
  {
    id: 2,
    image_link: rapidite,
    title: "Rapidité",
    description: "Vos colis seront à destination dans les plus brefs délais !",
  },
  {
    id: 3,
    image_link: securite,
    title: "Securité",
    description: "Pas de panique ! Vos colis sont entre de bonnes mains.",
  },
];

const AboutSection = () => {
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
            Nos offrons des services de livraison de tous types de marchandises
            sur l’ensemble des 58 wilayas. Notre but est de vous proposer un
            service sur mesure et de qualité qui s&#39;adapte à vos besoins et
            aux besoins de vos clients.
          </p>
        </div>
      </div>
      <Fade cascade damping={0.8}>
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
      </Fade>
    </div>
  );
};

export default AboutSection;
