import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/VerticalCarousel.scss";

export default function VerticalCarousel() {
  const slidesText = [
    {
      id: 1,
      heading: "Customer Satisfaction",
      text1:
        "We believe in placing our customers at the heart of everything we do.",
      text2:
        "Our commitment to providing exceptional service and ensuring that our clients' needs are met is unwavering.",
    },
    {
      id: 2,
      heading: "Integrity",
      text1:
        "We conduct business with honesty, transparency, and high ethical standards.",
      text2:
        "We build long-lasting relationships based on trust and provide accurate information.",
    },
    {
      id: 3,
      heading: "Reliability",
      text1:
        "Our commitment to delivering quality services consistently makes us a dependable partner.",
      text2:
        "Our customers can count on us to be available 24/7 and provide professional travel arrangements.",
    },
  ];
  return (
    <>
      <div className="carouselContainer">
        {/* here will lie a vertical carousel, stay tuned. */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          direction="vertical"
          loop={true}
          effect="fade"
          fadeEffect={{crossFade:true}}
          className="verticalCarousel"
        >
          {slidesText.map((slide) => (
            <SwiperSlide className="verticalSlide" key={slide.id}>
              <div className="verticalHeading">{slide.heading}</div>
              <br />
              <div className="verticalText">{slide.text1}</div>
              <br />
              <div className="verticalText">{slide.text2}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
