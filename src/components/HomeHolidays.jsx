import { useState } from "react";
import HolidayCarousel from "../components/HolidayCarousel";

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

import Indonasia1 from "../assets/holidays/international/indonesia1.png";
import Indonasia2 from "../assets/holidays/international/indonesia2.png";
import Indonasia3 from "../assets/holidays/international/indonesia3.png";
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
    type: 2,
    prefix: "Bali ",
    title: "Indonesia",
    imageUrl: Indonasia1,
    imageUrl1: Indonasia2,
    imageUrl2: Indonasia3,
    desc: "Indonesia is a country located in Southeast Asia, consisting of over 17,000 islands, making it the largest archipelago in the world. It is home to a diverse range of cultures, languages, and religions, and is renowned for its natural beauty, including stunning beaches, towering volcanoes, and lush tropical forests. Visitors to Indonesia can enjoy a wide range of activities, from surfing and scuba diving in crystal clear waters to exploring ancient temples and historic landmarks. The country is famous for its cuisine, with a variety of dishes featuring spicy flavors, fresh seafood, and exotic fruits. Some of the top destinations in Indonesia include Bali, with its beautiful beaches and vibrant nightlife, Yogyakarta, home to the ancient Borobudur temple, and the capital city of Jakarta, a bustling metropolis with a rich history and culture. Indonesia offers something for everyone, whether you are seeking adventure, relaxation, or a cultural experience.",
  },
  {
    id: 2,
    type: 2,
    title: "Singapore",
    imageUrl: Singapore,
  },
  {
    id: 3,
    title: "Thailand",
    type: 2,
    imageUrl: Thailand,
  },
  {
    id: 4,
    title: "Maldives",
    type: 2,
    imageUrl: Maldives,
  },
  {
    id: 5,
    title: "Russia",
    type: 2,
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
    type: 2,
    imageUrl: MiddleEast,
  },
  {
    id: 7,
    title: "Europe",
    type: 2,
    imageUrl: Europe,
  },
  {
    id: 8,
    title: "Americas",
    type: 2,
    imageUrl: America,
  },
];

export default function HomeHolidays() {
  const [focusHoliday, setFocusHoliday] = useState(0);

  function handleClick(e) {
    setFocusHoliday(e);
  }
  return (
    <>
      <div className="homeHolidaysContainer container my-5">
        <div className="domesticHolidays">
          {/* <DomesticHolidays/> */}
          <div className="homeHolidayTitle my-3">
            Experience a Memorable Staycation with Our{" "}
            <span className="blue poppins600"> Domestic</span> Getaways
          </div>
          <div className="holidayCards container">
            <HolidayCarousel
              arr={domesticHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
        <div className="internationalHolidays">
          <div className="homeHolidayTitle my-3">
            Discover the Best of the World with Our{" "}
            <span className="red poppins600">International</span> Tours
          </div>
          <div className="holidayCards container">
            <HolidayCarousel
              arr={internationalHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
      </div>
    </>
  );
}
