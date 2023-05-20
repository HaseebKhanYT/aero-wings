import { Link } from "react-router-dom";
import visaHeaderImg from "../assets/images/visa-header-img.png";
import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Visa.scss";

export default function Visa() {
  return (
    <>
      <div className="visa">
        <div className="visaHeader">
          <div className="greyStrip"></div>
          <div className="visaHeaderImg">
            <img src={visaHeaderImg} width={"100%"} alt="visa header image" />
            <div className="visaTitle">Airline Reservation and Ticketing</div>
          </div>
        </div>
        <div className="slidingText red my-5">Countries will list lie here</div>
        <div className="description container-sm my-5">
          Our visa processing and endorsement service offers hassle-free
          solutions for all types of visas, including visit visas, family visas,
          tourist visas, and employment visas for all countries. Our team of
          experts assists you with the entire process, from application
          submission to approval. We ensure that your documents are in order,
          and provide guidance on any additional requirements for specific
          countries.
          <br />
          <br />
          Trust us to take care of all your visa needs, and enjoy peace of mind
          knowing that your visa application is in good hands.
        </div>
        <div className=" visaFeatures container my-5">
          <ul className=" visaFeaturesRow row">
            <li className="col-xs-12 my-3">Tourist visa</li>
            <li className="col-xs-12 my-3">Business visa</li>
            <li className="col-xs-12 my-3">Family / Visit visa</li>
            <li className="col-xs-12 my-3">Work / Employment visa</li>
            <li className="col-xs-12 my-3">Transit visa</li>
          </ul>
        </div>
        <div className="flagContainer my-5 red"> Flag Grid</div>
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
