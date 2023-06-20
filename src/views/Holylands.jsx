import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import titleStrip from "../assets/holyland/title-strip1.png";
import holylandHeaderImg from "../assets/holyland/holyland-header-img.svg";
import whatsappColor from "../assets/services/whatsappColor.svg";

// import cordobaImg from "../assets/holyland/cordoba-spain-img.svg";
import {
  aqsaImg,
  cordobaImg,
  cordobaMosqueImg,
  mihrabImg,
  domeRockImg,
  petraImg,
  gizaImg,
  churchKaneoImg,
  istanbulMosqueImg,
  azharUniImg,
  baghdadIraqImg,
  mustanUniImg,
  khivaUzbekImg,
  samarkandUzbekImg,
} from "../assets/holyland"

import "../styles/Holylands.scss";

export default function Holylands() {
  const holylandCarouselImages = [
    {
      id: 1,
      imageUrl: cordobaImg,
      caption: "Cordoba, Spain",
    },
    // {
    //   id: 2,
    //   imageUrl: mihrabImg,
    //   caption: "Great Mosque of Cordoba, Spain",
    // },
    {
      id: 2,
      imageUrl: cordobaMosqueImg,
      caption: "Great Mosque of Cordoba, Spain",
    },
    {
      id: 3,
      imageUrl: aqsaImg,
      caption: "Al-Aqsa Mosque, Jersulam",
    },
    {
      id: 4,
      imageUrl: domeRockImg,
      caption: "Dome of the Rock, Jerusalem",
    },
    {
      id: 5,
      imageUrl: petraImg,
      caption: "Petra, Jordan",
    },
    {
      id: 6,
      imageUrl: gizaImg,
      caption: "The Pyramids of Giza, Egypt",
    },
    {
      id: 7,
      imageUrl: churchKaneoImg,
      caption: "Church of St. John at Kaneo, Macedonia",
    },
    {
      id: 8,
      imageUrl: istanbulMosqueImg,
      caption: "The Blue Mosque of Istanbul, Türkiye",
    },
    {
      id: 9,
      imageUrl: azharUniImg,
      caption: "Al-Azhar University - Cairo, Egypt",
    },
    
    {
      id: 10,
      imageUrl: baghdadIraqImg,
      caption: "Baghdad, Iraq",
    },
    {
      id: 11,
      imageUrl: mustanUniImg,
      caption: "Mustansiriyah University - Baghdad, Iraq",
    },
    {
      id: 12,
      imageUrl: khivaUzbekImg,
      caption: "Kalta Minor Minaret - Khiva, Uzbekistan",
    },
    {
      id: 13,
      imageUrl: samarkandUzbekImg,
      caption: "Registon Square - Samarkand, Uzbekistan",
    },
  ];
  return (
    <>
      <div className="holyland">
        <div className="holylandHeader">
          <img 
          src={titleStrip} width={"100%"} alt="holy design image" />
          <div className="holylandHeaderImg">
            <img 
              src={holylandHeaderImg}
              width={"100%"}
              alt="holyland header image"
            />
            <div className="holylandTitle">
              Holy Land Tours - Explore the Islamic and Biblical Sites
            </div>
          </div>
        </div>
        <div className="description container-sm my-5">
          Experience the beauty and diversity of India with our domestic tour
          packages. Whether you want to explore the breathtaking landscapes of
          the Himalayas, soak in the sun on the beaches of Goa, or immerse
          yourself in the rich culture and history of Rajasthan, we have the
          perfect itinerary for you. Our packages are designed to cater to every
          budget and preference, from luxury stays to budget-friendly options.
          Choose from our wide range of domestic tour packages and discover the
          magic of India. With our experienced tour guides and hassle-free
          travel arrangements, you can sit back and enjoy the journey while we
          take care of the rest.
        </div>
        <Swiper
          className="holylandCarousel container my-5"
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
          {holylandCarouselImages.map((slide) => (
            <SwiperSlide className="holylandCarouselSlide " key={slide.id}>
              <img
              
                className="holylandImage"
                src={slide.imageUrl}
                alt="holyland images"
              />
              <div className="holylandTextBox">
                <div className="holylandText">{slide.caption}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img 
            
            src={whatsappColor} alt="whatsapp Logo" />
            Personalize Your itenary
          </Link>
        </div>
      </div>
    </>
  );
}
