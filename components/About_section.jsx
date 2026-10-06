import AboutListing from "./About_listing";
import personnel from "../public/assets/personnel.png";
import rapidite from "../public/assets/rapidite.png";
import securite from "../public/assets/securite.png";
const benefits = [
  {
    image_link: personnel,
    title: "Une organisation adaptée",
    description:
      "Une prestation définie selon vos produits, leur poids et leur volume, vos destinations, la fréquence, les délais et le niveau de service souhaité.",
  },
  {
    image_link: securite,
    title: "Une prise en charge structurée",
    description:
      "Enlèvement, sécurisation, transport et livraison : notre objectif est de contribuer à sécuriser votre distribution selon les modalités convenues.",
  },
  {
    image_link: rapidite,
    title: "Une traçabilité définie avec vous",
    description:
      "Des informations et des preuves adaptées à votre prestation, aux contraintes de vos produits et au niveau de service retenu.",
  },
];
export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-orange">À propos de VECTORZ</p>
          <h2>Une logistique pensée pour le secteur de la santé.</h2>
        </div>
        <div>
          <p>
            Créée en 2023, VECTORZ est spécialisée dans le transport et les
            solutions logistiques dédiées aux secteurs pharmaceutique, médical
            et parapharmaceutique.
          </p>
          <p className="mt-4">
            Nous accompagnons les laboratoires, distributeurs, établissements de
            santé, fabricants et distributeurs de dispositifs médicaux, ainsi
            que les autres acteurs de la santé.
          </p>
        </div>
      </div>
      <p className="max-w-3xl text-lg leading-relaxed">
        Les produits de santé ne sont pas des marchandises ordinaires. Leur
        transport peut nécessiter une manipulation adaptée, des conditions
        particulières et une traçabilité des opérations.
      </p>
      <div className="flex flex-wrap md:flex-nowrap gap-6 mt-6">
        {benefits.map((b) => (
          <AboutListing key={b.title} {...b} />
        ))}
      </div>
      <div className="border-t border-black/15 pt-8 mt-6">
        <h3 className="text-xl font-semibold mb-3">Notre vision</h3>
        <p className="max-w-3xl text-black/70">
          Devenir un partenaire de référence de la logistique santé en Algérie,
          en développant le professionnalisme, la sécurité, la traçabilité, la
          technologie et la qualité de service.
        </p>
      </div>
    </section>
  );
}
