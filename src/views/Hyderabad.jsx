import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import hyderabadHeaderImg from "../assets/images/indiaFooterImg.webp";
// import hydSunset from "../assets/images/hyd-sunset-img.svg";
// import hydHussain1 from "../assets/images/hyd-hussainsagar-img.svg";
// import hydHussain2 from "../assets/images/hyd-hussainsagar2-img.svg";

import hydImage01 from "../assets/images/hydImages01.jpg";
import hydImage02 from "../assets/images/hydImages02.jpg";
import hydImage03 from "../assets/images/hydImages03.jpg";
import hydImage04 from "../assets/images/hydImages04.jpg";
import hydImage05 from "../assets/images/hydImages05.jpg";
import hydImage06 from "../assets/images/hydImages06.jpg";
import hydImage07 from "../assets/images/hydImages07.jpg";
import hydImage08 from "../assets/images/hydImages08.jpg";
import hydImage09 from "../assets/images/hydImages09.jpg";
import hydImage10 from "../assets/images/hydImages10.jpg";
import hydImage11 from "../assets/images/hydImages11.jpg";
import hydImage12 from "../assets/images/hydImages12.jpg";
import hydImage13 from "../assets/images/hydImages13.jpg";
// import hydChowmahalla1 from "../assets/images/hyd-chowmahalla1.svg";
// import hydChowmahalla2 from "../assets/images/hyd-chowmahalla2.svg";
// import hydChowmahalla3 from "../assets/images/hyd-chowmahalla3.svg";
// import hydChowmahalla4 from "../assets/images/hyd-chowmahalla4.svg";
// import hydGolkonda1 from "../assets/images/hyd-golkonda1.svg";
// import hydGolkonda2 from "../assets/images/hyd-golkonda2.svg";
// import hydDining from "../assets/images/hyd-dining.svg";
// import hyd7Tombs from "../assets/images/hyd-7tombs.svg";
// import hydFalaknuma from "../assets/images/hyd-falaknuma.svg";

import hydHotel1 from "../assets/images/hydHotel01.svg";
import hydHotel2 from "../assets/images/hydHotel02.svg";
import hydHotel3 from "../assets/images/hydHotel03.svg";
import hydHotel4 from "../assets/images/hydHotel04.svg";

const hydHotels = [
  {
    id: 1,
    imageUrl: hydHotel1,
  },
  {
    id: 2,
    imageUrl: hydHotel2,
  },
  {
    id: 3,
    imageUrl: hydHotel3,
  },
  {
    id: 4,
    imageUrl: hydHotel4,
  },
];

import whatsappColor from "../assets/services/whatsappColor.svg";

import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/Hyderabad.scss";

export default function Hyderabad() {
  const hydCarouselImages1 = [
    {
      id: 1,
      imageUrl: hydImage01,
    },
    {
      id: 2,
      imageUrl: hydImage02,
    },
    {
      id: 3,
      imageUrl: hydImage03,
    },
  ];
  const hydCarouselImages2 = [
    {
      id: 1,
      imageUrl: hydImage04,
    },
    {
      id: 2,
      imageUrl: hydImage05,
    },
    {
      id: 3,
      imageUrl: hydImage06,
    },
    {
      id: 4,
      imageUrl: hydImage07,
    },
    {
      id: 5,
      imageUrl: hydImage09,
    },
    {
      id: 6,
      imageUrl: hydImage10,
    },
    {
      id: 7,
      imageUrl: hydImage11,
    },
    {
      id: 8,
      imageUrl: hydImage12,
    },
    {
      id: 9,
      imageUrl: hydImage13,
    },
  ];
  return (
    <>
      <div className="hyderabad">
        <div className="hyderabadHeaderImage mb-5">
          <img src={hyderabadHeaderImg} width={"100%"} alt="hyderabad header" />
        </div>
      </div>
      <div className="description container-sm my-5">
        A city located in the southern part of India, Hyderabad known for its
        rich history and culture. It is the capital of the Indian state of
        Telangana and is also referred to as the "City of Pearls". Hyderabad is
        famous for its beautiful architecture, cuisine, and the friendly and
        hospitable nature of its people. <br /> The city has a rich history and
        boasts of a number of iconic landmarks such as the Charminar, Golconda
        Fort, and the Hussain Sagar. These places are not only important tourist
        attractions but also significant cultural and historical sites.
      </div>
      <div className="hydCarousel container-fluid g-0 my-5">
        <Swiper
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
          {hydCarouselImages1.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                className="hydSlideImage"
                src={slide.imageUrl}
                width={"100%"}
                // height={"720px"}
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="description container-sm my-5">
        Hyderabad is also known as the "City of Pearls" because of its rich
        history in pearl trade, and the "City of Nizams" due to the grandeur of
        the Nizam dynasty that once ruled the city. The Charminar, a historic
        monument located in the heart of the city, is one of the most famous
        landmarks of Hyderabad and is a must-visit for tourists. Apart from the
        Charminar, Hyderabad is home to many other historic monuments, including
        the Golconda Fort, the Qutub Shahi Tombs, and the Chowmahalla Palace,
        which offer a glimpse into the city's rich past. The Falaknuma Palace, a
        grand hotel that was once a royal palace, is also a popular tourist
        attraction.
      </div>
      <div className="hydCarousel my-5">
        <Swiper
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
          {hydCarouselImages2.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                className="hydSlideImage"
                src={slide.imageUrl}
                width={"100%"}
                // height={"720px"}
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="description container-sm my-5">
        Hyderabad is also renowned for its cuisine, which is a blend of Mughlai,
        Turkish and Arabic influences. The famous Hyderabadi biryani is a
        must-try for food enthusiasts. The city is also home to some of the best
        sweets and desserts. <br /> Besides its rich culinary heritage and
        historical landmarks, Hyderabad is also a thriving hub for business and
        technology, with a growing number of international companies and
        start-ups operating in the city. Hyderabad has also become a hub for the
        information technology and pharmaceutical industries. This has led to an
        influx of skilled professionals, making the city a truly global
        destination with an emerging nightlife scene. <br /> A vibrant city with
        a unique blend of history, culture, and modernity, Hyderabad is an
        exciting place to explore and experience.
      </div>
      <div className="hydHotels container">
        <div className="row g-3">
          {hydHotels.map((logos) => (
            <div
              className="col col-lg-3 d-flex justify-content-center align-items-center"
              key={logos.id}
            >
              <div className="logoContainer d-flex justify-content-center">
                <img src={logos.imageUrl} width={"150px"} alt="logo img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttonContainer my-5">
        <Link to="/contact" className="contactButton">
          <img src={whatsappColor} alt="whatsapp Logo" />
          Visit Hyderabad
        </Link>
      </div>
    </>
  );
}
