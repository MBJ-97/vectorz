import Image from "next/image";
import Hero from "../public/assets/hero-image.png";
export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 md:pt-24 pb-14">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <p className="eyebrow text-orange">
              Logistique pharmaceutique, médicale et parapharmaceutique
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-orange leading-tight mb-6">
              Votre partenaire logistique pour les produits de santé en Algérie.
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              VECTORZ accompagne les professionnels de santé dans leurs
              expéditions régulières et leurs transports spécifiques. Une
              solution étudiée selon vos produits, vos destinations et vos
              contraintes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a className="button" href="#contact">
                Demander une étude logistique
              </a>
              <a className="button button-outline" href="#solutions">
                Voir les solutions
              </a>
            </div>
          </div>
          <Image
            src={Hero}
            width={612}
            height={474}
            alt="Illustration des services logistiques VECTORZ"
            priority
            className="w-full h-auto max-w-xl mx-auto"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-14 pt-8 border-t border-white/20">
          <div>
            <p className="text-3xl font-semibold text-orange">25 wilayas</p>
            <p className="mt-2 text-white/80">
              Desservies régulièrement en groupage
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Samedi · Lundi · Mercredi</p>
            <p className="mt-2 text-white/80">Départs réguliers en groupage</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Transport dédié national</p>
            <p className="mt-2 text-white/80">
              Destinations et conditions étudiées sur demande
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
