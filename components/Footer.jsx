import Image from "next/image";
import logo from "../public/assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <a href="#" aria-label="VECTORZ, accueil">
              <Image src={logo} alt="VECTORZ" width={123} height={31} />
            </a>
            <p className="mt-4 max-w-sm text-white/70">
              Transport et solutions logistiques pour les professionnels de
              santé.
            </p>
          </div>
          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap items-start gap-x-8 gap-y-4"
          >
            <a href="#solutions">Solutions</a>
            <a href="#couverture">Couverture</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <p className="mt-10 text-sm text-white/60">
          © {new Date().getFullYear()} VECTORZ. Tous droits réservés. Développé
          par{" "}
          <a className="text-orange" href="https://www.mahdibeldjoudi.com">
            Mahdi.
          </a>
        </p>
      </div>
    </footer>
  );
}
