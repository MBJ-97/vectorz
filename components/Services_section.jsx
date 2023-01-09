import { Fade } from "react-awesome-reveal";
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
      "On achemine tous types de colis dans les plus brefs délais et dans les meilleures conditions possibles.",
    image: transport,
  },
  {
    id: 2,
    name: "Retrait/Dépot cahier de charges",
    description:
      "Notre service assure la prise en charge totale des formalités administratives de retrait, mais aussi le suivi en temps réel l'acheminement du dépôt.",
    image: cahier_charges,
  },
  {
    id: 3,
    name: "Déménagement / Manutention",
    description:
      "Vous déménagez ? Nos moyens humains et matériaux sont mis à votre disposition pour transporter vos biens en toute securité.",
    image: demenagement,
  },
  {
    id: 4,
    name: "Courrier express",
    description:
      "Nous vous offrons un service de livraison ultra rapide pour vos courriers et documents urgents.",
    image: courrier,
  },
  {
    id: 5,
    name: "Navette personnel",
    description:
      "Pour vos déplacements ou celui de votre personnel, notre service vous offre la rapidité, le confort et la vigilance lors de vos trajets.",
    image: navette_personnel,
  },
  {
    id: 6,
    name: "Assistance ouverture de plis",
    description:
      "VECTORZ établit des rapports comportant toutes les informations nécessaires, et décrivant en détail les résultats sous forme de tableau.",
    image: ouverture_plis,
  },
];
export default function Services_section() {
  return (
    <div
      id="services"
      className="container mx-auto px-8 md:px-16 py-24 md:py-32 bg-black text-white"
    >
      <div className="heading flex justify-between flex-wrap md:flex-nowrap pb-16 md:pb-32">
        <div className="title w-full md:w-1/3">
          <p className="text-orange">Nos Services</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
            Une expertise et un savoir faire mis à votre disposition.
          </h2>
        </div>
        <div className="title-description w-full md:w-1/2">
          <p>
            Notre savoir faire est mis à votre disposition pour couvrir tous vos
            besoins en matière de logistique.
          </p>
        </div>
      </div>

      <div className="listing flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-20">
        <Fade cascade damping={0.2}>
          {SERVICES.map((i) => (
            <Services_listing
              key={i.id}
              name={i.name}
              description={i.description}
              image={i.image}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
}
