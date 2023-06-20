import { Link } from "react-router-dom";
import visaHeaderImg from "../assets/images/visa-header-img.png";
import whatsappColor from "../assets/services/whatsappColor.svg";
import flag1 from "../assets/flags/flag01.svg";
import flag2 from "../assets/flags/flag02.svg";
import flag3 from "../assets/flags/flag03.svg";
import flag4 from "../assets/flags/flag04.svg";
import flag5 from "../assets/flags/flag05.svg";
import flag6 from "../assets/flags/flag06.svg";
import flag7 from "../assets/flags/flag07.svg";
import flag8 from "../assets/flags/flag08.svg";
import flag9 from "../assets/flags/flag09.svg";
import flag10 from "../assets/flags/flag10.svg";
import flag11 from "../assets/flags/flag11.svg";
import flag12 from "../assets/flags/flag12.svg";
import flag13 from "../assets/flags/flag13.svg";
import flag14 from "../assets/flags/flag14.svg";
import flag15 from "../assets/flags/flag15.svg";
import flag16 from "../assets/flags/flag16.svg";
import flag17 from "../assets/flags/flag17.svg";
import flag18 from "../assets/flags/flag18.svg";
import flag19 from "../assets/flags/flag19.svg";
import flag20 from "../assets/flags/flag20.svg";
import flag21 from "../assets/flags/flag21.svg";
import flag22 from "../assets/flags/flag22.svg";
import flag23 from "../assets/flags/flag23.svg";
import flag24 from "../assets/flags/flag24.svg";
import flag25 from "../assets/flags/flag25.svg";
import flag26 from "../assets/flags/flag26.svg";
import flag27 from "../assets/flags/flag27.svg";
import flag28 from "../assets/flags/flag28.svg";
import flag29 from "../assets/flags/flag29.svg";
import flag30 from "../assets/flags/flag30.svg";
import flag31 from "../assets/flags/flag31.svg";
import flag32 from "../assets/flags/flag32.svg";
import flag33 from "../assets/flags/flag33.svg";
import flag34 from "../assets/flags/flag34.svg";
import flag35 from "../assets/flags/flag35.svg";
import flag36 from "../assets/flags/flag36.svg";

import "../styles/Visa.scss";

const countries = [
  {
    id: 1,
    name: "Australia",
    imageUrl: flag1,
  },
  {
    id: 2,
    name: "Bahrain",
    imageUrl: flag2,
  },
  {
    id: 3,
    name: "Canada",
    imageUrl: flag3,
  },
  {
    id: 4,
    name: "China",
    imageUrl: flag4,
  },
  {
    id: 5,
    name: "Denmark",
    imageUrl: flag5,
  },
  {
    id: 6,
    name: "Egypt",
    imageUrl: flag6,
  },
  {
    id: 7,
    name: "France",
    imageUrl: flag7,
  },
  {
    id: 8,
    name: "Germany",
    imageUrl: flag8,
  },
  {
    id: 9,
    name: "Hungary",
    imageUrl: flag9,
  },
  {
    id: 10,
    name: "India",
    imageUrl: flag10,
  },
  {
    id: 11,
    name: "Japan",
    imageUrl: flag11,
  },
  {
    id: 12,
    name: "Jordan",
    imageUrl: flag12,
  },
  {
    id: 13,
    name: "Kuwait",
    imageUrl: flag13,
  },
  {
    id: 14,
    name: "Lebanon",
    imageUrl: flag14,
  },
  {
    id: 15,
    name: "Malaysia",
    imageUrl: flag15,
  },
  {
    id: 16,
    name: "Morocco",
    imageUrl: flag16,
  },
  {
    id: 17,
    name: "New Zealand",
    imageUrl: flag17,
  },
  {
    id: 18,
    name: "Norway",
    imageUrl: flag18,
  },
  {
    id: 19,
    name: "Oman",
    imageUrl: flag19,
  },
  {
    id: 20,
    name: "Portugal",
    imageUrl: flag20,
  },
  {
    id: 21,
    name: "Qatar",
    imageUrl: flag21,
  },
  {
    id: 22,
    name: "Russia",
    imageUrl: flag22,
  },
  {
    id: 23,
    name: "Saudi Arabia",
    imageUrl: flag23,
  },
  {
    id: 24,
    name: "Singapore",
    imageUrl: flag24,
  },
  {
    id: 25,
    name: "South Africa",
    imageUrl: flag25,
  },
  {
    id: 26,
    name: "South Korea",
    imageUrl: flag26,
  },
  {
    id: 27,
    name: "Spain",
    imageUrl: flag27,
  },
  {
    id: 28,
    name: "State of Palestine",
    imageUrl: flag28,
  },
  {
    id: 29,
    name: "Sweden",
    imageUrl: flag29,
  },
  {
    id: 30,
    name: "Switzerland",
    imageUrl: flag30,
  },
  {
    id: 31,
    name: "Thailand",
    imageUrl: flag31,
  },
  {
    id: 32,
    name: "Türkiye",
    imageUrl: flag32,
  },
  {
    id: 33,
    name: "United Arab Emirates",
    imageUrl: flag33,
  },
  {
    id: 34,
    name: "United Kingdom",
    imageUrl: flag34,
  },
  {
    id: 35,
    name: "United States",
    imageUrl: flag35,
  },
  {
    id: 36,
    name: "Schengen (Europe)",
    imageUrl: flag36,
  },
];

