import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import hajjHeaderImg from "../assets/images/hajj-header-img.svg";
import hajjTitle from "../assets/hajjTitle.svg";
import hajjTitleGeometry from "../assets/hajjTitleGeometry.svg";

import hotelHiltonLogo from "../assets/hajj/hotel/hotel-hilton-logo.svg";
import hotelSwissLogo from "../assets/hajj/hotel/hotel-swissotel-logo.svg";
import hotelFairmontLogo from "../assets/hajj/hotel/hotel-fairmont-logo.svg";
import hotelPullmanLogo from "../assets/hajj/hotel/hotel-pullman-logo.svg";
import hotelMovenpickLogo from "../assets/hajj/hotel/hotel-movenpick-logo.svg";
import hotelInterLogo from "../assets/hajj/hotel/hotel-intercontinental-logo.svg";

import hotelHilton1 from "../assets/hajj/hotel/hotel-hilton1.svg";
import hotelHilton2 from "../assets/hajj/hotel/hotel-hilton2.svg";
import hotelHilton3 from "../assets/hajj/hotel/hotel-hilton3.svg";
import hotelHilton4 from "../assets/hajj/hotel/hotel-hilton4.svg";
import hotelPullman1 from "../assets/hajj/hotel/hotel-pullman1.svg";
import hotelPullman2 from "../assets/hajj/hotel/hotel-pullman2.svg";
import hotelPullman3 from "../assets/hajj/hotel/hotel-pullman3.svg";
import hotelSwiss1 from "../assets/hajj/hotel/hotel-swiss1.svg";
import hotelSwiss2 from "../assets/hajj/hotel/hotel-swiss2.svg";
import hotelMovenpick from "../assets/hajj/hotel/hotel-movenpick.svg";
import hotelInter1 from "../assets/hajj/hotel/hotel-inter1.svg";
import hotelInter2 from "../assets/hajj/hotel/hotel-inter2.svg";
import hotelFairmont1 from "../assets/hajj/hotel/hotel-fairmont1.svg";
import hotelFairmont2 from "../assets/hajj/hotel/hotel-fairmont2.svg";

import kabahGate from "../assets/kabahGate.svg";
import madinaArc from "../assets/hajj/madina-arc-img.svg";
import madinaMinaret from "../assets/hajj/madina-minaret-img.svg";
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
        <div className="hajjTitleContainer mb-5">
          <img src={hajjTitleGeometry} alt="geometry" />

          <div className="hajjTitleImage">
            <img src={hajjTitle} alt="hajj" />
          </div>
          <img src={hajjTitleGeometry} alt="geometry" />
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
        <div className=" hajjFeatures container my-5">
          <ul className=" hajjFeaturesRow row">
            <li className="col-xs-12 col-md-6 my-3">Visa and tickets</li>
            <li className="col-xs-12 col-md-6 my-3">Premium hotels</li>
            <li className="col-xs-12 col-md-6 my-3">Continental buffet</li>
            <li className="col-xs-12 col-md-6 my-3">Luxury coaches</li>
            <li className="col-xs-12 col-md-6 my-3">Experienced guide</li>
            <li className="col-xs-12 col-md-6 my-3">24/7 support</li>
          </ul>
        </div>
        <div className="hajjImagesContainer container my-5">
          <div className="imageContainer">
            <img className="hajjImages" src={kabahGate} alt="kabah gate" />
          </div>
          <div className="imageContainer">
            <img className="hajjImages" src={madinaArc} alt="hajj" />
          </div>
          <div className="imageContainer">
            <img className="hajjImages" src={madinaMinaret} alt="hajj" />
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
            <SwiperSlide className="hotelCarouselSlide " key={slide.id}>
              <img
                className="hotelImage"
                src={slide.imageUrl}
                alt="hotel images"
              />
              <div className="hotelTextBox">
                <div className="hotelText">{slide.hotel}</div>
                <div className="hotelLogo">
                  <img src={slide.hotelImageUrl} alt="hotel logo" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Request A Quote
          </Link>
        </div>
      </div>
    </>
  );
}
