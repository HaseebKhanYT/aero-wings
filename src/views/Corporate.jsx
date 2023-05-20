import { Link } from "react-router-dom";
import corporateHeaderImg from "../assets/images/corporate-header-img.png";
import whatsappColor from "../assets/services/whatsappColor.svg";
import "../styles/Corporate.scss";
export default function Corporate() {
  return (
    <>
      <div className="corporate">
        <div className="corporateHeader">
          <div className="greyStrip"></div>
          <div className="corporateHeaderImg">
            <img
              src={corporateHeaderImg}
              width={"100%"}
              alt="corporate header image"
            />
            <div className="corporateTitle">Corporate Travel</div>
          </div>
        </div>
        <div className="miceText my-5">
          M <span className="fw250 fw250-blue"> •</span> I{" "}
          <span className="fw250-red fw250">•</span> C{" "}
          <span className="fw250-blue fw250">•</span> E
        </div>
        <div className="description container my-5">
          We understand that every corporate travel itinerary is unique, so we
          work with you to create a customized travel plan that meets your
          company's specific needs and budget. Our experienced travel planners
          will take care of everything from flights and hotels to ground
          transportation and meeting arrangements, ensuring that your business
          trip runs smoothly and efficiently. With our corporate travel
          services, you can focus on your business objectives while we take care
          of the travel logistics. Contact us to learn more about how we can
          assist with your corporate travel needs.
          <br />
          <br />
          At our travel agency, we offer end-to-end MICE services (Meetings,
          Incentives, Conferences, and Events) for corporate clients looking to
          host successful and memorable events. Our experienced team works
          closely with clients to understand their specific needs and
          objectives, and then plans and executes events that exceed their
          expectations.
          <br />
          <br />
          From venue selection and travel arrangements to audio-visual equipment
          and on-site management, we take care of everything related to MICE
          events. We also offer customized packages that include team-building
          activities, sightseeing tours, and other leisure activities to ensure
          that participants have a well-rounded and enjoyable experience.
          <br />
          <br />
          Whether you are planning a large-scale conference, a team-building
          retreat, or an incentive trip, our MICE services will ensure that your
          event is a grand success. Trust us to take care of every detail, so
          you can focus on achieving your business goals.
        </div>
        <div className=" corporateFeatures container my-5">
          <ul className=" corporateFeaturesRow row">
            <li className="col-xs-12 my-3">Meetings</li>
            <li className="col-xs-12 my-3">Incentives</li>
            <li className="col-xs-12 my-3">Conferences</li>
            <li className="col-xs-12 my-3">Events</li>
          </ul>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Reach Us To Know More
          </Link>
        </div>
      </div>
    </>
  );
}