export default function Visa() {
  return (
    <>
      <div className="visa">
        <div className="visaHeader">
          <div className="greyStrip"></div>
          <div className="visaHeaderImg">
            <img src={visaHeaderImg} width={"100%"} alt="visa header image" />
            <div className="visaTitle">Visa Services</div>
          </div>
        </div>
        <div className="slidingText container my-5">
          <div className="marquee">
            <div>
              <span className="mx-2">Australia</span>
              <span className="mx-2">Bahrain</span>
              <span className="mx-2">Canada</span>
              <span className="mx-2">China</span>
              <span className="mx-2">Denmark</span>
              <span className="mx-2">Egypt</span>
              <span className="mx-2">France</span>
              <span className="mx-2">Germany</span>
              <span className="mx-2">Hungary</span>
              <span className="mx-2">India</span>
              <span className="mx-2">Japan</span>
              <span className="mx-2">Jordan</span>
              <span className="mx-2">Kuwait</span>
              <span className="mx-2">Lebanon</span>
              <span className="mx-2">Malaysia</span>
              <span className="mx-2">Morocco</span>
              <span className="mx-2">New Zealand</span>
              <span className="mx-2">Norway</span>
              <span className="mx-2">Oman</span>
              <span className="mx-2">Portugal</span>
              <span className="mx-2">Qatar</span>
              <span className="mx-2">Russia</span>
              <span className="mx-2">Saudi Arabia</span>
              <span className="mx-2">Singapore</span>
              <span className="mx-2">South Africa</span>
              <span className="mx-2">South Korea</span>
              <span className="mx-2">Spain</span>
              <span className="mx-2">State of Palestine</span>
              <span className="mx-2">Sweden</span>
              <span className="mx-2">Switzerland</span>
              <span className="mx-2">Thailand</span>
              <span className="mx-2">Türkiye</span>
              <span className="mx-2">United Arab Emirates</span>
              <span className="mx-2">United Kingdom</span>
              <span className="mx-2">United States</span>
              <span className="mx-2">Schengen (Europe)</span>
            </div>
          </div>
        </div>
        <div className="description container-sm my-5">
          Our visa processing and endorsement service offers hassle-free
          solutions for all types of visas, including visit visas, family visas,
          tourist visas, and employment visas for all countries. Our team of
          experts assists you with the entire process, from application
          submission to approval. We ensure that your documents are in order,
          and provide guidance on any additional requirements for specific
          countries.
          <br />
          <br />
          Trust us to take care of all your visa needs, and enjoy peace of mind
          knowing that your visa application is in good hands.
        </div>
        <div className=" visaFeatures container w-50 my-5">
          <ul className=" visaFeaturesRow text-start row">
            <li className="col-xs-12 my-3">Tourist visa</li>
            <li className="col-xs-12 my-3">Business visa</li>
            <li className="col-xs-12 my-3">Family / Visit visa</li>
            <li className="col-xs-12 my-3">Work / Employment visa</li>
            <li className="col-xs-12 my-3">Transit visa</li>
          </ul>
        </div>
        <div className="flagContainer container my-5">
          <div className="row g-3">
            {countries.map((country) => (
              <div className="col-2" key={country.id}>
                <div className="countryTitle my-3">{country.name}</div>
                <div className="countryFlag">
                  <img src={country.imageUrl} alt="country flag" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Request More Information
          </Link>
        </div>
      </div>
    </>
  );
}
