import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactModal from "../components/ContactModal";

import titleStrip from "../assets/holyland/holylandStrip.jpg";
import holylandHeaderImg from "../assets/holyland/holylandHeaderImg.jpg";
import whatsappColor from "../assets/services/whatsappColor.svg";

import {
  aqsaImg,
  cordobaImg,
  cordobaMosqueImg,
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
} from "../assets/holyland";

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
          <img src={titleStrip} width={"100%"} alt="holy design image" />
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
          Embark on a spiritual journey with our Holy Land Tours and witness the
          wonders of Islamic and Biblical sites. We offer an array of
          destinations, including Jordan, Palestine and Israel, Egypt, Baghdad
          in Iraq, Tashkent, Samarkand, and Bukhara in Uzbekistan, Turkey,
          Morocco, Spain, and the Balkans - Bosnia & Herzegovina. Our tours are
          meticulously crafted to provide a seamless and hassle-free experience,
          so you can focus on exploring the holy sites and soaking in the
          cultural richness of these destinations.
          <br />
          <br />
          Our Holy Land Tours include luxurious accommodation in some of the
          best hotels, airfare, daily meals, and border departure taxes for
          Israel, Egypt & Jordan. You will be traveling in AC luxury coaches for
          transfers and enjoying guided tours in English with experienced
          guides. Our packages cover entrance fees to holy sites and other
          places as per itinerary, and we also provide visa assistance for
          Egypt, Jordan & Israel. Additionally, we offer insurance coverage up
          to the age of 60 years.
          <br />
          <br />
          Join us on a journey of a lifetime and let our Holy Land Tours fulfill
          your spiritual aspirations with a touch of luxury and comfort.
        </div>
        <Swiper
          className="holylandCarousel container h-100 my-5"
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
            <SwiperSlide className="holylandCarouselSlide h-100" key={slide.id}>
              <img
                className="holylandImage w-100 h-100"
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
          <div className="contactButton"
          data-bs-toggle="modal"
          data-bs-target="#contactModal">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Personalize Your itenary
          </div>
        </div>
        <ContactModal />
      </div>
    </>
  );
}
