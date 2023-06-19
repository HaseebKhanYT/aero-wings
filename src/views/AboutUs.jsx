import "../styles/AboutUs.scss";
import iconAirplane from "../assets/iconAirplane.svg";
import iconHotel from "../assets/iconHotel.svg";
import iconCar from "../assets/iconCar.svg";
import iconCargo from "../assets/iconCargo.svg";
import iconHoliday from "../assets/iconHoliday.svg";

import timeline from "../assets/timeline.svg";

import iata from "../assets/iataLogo.svg";
import tafi from "../assets/tafiLogo.svg";
import minority from "../assets/minorityLogo.svg";
import mohu from "../assets/mohuLogo.svg";
import { Link } from "react-router-dom";

import VerticalCarousel from "../components/VerticalCarousel";

export default function AboutUs() {
  return (
    <>
      <div className="about">
        <div className="aboutBackground">
          <div className="aboutTextContainer container">
            <div className="row align-items-center">
              <div className="aboutTitle col-lg-6 col-md-12 my-2">
                <div>
                  {" "}
                  since
                  <br /> 1975
                </div>
              </div>
              <div className="aboutTitleTextContainer col-lg-6 col-md-12 my-2 py-3">
                <div className="aboutTitleText container">
                  We are one of the first travel agencies in India to be
                  accredited to{" "}
                  <span className="gold">
                    {" "}
                    IATA (International Air Transport Association)
                  </span>
                  . We are also an active member of{" "}
                  <span className="gold">
                    TAFI (Travel Agents Federation of India)
                  </span>
                  . With a reputation for excellence, reliability, and customer
                  satisfaction built over 40 years of experience, we are
                  committed to making personalized and unique travel experiences
                  for our clients, allowing them access to exclusive deals and
                  unique experiences in over 500 destinations worldwide.
                  <br /> <br />
                  We offer a wide range of services, including customized
                  holiday packages, religious tourism, and corporate travel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutIconStrip container-fluid d-flex align-items-center">
          <div className="row d-flex justify-content-center w-100">
            <div className=" d-flex justify-content-center  col-6 col-lg-2 ">
              <div className="iconBg100  ">
                <div className="iconBg70">
                  <div className="iconBg50white">
                    <img src={iconAirplane} alt="icon airplane" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center  col-6 col-lg-2 ">
              <div className="iconBg100  ">
                <div className="iconBg70">
                  <div className="iconBg50">
                    <img src={iconHotel} alt="icon Hotel" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center col-12 col-lg-2 ">
              <div className="iconBg100">
                <div className="iconBg70">
                  <div className="iconBg50">
                    <img src={iconCar} alt="icon Car" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center  col-6 col-lg-2 ">
              <div className="iconBg100  ">
                <div className="iconBg70">
                  <div className="iconBg50">
                    <img src={iconCargo} alt="icon Cargo" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center  col-6 col-lg-2 ">
              <div className="iconBg100  ">
                <div className="iconBg70">
                  <div className="iconBg50">
                    <img src={iconHoliday} alt="icon Holiday" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutTimeline">
          <div className="timelineHeader my-5">
            <div className="headerText font48">our journey</div>
          </div>
          <div className="timelineImageContainer my-5">
            <div className="red">change timeline image</div>
            <img
              className="timelineImage"
              src={timeline}
              alt="timeline image"
            />
          </div>
          <div className="aboutAccreditions my-5">
            <div className="accreditionsContainer rounded container py-5">
              <div className="container ">
                <div className="row ">
                  <div className="col d-flex justify-content-center align-items-center py-3">
                    <img src={iata} alt="iata logo" width={"77px"} />
                  </div>
                  <div className="col d-flex justify-content-center align-items-center py-3">
                    <img src={tafi} alt="tafi logo" width={"102px"} />
                  </div>
                  <div className="col d-flex justify-content-center align-items-center py-3">
                    <img src={minority} alt="minority logo" width={"182px"} />
                  </div>
                  <div className="col d-flex justify-content-center align-items-center py-3">
                    <img src={mohu} alt="mohu logo" width={"240px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutvvm my-5">
          <div className="vvmContainer container">
            <div className="valuesContainer row my-5">
              <div className="valuesTitle vvmTitles mb-4 col-lg-6 ">values</div>
              <div className="valuesTextContainer vvmTexts col-lg-6 ">
                <VerticalCarousel />
              </div>
            </div>
            <div className="visionContainer row my-5">
              <div className="visionTitle vvmTitles mb-4 col-lg-6 ">vision</div>
              <div className="visionText vvmTexts col-lg-6 ">
                To be the most trusted and preferred travel agency in the world,
                known for our commitment to excellence, innovation, and
                personalized service.
              </div>
            </div>
            <div className="missionContainer row my-5">
              <div className="missionTitle vvmTitles mb-4 col-lg-6 ">
                mission
              </div>
              <div className="missionText vvmTexts col-lg-6 ">
                We’re passionately working towards this vision to provide our
                clients with unforgettable travel experiences that exceed their
                expectations. Our exceptional customer service and customized
                solutions cater to unique needs. We are committed to continuous
                innovation and sustainability to stay at the forefront of the
                industry.
              </div>
            </div>
          </div>
          <div className="buttonContainer my-5">
            <Link to="/services" className="viewServicesButton">
              View our services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
