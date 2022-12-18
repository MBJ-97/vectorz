import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero_section";
import AboutSection from "../components/About_section";
import ServicesSection from "../components/Services_section";
import ContactSection from "../components/Contact_section";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vectorz | Votre partenaire logistique</title>
        <meta
          name="description"
          content="Service de livraison en Algérie qui couvre tout vos besoins (E-commerce, Colis et courrier express, retrait et dépôt de cahier de charges... ) logistiques dans les 58 wilayas"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* OG tags  */}
        <meta
          property="og:title"
          content="Vectorz | Services de logistique en Algérie"
        />
        <meta
          property="og:description"
          content="Service de livraison en Algérie qui couvre tout vos besoins (E-commerce, Colis et courrier express, retrait et dépôt de cahier de charges... ) logistiques dans les 58 wilayas"
        />

        <meta property="og:url" content="https://www.vectorz-dz.com" />
        <meta
          property="og:image"
          content="https://www.vectorz-dz.com/assets/og-logo.png"
        />
      </Head>
      <Script
        strategy="beforeInteractive"
        src="https://tally.so/widgets/embed.js"
      />
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
