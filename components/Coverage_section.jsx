import { COVERAGE } from "../utils/CONSTS";
export default function CoverageSection({ onSelect }) {
  return (
    <section id="couverture" className="section-wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-orange">Notre couverture</p>
          <h2>25 wilayas desservies régulièrement en groupage.</h2>
        </div>
        <div>
          <p>
            Planifiez vos expéditions avec des départs réguliers le samedi, le
            lundi et le mercredi.
          </p>
          <p className="mt-4 text-sm">
            Les points d’enlèvement, les destinations précises et les délais
            sont à confirmer lors de l’étude de votre demande.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {COVERAGE.map((zone) => (
          <div key={zone.name} className="border-t-2 border-orange pt-5">
            <h3 className="text-xl font-semibold mb-4">{zone.name}</h3>
            <ul className="space-y-2 text-black/75">
              {zone.wilayas.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-black/15 flex flex-col md:flex-row items-start gap-6 justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold mb-3">
            Une autre destination ?
          </h3>
          <p className="text-black/70">
            VECTORZ étudie des transports dédiés à l’échelle nationale selon la
            destination, la distance, le poids, le volume, les produits, le
            délai et les conditions de transport.
          </p>
        </div>
        <a
          href="#contact"
          className="button shrink-0"
          onClick={() => onSelect("dedicated")}
        >
          Faire étudier mon trajet
        </a>
      </div>
    </section>
  );
}
