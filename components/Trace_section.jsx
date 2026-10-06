const steps = [
  ["Enlèvement", "Identification et prise en charge de votre expédition."],
  ["Transport", "Informations sur le départ, la destination et le statut."],
  ["Suivi", "Informations disponibles sur l’avancement de l’expédition."],
  ["Livraison", "Identification du destinataire et remise."],
  [
    "Preuve",
    "Signature, cachet ou preuve de livraison selon les modalités convenues.",
  ],
];
export default function TraceSection() {
  return (
    <section id="tracabilite" className="bg-black text-white">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">VECTORZ Trace</p>
            <h2>De l’enlèvement à la livraison, des étapes documentées.</h2>
          </div>
          <p>
            Les informations de suivi et les justificatifs sont définis selon
            votre prestation et le niveau de service convenu.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map(([title, text], index) => (
            <li key={title} className="border-t border-white/20 pt-6">
              <span className="text-orange text-3xl font-semibold">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold mt-5 mb-3">{title}</h3>
              <p className="text-white/75 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 pt-6 border-t border-white/20 text-white/75">
          <strong className="text-white">Conditions particulières.</strong> Des
          données spécifiques, dont les relevés de température, complètent la
          traçabilité lorsque la prestation le prévoit.
        </p>
      </div>
    </section>
  );
}
