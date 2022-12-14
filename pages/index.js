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
          content="Service de livraison en Algérie qui couvre tout vos besoins logistiques dans les 58 wilayas "
        />
        <link rel="icon" href="/favicon.ico" />
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
