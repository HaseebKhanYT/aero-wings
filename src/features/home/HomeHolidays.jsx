import { useState } from "react";
import HolidayCarousel from "./HolidayCarousel";

import {
  featuredDomesticHolidays,
  featuredInternationalHolidays,
} from "@/data/holidays";

export default function HomeHolidays() {
  const [focusHoliday, setFocusHoliday] = useState(0);

  function handleClick(e) {
    setFocusHoliday(e);
  }
  return (
    <>
      <div className="homeHolidaysContainer container-fluid gx-3 d-flex flex-column h-100  mb-5">
        <div className="domesticHolidays  w-100 d-flex flex-column">
          <div className="homeHolidayTitle px-5 text-start mb-3">
            Experience a Memorable Staycation with Our{" "}
            <span className="blue poppins600"> Domestic</span> Getaways
          </div>
          <div className="holidayCards my-4">
            <HolidayCarousel
              arr={featuredDomesticHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
        <div className="internationalHolidays w-100 d-flex flex-column">
          <div className="homeHolidayTitle px-5 text-start my-3">
            Discover the Best of the World with Our{" "}
            <span className="red poppins600">International</span> Tours
          </div>
          <div className="holidayCards my-4">
            <HolidayCarousel
              arr={featuredInternationalHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
      </div>
    </>
  );
}
