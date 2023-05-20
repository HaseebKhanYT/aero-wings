import { Link } from "react-router-dom";
import cruiseHeaderImg from "../assets/images/cruise-header-img.png";

import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Cruise.scss";
export default function Cruise() {
  return (
    <>
      <div className="cruise">
        <div className="cruiseHeader">
          <div className="greyStrip"></div>
          <div className="cruiseHeaderImg">
            <img
              src={cruiseHeaderImg}
              width={"100%"}
              alt="cruise header image"
            />
            <div className="cruiseTitle">Cruise</div>
          </div>
        </div>
        <div className="description container my-5">
          Relax in the comfort of your cabin as you glide past stunning scenery
          and iconic landmarks, and indulge in a variety of onboard activities,
          entertainment, and dining options. Whether you're looking for a
          romantic getaway, a family vacation, or an adventure-packed excursion,
          a cruise is an unforgettable way to see the world.
          <br />
          <br />
          At our cruise services, we offer a range of options to suit your
          preferences and budget. From budget-friendly cruises to five-star
          luxury experiences, we have something for everyone. Our expert travel
          agents can help you find the perfect cruise itinerary, whether you're
          looking to explore the Caribbean, the Mediterranean, Alaska, or
          beyond. We'll take care of all the details, from booking your cabin
          and arranging transportation to and from the ship, to ensuring that
          all your needs are met while you're onboard. With our cruise services,
          you can sit back, relax, and enjoy the journey of a lifetime.
        </div>
        <div className="cruiseCompanyLogos red">
          cruise company logos will be here
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Reach Us To Know More
          </Link>
        </div>
      </div>
    </>
  );
}
