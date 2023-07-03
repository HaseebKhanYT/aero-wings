import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import trainHeaderImg from "../assets/images/train-header-img.png";
import whatsappColor from "../assets/services/whatsappColor.svg";

import trainLogo1 from "../assets/train/trainLogos01.svg";
import trainLogo2 from "../assets/train/trainLogos02.svg";
import trainLogo3 from "../assets/train/trainLogos03.svg";
import trainLogo4 from "../assets/train/trainLogos04.svg";

import trainImages1 from "../assets/train/trainImages01.jpg";
import trainImages2 from "../assets/train/trainImages02.jpg";
import trainImages3 from "../assets/train/trainImages03.jpg";
import trainImages4 from "../assets/train/trainImages04.jpg";
import trainImages5 from "../assets/train/trainImages05.jpg";
import trainImages6 from "../assets/train/trainImages06.jpg";
import trainImages7 from "../assets/train/trainImages07.jpg";
import trainImages8 from "../assets/train/trainImages08.jpg";
import trainImages9 from "../assets/train/trainImages09.jpg";

const trainImages = [
  {
    id: 1,
    imageUrl: trainImages1,
  },
  {
    id: 2,
    imageUrl: trainImages2,
  },
  {
    id: 3,
    imageUrl: trainImages3,
  },
  {
    id: 4,
    imageUrl: trainImages4,
  },
  {
    id: 5,
    imageUrl: trainImages5,
  },
  {
    id: 6,
    imageUrl: trainImages6,
  },
  {
    id: 7,
    imageUrl: trainImages7,
  },
  {
    id: 8,
    imageUrl: trainImages8,
  },
  {
    id: 9,
    imageUrl: trainImages9,
  },
];

const trainLogos = [
  {
    id: 1,
    imageUrl: trainLogo1,
  },
  {
    id: 2,
    imageUrl: trainLogo2,
  },
  {
    id: 3,
    imageUrl: trainLogo3,
  },
  {
    id: 4,
    imageUrl: trainLogo4,
  },
];

import "../styles/Train.scss";
export default function Train() {
  return (
    <div className="train">
      <div className="trainHeader">
        <div className="greyStrip"></div>
        <div className="trainHeaderImg">
          <img src={trainHeaderImg} width={"100%"} alt="train header image" />
          <div className="trainTitle">Train</div>
        </div>
      </div>
      <div className="description container my-5">
        Easily plan your travel and enjoy a comfortable journey on board.
        Whether it's a short day trip or a long-distance journey, we offer a
        wide range of options for both domestic and international train travel.
        From selecting the best routes and classes to reserving seats and
        arranging meals, we make sure that your train travel experience is
        hassle-free and enjoyable with our expertise and attention to detail.
        <br />
        <br />
        Experience the luxury of train travel with our Domestic and
        International train options, including the iconic Maharaja Express in
        India and other similar luxury trains. Explore Europe with ease and
        comfort by booking your tickets through our Euro Rail options. We also
        offer assistance in booking tickets for the Haramain High Speed Rail,
        the state-of-the-art train system in Saudi Arabia that connects the
        cities of Mecca, Medina, and Jeddah.
      </div>
      <div className="trainCompanyLogos my-5">
        <div className="container">
          <div className="row g-3">
            {trainLogos.map((logos) => (
              <div
                className="col col-lg-3 d-flex justify-content-center align-items-center"
                key={logos.id}
              >
                <div className="logoContainer d-flex justify-content-center">
                  <img src={logos.imageUrl} width={"175px"} alt="logo img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container ">
        <Swiper
          className="rounded"
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
          {trainImages.map((slide) => (
            <SwiperSlide key={slide.id} className="rounded">
              <img
                className="trainSlideImage w-100 h-100 rounded"
                src={slide.imageUrl}
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="buttonContainer my-5">
        <Link to="/contact" className="contactButton">
          <img src={whatsappColor} alt="whatsapp Logo" />
          Book Your Journey
        </Link>
      </div>
    </div>
  );
}
