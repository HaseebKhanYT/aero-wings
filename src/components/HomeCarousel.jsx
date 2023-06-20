import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AeroWings from "../assets/logo/aero-wings-text.svg";
import Plane from "../assets/images/plane-bg.svg";
import Beach from "../assets/images/beach-bg.svg";
import Kabah from "../assets/images/kabah-bg.svg";
import India from "../assets/images/india-bg.svg";
import Thailand from "../assets/images/thailand-bg.svg";
import Corporate from "../assets/images/corporate-bg.svg";
import IncredibleIndia from "../assets/incredibleIndia.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/HomeCarousel.scss";

export default function HomeCarousel() {
  return (
    <>
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="homeCarousel"
        >
          <SwiperSlide className="slide">
            <div className="slide-text">
              <div className="planeText">
                <div className="poppins250">Discover new horizons with</div>
                <img
                  className="aeroWingsImage"
                  src={AeroWings}
                  alt="aerowings"
                />
              </div>
            </div>
            <img
              className="carouselImage"
              src={Plane}
              alt="carouselImages"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-text beachText">
              {" "}
              <div className="cursive">
                <span className="white"> Relax and Unwind on a</span>{" "}
                <span className="yellowBeach"> Beautiful Beach.</span>
              </div>
              <div className="poppins700">
                <span className="white">
                  Create exclusive{" "}
                  <span className="yellowBeach"> holiday deals!</span>
                </span>
              </div>
            </div>
            <img
              className="carouselImage"
              src={Beach}
              alt="carouselImages"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-text kabahText">
              <div className="poppins900 fontSize35">
                <span className="white"> Premium</span>{" "}
                <span className="bone"> Hajj</span>
                <span className="white"> and</span>{" "}
                <span className="bone"> Umrah</span>
                <span className="white"> packages</span>{" "}
              </div>
              <div className="poppins300 fontSize25">
                <span className="white">Embark on a </span>
                <span className="bone poppins600"> spiritual journey </span>
                <span className="white">of a lifetime.</span>
              </div>
            </div>
            <img
              className="carouselImage"
              src={Kabah}
              alt="carouselImages"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-text indiaText">
              <div>
                <img
                  className="incredibleIndiaImage"
                  src={IncredibleIndia}
                  alt="incredible india"
                />
              </div>
              <div className="white">
                Experience the vibrant colors,
                <br /> diverse culture,
                <br /> and rich heritage
              </div>
            </div>
            <img
              className="carouselImage"
              src={India}
              alt="carouselImages"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-text thailandText">
              <div className="fontSize3 josefinsSans thaiGradient">
                Travel the World with Us!
              </div>
              <div className="fontSize15 poppins275 textBlue ">
                your one-stop shop for Europe, America, Asia
                <br /> and other exciting holidays.
              </div>
            </div>
            <img
              className="carouselImage"
              src={Thailand}
              alt="carouselImages"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-text corporateText">
              <div className=" corporateText1 bone">
                Travel with purpose: Meetings, Incentives, Conferences, Events
              </div>
              <div className=" corporateText2  white">Corporate travel</div>{" "}
              <div className="corporateText3 black">we've got it covered.</div>
            </div>
            <img
              className="carouselImage"
              src={Corporate}
              alt="carouselImages"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
