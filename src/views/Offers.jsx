import "../styles/Offers.scss";
import { Link } from "react-router-dom";

import locationIcon from "../assets/icons/location-icon.svg";
import kabahOffer from "../assets/kabahOffer.svg";

// For no offers
// const offersArray = [];
// For offers
const offersArray = [
  {
    id: 1,
    title: "Makkah",
    imageUrl: kabahOffer,
    location: "Saudi Arabia",
    startingPrice: 1200,
    percent: "30%",
    showPrice: true,
  },
  {
    id: 2,
    title: "Makkah",
    imageUrl: kabahOffer,
    location: "Saudi Arabia",
    startingPrice: 1200,
    percent: "20%",
    showPrice: false,
  },
  {
    id: 3,
    title: "Makkah",
    imageUrl: kabahOffer,
    location: "Saudi Arabia",
    startingPrice: 1200,
    percent: "30%",
    showPrice: true,
  },
  {
    id: 4,
    title: "Makkah",
    imageUrl: kabahOffer,
    location: "Saudi Arabia",
    startingPrice: 1200,
    percent: "90%",
    showPrice: true,
  },
  // {
  //   id: 2,
  //   offerTitle: "Visa Endorsement",
  //   imageUrl: {},
  //   location: "Saudi Arabia",
  //   startingPrice: 1200,
  //   fixedPrice: null,
  //   offerPercent: "30%",
  // },
];

export default function Offers() {
  return (
    <>
      <div className="offers">
        <div className="offersHeading">Special deals for you</div>

        <OfferDisplay arr={offersArray} />
      </div>
    </>
  );

  function OfferDisplay({ arr }) {
    if (arr.length != 0) {
      return (
        <>
          <div className="offersDisplayContainer my-5">
            <div className="offersContainer container-xl">
              <div className="row g-5">
                {offersArray.map((offer) => (
                  <div className="col-xs-12 col-md-4" key={offer.id}>
                    <div className="offerContainer">
                      <div className="offerContainerBox">
                        <div className="offerImage">
                          <img src={offer.imageUrl} alt="offer image" />
                        </div>
                        <div
                          className={
                            offer.showPrice
                              ? "offerTextBox"
                              : "offerTextBoxLeftAlign"
                          }
                        >
                          <div className="offerTitleBox">
                            <span className="offerTitle">{offer.title}</span>
                            <div className="offerLocationContainer">
                              <img src={locationIcon} alt="location pin" />
                              <span className="locationText">
                                {offer.location}
                              </span>
                            </div>
                          </div>
                          <div
                            className={
                              offer.showPrice
                                ? "offerPriceBox"
                                : "offerPriceBox d-none"
                            }
                          >
                            <div className="startingText">starting</div>
                            <span className="priceText">
                              ₹{" " + offer.startingPrice}
                            </span>
                          </div>
                        </div>
                        <div className="percentPill">
                          <div className="offerPercent">
                            *{" " + offer.percent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="offersContainer">
            <div className="noOfferMessageContainer">
              <div className="noOfferMessage1">
                We're currently updating our offers, stay tuned!
              </div>
              <div className="noOfferMessage2">
                Meanwhile, check out our regular packages for a great travel
                experience.
              </div>
              <Link to="/services" className="viewServicesButton">
                View our services
              </Link>
            </div>
          </div>
        </>
      );
    }
  }
}
