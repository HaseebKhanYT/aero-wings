import whatsappColor from "@/assets/services/whatsappColor.svg";
import formLogo from "@/assets/icons/form-logo.svg";
import "./ContactModal.scss";

import { PHONE_WHATSAPP_DISPLAY, whatsappLink } from "@/shared/config/contact";
import { FORMS } from "@/shared/config/site";

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
                  href={whatsappLink("Hello, I'm interested in your service.")}
                  target="_blank"
                  className="darkButton align-items-center rounded d-flex"
                  rel="noreferrer"
                >
                  <img src={whatsappColor} className="mx-1" alt="WhatsApp" />
                  <div className="darkButtonText text-white mx-1">{PHONE_WHATSAPP_DISPLAY}</div>
                </a>
              </div>
              <div className="container w-75 modalText my-5 ">
                Connect with us instantly on WhatsApp Business chat and get quick assistance for all
                your travel needs.
              </div>
              <div className="modalText">or</div>
              <div className="darkButtonContainer container my-5">
                <a
                  href={FORMS.enquiry}
                  target="_blank"
                  className="darkButton align-items-center rounded d-flex"
                  rel="noreferrer"
                >
                  <img src={formLogo} className="mx-1" alt="Enquiry form" />
                  <div className="darkButtonText text-white mx-1">Enquire Now</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
