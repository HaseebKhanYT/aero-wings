import "../styles/Services.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ServicesModal from "../components/ServicesModal";
import ContactModal from "../components/ContactModal";

import internationalMenuImage from "../assets/services/menupic.jpg";
import domesticMenuImage from "../assets/services/menupic-1.jpg";
import hajjMenuImage from "../assets/services/menupic-2.jpg";
import airlineMenuImage from "../assets/services/menupic-3.jpg";
import holidayMenuImage from "../assets/services/menupic-4.jpg";
import holyMenuImage from "../assets/services/menupic-5.jpg";
import visaMenuImage from "../assets/services/menupic-6.jpg";
import corporateMenuImage from "../assets/services/menupic-7.jpg";
import cruiseMenuImage from "../assets/services/menupic-8.jpg";
import trainMenuImage from "../assets/services/menupic-9.jpg";

import otherCharter from "../assets/services/othermenupic.jpg";
import otherPassport from "../assets/services/othermenupic-1.jpg";
import otherCar from "../assets/services/othermenupic-2.jpg";
import otherInsurance from "../assets/services/othermenupic-3.jpg";
import otherCurrency from "../assets/services/othermenupic-4.jpg";
import otherEdu from "../assets/services/othermenupic-5.jpg";
import otherCertificate from "../assets/services/otherCertificate.jpg";
import otherPre from "../assets/services/otherPre.jpg";

