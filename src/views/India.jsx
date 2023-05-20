import { Link } from "react-router-dom";

import whatsappColor from "../assets/services/whatsappColor.svg";
import indiaHeaderImg from "../assets/images/india-header-img.svg";
import indiaFooterImg from "../assets/images/india-footer-img.svg";
import "../styles/India.scss";

export default function India() {
  return (
    <>
      <div className="india">
        <div className="indiaHeaderImage">
          <img src={indiaHeaderImg} width={"100%"} alt="india image" />
        </div>
        <div className="indiaTitle">
          Discover the Wonders of <span className="blue bold600">India</span>
        </div>
        <div className="description container-sm">
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
        <div className="indiaAccordian red">accordian display will be here</div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Plan Unforgettable Weekends Now
          </Link>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/foreign" className="shortcutButton">
            See International Destinations
          </Link>
        </div>
        <Link to="/hyderabad">
          <div className="foreignFooterImage">
            <img src={indiaFooterImg} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}
