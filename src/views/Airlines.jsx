import { Link } from "react-router-dom";

import airlinesHeaderImg from "../assets/airlines/airlines-header-img.svg";
import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Airlines.scss";

import internationalAirlines1 from "../assets/airlines/internationalAirline01.svg"
import internationalAirlines2 from "../assets/airlines/internationalAirline02.svg"
import internationalAirlines3 from "../assets/airlines/internationalAirline03.svg"
import internationalAirlines4 from "../assets/airlines/internationalAirline04.svg"
import internationalAirlines5 from "../assets/airlines/internationalAirline05.svg"
import internationalAirlines6 from "../assets/airlines/internationalAirline06.svg"
import internationalAirlines7 from "../assets/airlines/internationalAirline07.svg"
import internationalAirlines8 from "../assets/airlines/internationalAirline08.svg"
import internationalAirlines9 from "../assets/airlines/internationalAirline09.svg"
import internationalAirlines10 from "../assets/airlines/internationalAirline10.svg"
import internationalAirlines11 from "../assets/airlines/internationalAirline11.svg"
import internationalAirlines12 from "../assets/airlines/internationalAirline12.svg"
import internationalAirlines13 from "../assets/airlines/internationalAirline13.svg"
import internationalAirlines14 from "../assets/airlines/internationalAirline14.svg"
import internationalAirlines15 from "../assets/airlines/internationalAirline15.svg"
import internationalAirlines16 from "../assets/airlines/internationalAirline16.svg"
import internationalAirlines17 from "../assets/airlines/internationalAirline17.svg"
import internationalAirlines18 from "../assets/airlines/internationalAirline18.svg"
import internationalAirlines19 from "../assets/airlines/internationalAirline19.svg"
import internationalAirlines20 from "../assets/airlines/internationalAirline20.svg"

import domesticAirlines1 from "../assets/airlines/domesticAirline01.svg"
import domesticAirlines2 from "../assets/airlines/domesticAirline02.svg"
import domesticAirlines3 from "../assets/airlines/domesticAirline03.svg"
import domesticAirlines4 from "../assets/airlines/domesticAirline04.svg"
import domesticAirlines5 from "../assets/airlines/domesticAirline05.svg"
import domesticAirlines6 from "../assets/airlines/domesticAirline06.svg"


const internationalAirlines = [
  {
    id: 1,
    imageUrl: internationalAirlines1,
  },
  {
    id: 2,
    imageUrl: internationalAirlines2,
  },
  {
    id: 3,
    imageUrl: internationalAirlines3,
  },
  {
    id: 4,
    imageUrl: internationalAirlines4,
  },
  {
    id: 5,
    imageUrl: internationalAirlines5,
  },
  {
    id: 6,
    imageUrl: internationalAirlines6,
  },
  {
    id: 7,
    imageUrl: internationalAirlines7,
  },
  {
    id: 8,
    imageUrl: internationalAirlines8,
  },
  {
    id: 9,
    imageUrl: internationalAirlines9,
  },
  {
    id: 10,
    imageUrl: internationalAirlines10,
  },
  {
    id: 11,
    imageUrl: internationalAirlines11,
  },
  {
    id: 12,
    imageUrl: internationalAirlines12,
  },
  {
    id: 13,
    imageUrl: internationalAirlines13,
  },
  {
    id: 14,
    imageUrl: internationalAirlines14,
  },
  {
    id: 15,
    imageUrl: internationalAirlines15,
  },
  {
    id: 16,
    imageUrl: internationalAirlines16,
  },
  {
    id: 17,
    imageUrl: internationalAirlines17,
  },
  {
    id: 18,
    imageUrl: internationalAirlines18,
  },
  {
    id: 19,
    imageUrl: internationalAirlines19,
  },
  {
    id: 20,
    imageUrl: internationalAirlines20,
  },
];

const domesticAirlines = [
  {
    id: 1,
    imageUrl: domesticAirlines1,
  },
  {
    id: 2,
    imageUrl: domesticAirlines2,
  },
  {
    id: 3,
    imageUrl: domesticAirlines3,
  },
  {
    id: 4,
    imageUrl: domesticAirlines4,
  },
  {
    id: 5,
    imageUrl: domesticAirlines5,
  },
  {
    id: 6,
    imageUrl: domesticAirlines6,
  },
];

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
        <div className="airlinesLogosDisplay">
          <div className="container">
            <nav>
              <div
                className="nav nav-tabs justify-content-center border-0 mb-3 p-4 "
                id="nav-tab"
                role="tablist"
              >
                <div className="navBackground d-flex justify-content-center">
                  <button
                    className="tabButton nav-link border-0 active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    International
                  </button>
                  <button
                    className="tabButton nav-link border-0"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Domestic
                  </button>
                </div>
              </div>
            </nav>
            <div className="tab-content p-3" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="container">
                  <div className="row g-3">
                    {internationalAirlines.map((logos) => (
                      <div
                        className="col d-flex justify-content-center align-items-center"
                        key={logos.id}
                      >
                        <div className="logoContainer d-flex justify-content-center">
                          <img
                            src={logos.imageUrl}
                            width={"175px"}
                            alt="logo img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="container">
                  <div className="row g-3">
                    {domesticAirlines.map((logos) => (
                      <div
                        className="col col-lg-4 d-flex justify-content-center align-items-center"
                        key={logos.id}
                      >
                        <div className="logoContainer d-flex justify-content-center">
                          <img
                            src={logos.imageUrl}
                            width={"175px"}
                            alt="logo img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
