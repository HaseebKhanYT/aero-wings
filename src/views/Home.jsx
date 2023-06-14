import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";

import "../styles/Home.scss";

import SocialIcons from "../components/SocialIcons";


import homeAboutImage from "../assets/homeAboutImage.svg";
import hajjTitle from "../assets/hajjTitle.svg";
import hajjTitleGeometry from "../assets/hajjTitleGeometry.svg";

import logoWing from "../assets/logo/logo-wing.svg";
import iata from "../assets/iataLogo.svg";
import kabahGate from "../assets/kabahGate.svg";
import dhikrImage from "../assets/dhikrImage.svg";
import madinaDome from "../assets/madinaDome.svg";
import HomeHolidays from "../components/HomeHolidays";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <div className="subHeaderContainer">
        <div className="iconContainer">
          <SocialIcons />
          <span>
            <span className="blue" >since</span>&nbsp;
            <span className="red">1975</span>
          </span>
        </div>
      </div>
      <div className="blurBackground"></div>

      <div className="homeAbout">
        <div className="container my-5">
          <div className="row">
            <div className="col-xl-6 col-lg-12 my-2 container homeAboutImageContainer">
              <div className="homeAboutLogoContainer">
                <img
                  className="homeAboutLogo"
                  src={logoWing}
                  alt="Aero Wings Logo"
                />
              </div>
              <div className="statsColumn">
                <div className="statsRow1">
                  <div className="statsContainer stat1">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 500,000+</span>
                      <br /> <span className="statText">trips </span>
                    </div>
                  </div>
                  <div className="statsContainer stat2">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 500+ </span>
                      <br />
                      <span className="statText">destinations</span>
                    </div>
                  </div>
                </div>
                <div className="statsRow2">
                  <div className="statsContainer stat3">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 40+</span>
                      <br />
                      <span className="statText">years</span>
                    </div>
                  </div>
                  <div className="statsContainer stat4">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 20+ </span>
                      <br />
                      <span className="statText"> services </span>
                    </div>
                  </div>
                </div>
                <div className="statsRow1">
                  <div className="statsContainer stat5">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 10+ </span>
                      <br />
                      <span className="statText"> awards</span>
                    </div>
                  </div>
                  <div className="statsContainer stat6">
                    <div>
                      {" "}
                      <span className="blue statNumber"> 24/7 </span>
                      <br />
                      <span className="statText"> support</span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="homeAboutImage"
                src={homeAboutImage}
                alt="airplaneWindow"
              />
            </div>
            <div className="col-xl-6 col-lg-12 my-2 container homeAboutTextContainer">
              <div className="textBox1 container">
                At Aero Wings, we believe that travel is not just about reaching
                a destination, but about the journey itself. Our team of
                passionate travel experts is committed to creating personalized
                and unique travel experiences for our clients. With over four
                decades of experience in the travel industry, we have built a
                reputation for excellence, reliability, and customer
                satisfaction.
              </div>
              <div className="textBox2 container">
                We are dedicated to making your travel dreams a reality and
                ensuring that your journey with us is one to remember.
              </div>
              <Link to="/about" className="glassButton">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="homeHolidays">
        <HomeHolidays/>
      </div>
      <div className="homeHajj">
        <div className="homeHajjContainer">
          <div className="homeHajjTitleContainer justify-content-center justify-content-lg-between my-5">

            <img 
             className="d-none d-lg-flex" src={hajjTitleGeometry} alt="geometry" />

            <div className="homeHajjTitleImage">
              <img 
              src={hajjTitle} alt="hajj" />
            </div>
            <img 
            className="d-none d-lg-flex" src={hajjTitleGeometry} alt="geometry" />
          </div>

          <div className="hajjImagesContainer container justify-content-center my-5">
            <div className="row w-100 justify-content-between">
              <div className="col-xl-4 d-flex justify-content-center my-3">
                <div className="imageContainer">
                  <img
                  
                    className="hajjImages"
                    src={kabahGate}
                    alt="kabah gate"
                  />
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center my-3">
                <div className="imageContainer">
                  <img 
                  className="hajjImages" src={dhikrImage} alt="hajj" />
                  <Link to="/hajj" className=" exploreButton glassButton">
                    Explore now
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center my-3">
                <div className="imageContainer">
                  <img 
                  className="hajjImages" src={madinaDome} alt="hajj" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeWhyUs">
        <div className="whyUsWrapper">
          <div className="viewAllButtonContainer my-5">
            <Link to="/services" className="viewAllButton">
              View all our services
            </Link>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className=" col-md-6 d-flex justify-content-center align-items-center">
                <div className="WhyUsTitle">
                  <span>Why</span>
                  <br />
                  <span className="aerowings" style={{ fontSize: "56px" }}>
                    AeroWings?
                  </span>
                </div>
              </div>
              <div className="WhyUsCardsContainer container d-flex justify-content-center col-md-6">
                <div className="WhyUsRow row">
                  <div className="WhyUsCard col-6">
                    <div className="WhyUsCardText">
                      <span className="gold">40+ years</span> of experience and
                      expertise
                    </div>
                  </div>
                  <div className="WhyUsCard col-6">
                    <div className="WhyUsCardText">
                      <span className="gold">Reliability</span> proven by
                      serving half a million of customers
                    </div>
                  </div>
                  <div className="WhyUsCard col-6">
                    <div className="WhyUsCardText">
                      <span className="gold">Peace of mind</span> with our
                      meticulous service
                    </div>
                  </div>
                  <div className="WhyUsCard col-6">
                    <div className="WhyUsCardText">
                      <img 
                      src={iata} alt="iata Logo" />
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
              <Link to="/about" className="footerTextMenu">
                About Us
              </Link>
              <Link to="/about" className="footerTextMenu">
                Accreditations
              </Link>
              <Link to="/contact" className="footerTextMenu">
                Reach Us
              </Link>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">Travel</div>
              <Link to="/services" className="footerTextMenu">
                Domestic
              </Link>
              <Link to="/services" className="footerTextMenu">
                International
              </Link>
              <Link to="/services" className="footerTextMenu">
                Charter
              </Link>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">Services</div>
              <Link to="/services" className="footerTextMenu">
                Holidays
              </Link>
              <Link to="/services" className="footerTextMenu">
                Pilgrimage
              </Link>
              <Link to="/services" className="footerTextMenu">
                Personalized tours
              </Link>
            </div>
            <div className="footerColumn">
              <div className="footerTextHeading">More</div>
              <Link to="/services" className="footerTextMenu">
                Airline ticketing
              </Link>
              <Link to="/services" className="footerTextMenu">
                Visa processing
              </Link>
              <Link to="/offers" className="footerTextMenu">
                Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
