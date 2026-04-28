import { Link } from "react-router-dom";
import ContactModal from "@/shared/ui/ContactModal";
import CardsAccordion from "./CardsAccordion";

import whatsappColor from "@/assets/services/whatsappColor.svg";
import indiaHeaderImg from "@/assets/images/indiaHeaderImg.jpg";
import indiaFooterImg from "@/assets/images/indiaFooterImg.webp";
import "./India.scss";

import { domesticHolidays } from "@/data/holidays";

export default function India() {
  return (
    <>
      <div className="india">
        <div className="indiaHeaderImage">
          <img src={indiaHeaderImg} width={"100%"} alt="India" />
        </div>
        <div className="indiaTitle my-5">
          Discover the Wonders of <span className="blue bold600">India</span>
        </div>
        <div className="description container my-5">
          Experience the beauty and diversity of India with our domestic tour
          packages. Whether you want to explore the breathtaking landscapes of
          the Himalayas, soak in the sun on the beaches of Goa, or immerse
          yourself in the rich culture and history of Rajasthan, we have the
          perfect itinerary for you. Our packages are designed to cater to every
          budget and preference, from luxury stays to budget-friendly options.
          Choose from our wide range of domestic tour packages and discover the
          magic of India. With our experienced tour guides and hassle-free
          travel arrangements, you can sit back and enjoy the journey while we
          take care of the rest.
        </div>
        <Link to="/hyderabad">
          <div className=" container my-5">
            <img src={indiaFooterImg} className="indiaFooterImage w-100" alt="" />
          </div>
        </Link>
        <div className="indiaAccordian my-5">
          <CardsAccordion arr={domesticHolidays} />
        </div>
        <div className="buttonContainer my-5">
          <button
            className="contactButton border-0"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img src={whatsappColor} alt="WhatsApp" />
            Plan Unforgettable Weekends Now
          </button>
        </div>
        <ContactModal />
        <div className="buttonContainer my-5">
          <Link to="/foreign" className="shortcutButton">
            See International Destinations
          </Link>
        </div>
      </div>
    </>
  );
}
