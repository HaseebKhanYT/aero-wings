import { Link } from "react-router-dom";
import cruiseHeaderImg from "../assets/images/cruise-header-img.png";

import cruiseLogo1 from "../assets/cruise/cruiseLogos01.svg";
import cruiseLogo2 from "../assets/cruise/cruiseLogos02.svg";
import cruiseLogo3 from "../assets/cruise/cruiseLogos03.svg";
import cruiseLogo4 from "../assets/cruise/cruiseLogos04.svg";
import cruiseLogo5 from "../assets/cruise/cruiseLogos05.svg";
import cruiseLogo6 from "../assets/cruise/cruiseLogos06.svg";
import cruiseLogo7 from "../assets/cruise/cruiseLogos07.svg";
import cruiseLogo8 from "../assets/cruise/cruiseLogos08.svg";
import cruiseLogo9 from "../assets/cruise/cruiseLogos09.svg";
import cruiseLogo10 from "../assets/cruise/cruiseLogos10.svg";
import cruiseLogo11 from "../assets/cruise/cruiseLogos11.svg";
import cruiseLogo12 from "../assets/cruise/cruiseLogos12.svg";

const cruiseLogos = [
  {
    id: 1,
    imageUrl: cruiseLogo1,
  },
  {
    id: 2,
    imageUrl: cruiseLogo2,
  },
  {
    id: 3,
    imageUrl: cruiseLogo3,
  },
  {
    id: 4,
    imageUrl: cruiseLogo4,
  },
  {
    id: 5,
    imageUrl: cruiseLogo5,
  },
  {
    id: 6,
    imageUrl: cruiseLogo6,
  },
  {
    id: 7,
    imageUrl: cruiseLogo7,
  },
  {
    id: 8,
    imageUrl: cruiseLogo8,
  },
  {
    id: 9,
    imageUrl: cruiseLogo9,
  },
  {
    id: 10,
    imageUrl: cruiseLogo10,
  },
  {
    id: 11,
    imageUrl: cruiseLogo11,
  },
  {
    id: 12,
    imageUrl: cruiseLogo12,
  },
];

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
        <div className="cruiseCompanyLogos my-5">
          <div className="container">
            <div className="row g-3">
              {cruiseLogos.map((logos) => (
                <div
                  className="col col-lg-3 d-flex justify-content-center align-items-center"
                  key={logos.id}
                >
                  <div className="logoContainer d-flex justify-content-center">
                    <img src={logos.imageUrl} width={"175px"} alt="logo img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Plan Your Voyage
          </Link>
        </div>
      </div>
    </>
  );
}
