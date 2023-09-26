
import iconAirplane from "../assets/icons/iconAirplane.svg";
import iconHotel from "../assets/icons/iconHotel.svg";
import iconCar from "../assets/icons/iconCar.svg";
import iconCargo from "../assets/icons/iconCargo.svg";
import iconHoliday from "../assets/icons/iconHoliday.svg";

import timeline from "../assets/timeline.webp";

import iata from "../assets/logo/iataLogo.png";
import tafi from "../assets/logo/tafiLogo.svg";
import minority from "../assets/logo/minorityLogo.svg";
import mohu from "../assets/logo/mohuLogo.svg";
import { Link } from "react-router-dom";

import VerticalCarousel from "../components/VerticalCarousel";

export default function AboutUs() {
  return (
    <>
      <div className="about">
        <div className="aboutBackground">
          <div className="aboutTextContainer d-flex justify-content-center align-items-center p-5 h-100 text-white container">
            <div className="row align-items-center">
              <div className="aboutTitle h-100 text-center text-sm-start d-flex align-items-center justify-content-center col-lg-6 col-md-12 my-2">
                <div className="d-inline-block">
                  {" "}
                  since
                  <br className="d-none d-lg-flex" /> 1975
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
                  satisfaction built over 45 years of experience, we are
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
        <div className="aboutIconStrip justify-content-center justify-content-lg-end container-fluid d-flex align-items-center">
          <div className=" container-fluid g-5 d-flex justify-content-center justify-content-sm-end w-100">
            <div className="row iconStripRow justify-content-sm-evenly">
              <Link
                to="/airlines"
                className=" d-flex justify-content-center p-0  col-6 col-lg-2 "
              >
                <div className="iconBg100 d-flex justify-content-center align-items-center rounded-circle  ">
                  <div className="iconBg70 d-flex justify-content-center align-items-center rounded-circle">
                    <div className="iconBg50white d-flex justify-content-center align-items-center rounded-circle bg-white">
                      <img src={iconAirplane} alt="icon airplane" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/holiday"
                className=" d-flex justify-content-center p-0  col-6 col-lg-2 "
              >
                <div className="iconBg100 d-flex justify-content-center align-items-center rounded-circle  ">
                  <div className="iconBg70 d-flex justify-content-center align-items-center rounded-circle">
                    <div className="iconBg50 d-flex justify-content-center align-items-center rounded-circle">
                      <img src={iconHotel} alt="icon Hotel" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/services"
                className=" d-flex justify-content-center p-0 col-12 col-lg-2 "
              >
                <div className="iconBg100 d-flex justify-content-center align-items-center rounded-circle">
                  <div className="iconBg70 d-flex justify-content-center align-items-center rounded-circle">
                    <div className="iconBg50 d-flex justify-content-center align-items-center rounded-circle">
                      <img src={iconCar} alt="icon Car" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/services"
                className=" d-flex justify-content-center p-0  col-6 col-lg-2 "
              >
                <div className="iconBg100 d-flex justify-content-center align-items-center rounded-circle  ">
                  <div className="iconBg70 d-flex justify-content-center align-items-center rounded-circle">
                    <div className="iconBg50 d-flex justify-content-center align-items-center rounded-circle">
                      <img src={iconCargo} alt="icon Cargo" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/holiday"
                className=" d-flex justify-content-center p-0  col-6 col-lg-2 "
              >
                <div className="iconBg100 d-flex justify-content-center align-items-center rounded-circle  ">
                  <div className="iconBg70 d-flex justify-content-center align-items-center rounded-circle">
                    <div className="iconBg50 d-flex justify-content-center align-items-center rounded-circle">
                      <img src={iconHoliday} alt="icon Holiday" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutTimeline">
          <div className="timelineHeader mt-5">
            <div className="headerText font48">our journey</div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="timelineImageContainer w-100 mb-5">
              <img
                className="timelineImage"
                src={timeline}
                height={"591px"}
                alt="timeline image"
              />
            </div>
          </div>
        </div>
        <div className="aboutAccreditions d-flex justify-content-center align-items-center container my-5">
          <div className="accreditionsContainer d-flex justify-content-center align-items-center rounded container  py-5">
            <div className="container ">
              <div className="row ">
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center py-3">
                  <img src={iata} alt="iata logo" width={"100px"} />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center py-3">
                  <img src={tafi} alt="tafi logo" width={"160px"} />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center py-3">
                  <img src={minority} alt="minority logo" width={"180px"} />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center py-3">
                  <img src={mohu} alt="mohu logo" width={"220px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutvvm d-flex justify-content-evenly align-items-center flex-column my-5">
          <div className="vvmContainer d-flex flex-column  align-items-center container">
            <div className="valuesContainer mb-5 row">
              <div className="valuesTitle vvmTitles mb-4 col-lg-6 ">values</div>
              <div className="valuesTextContainer container vvmTexts col-lg-6 ">
                <VerticalCarousel />
              </div>
            </div>
            <div className="visionContainer mb-5 row ">
              <div className="visionTitle vvmTitles mb-4 col-lg-6 ">vision</div>
              <div className="visionText vvmTexts col-lg-6 ">
                To be the most trusted and preferred travel agency in the world,
                known for our commitment to excellence, innovation, and
                personalized service.
              </div>
            </div>
            <div className="missionContainer mb-5 row">
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
            <Link to="/services" className="viewAllButton">
              View our services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
