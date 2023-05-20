import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import "../styles/Home.scss";

import SocialIcons from "../components/SocialIcons";
import HolidayCarousel from "../components/HolidayCarousel";

import homeAboutImage from "../assets/homeAboutImage.svg";
import hajjTitle from "../assets/hajjTitle.svg";
import hajjTitleGeometry from "../assets/hajjTitleGeometry.svg";

import logoWing from "../assets/logo/logo-wing.svg";
import iata from "../assets/iataLogo.svg";
import kabahGate from "../assets/kabahGate.svg";
import dhikrImage from "../assets/dhikrImage.svg";
import madinaDome from "../assets/madinaDome.svg";

import Hyderabad from "../assets/holidays/domestic/hyderabadHoliday.svg";
import Delhi from "../assets/holidays/domestic/delhiHoliday.svg";
import Agra from "../assets/holidays/domestic/agraHoliday.svg";
import Sikkim from "../assets/holidays/domestic/sikkimHoliday.svg";
import Kashmir from "../assets/holidays/domestic/kashmirHoliday.svg";
import Shimla from "../assets/holidays/domestic/shimlaHoliday.svg";
import Jaipur from "../assets/holidays/domestic/jaipurHoliday.svg";
import Goa from "../assets/holidays/domestic/goaHoliday.svg";
import Leh from "../assets/holidays/domestic/lehHoliday.svg";
import Lakshwadeep from "../assets/holidays/domestic/lakshwadeepHoliday.svg";
import Kerala from "../assets/holidays/domestic/keralaHoliday.svg";

import Indonasia from "../assets/holidays/international/indonasiaHoliday.svg";
import Singapore from "../assets/holidays/international/singaporeHoliday.svg";
import Thailand from "../assets/holidays/international/thailandHoliday.svg";
import Maldives from "../assets/holidays/international/maldivesHoliday.svg";
import Russia from "../assets/holidays/international/russiaHoliday.svg";
import MiddleEast from "../assets/holidays/international/middleEastHoliday.svg";
import Europe from "../assets/holidays/international/europeHoliday.svg";
import America from "../assets/holidays/international/americaHoliday.svg";

const domesticHolidays = [
  {
    id: 1,
    title: "Hyderabad",
    imageUrl: Hyderabad,
  },
  {
    id: 2,
    title: "Delhi",
    imageUrl: Delhi,
  },
  {
    id: 3,
    title: "Agra",
    imageUrl: Agra,
  },
  {
    id: 4,
    prefix: "Tsomgo ",
    title: "Sikkim",
    imageUrl: Sikkim,
  },
  {
    id: 5,
    title: "Kashmir",
    imageUrl: Kashmir,
  },
  {
    id: 6,
    title: "Shimla",
    imageUrl: Shimla,
  },
  {
    id: 7,
    title: "Jaipur",
    imageUrl: Jaipur,
  },
  {
    id: 8,
    title: "Goa",
    imageUrl: Goa,
  },
  {
    id: 9,
    title: "Leh",
    imageUrl: Leh,
  },
  {
    id: 10,
    title: "Lakshwadeep",
    imageUrl: Lakshwadeep,
  },
  {
    id: 11,
    title: "Kerala",
    imageUrl: Kerala,
  },
];

