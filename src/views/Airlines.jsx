import { Link } from "react-router-dom";

import airlinesHeaderImg from "../assets/airlines/airlines-header-img.svg";
import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Airlines.scss";

export default function Airlines() {
  return (
    <>
      <div className="airlines">
        <div className="airlinesHeader">
          <div className="greyStrip"></div>
          <div className="airlinesHeaderImg">
            <img
              src={airlinesHeaderImg}
              width={"100%"}
              alt="airlines header image"
            />
            <div className="airlinesTitle">
              Airline Reservation and Ticketing
            </div>
          </div>
        </div>
        <div className="description container-sm my-5">
          Our airline reservation and ticketing service is designed to make your
          travel booking process smooth and hassle-free. We work with all major
          airlines to provide you with the best options at competitive prices.
          Our experienced travel agents will assist you in selecting the right
          flights, seats, and meal preferences according to your budget and
          travel plans. We also offer flexible payment options and secure online
          booking facilities to ensure a seamless experience. With our airline
          reservation and ticketing service, you can sit back and relax, knowing
          that all your travel needs are taken care of.
        </div>
        <div className="airlinesLogosDisplay red">
          here will lie all the airline logos
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
