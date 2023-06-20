import SocialIcons from "../components/SocialIcons";
import "../styles/Contact.scss";

import formLogo from "../assets/icons/form-logo.svg";
import clockIcon from "../assets/icons/fi-rs-clock.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import agentIcon from "../assets/icons/agent-icon.svg";
import buildingIcon from "../assets/icons/fi-rs-building.svg";
import whatsappColor from "../assets/services/whatsappColor.svg";

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
            href="https://forms.gle/Mu5RDyfu1CZZaS1a6"
            target="_blank"
            className="darkButton rounded d-flex"
          >
            <img src={formLogo} className="mx-1" alt="whatsapp Logo" />
            <div className="darkButtonText text-white mx-1">Enquire Now</div>
          </a>
        </div>
        <div className="contactNumber container my-5">
          <div className="row g-3 my-5 ">
            <div className="col col-md-3 ">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={whatsappColor} alt="contact Icon" />
              </div>
            </div>
            <div className="col col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-start">+91 91 771 770 11</div>
                <div className="contactText text-start">
                  Connect with us instantly on WhatsApp Business chat and get
                  quick assistance for all your travel needs.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 my-5">
            <div className="col col-md-3">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={agentIcon} alt="contact Icon" />
              </div>
            </div>
            <div className="col col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-start">+91 86 86 86 78 18</div>
                <div className="contactText text-start">
                  Connect with us directly via phone and experience our prompt
                  and personalized assistance for all your travel needs.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 my-5">
            <div className="col col-md-3">
              <div className="contactIconContainer d-flex justify-content-center align-items-center rounded">
                <img src={mailIcon} alt="contact Icon" />
              </div>
            </div>
            <div className="col col-md-9 d-flex flex-column justify-content-center align-items-center">
              <div className="contactTextContainer">
                <div className="contactInfo text-start">info@aerowings.in</div>
                <div className="contactText text-start">
                  Reach out to us via email and enjoy efficient and reliable
                  support for all your travel inquiries and requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row contactDetailsTab p-5">
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
                (closed)
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
                  width="400"
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
      </div>
    </>
  );
}