const internationalHolidays = [
  {
    id: 1,
    prefix: "Bali ",
    title: "Indonesia",
    imageUrl: Indonasia,
  },
  {
    id: 2,
    title: "Singapore",
    imageUrl: Singapore,
  },
  {
    id: 3,
    title: "Thailand",
    imageUrl: Thailand,
  },
  {
    id: 4,
    title: "Maldives",
    imageUrl: Maldives,
  },
  {
    id: 5,
    title: "Russia",
    imageUrl: Russia,
  },
  {
    id: 6,
    font: 12,
    prefix12: true,
    suffix12: true,
    title10: true,
    prefix: "Middle East",
    title: "and",
    suffix: "North Africa",
    imageUrl: MiddleEast,
  },
  {
    id: 7,
    title: "Europe",
    imageUrl: Europe,
  },
  {
    id: 8,
    title: "Americas",
    imageUrl: America,
  },
];

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <div className="subHeaderContainer">
        <div className="iconContainer">
          <SocialIcons />
          <span>
            <span className="blue">since</span>&nbsp;
            <span className="red">1975</span>
          </span>
        </div>
      </div>
      <div className="blurBackground"></div>
      <div className="homeAbout">
        <div className="homeAboutContainer">
          <div className="homeAboutImageContainer">
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
          <div className="homeAboutTextContainer">
            <div className="textBox1">
              At Aero Wings, we believe that travel is not just about reaching a
              destination, but about the journey itself. Our team of passionate
              travel experts is committed to creating personalized and unique
              travel experiences for our clients. With over four decades of
              experience in the travel industry, we have built a reputation for
              excellence, reliability, and customer satisfaction.
            </div>
            <div className="textBox2">
              We are dedicated to making your travel dreams a reality and
              ensuring that your journey with us is one to remember.
            </div>
            <Link to="/about" className="glassButton">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="homeHolidays">
        <div className="homeHolidaysContainer">
          <div className="domesticHolidays">
            <div className="homeHolidayTitle">
              Experience a Memorable Staycation with Our{" "}
              <span className="blue poppins600"> Domestic</span> Getaways
            </div>
            <div className="homeHolidayTitle">
              <HolidayCarousel arr={domesticHolidays} />
            </div>
          </div>
          <div className="internationalHolidays">
            <div className="homeHolidayTitle">
              Discover the Best of the World with Our{" "}
              <span className="red poppins600">International</span> Tours
            </div>
            <div className="holidayCards">
              <HolidayCarousel arr={internationalHolidays} />
            </div>
          </div>
        </div>
      </div>
      <div className="homeHajj">
        <div className="homeHajjContainer">
          <div className="homeHajjTitleContainer">
            <img src={hajjTitleGeometry} alt="geometry" />

            <div className="homeHajjTitleImage">
              <img src={hajjTitle} alt="hajj" />
            </div>
            <img src={hajjTitleGeometry} alt="geometry" />
          </div>

          <div className="hajjImagesContainer">
            <div className="imageContainer">
              <img className="hajjImages" src={kabahGate} alt="kabah gate" />
            </div>
            <div className="imageContainer">
              <img className="hajjImages" src={dhikrImage} alt="hajj" />
              <Link to="/hajj" className=" exploreButton glassButton">
                Explore now
              </Link>
            </div>
            <div className="imageContainer">
              <img className="hajjImages" src={madinaDome} alt="hajj" />
            </div>
          </div>
        </div>
      </div>
      <div className="homeWhyUs">
        <div className="whyUsWrapper">
          <div className="viewAllButtonContainer">
            <Link to="/services" className="viewAllButton">
              View all our services
            </Link>
          </div>
          <div className="WhyUsContainer">
            <div className="WhyUsTitleContainer">
              <div className="WhyUsTitle">
                <span>Why</span>
                <br />
                <span className="aerowings" style={{ fontSize: "56px" }}>
                  AeroWings?
                </span>
              </div>
            </div>
            <div className="WhyUsCardsContainer">
              <div className="WhyUsRow">
                <div className="WhyUsCard">
                  <div className="WhyUsCardText">
                    <span className="gold">40+ years</span> of experience and
                    expertise
                  </div>
                </div>
                <div className="WhyUsCard">
                  <div className="WhyUsCardText">
                    <span className="gold">Reliability</span> proven by serving
                    half a million of customers
                  </div>
                </div>
              </div>
              <div className="WhyUsRow">
                <div className="WhyUsCard">
                  <div className="WhyUsCardText">
                    <span className="gold">Peace of mind</span> with our meticulous service
                  </div>
                </div>
                <div className="WhyUsCard">
                  <div className="WhyUsCardText">
                    <img src={iata} alt="iata Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeFooter">
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
