import ServiceCard from "./Services_listing";
import { SERVICES } from "../utils/CONSTS";
export default function ServicesSection({ onSelect }) {
  return (
    <section id="solutions" className="bg-black text-white">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">Nos solutions</p>
            <h2>Quelle solution pour vos expéditions ?</h2>
          </div>
          <p>
            Des petits volumes récurrents aux opérations spécifiques, découvrez
            une prise en charge adaptée à vos besoins et aux exigences de vos
            produits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelect}
            />
          ))}
          <div className="p-7 md:p-8 flex flex-col justify-center">
            <p className="eyebrow text-orange">Un besoin particulier ?</p>
            <h3 className="text-2xl font-semibold mb-4">
              Définissons votre solution ensemble.
            </h3>
            <p className="text-white/80 leading-relaxed">
              Vos contraintes peuvent se combiner : transport dédié,
              température, fragilité ou documentation. Décrivez-nous votre
              opération.
            </p>
            <a
              href="#contact"
              className="text-orange font-semibold mt-6"
              onClick={() => onSelect("")}
            >
              Parlons de vos flux →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
