import { Link } from "react-router-dom";

import holidayHeaderImg from "../assets/images/holidaysHeaderImg.jpg";

import holidayPic from "../assets/holidays/holidayPic01.jpg";
import holidayPic1 from "../assets/holidays/holidayPic02.jpg";
import holidayPic2 from "../assets/holidays/holidayPic03.jpg";

import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Holiday.scss";

export default function Holiday() {
  return (
    <>
      <div className="holiday">
        <div className="holidayHeader mb-5">
          <div className="greyStrip"></div>
          <div className="holidayHeaderImg position-relative d-flex justify-content-center align-items-center">
            <img
              src={holidayHeaderImg}
              width={"100%"}
              alt="holiday header image"
            />
            <div className="holidayTitle">Personalize your Holiday!</div>
          </div>
        </div>
        <div className="description container my-5">
          Discover the world with our exclusive holiday packages! We offer both
          international and domestic holiday packages tailored to your
          preferences. Whether you want to explore the stunning beaches of Bali
          or witness the majestic Taj Mahal in Agra, our team of experts will
          create a custom plan that suits your budget and travel style. Our top
          destinations include some of the most popular tourist spots in the
          world, such as Paris, New York, London, and Goa. We take care of all
          essential things, including flights, hotels, meals, car rentals, and
          24/7 support, so you can focus on having a memorable experience. With
          our all-inclusive packages, you don't have to worry about anything
          except enjoying your holiday to the fullest.
          <br /> <br />
          We offer custom plan packages that allow you to tailor your trip
          according to your needs. We can help you create a perfect itinerary
          that suits your preferences. Our team of experts has years of
          experience in crafting custom travel plans, and we assure you that
          your trip will be nothing less than extraordinary.
        </div>

        <div className=" container justify-content-center my-5">
          <div className="row w-100 g-3 justify-content-center">
            <div className="imageContainer position-relative col-xl-4">
              <div className="imageText position-absolute text-white d-flex align-items-center justify-content-center top-0">
                custom.
              </div>
              <img
                className="holidayImages"
                src={holidayPic}
                alt="kabah gate"
              />
            </div>
            <div className="imageContainer position-relative col-xl-4">
              <div className="imageText position-absolute text-white d-flex align-items-center justify-content-center top-0">
                seamless.
              </div>
              <img className="holidayImages" src={holidayPic1} alt="holiday" />
            </div>
            <div className="imageContainer position-relative col-xl-4">
              <div className="imageText position-absolute text-white d-flex align-items-center justify-content-center top-0 ">
                memorable.
              </div>
              <img className="holidayImages" src={holidayPic2} alt="holiday" />
            </div>
          </div>
        </div>
        <div className="instructions description container my-5">
          <ul className="instructionsList">
            <li>
              <span className="bold700">Select your destinations:</span> Consult
              with our dedicated travel advisor and choose the countries or
              cities you want to visit.
            </li>
            <li>
              <span className="bold700">Plan your itinerary:</span> Decide on
              the specific places and attractions you want to see and visit.
            </li>
            <li>
              <span className="bold700">Select dates:</span> Choose the dates
              that work best for you, taking into consideration peak travel
              times and weather.
            </li>
            <li>
              <span className="bold700">Book flights:</span> Let us take care of
              booking your flights, ensuring the best deals and options for your
              travel needs.
            </li>
            <li>
              <span className="bold700">Visa and Travel Documents:</span> We can
              take care of all visa and travel document requirements, ensuring
              that you have all necessary documentation for a hassle-free travel
              experience.
            </li>
            <li>
              <span className="bold700">Book hotel:</span> We can recommend and
              book the best hotels and accommodations that fit your budget and
              preferences.
            </li>
            <li>
              <span className="bold700">Transport:</span> We arrange
              transportation to and from the airport, as well as any other
              transportation you may need during your trip, including trains,
              buses, ferry, and chauffeur-driven cars.
            </li>
            <li>
              <span className="bold700">Food, activities and sightseeing:</span>{" "}
              We can recommend and book dining experiences that fit your tastes
              and preferences. Plan your meals and decide on the type of cuisine
              you want to try during your trip. Work with us to plan and book
              activities and sightseeing tours also that match your interests.
              Choose the activities and attractions you want to experience
              during your trip, such as guided tours, outdoor adventures, or
              cultural experiences.
            </li>
          </ul>
        </div>
        <div className="buttonContainer container my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Get Started
          </Link>
        </div>
        <div className="buttonContainer container my-5">
          <Link to="/foreign" className="shortcutButton">
            See International Destinations
          </Link>
          <Link to="/india" className="shortcutButton">
            See Domestic Destinations
          </Link>
        </div>
      </div>
    </>
  );
}
