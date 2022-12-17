import { FaPhone, FaMailBulk, FaDirections } from "react-icons/fa";
import Image from "next/image";
import phone from "../public/assets/phone_icon.png";
import email from "../public/assets/email_icon.png";
import location from "../public/assets/location_icon.png";

export default function Contact_section() {
  return (
    <div id="contact" className="container mx-auto px-8 py-20 md:py-32">
      <div className="heading pb-16 md:pb-32">
        <div className="title w-full md:w-1/3">
          <p className="text-orange">Nous Contacter</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
            Vous avez un projet ? Parlons-en.
          </h2>
        </div>
      </div>
      <div className="form flex flex-wrap md:flex-nowrap">
        <iframe
          className="w-full md:w-1/2 max-w-lg"
          data-tally-src="https://tally.so/embed/nPRvEQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="403"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact form Vectorz"
        ></iframe>
        <div className="w-full md:w-1/2 px-2 md:px-10 mt-10 md:mt-0 flex flex-col gap-6 max-w-lg">
          <h4 className="font-bold text-2xl mb-8">Nos coordonnées</h4>
          <div className="phone-section flex items-center">
            <Image src={phone} alt="phone icon" width={20} height={20} />
            <div className="ml-6 flex flex-col gap-2 text-left">
              <a href="tel:+213555895911">+213 555 89 59 11</a>
              <a href="tel:+213556112604">+213 556 11 26 04</a>
              <a href="tel:+213556168633">+213 556 16 86 33</a>
              <small className="text-orange">
                ( Appuyez sur le num pour appeler )
              </small>
            </div>
          </div>
          <hr />
          <div className="email-section flex items-center">
            <Image src={email} alt="email icon" width={20} height={20} />
            <div className="ml-6 flex flex-col gap-2">
              <a href="mailto:contact.vectorz@mail.com">
                contact.vectorz@gmail.com
              </a>
              <small className="text-orange">
                ( Appuyez pour envoyer un mail )
              </small>
            </div>
          </div>
          <hr />
          <div className="flex items-center">
            <Image src={location} alt="location icon" width={20} height={20} />
            <p className="ml-6 font-regular">
              Coop Essalem G2 lot G13 Mohamed Garidi local &#39;C&#39;, Jolie
              vue, Kouba - Alger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
