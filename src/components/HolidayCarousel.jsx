import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import HolidayModal from "./HolidayModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/HolidayCarousel.scss";

import seemore from "../assets/seemore.png"

export default function HolidayCarousel({ arr, onClick, focus }) {

  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            780: {
              slidesPerView: 3,
            },
            1050: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          className="holidayCarousel"
        >
          {arr.map((slides) => (
            <SwiperSlide
              className="slide"
              image={slides.imageUrl}
              text={slides.title}
              key={slides.id}
            >
              <div
                className="holidayImageContainer d-flex justify-content-start align-items-end"
                data-bs-toggle="modal"
                data-bs-target="#holidayModal"
                onClick={() => {
                  onClick(slides);
                }}
              >
                <div className="holidayImageTextContainer position-absolute d-flex">
                  <div
                    className={
                      slides.font === 12
                        ? "font10 holidayImageText"
                        : "holidayImageText"
                    }
                  >
                    <span className={slides.prefix12 ? "prefix12" : "prefix14"}>
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
                  alt="holiday Images"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* {console.log(arr[0].type)} */}
          <SwiperSlide className="seemore">
                    <Link to={arr[0].type}>
                      <img src={seemore} width={"250px"} alt="see more" />
                    </Link>
          </SwiperSlide>
        </Swiper>
        <HolidayModal arr={focus} />
      </div>
    </>
  );
}
