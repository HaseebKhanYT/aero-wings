import whatsappColor from "../assets/services/whatsappColor.svg";
import formLogo from "../assets/icons/form-logo.svg";
import "../styles/ContactModal.scss";

export default function ContactModal() {
  return (
    <>
      <div
        className="modal fade "
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="headerText" id="contactModalLabel">
                Get in Touch
              </div>
              <div className="darkButtonContainer container my-5">
                <a
                  href="https://wa.me/919177177011?text=Hello%2c%20I'm%20interested%20in%20your%20service%2e"
                  target="_blank"
                  className="darkButton align-items-center rounded d-flex"
                >
                  <img
                    src={whatsappColor}
                    className="mx-1"
                    alt="whatsapp Logo"
                  />
                  <div className="darkButtonText text-white mx-1">
                    +91 91771 77011
                  </div>
                </a>
              </div>
              <div className="container w-75 modalText my-5 ">
                Connect with us instantly on WhatsApp Business chat and get
                quick assistance for all your travel needs.
              </div>
              <div className="modalText">or</div>
              <div className="darkButtonContainer container my-5">
                <a
                  href="https://forms.gle/TdfQpry5ifQHYEp48"
                  target="_blank"
                  className="darkButton align-items-center rounded d-flex"
                >
                  <img src={formLogo} className="mx-1" alt="whatsapp Logo" />
                  <div className="darkButtonText text-white mx-1">
                    Enquire Now
                  </div>
                </a>
              </div>
            </div>
            {/* <div className="modal-footer border-0">
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
