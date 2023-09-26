import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactModal from "../components/ContactModal";
import hajjHeaderImg from "../assets/images/hajjHeaderImg.jpg";
import hajjTitle from "../assets/hajjTitle.svg";
import hajjTitleGeometry from "../assets/hajjTitleGeometry.svg";

import formLogo from "../assets/icons/form-logo.svg";

import hotelHiltonLogo from "../assets/hajj/hotel/hotelHiltonLogo.png";
import hotelSwissLogo from "../assets/hajj/hotel/hotelSwissotelLogo.png";
import hotelFairmontLogo from "../assets/hajj/hotel/hotelFairmontLogo.png";
import hotelPullmanLogo from "../assets/hajj/hotel/hotelPullmanLogo.png";
import hotelMovenpickLogo from "../assets/hajj/hotel/hotelMovenpickLogo.png";
import hotelInterLogo from "../assets/hajj/hotel/hotelIntercontinentalLogo.png";

import hotelHilton1 from "../assets/hajj/hotel/hotelHilton01.jpg";
import hotelHilton2 from "../assets/hajj/hotel/hotelHilton02.jpg";
import hotelHilton3 from "../assets/hajj/hotel/hotelHilton03.jpg";
import hotelHilton4 from "../assets/hajj/hotel/hotelHilton04.jpg";
import hotelPullman1 from "../assets/hajj/hotel/hotelPullman01.jpg";
import hotelPullman2 from "../assets/hajj/hotel/hotelPullman02.jpg";
import hotelPullman3 from "../assets/hajj/hotel/hotelPullman03.jpg";
import hotelSwiss1 from "../assets/hajj/hotel/hotelSwiss01.jpg";
import hotelSwiss2 from "../assets/hajj/hotel/hotelSwiss02.jpg";
import hotelMovenpick from "../assets/hajj/hotel/hotelMovenpick.jpg";
import hotelInter1 from "../assets/hajj/hotel/hotelInter01.jpg";
import hotelInter2 from "../assets/hajj/hotel/hotelInter02.jpg";
import hotelFairmont1 from "../assets/hajj/hotel/hotelFairmont01.jpg";
import hotelFairmont2 from "../assets/hajj/hotel/hotelFairmont02.jpg";

import kabahGate from "../assets/kabahGate.jpg";
import madinaArc from "../assets/hajj/medinaArc.jpg";
import madinaMinaret from "../assets/hajj/medinaMinaret.jpg";
import whatsappColor from "../assets/services/whatsappColor.svg";

import "../styles/Hajj.scss";

