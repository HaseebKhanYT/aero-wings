import { Link } from "react-router-dom";
import CardsAccordian from "../components/CardsAccordian";

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

import whatsappColor from "../assets/services/whatsappColor.svg";
import indiaHeaderImg from "../assets/images/india-header-img.svg";
import indiaFooterImg from "../assets/images/india-footer-img.svg";
import "../styles/India.scss";

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

export default function India() {
  return (
    <>
      <div className="india">
        <div className="indiaHeaderImage">
          <img src={indiaHeaderImg} width={"100%"} alt="india image" />
        </div>
        <div className="indiaTitle my-5">
          Discover the Wonders of <span className="blue bold600">India</span>
        </div>
        <div className="description container my-5">
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
        <div className="indiaAccordian my-5">
          <CardsAccordian arr={domesticHolidays} />
        </div>
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
          <div className="foreignFooterImage my-5">
            <img src={indiaFooterImg} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}
