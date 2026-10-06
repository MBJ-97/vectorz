import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { CONTACT, SERVICES } from "../utils/CONSTS";

export default function ContactSection({ selectedService, onSelect }) {
  const [needsCold, setNeedsCold] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [preparedService, setPreparedService] = useState("");
  const hasCurrentMessage = message && preparedService === selectedService;
  function prepareEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const labels = [
      ["company", "Entreprise"],
      ["name", "Contact"],
      ["email", "E-mail"],
      ["phone", "Téléphone"],
      ["products", "Produits"],
      ["origin", "Départ"],
      ["destination", "Destination(s)"],
      ["frequency", "Organisation"],
      ["volume", "Poids, dimensions et volumes"],
      ["deadline", "Délai souhaité"],
      ["temperature", "Plage de température / relevés"],
      ["details", "Précisions"],
    ];
    const solution = SERVICES.find((s) => s.id === selectedService);
    const body = [
      "Bonjour,",
      "",
      "Je souhaite faire étudier mon besoin logistique.",
      `Solution : ${solution ? solution.brand : "À définir ensemble"}`,
      ...labels.map(
        ([key, label]) => `${label} : ${data.get(key) || "À préciser"}`
      ),
      `Contraintes : ${data.getAll("constraints").join(", ") || "À préciser"}`,
      "",
      "Merci.",
    ].join("\n");
    setMessage(body);
    setPreparedService(selectedService);
    setStatus(
      "Votre demande est prête. Ouvrez votre messagerie pour l’envoyer, ou copiez le texte ci-dessous."
    );
  }
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus(
        "Texte copié. Collez-le dans un e-mail adressé à " + CONTACT.email + "."
      );
    } catch {
      setStatus(
        "Sélectionnez et copiez le texte ci-dessous, puis envoyez-le à " +
          CONTACT.email +
          "."
      );
    }
  }
  return (
    <section id="contact" className="bg-black text-white">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-orange">Votre étude logistique</p>
            <h2>Parlons de vos flux logistiques.</h2>
          </div>
          <p>
            Décrivez vos produits, vos destinations et vos contraintes. Notre
            équipe étudiera votre demande afin de vous proposer une solution
            adaptée.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <form
            className="lg:col-span-2"
            onSubmit={prepareEmail}
            onChange={() => {
              setMessage("");
              setStatus("");
            }}
          >
            <p className="text-sm text-white/70 mb-6">
              Les champs marqués d’un * sont obligatoires. Ce formulaire prépare
              un e-mail que vous envoyez depuis votre messagerie.
            </p>
            <fieldset>
              <legend className="text-xl font-semibold mb-6">
                01 — Votre besoin
              </legend>
              <div className="form-grid">
                <label className="sm:col-span-2">
                  Solution recherchée
                  <select
                    name="solution"
                    value={selectedService}
                    onChange={(e) => onSelect(e.target.value)}
                  >
                    <option value="">À définir ensemble</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="sm:col-span-2">
                  Nature des produits *
                  <input
                    required
                    name="products"
                    maxLength={300}
                    placeholder="Ex. dispositifs médicaux, produits parapharmaceutiques…"
                  />
                </label>
                <label>
                  Départ *
                  <input
                    required
                    name="origin"
                    maxLength={200}
                    placeholder="Wilaya et commune"
                  />
                </label>
                <label>
                  Destination(s) *
                  <input
                    required
                    name="destination"
                    maxLength={300}
                    placeholder="Une ou plusieurs destinations"
                  />
                </label>
                <label>
                  Votre organisation
                  <select name="frequency">
                    <option>Besoin ponctuel</option>
                    <option>Flux réguliers</option>
                    <option>À préciser ensemble</option>
                  </select>
                </label>
                <label>
                  Délai souhaité
                  <input
                    name="deadline"
                    maxLength={150}
                    placeholder="Date ou délai envisagé"
                  />
                </label>
                <label className="sm:col-span-2">
                  Vos volumes
                  <input
                    name="volume"
                    maxLength={300}
                    placeholder="Poids, dimensions, colis et fréquence estimés"
                  />
                </label>
              </div>
              <fieldset className="mt-6">
                <legend className="mb-3">Contraintes particulières</legend>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Température",
                    "Fragilité",
                    "Documents particuliers",
                    "Autres exigences",
                  ].map((c) => (
                    <label key={c} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="constraints"
                        value={c}
                        onChange={
                          c === "Température"
                            ? (e) => setNeedsCold(e.target.checked)
                            : undefined
                        }
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </fieldset>
              {(needsCold || selectedService === "cold") && (
                <label className="block mt-6">
                  Température et relevés souhaités
                  <input
                    name="temperature"
                    maxLength={200}
                    placeholder="Plage requise, besoin de relevés, ou à préciser"
                  />
                </label>
              )}
              <label className="block mt-6">
                Précisions sur votre besoin
                <textarea
                  name="details"
                  rows={3}
                  maxLength={1500}
                  placeholder="Fréquence, manipulation, niveau de service et autres exigences…"
                />
              </label>
            </fieldset>
            <fieldset className="mt-10">
              <legend className="text-xl font-semibold mb-6">
                02 — Vos coordonnées
              </legend>
              <div className="form-grid">
                <label>
                  Entreprise *
                  <input
                    required
                    name="company"
                    autoComplete="organization"
                    maxLength={150}
                  />
                </label>
                <label>
                  Nom du contact *
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    maxLength={150}
                  />
                </label>
                <label>
                  E-mail *
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={200}
                  />
                </label>
                <label>
                  Téléphone
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    maxLength={40}
                  />
                </label>
              </div>
            </fieldset>
            <p className="text-sm text-white/60 mt-6">
              Les informations saisies servent à préparer votre demande dans
              cette page. Elles sont transmises à VECTORZ lorsque vous envoyez
              l’e-mail. N’incluez pas de données de patients.
            </p>
            <button type="submit" className="button mt-6">
              Préparer ma demande par e-mail
            </button>
            <p role="status" className="mt-4 text-white/80">
              {hasCurrentMessage ? status : ""}
            </p>
            {hasCurrentMessage && (
              <div className="mt-4">
                <label className="block">
                  Votre demande prête à envoyer
                  <textarea
                    readOnly
                    value={message}
                    rows={10}
                    className="mt-3"
                  />
                </label>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    className="button"
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                      "Demande d’étude logistique — VECTORZ"
                    )}&body=${encodeURIComponent(message)}`}
                  >
                    Ouvrir ma messagerie
                  </a>
                  <button
                    className="button button-outline"
                    type="button"
                    onClick={copyMessage}
                  >
                    Copier la demande
                  </button>
                </div>
                <p className="text-sm text-white/70 mt-4">
                  Aucun e-mail n’est envoyé automatiquement. Si votre messagerie
                  ne s’ouvre pas, copiez la demande et envoyez-la à{" "}
                  {CONTACT.email}.
                </p>
              </div>
            )}
          </form>
          <aside className="lg:border-l lg:border-white/20 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-3">Un échange direct ?</h3>
            <p className="text-white/70 mb-8">
              Contactez-nous pour préciser votre besoin ou préparer votre étude.
            </p>
            <div className="space-y-8">
              <div>
                <FiPhone
                  className="text-orange mb-3"
                  size={24}
                  aria-hidden="true"
                />
                <p className="text-sm text-white/60 mb-1">Téléphone</p>
                <a href={CONTACT.phoneHref} className="text-xl font-semibold">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <FiMail
                  className="text-orange mb-3"
                  size={24}
                  aria-hidden="true"
                />
                <p className="text-sm text-white/60 mb-1">E-mail</p>
                <a className="break-words" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <FiMapPin
                  className="text-orange mb-3"
                  size={24}
                  aria-hidden="true"
                />
                <p className="text-sm text-white/60 mb-1">
                  VECTORZ – Courrier Express
                </p>
                <address className="not-italic leading-relaxed">
                  {CONTACT.address}
                </address>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
