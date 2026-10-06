import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero_section";
import AboutSection from "../components/About_section";
import ServicesSection from "../components/Services_section";
import CoverageSection from "../components/Coverage_section";
import TraceSection from "../components/Trace_section";
import ContactSection from "../components/Contact_section";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");
  const title = "VECTORZ | Transport et logistique santé en Algérie";
  const description =
    "VECTORZ accompagne les professionnels de santé en Algérie : groupage dans 25 wilayas, transport dédié et solutions adaptées aux produits sensibles.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="ySckepOOHxaJ2ME6R_VfmxK28bmDwuqO8jysTyW4LD0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.vectorz-dz.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:url" content="https://www.vectorz-dz.com/" />
        <meta
          property="og:image"
          content="https://www.vectorz-dz.com/assets/og-logo.png"
        />
        <meta
          property="og:image:alt"
          content="VECTORZ — Logistique santé en Algérie"
        />
      </Head>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection onSelect={setSelectedService} />
        <CoverageSection onSelect={setSelectedService} />
        <TraceSection />
        <AboutSection />
        <ContactSection
          selectedService={selectedService}
          onSelect={setSelectedService}
        />
      </main>
      <Footer />
    </>
  );
}
