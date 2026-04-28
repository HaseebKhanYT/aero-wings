import { Link } from "react-router-dom";
import ContactModal from "@/shared/ui/ContactModal";
import CardsAccordion from "./CardsAccordion";

import foreignHeaderImg from "@/assets/images/foreignHeaderImg.jpg";
import foreignFooterImg from "@/assets/images/foreignFooterImg.jpg";
import whatsappColor from "@/assets/services/whatsappColor.svg";

import "./Foreign.scss";

import { internationalHolidays } from "@/data/holidays";

export default function Foreign() {
  return (
    <>
      <div className="foreign">
        <div className="foreignHeaderImage">
          <img src={foreignHeaderImg} width={"100%"} alt="International destinations" />
        </div>
        <div className="foreignTitle my-5">
          Top <span className="red bold600">International</span> Destinations
        </div>
        <div className="description container my-5">
          Discover the world with our international tour packages. From the
          stunning natural beauty of Europe to the exotic cultures of Asia and
          the vibrant cities of the Americas, we offer a wide range of
          destinations and packages to suit every taste and budget. Our
          experienced team will take care of everything from flights and hotels
          to tours and activities, ensuring that you have a stress-free and
          unforgettable travel experience. Whether you're seeking adventure,
          relaxation, or cultural enrichment, we have the perfect package for
          you. So pack your bags and get ready to explore the world with us.
        </div>
        <div className="foreignAccordian">
          <CardsAccordion arr={internationalHolidays} />
        </div>
        <div className="buttonContainer my-5">
          <button
            className="contactButton border-0"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img src={whatsappColor} alt="WhatsApp" />
            Craft Your Ideal Iterany Now
          </button>
        </div>
        <ContactModal />
        <div className="buttonContainer my-5">
          <Link to="/india" className="shortcutButton">
            See Domestic Destinations
          </Link>
        </div>
        <div className="foreignFooterImage container my-5">
          <img src={foreignFooterImg} width={"100%"} alt="" />
        </div>
      </div>
    </>
  );
}
