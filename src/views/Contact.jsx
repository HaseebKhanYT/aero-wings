import SocialIcons from "../components/SocialIcons";
import "../styles/Contact.scss";

import formLogo from "../assets/icons/form-logo.svg";
import clockIcon from "../assets/icons/fi-rs-clock.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import agentIcon from "../assets/icons/agent-icon.svg";
import buildingIcon from "../assets/icons/fi-rs-building.svg";
import phoneIcon from "../assets/icons/phone.svg";
import whatsappColor from "../assets/services/whatsappColor.svg";
import masterCard from "../assets/icons/mastercard.png";
import visa from "../assets/icons/visa.png";
import rupay from "../assets/icons/rupay.png";
import upi from "../assets/icons/upi.png";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="headerText mb-5">Get in Touch</div>
        <div className="description my-5 container">
          We're here to help! Whether you have questions about Aero Wings or
          need assistance with our travel services, we're ready to provide
          prompt and knowledgeable support. Your satisfaction is our priority,
          and we're dedicated to ensuring your travel experience with us is
          seamless and enjoyable. Feel free to reach out to us with any
          inquiries or feedback – we're eager to assist you!
        </div>
        <div className="darkButtonContainer container my-5">
          <a
            href="https://forms.gle/TdfQpry5ifQHYEp48"
            target="_blank"
            className="darkButton rounded d-flex"
          >
            <img src={formLogo} className="mx-1" alt="whatsapp Logo" />
            <div className="darkButtonText text-white mx-1">Enquire Now</div>
          </a>
        </div>
        <div className="contactNumber container my-5">
          <div className="row g-3 my-5 ">
            <div className="col-12 col-md-3 justify-content-center justify-content-md-start d-flex ">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={whatsappColor} alt="contact Icon" />
              </div>
            </div>
            <div className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-center text-md-start ">
                  +91 91771 77011
                </div>
                <div className="contactText text-center text-md-start">
                  Connect with us instantly on WhatsApp Business chat and get
                  quick assistance for all your travel needs.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 my-5">
            <div className="col-12 col-md-3 justify-content-center justify-content-md-start d-flex">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={phoneIcon} alt="contact Icon" />
              </div>
            </div>
            <div className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-center text-md-start ">
                  +91 40 2323 0009
                </div>
                <div className="contactText text-center text-md-start">
                  Reach out to us on our dedicated landline number to receive
                  prompt and personalized assistance for all your travel needs.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3  my-5">
            <div className="col-12 col-md-3 justify-content-center justify-content-md-start d-flex">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={agentIcon} alt="contact Icon" />
              </div>
            </div>
            <div className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-center text-md-start ">
                  +91 868686 7818
                </div>
                <div className="contactText text-center text-md-start">
                  Connect with us directly via phone and experience our prompt
                  and personalized assistance for all your travel needs.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 my-5">
            <div className="col-12 col-md-3 justify-content-center justify-content-md-start d-flex">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={mailIcon} alt="contact Icon" />
              </div>
            </div>
            <div className="col col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-center text-md-start ">
                  info@aerowings.in
                </div>
                <div className="contactText text-center text-md-start">
                  Reach out to us via email and enjoy efficient and reliable
                  support for all your travel inquiries and requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="contactDetailsTab p-5">
            <div className="row">
              <div className="detailsContainer my-5 col-12 col-md-8">
                <div className="contactIcon my-3">
                  <img src={buildingIcon} alt="building icon" />
                </div>
                <div className="detailsDescription text-white">
                  Aero Wings Travel & Cargo Agency <br />
                  Naser Arcade, <br />
                  16, Saifabad Rd, beside RBI, <br />
                  Hyderabad, <br />
                  Telangana 500004 <br />
                  India <br />
                </div>
              </div>
              <div className="detailsContainer my-5 col-12 col-md-4">
                <div className="contactIcon my-3">
                  <img src={clockIcon} alt="clock icon" />
                </div>
                <div className="detailsDescription text-white">
                  Monday - Saturday <br />
                  10 AM - 8 PM <br />
                  <br />
                  <br />
                  Sunday <br />
                  (Online Queries Only)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center flex-row align-items-center">
          <div className="row">
            <div className="reviewCard col-12 col-lg-4">
              <div className="p-5 bg-white shadow-sm rounded">
                <div className="comm text-start">❝</div>
                <p class="text-muted">
                  It was a good experience of mine for the work regarding
                  endorsement and insurance for saudi arabia. Basha bhai was
                  very cordial and he had done visa endorsement in just 4-5 days
                  itself. I can recommend it anyone if they have any kind of
                  work related to tours and travels then with no doubt you can
                  go Aero wings!
                </p>
                <hr />
                <div class="d-flex align-items-center pt-3">
                  <div className="w-100">
                    <h5 className="text-center">Mohammed Farooq</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewCard col-12 col-lg-4 my-3">
              <div className="p-5 bg-white shadow-sm rounded">
                {" "}
                <div className="comm text-start">❝</div>
                <p class="text-muted">
                  The most genuine people when it comes to your travel
                  happenings. Their dedication is unbeatable. I had major
                  problems with my visa issual and they were all through it.
                  Special thanks to the Head Honcho Mr. Waheed who understands
                  his customers and is always there for them. Thanks to Mr.
                  Hussain Basha as well who helped me big time. Go to Aerowings
                  for all your traveling needs and you are in safe hands always!
                </p>
                <hr />
                <div class="d-flex align-items-center pt-3">
                  <div className="w-100">
                    <h5 className="text-center text-muted">khatija rimsha</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewCard col-12 col-lg-4">
              <div className="p-5 bg-white shadow-sm rounded">
                {" "}
                <div className="comm text-start">❝</div>
                <p class="text-muted pb-4">
                  We booked North India tour with Aero wings and Alhamdulillah
                  it was a great experience. Right from providing quotation for
                  the tour until all the bookings were done, Aerowings followed
                  up with us regularly to make sure all our requirements were
                  met. The tour experience itself was also great and hassle
                  free. We will definitely recommend Aerowings to others for all
                  their tours and travel needs. Thanks a lot to Abubakar bhai
                  from Aerowings for all his efforts.
                </p>
                <hr />
                <div class="d-flex align-items-center pt-3">
                  <div className="w-100">
                    <h5 className="text-center">Yaseen Mohammed</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center my-5">
          <div className="contactDetailsTab2">
            <div className="detailsContainer text-white my-3">
              <img
                className="my-3"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                width={"25px"}
                alt="google logo"
              />
              Drop us a review on Google!
            </div>

            <div className="detailsContainer my-3">
              <div className="mapContainer">
                <iframe
                  className="rounded my-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1444837065646!2d78.46455507598648!3d17.404852483485314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975d9ec620af%3A0x256408cf7b302b1d!2sAero%20Wings%20Travel%20%26%20Cargo%20Agency!5e0!3m2!1sen!2sin!4v1685629392478!5m2!1sen!2sin"
                  width="320"
                  height="200"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="detailsContainer my-5">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="paymentContainer container d-flex justify-content-center align-items-center my-5">
          <div className="row w-100 justify-content-center">
            <div className="col-12 col-md-2 my-3">we accept</div>
            <div className="col-12 col-md-2 my-3">
              <img
                src={visa}
                className="paymentIcon"
                alt="payment icon"
                width={"92px"}
                height={"30px"}
              />
            </div>
            <div className="col-12 col-md-2 my-3">
              <img
                src={masterCard}
                className="paymentIcon"
                alt="payment icon"
                width={"50px"}
                height={"39px"}
              />
            </div>
            <div className="col-12 col-md-2 my-3">
              <img
                src={rupay}
                className="paymentIcon"
                alt="payment icon"
                width={"108px"}
                height={"30px"}
              />
            </div>
            <div className="col-12 col-md-2 my-3">
              <img
                src={upi}
                className="paymentIcon"
                alt="payment icon"
                width={"85px"}
                height={"30px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