export default function Hajj() {
  const hotelCarouselImages = [
    {
      id: 1,
      imageUrl: hotelHilton1,
      hotel: "Hilton Suites Makkah",
      hotelImageUrl: hotelHiltonLogo,
    },
    {
      id: 2,
      imageUrl: hotelHilton2,
      hotel: "Hilton Suites Makkah",
      hotelImageUrl: hotelHiltonLogo,
    },
    {
      id: 3,
      imageUrl: hotelHilton3,
      hotel: "Hilton Suites Makkah",
      hotelImageUrl: hotelHiltonLogo,
    },
    {
      id: 4,
      imageUrl: hotelSwiss1,
      hotel: "Swissôtel Makkah",
      hotelImageUrl: hotelSwissLogo,
    },
    {
      id: 5,
      imageUrl: hotelSwiss2,
      hotel: "Swissôtel Makkah",
      hotelImageUrl: hotelSwissLogo,
    },
    {
      id: 6,
      imageUrl: hotelFairmont1,
      hotel: "Makkah Clock Royal Tower",
      hotelImageUrl: hotelFairmontLogo,
    },
    {
      id: 7,
      imageUrl: hotelFairmont2,
      hotel: "Makkah Clock Royal Tower",
      hotelImageUrl: hotelFairmontLogo,
    },
    {
      id: 8,
      imageUrl: hotelPullman1,
      hotel: "Pullman ZamZam Makkah",
      hotelImageUrl: hotelPullmanLogo,
    },
    {
      id: 9,
      imageUrl: hotelPullman2,
      hotel: "Pullman ZamZam Makkah",
      hotelImageUrl: hotelPullmanLogo,
    },
    {
      id: 10,
      imageUrl: hotelInter1,
      hotel: "Dar Al Tawhid Makkah",
      hotelImageUrl: hotelInterLogo,
    },
    {
      id: 11,
      imageUrl: hotelInter2,
      hotel: "Dar Al Tawhid Makkah",
      hotelImageUrl: hotelInterLogo,
    },
    {
      id: 12,
      imageUrl: hotelHilton4,
      hotel: "Madinah Hilton",
      hotelImageUrl: hotelHiltonLogo,
    },
    {
      id: 13,
      imageUrl: hotelPullman3,
      hotel: "Pullman ZamZam Madinah",
      hotelImageUrl: hotelPullmanLogo,
    },
    {
      id: 14,
      imageUrl: hotelMovenpick,
      hotel: "Anwar al Madina Mövenpick",
      hotelImageUrl: hotelMovenpickLogo,
    },
  ];
  return (
    <>
      <div>
        <div className="hajjHeaderImage">
          <img src={hajjHeaderImg} width={"100%"} alt="hajj image" />
        </div>
        <div className="homeHajjTitleContainer mb-5 w-100 d-flex align-items-center px-3 justify-content-center justify-content-sm-between">
          <img
            className="hajjGeometry d-none d-sm-flex"
            src={hajjTitleGeometry}
            alt="geometry"
          />
          <div>
            <img className="homeHajjTitleImage" src={hajjTitle} alt="hajj" />
          </div>
          <img
            className="hajjGeometry d-none d-sm-flex"
            src={hajjTitleGeometry}
            alt="geometry"
          />
        </div>
        <div className="description container my-5">
          Our Hajj and Umrah services offer a hassle-free and unforgettable
          spiritual journey to the holy cities of Makkah and Madinah. We provide
          comprehensive packages that include{" "}
          <span className="bold700"> airline tickets</span>, accommodation in
          <span className="bold700"> premium hotels</span>,{" "}
          <span className="bold700"> transportation</span>, and guidance
          throughout the entire trip. <br /> <br /> Fulfill your religious
          obligations and leave the rest on us! Our experienced team takes care
          of all the necessary arrangements, such as visa processing, health
          requirements, and other essential travel formalities. We ensure that
          our clients have a comfortable and spiritually enriching experience,
          and we strive to exceed their expectations with our unparalleled
          services.
        </div>
        <div className=" hajjFeatures container w-100 justify-content-center my-5">
          <ul className=" hajjFeaturesRow row text-nowrap text-start">
            <li className="col-12 col-lg-6 my-3">Visa and tickets</li>
            <li className="col-12 col-lg-6 my-3">Premium hotels</li>
            <li className="col-12 col-lg-6 my-3">Continental buffet</li>
            <li className="col-12 col-lg-6 my-3">Luxury coaches</li>
            <li className="col-12 col-lg-6 my-3">Experienced guide</li>
            <li className="col-12 col-lg-6 my-3">24/7 support</li>
          </ul>
        </div>
        <div className="darkButtonContainer container my-5">
          <a
            href="https://forms.gle/XQbbQNeo2dVA5QF87"
            target="_blank"
            className="darkButton rounded d-flex"
          >
            <img src={formLogo} className="mx-1" alt="whatsapp Logo" />
            <div className="darkButtonText text-white mx-1">Enquire Now</div>
          </a>
        </div>
        <div className="hajjImagesContainer d-flex container justify-content-center mt-5">
          <div className="row w-100 justify-content-between">
            <div className="col-sm-4 d-flex justify-content-center my-3">
              <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                <img className="hajjImages" src={kabahGate} alt="kabah gate" />
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center my-3">
              <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                <img className="hajjImages" src={madinaArc} alt="hajj" />
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center my-3">
              <div className="hajjImageContainer m-0 p-0 d-flex justify-content-center align-items-center overflow-hidden">
                <img className="hajjImages" src={madinaMinaret} alt="hajj" />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="hotelCarousel container my-5"
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {hotelCarouselImages.map((slide) => (
            <SwiperSlide
              className="hotelCarouselSlide d-flex justify-content-center align-items-end position-relative "
              key={slide.id}
            >
              <img
                className="hotelImage rounded"
                src={slide.imageUrl}
                alt="hotel images"
              />
              <div className="hotelTextBox container-fluid g-0 position-absolute w-100 text-white">
                <div className="row">
                  <div className="hotelText col-8 d-flex justify-content-center align-items-center">
                    {slide.hotel}
                  </div>
                  <div className="hotelLogo col-4 d-flex justify-content-center align-items-center">
                    <img
                      className="hotelLogoImage py-3"
                      src={slide.hotelImageUrl}
                      alt="hotel logo"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="buttonContainer my-5">
          <div
            className="contactButton"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img src={whatsappColor} alt="whatsapp Logo" />
            Request A Quote
          </div>
        </div>
        <ContactModal />
      </div>
    </>
  );
}
