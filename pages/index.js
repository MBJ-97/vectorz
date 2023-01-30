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
        <title>Vectorz</title>
        <meta
          name="description"
          content="Vectorz vous offre son service de livraison en Algérie qui couvre tout vos besoins (E-commerce, Colis et courrier express, retrait et dépôt de cahier de charges & services de déménagement et de manutention... ) logistiques dans les 58 wilayas"
        />
        <meta
          name="keywords"
          content="Vectorz, livraison e-commerce, logistique, Algérie, e-commerce"
        />
        <meta
          name="google-site-verification"
          content="ySckepOOHxaJ2ME6R_VfmxK28bmDwuqO8jysTyW4LD0"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* OG tags  */}
        <meta property="og:title" content="Vectorz" />
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
