import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AeroWings from "../assets/logo/aero-wings-text.svg";
import Plane from "../assets/images/plane-bg.jpg";
import Beach from "../assets/images/beach-bg.jpg";
import Kabah from "../assets/images/kabah-bg.jpg";
import India from "../assets/images/india-bg.jpg";
import Thailand from "../assets/images/thailand-bg.jpg";
import Corporate from "../assets/images/corporate-bg.jpg";
import IncredibleIndia from "../assets/incredibleIndia.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/HomeCarousel.scss";
import { useNavigate } from "react-router-dom";

export default function HomeCarousel() {
  const navigate = useNavigate();
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
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/airlines");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="planeText position-absolute d-flex flex-column justify-content-end align-items-end h-100 w-100">
                  <div className="poppins250">Discover new horizons with</div>
                  <img
                    className="aeroWingsImage"
                    src={AeroWings}
                    alt="aerowings"
                  />
                </div>
              </div>
              <img className="carouselImage" src={Plane} alt="carouselImages" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/holiday");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="beachText position-absolute d-flex justify-content-center flex-column w-100 h-100">
                  {" "}
                  <div className="cursive text-nowrap">
                    <span className="white"> Relax and Unwind on a</span>{" "}
                    <span className="yellowBeach"> Beautiful Beach.</span>
                  </div>
                  <div className="poppins700 text-nowrap">
                    <span className="white">
                      Create exclusive{" "}
                      <span className="yellowBeach"> holiday deals!</span>
                    </span>
                  </div>
                </div>
              </div>
              <img className="carouselImage" src={Beach} alt="carouselImages" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/hajj");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="kabahText position-absolute d-flex flex-column justify-content-center align-items-start w-100 h-100">
                  <div className="kabahText1 text-nowrap">
                    <span className="white"> Premium</span>{" "}
                    <span className="bone"> Hajj</span>
                    <span className="white"> and</span>{" "}
                    <span className="bone"> Umrah</span>
                    <span className="white"> packages</span>{" "}
                  </div>
                  <div className="kabahText2 text-nowrap">
                    <span className="white">Embark on a </span>
                    <span className="bone poppins600"> spiritual journey </span>
                    <span className="white">of a lifetime.</span>
                  </div>
                </div>
              </div>
              <img className="carouselImage" src={Kabah} alt="carouselImages" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/india");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="indiaText position-absolute d-flex flex-column justify-content-between w-100">
                  <div className=" mb-5">
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
              </div>
              <img className="carouselImage" src={India} alt="carouselImages" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/foreign");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="thailandText position-absolute d-flex flex-column justify-content-start align-items-end text-end w-100 h-100">
                  <div className="thaiText1 text-nowrap josefinsSans thaiGradient">
                    Travel the World with Us!
                  </div>
                  <div className="thaiText2 text-nowrap poppins275 textBlue">
                    your one-stop shop for Europe, America, Asia
                    <br /> and other exciting holidays.
                  </div>
                </div>
              </div>
              <img
                className="carouselImage"
                src={Thailand}
                alt="carouselImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide clickable">
            <div
              onClick={() => {
                navigate("/corporate");
              }}
              className=" d-flex h-100 w-100 justify-content-center align-items-center"
            >
              <div className="slide-text">
                <div className="corporateText position-absolute d-flex flex-column justify-content-end align-items-start w-100 h-100">
                  <div className=" corporateText1 text-nowrap bone">
                    Travel with purpose: Meetings, Incentives, Conferences,
                    Events
                  </div>
                  <div className=" corporateText2 text-nowrap white">
                    Corporate travel
                  </div>{" "}
                  <div className="corporateText3 text-nowrap black">
                    we've got it covered.
                  </div>
                </div>
              </div>
              <img
                className="carouselImage"
                src={Corporate}
                alt="carouselImages"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
