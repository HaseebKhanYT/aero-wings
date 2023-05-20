import { Link } from "react-router-dom";
import trainHeaderImg from "../assets/images/train-header-img.png";
import whatsappColor from "../assets/services/whatsappColor.svg";

import "../styles/Train.scss"
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
      <div className="trainCompanyLogos red">
        train company logos will be here
      </div>
      <div className="trainCaraousel red">
        carousel will be here
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
