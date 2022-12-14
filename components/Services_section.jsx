import Services_listing from "./Services_listing";
import transport from "../public/assets/transport_m.png";
import cahier_charges from "../public/assets/cahier_charges.png";
import demenagement from "../public/assets/demenagement.png";
import courrier from "../public/assets/courrier.png";
import navette_personnel from "../public/assets/navette_personnel.png";
import ouverture_plis from "../public/assets/ouverture_plis.png";

const SERVICES = [
  {
    id: 1,
    name: "Transport de marchandise",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: transport,
  },
  {
    id: 2,
    name: "Retrait / Dépot cahier de charges",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: cahier_charges,
  },
  {
    id: 3,
    name: "Déménagement / Manutention",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: demenagement,
  },
  {
    id: 4,
    name: "Courrier express",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: courrier,
  },
  {
    id: 5,
    name: "Navette personnel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: navette_personnel,
  },
  {
    id: 6,
    name: "Assistance ouverture de plis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus, vel sed, nostrum minima iste tempora dicta totam placeat ea aspernatur sunt! Vel fugit quo illum doloribus molestiae! Error, hic?",
    image: ouverture_plis,
  },
];
export default function Services_section() {
  return (
    <div id="services" className="container mx-auto px-8 py-24 md:py-32">
      <div className="heading flex justify-between flex-wrap md:flex-nowrap pb-16 md:pb-32">
        <div className="title w-full md:w-1/3">
          <p className="text-orange">Nos Services</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
            Une expertise et un savoir faire mis a votre disposition.
          </h2>
        </div>
        <div className="title-description w-full md:w-1/2">
          <p>
            Nos offrons des services de livraison de tout type de marchendises
            sur l’ensemble des 58 wilayas. Notre but est de vous proposer un
            service sur mesure et de qualité qui s'adapte à vos besoins et aux
            besoins de vos clients.
          </p>
        </div>
      </div>
      <div className="listing flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-20">
        {SERVICES.map((i) => (
          <Services_listing
            key={i.id}
            name={i.name}
            description={i.description}
            image={i.image}
          />
        ))}
      </div>
    </div>
  );
}
