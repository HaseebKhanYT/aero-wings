import "../styles/Offers.scss";
import { Link } from "react-router-dom";
import formLogo from "../assets/icons/form-logo.svg";


import locationIcon from "../assets/icons/location-icon.svg";
import kabahOffer from "../assets/kabahOffer.svg";

// For no offers
const offersArray = [];
// For offers
// const offersArray = [
//   {
//     id: 1,
//     title: "Makkah",
//     imageUrl: kabahOffer,
//     location: "Saudi Arabia",
//     startingPrice: 1200,
//     percent: "30%",
//     showPrice: true,
//   },
//   {
//     id: 2,
//     title: "Makkah",
//     imageUrl: kabahOffer,
//     location: "Saudi Arabia",
//     startingPrice: 1200,
//     percent: "20%",
//     showPrice: false,
//   },
//   {
//     id: 3,
//     title: "Makkah",
//     imageUrl: kabahOffer,
//     location: "Saudi Arabia",
//     startingPrice: 1200,
//     percent: "30%",
//     showPrice: true,
//   },
//   {
//     id: 4,
//     title: "Makkah",
//     imageUrl: kabahOffer,
//     location: "Saudi Arabia",
//     startingPrice: 1200,
//     percent: "90%",
//     showPrice: true,
//   },
//   // {
//   //   id: 2,
//   //   offerTitle: "Visa Endorsement",
//   //   imageUrl: {},
//   //   location: "Saudi Arabia",
//   //   startingPrice: 1200,
//   //   fixedPrice: null,
//   //   offerPercent: "30%",
//   // },
// ];

export default function Offers() {
  return (
    <>
      <div className="offers">
        <div className="headerText">Special deals for you</div>

        <OfferDisplay arr={offersArray} />
        <div className="prePurchasedDeals my-5">
          <div className="container">
            <div className="headerText my-5">Pre-purchased deals</div>
            <div className="description my-5">
              Get the best deals on flights and hotels with our pre-purchased
              deals service. We offer both international and domestic flights at
              affordable rates. For hotels, we collaborate with a wide range of
              top-rated brands and you can review and select the best deals with us.
              <br />
              <br />
              Our pre-purchased deals are cost-effective when buying in bulk,
              making it the perfect choice for corporate travel or group
              vacations.
            </div>
            <div className=" ppdFeatures container w-100 justify-content-center my-5">
              <ul className=" ppdFeaturesRow text-start row">
                <li className="col-12 my-3 ">
                  Travel the best carriers at discounted prices.
                </li>
                <li className="col-12 my-3">
                  Enjoy top deals with Aero Wings hospitality partners
                  worldwide.
                </li>
                <li className="col-12 my-3">
                  Pay guaranteed less than regular season tariffs.
                </li>
                <li className="col-12 my-3">Work / Employment visa</li>
                <li className="col-12 my-3">
                  Book your group tours at special prices.
                </li>
              </ul>
            </div>
            <div className="darkButtonContainer container my-5">
              <a
                href="https://forms.gle/Mu5RDyfu1CZZaS1a6"
                target="_blank"
                className="darkButton align-items-center rounded d-flex"
              >
                <img src={formLogo} className="mx-1" alt="whatsapp Logo" />
                <div className="darkButtonText text-white mx-1">
                  Enquire Now
                </div>
              </a>
            </div>
            <div className="buttonContainer my-5">
          <Link to="/services" className="shortcutButton">
            View our services
          </Link>
        </div>
          </div>
        </div>
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
            <div className="noOfferMessageContainer my-5">
              <div className="noOfferMessage1 my-5">
                We're currently updating our offers, stay tuned!
              </div>
              <div className="noOfferMessage2 my-5">
                Meanwhile, check out our regular packages for a great travel
                experience.
              </div>
              <Link to="/services" className="viewServicesButton my-5">
                View our services
              </Link>
            </div>
          </div>
        </>
      );
    }
  }
}
