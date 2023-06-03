import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import CardsAccordian from "../components/CardsAccordian";

import foreignHeaderImg from "../assets/images/foreign-header-img.svg";
import foreignFooterImg from "../assets/images/foreign-footer-img.svg";

import whatsappColor from "../assets/services/whatsappColor.svg";

import "../styles/Foreign.scss";

// import Indonasia from "../assets/holidays/international/indonasiaHoliday.svg";
import Indonesia1 from "../assets/holidays/international/indonesia1.png";
import Indonesia2 from "../assets/holidays/international/indonesia2.png";
import Indonesia3 from "../assets/holidays/international/indonesia3.png";
import Singapore from "../assets/holidays/international/singaporeHoliday.svg";
import Thailand from "../assets/holidays/international/thailandHoliday.svg";
import Maldives from "../assets/holidays/international/maldivesHoliday.svg";
import Russia from "../assets/holidays/international/russiaHoliday.svg";
import MiddleEast from "../assets/holidays/international/middleEastHoliday.svg";
import Europe from "../assets/holidays/international/europeHoliday.svg";
import America from "../assets/holidays/international/americaHoliday.svg";

const internationalHolidays = [
  {
    id: 1,
    prefix: "Bali ",
    title: "Indonesia",
    imageUrl: Indonesia1,
    modalImage1: Indonesia2,
    modalImage2: Indonesia3,
    description:
      "Indonesia is a country located in Southeast Asia, consisting of over 17,000 islands, making it the largest archipelago in the world. It is home to a diverse range of cultures, languages, and religions, and is renowned for its natural beauty, including stunning beaches, towering volcanoes, and lush tropical forests. Visitors to Indonesia can enjoy a wide range of activities, from surfing and scuba diving in crystal clear waters to exploring ancient temples and historic landmarks. The country is famous for its cuisine, with a variety of dishes featuring spicy flavors, fresh seafood, and exotic fruits. Some of the top destinations in Indonesia include Bali, with its beautiful beaches and vibrant nightlife, Yogyakarta, home to the ancient Borobudur temple, and the capital city of Jakarta, a bustling metropolis with a rich history and culture. Indonesia offers something for everyone, whether you are seeking adventure, relaxation, or a cultural experience.",
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

export default function Foreign() {
  return (
    <>
      <div className="foreign">
        <div className="foreignHeaderImage">
          <img
            src={foreignHeaderImg}
            width={"100%"}
            alt="international header"
          />
        </div>
        <div className="foreignTitle my-5">
          Top <span className="red bold600">International</span> Destinations
        </div>
        <div className="description container my-5">
          Discover the world with our international tour packages. From the
          stunning natural beauty of Europe to the exotic cultures of Asia and
          the vibrant cities of the Americas, we offer a wide range of
          destinations and packages to suit every taste and budget. Our
          experienced team will take care of everything from flights and hotels
          to tours and activities, ensuring that you have a stress-free and
          unforgettable travel experience. Whether you're seeking adventure,
          relaxation, or cultural enrichment, we have the perfect package for
          you. So pack your bags and get ready to explore the world with us.
        </div>
        <div className="foreignAccordian">
          <CardsAccordian arr={internationalHolidays} />
        </div>
        <div className="buttonContainer my-5">
          <button
            className="contactButton"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img src={whatsappColor} alt="whatsapp Logo" />
            Craft Your Ideal Iterany Now
          </button>
        </div>
        <ContactModal />
        <div className="buttonContainer my-5">
          <Link to="/india" className="shortcutButton">
            See Domestic Destinations
          </Link>
        </div>
        <div className="foreignFooterImage my-5">
          <img src={foreignFooterImg} alt="" />
        </div>
      </div>
    </>
  );
}
