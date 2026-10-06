import { useState } from "react";
import Image from "next/image";
import Icon from "../public/assets/logo.png";
const links = [
  ["solutions", "Solutions"],
  ["couverture", "Couverture"],
  ["tracabilite", "Traçabilité"],
  ["about", "À propos"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-black text-white relative z-20">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between gap-6"
        aria-label="Navigation principale"
      >
        <a href="#" aria-label="VECTORZ, accueil">
          <Image src={Icon} alt="VECTORZ" width={123} height={31} priority />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map(([id, label]) => (
            <a key={id} className="nav-link" href={`#${id}`}>
              {label}
            </a>
          ))}
          <a className="button" href="#contact">
            Demander une étude
          </a>
        </div>
        <button
          className="lg:hidden menu-button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer ×" : "Menu ☰"}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigation mobile"
          className="bg-black px-6 pb-8 flex flex-col gap-6 lg:hidden"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button self-start"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Demander une étude
          </a>
        </nav>
      )}
    </header>
  );
}
