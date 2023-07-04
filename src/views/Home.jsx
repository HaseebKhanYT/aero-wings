import { Link, useNavigate } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import TCModal from "../components/TCModal";
import StatCounter from "../components/StatCounter";

import "../styles/Home.scss";

import homeAboutImage from "../assets/homeAboutImage.jpg";
import hajjTitle from "../assets/hajjTitle.svg";
import hajjTitleGeometry from "../assets/hajjTitleGeometry.svg";

import logoWing from "../assets/wingslogo.svg";
import iata from "../assets/logo/iataLogo.png";
import kabahGate from "../assets/kabahGate.jpg";
import dhikrImage from "../assets/dhikrImage.jpg";
import madinaDome from "../assets/madinaDome.jpg";
import HomeHolidays from "../components/HomeHolidays";
import SubHeader from "../components/SubHeader";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blurBackground position-absolute top-0 w-100 opacity-100"></div>
      <HomeCarousel />
      <SubHeader />

      <div className="geometry">
        <div className="homeAbout d-flex justify-content-center">
          <div className="container my-5">
            <div className="row">
              <div className="col-xl-6 col-lg-12 mb-3 mb-xl-0 d-flex justify-content-center align-items-center homeAboutImageContainer ">
                <img
                  className="homeAboutImage rounded d-block d-sm-none"
                  width={"225px"}
                  src={homeAboutImage}
                  alt="airplaneWindow"
                />
                <img
                  className="homeAboutImage rounded d-none d-sm-block"
                  width={"370px"}
                  src={homeAboutImage}
                  alt="airplaneWindow"
                />
                <div className="homeAboutLogoContainer rounded-circle position-absolute d-flex justify-content-center align-items-center">
                  <img
                    className="homeAboutLogo d-block d-sm-none"
                    width={"105px"}
                    src={logoWing}
                    alt="Aero Wings Logo"
                  />
                  <img
                    className="homeAboutLogo d-none d-sm-block"
                    width={"170px"}
                    src={logoWing}
                    alt="Aero Wings Logo"
                  />
                </div>
                <StatCounter />
              </div>
              <div className="col-xl-6 col-lg-12 mt-3 mt-xl-0 homeAboutTextContainer d-flex flex-column justify-content-center align-items-center">
                <div className="textBox1 px-3 container">
                  At Aero Wings, we believe that travel is not just about
                  reaching a destination, but about the journey itself. Our team
                  of passionate travel experts is committed to creating
                  personalized and unique travel experiences for our clients.
                  With over four decades of experience in the travel industry,
                  we have built a reputation for excellence, reliability, and
                  customer satisfaction.
                </div>
                <div className="textBox2 px-3 fst-italic container">
                  <br />
                  <br />
                  We are dedicated to making your travel dreams a reality and
                  ensuring that your journey with us is one to remember.
                  <br />
                  <br />
                </div>
                <Link to="/about" className="shortcutButton">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="homeHolidays">
          <HomeHolidays />
        </div>
        <div className="homeHajj">
          <div className="homeHajjContainer h-100 d-flex justify-content-center align-items-center flex-column">
            <div className="homeHajjTitleContainer w-100 d-flex align-items-center px-3 justify-content-center justify-content-sm-between">
              <img
                className="hajjGeometry d-none d-sm-flex"
                src={hajjTitleGeometry}
                alt="geometry"
              />
              <div>
                <img
                  className="homeHajjTitleImage"
                  src={hajjTitle}
                  alt="hajj"
                />
              </div>
              <img
                className="hajjGeometry d-none d-sm-flex"
                src={hajjTitleGeometry}
                alt="geometry"
              />
            </div>
            <div className="hajjImagesContainer d-flex container justify-content-center mt-5">
              <div className="row w-100 justify-content-between">
                <div className="col-sm-4 d-flex justify-content-center my-3">
                  <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                    <img
                      className="hajjImages"
                      src={kabahGate}
                      alt="kabah gate"
                    />
                  </div>
                </div>

                <div className="col-sm-4 d-flex justify-content-center my-3">
                  <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                    <img className="hajjImages" src={dhikrImage} alt="hajj" />
                    <Link
                      to="/hajj"
                      className="exploreButton position-absolute glassButton"
                    >
                      Explore now
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 d-flex justify-content-center my-3">
                  <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                    <img className="hajjImages" src={madinaDome} alt="hajj" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="viewAllButtonContainer d-flex w-100 justify-content-center align-items-center my-5">
          <Link
            to="/services"
            className=" viewAllButton text-nowrap"
          >
            View all our services
          </Link>
        </div>
        <div className="homeWhyUs ">
          <div className="whyUsWrapper container mt-5">
            <div className="row ">
              <div className=" col-lg-6 d-flex justify-content-center align-items-center">
                <div className="WhyUsTitle text-start align-items-sm-start align-items-center">
                  <div>Why</div>
                  <span className="WhyUsSubTitle">Aerowings?</span>
                </div>
              </div>
              <div className="WhyUsCardsContainer my-5 container d-flex justify-content-center col-lg-6">
                <div className="WhyUsRow row gy-4">
                  <div className="col-sm-6 d-flex  justify-content-center">
                    <div className="WhyUsCard d-flex justify-content-center align-items-center">
                      <div className="WhyUsCardText text-start">
                        <span className="gold">45+ years</span> of experience
                        and expertise
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex  justify-content-center">
                    <div className="WhyUsCard d-flex justify-content-center align-items-center">
                      <div className="WhyUsCardText text-start">
                        <span className="gold">Reliability</span> proven by
                        serving a million of customers
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex  justify-content-center">
                    <div className="WhyUsCard d-flex justify-content-center align-items-center">
                      <div className="WhyUsCardText text-start">
                        <span className="gold">Peace of mind</span> with our
                        meticulous service
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex  justify-content-center">
                    <div className="WhyUsCard d-flex justify-content-center align-items-center">
                      <div className="WhyUsCardText text-start">
                        <img src={iata} alt="iata Logo" className="w-100 h-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeFooter d-none d-lg-flex">
        <div className="footerMenuContainer">
          <div className="footerTextContainer">
            <div className="footerColumn">
              <div className="footerTextHeading">Company</div>
              <div
                onClick={() => {
                  navigate("/about");
                }}
                className="footerTextMenu"
              >
                About Us
              </div>
              <a
                href="https://forms.gle/RkYHBCJLMtixuKvm7"
                target="_blank"
                className="footerTextMenu"
              >
                Careers
              </a>
              <div
                onClick={() => {
                  navigate("/contact");
                }}
                className="footerTextMenu"
              >
                Reach Us
              </div>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">Travel</div>
              <div
                onClick={() => {
                  navigate("/india");
                }}
                className="footerTextMenu"
              >
                Across India
              </div>
              <div
                onClick={() => {
                  navigate("/foreign");
                }}
                className="footerTextMenu"
              >
                Around the World
              </div>
              <div
                onClick={() => {
                  navigate("/hyderabad");
                }}
                className="footerTextMenu"
              >
                Visit Hyderabad
              </div>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">Services</div>
              <div
                onClick={() => {
                  navigate("/visa");
                }}
                className="footerTextMenu"
              >
                Visa
              </div>
              <div
                onClick={() => {
                  navigate("/hajj");
                }}
                className="footerTextMenu"
              >
                Hajj & Umrah
              </div>
              <div
                onClick={() => {
                  navigate("/holiday");
                }}
                className="footerTextMenu"
              >
                Personalized Tours
              </div>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">More</div>
              <div
                onClick={() => {
                  navigate("/offers");
                }}
                className="footerTextMenu"
              >
                Pre-purchased Deals
              </div>
              <div
                onClick={() => {
                  navigate("/services");
                }}
                className="footerTextMenu"
              >
                Book a Flight
              </div>
              <div
                className="footerTextMenu tnc"
                data-bs-toggle="modal"
                data-bs-target="#tcModal"
              >
                Terms and Conditions
              </div>
              <TCModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
