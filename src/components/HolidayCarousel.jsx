import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/HolidayCarousel.scss";

export default function HolidayCarousel({ arr }) {
  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          // slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            600: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }}
          // navigation={true}
          // loop={true}
          className="holidayCarousel"
        >
          {arr.map((slides) => (
            <SwiperSlide
              className="slide"
              image={slides.imageUrl}
              text={slides.title}
              key={slides.id}
            >
              <div className="holidayImageContainer">
                <div className="holidayImageTextContainer">
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
        </Swiper>
      </div>
    </>
  );
}
