import downArrow from "@/assets/icons/fi-rs-angle-down.svg";

import HolidayModal from "./HolidayModal";

import "./CardsAccordion.scss";
import { useState } from "react";

export default function CardsAccordion({ arr }) {
  const [expand, setExpand] = useState(false);
  const [focusHoliday, setFocusHoliday] = useState(0);
  return (
    <>
      <div id="cardsAccordion" className={expand ? "expand" : "collapsed"}>
        <div className="cardsAccordionContainer d-flex justify-content-center flex-column container-xs container g-3">
          <HolidayModal arr={focusHoliday} />
          <div className="row">
            {arr.map((slides) => (
              <div
                className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-5"
                key={slides.id}
              >
                <div
                  className="holidayImageContainer"
                  data-bs-toggle="modal"
                  data-bs-target="#holidayModal"
                  onClick={() => setFocusHoliday(slides)}
                >
                  <div className="holidayImageTextContainer">
                    <div
                      className={
                        slides.font === 12
                          ? "font10 holidayImageText"
                          : "holidayImageText"
                      }
                    >
                      <span
                        className={slides.prefix12 ? "prefix12" : "prefix14"}
                      >
                        {slides.prefix}
                      </span>
                      {" " + slides.title + " "}
                      <span className={slides.suffix12 ? "suffix12" : "suffix"}>
                        {slides.suffix}
                      </span>
                    </div>
                  </div>
                  <img
                    className="holidayImage"
                    src={slides.imageUrl}
                    alt={slides.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        id="expandButton"
        onClick={() => {
          setExpand(!expand);
        }}
        className="d-flex justify-content-center"
      >
        <img
          className={expand ? " arrowButton open" : " arrowButton close"}
          src={downArrow}
          style={{ width: "56px" }}
          alt="down arrow button"
        />
      </a>
    </>
  );
}
