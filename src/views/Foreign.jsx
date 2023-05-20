import { Link } from "react-router-dom";

import foreignHeaderImg from "../assets/images/foreign-header-img.svg";
import foreignFooterImg from "../assets/images/foreign-footer-img.svg";

import whatsappColor from "../assets/services/whatsappColor.svg";

import "../styles/Foreign.scss";

export default function Foreign() {
  return (
    <>
      <div className="foreign">
        <div className="foreignHeaderImage">
          <img
            src={foreignHeaderImg}
            width={"100%"}
            alt="international header"
          />
        </div>
        <div className="foreignTitle">
          Top <span className="red bold600">International</span> Destinations
        </div>
        <div className="description container-sm">
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
        <div className="foreignAccordian red">accordian display will be here</div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Craft Your Ideal Iterany Now
          </Link>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/india" className="shortcutButton">
            See Domestic Destinations
          </Link>
        </div>
        <div className="foreignFooterImage">
          <img src={foreignFooterImg} alt="" />
        </div>
      </div>
    </>
  );
}