export default function Services() {
  const [focusService, setFocusService] = useState(0);
  const ref = useRef(null);

  // const scrollToServices = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const mainServices = [
    {
      id: 1,
      prefix: "International",
      title: "Destinations",
      imageUrl: internationalMenuImage,
      to: "/foreign",
    },
    {
      id: 2,
      prefix: "Domestic",
      title: "Destinations",
      imageUrl: domesticMenuImage,
      to: "/india",
    },
    {
      id: 3,
      title: "Hajj and Umrah",
      imageUrl: hajjMenuImage,
      to: "/hajj",
    },
    {
      id: 4,
      title: "Airline",
      suffix12: true,
      suffix: "Reservation and Ticketing",
      imageUrl: airlineMenuImage,
      to: "/airlines",
    },
    {
      id: 5,
      title: "Holidays",
      imageUrl: holidayMenuImage,
      to: "/holiday",
    },
    {
      id: 6,
      title: "Holy Land Tours",
      imageUrl: holyMenuImage,
      to: "/holylands",
    },
    {
      id: 7,
      title: "Visa Services",
      imageUrl: visaMenuImage,
      to: "/visa",
    },
    {
      id: 8,
      title: "Corporate Travel",
      imageUrl: corporateMenuImage,
      to: "/corporate",
    },
    {
      id: 9,
      title: "Cruise",
      imageUrl: cruiseMenuImage,
      to: "/cruise",
    },
    {
      id: 10,
      title: "Train",
      imageUrl: trainMenuImage,
      to: "/train",
    },
  ];

  const otherServices = [
    {
      id: 1,
      title: "Charter Flights",
      imageUrl: otherCharter,
      description1:
        "Charter flights are a convenient and flexible way to travel. Whether you're traveling for business or pleasure, chartering a flight can save you time and provide a more comfortable and personalized travel experience. With our charter flights service, we offer a wide range of aircraft options to meet your specific needs and preferences, from small prop planes to larger jets.",
      description2:
        "Our experienced team will work with you to create a customized itinerary and flight plan, ensuring that every aspect of your journey is tailored to your exact requirements. We take care of all the details, from arranging ground transportation to providing in-flight catering, so you can sit back, relax and enjoy your flight.",
    },
    {
      id: 2,
      title: "Passport services",
      imageUrl: otherPassport,
      description1:
        "Our passport service is designed to make the application process as smooth and hassle-free as possible. Whether you are applying for a new passport, renewing an existing one, or need assistance with any other passport-related matter, our team is here to help. With years of experience and expertise in this area, we understand the complexities of the application process and are committed to providing you with the guidance and support you need.",
      description2:
        "From filling out forms to scheduling appointments, we will handle all the details, ensuring that your application is completed correctly and efficiently. Let us take the stress out of obtaining a passport, so you can focus on planning your travels with ease. Contact us today for assistance with your passport application needs.",
    },
    {
      id: 3,
      title: "Car rental",
      imageUrl: otherCar,
      description1:
        "We offer a comprehensive car rental service that includes a wide range of vehicles to choose from, ranging from economy to luxury cars, and everything in between. Our car rental service ensures that you have a hassle-free and comfortable journey by providing you with a vehicle that suits your needs and preferences. Our team of experts is dedicated to providing you with the best car rental service possible, and we strive to make your travel experience seamless and enjoyable.",
      description2:
        "With our car rental service, you can travel at your own pace, explore your destination on your own terms, and make the most out of your trip. So, whether you are traveling for business or pleasure, our car rental service is here to make your travel experience a memorable one.",
    },
    {
      id: 4,
      title: "Travel insurance",
      imageUrl: otherInsurance,
      description1:
        "With travel insurance, travelers can enjoy peace of mind knowing that they have coverage in case of any unforeseen circumstances. Policies can be customized based on the specific needs of the traveler, such as the length of the trip and the activities planned. Whether you're traveling for business or pleasure, travel insurance can help ensure that your trip is stress-free and enjoyable.",
      description2:
        "We offer comprehensive travel insurance packages that cover medical emergencies, trip cancellations, lost or stolen luggage, and other unforeseen circumstances. Our travel insurance plans are customizable to suit your specific needs and travel itinerary, and our team is always available to assist you in case of emergencies.",
    },
    {
      id: 5,
      prefix18: true,
      suffix18: true,
      title14: true,
      prefix: "Currency exchange",
      title: "and",
      suffix: "money transfer",
      imageUrl: otherCurrency,
      description1:
        "Our foreign currency exchange service offers you the best deals on your currency exchange needs. We understand the importance of having cash in hand while traveling abroad, and that is why we bring the convenience of doorstep delivery to you. Our team of experts provides assistance with foreign exchange and money transfer services through providers such as Money Gram, Western Union, RIA Money, and Transfast.",
      description2:
        "You can be assured of a hassle-free exchange process with us, where we take care of all the formalities and ensure that you get the best rates available. So whether you're traveling for business or leisure, trust us to take care of all your foreign exchange needs.",
    },
    {
      id: 6,
      prefix: "Overseas",
      title: "Education",
      imageUrl: otherEdu,
      description1:
        "We offer guidance and support to students who wish to pursue their higher education abroad. Our team of experienced and knowledgeable consultants provide end-to-end assistance, from selecting the right course and university to visa processing and post-landing services.",
      description2:
        "We help students explore various education opportunities across the globe and assist them in making the right choice for their academic and professional growth. Our focus is on providing personalized attention to each student and ensuring that their journey of studying abroad is hassle-free and rewarding. Contact us to make your dream of studying abroad a reality.",
    },
    {
      id: 7,
      prefix: "Certificate",
      title: "Attestation",
      imageUrl: otherCertificate,
      description1:
        "Certificate attestation is a crucial service for those who are planning to study, work, or settle abroad. It involves the process of verifying and authenticating various documents such as educational certificates, marriage certificates, and birth certificates, among others, from government authorities.",
      description2:
        "At Aerowings, we provide hassle-free certificate attestation services for our customers, ensuring that their documents are authenticated and recognized by the concerned authorities. Our team of experts will guide you through the entire process and help you obtain the necessary attestation for your documents.",
    },
    {
      id: 8,
      prefix: "Pre-purchased",
      title: "deals",
      imageUrl: otherPre,
      description1:
        "Get the best deals on flights and hotels with our pre-purchased deals service. We offer both international and domestic flights at affordable rates. For hotels, we collaborate with a wide range of top-rated brands and you can review and select the best deals from our page.",
      description2:
        "Our pre-purchased deals are cost-effective when buying in bulk, making it the perfect choice for corporate travel or group vacations.",
    },
  ];

  return (
    <>
      <div className="services">
        <div className="headerText">Our Services</div>
        <div className="servicesMenuGridContainer d-flex justify-content-center align-items-center">
          <div className="menuGrid container-xl px-5 m-5">
            <div className="row m-0 g-3">
              {mainServices.map((menu) => (
                <Link
                  to={menu.to}
                  className={
                    menu.id === 3
                      ? "menuBoxContainer d-flex justify-content-center align-items-center menuHajj col-sm-12 col-md-6 col-lg-4 col-xl-6"
                      : "menuBoxContainer d-flex justify-content-center align-items-center col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  }
                  key={menu.id}
                >
                  <div
                    className={
                      menu.id === 3
                        ? "menuBox d-flex justify-content-start align-items-end rounded menuHajjImage rectangleImage"
                        : "menuBox d-flex justify-content-start align-items-end rounded squareImage"
                    }
                  >
                    <div className="menuTextContainer position-absolute d-flex">
                      <div className={"menuText"}>
                        <div className={menu.prefix12 ? "prefix12" : "prefix"}>
                          {menu.prefix}
                        </div>
                        {" " + menu.title + " "}
                        <div className={menu.suffix12 ? "suffix12" : "suffix"}>
                          {menu.suffix}
                        </div>
                      </div>
                    </div>

                    <img
                      className={
                        menu.id === 3
                          ? "menuImage rounded menuHajjImage "
                          : "menuImage rounded "
                      }
                      src={menu.imageUrl}
                      alt="menu Images"
                    />
                  </div>
                </Link>
              ))}
              {otherServices.map((menu) => (
                <div
                  className="menuBoxContainer d-flex justify-content-center align-items-center col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  data-bs-toggle="modal"
                  data-bs-target="#servicesModal"
                  key={menu.id}
                  onClick={() => setFocusService(menu)}
                >
                  <div
                    className="menuBox d-flex justify-content-start align-items-end rounded squareImage clickable"
                  >
                    <div className="menuTextContainer position-absolute d-flex">
                      <div className="menuText">
                        <div className={menu.prefix18 ? "prefix20" : "prefix"}>
                          {menu.prefix}
                        </div>
                        <span className={menu.title14 ? "title16" : "title"}>
                          {" " + menu.title + " "}
                        </span>
                        <span className={menu.suffix18 ? "suffix20" : "suffix"}>
                          {menu.suffix}
                        </span>
                      </div>
                    </div>
                    <div className="otherMenuImage position-relative">
                      <img
                        className="imageMain menuImage rounded"
                        src={menu.imageUrl}
                        width={"250px"}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className=" menuBoxContainer d-flex justify-content-center align-items-center d-none d-sm-flex col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div
                  className="menuBox d-flex justify-content-center align-items-center clickable rounded seeMoreBox"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  <div className=" seeMoreText">
                    Contact
                    <br /> Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicesModal arr={focusService} />
        <ContactModal />
      </div>
    </>
  );
}
