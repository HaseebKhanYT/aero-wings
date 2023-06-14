import whatsappColor from "../assets/services/whatsappColor.svg";

import "../styles/HolidayModal.scss";



export default function HolidayModal(arr) {

  
  return (
    <>
      <div
        className="modal fade"
        id="holidayModal"
        tabIndex="-1"
        aria-labelledby="holidayModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content rounded">
            <div className="modal-header container border-0 align-items-start">
              <div className="row">
                <div className="d-flex justify-content-center my-2 col-lg-4 col-12">
                  <div className="holidayImageContainer ">
                    <div className="holidayImageTextContainer">
                      <div
                        className={
                          arr.arr.font === 12
                            ? "font10 holidayImageText"
                            : "holidayImageText"
                        }
                      >
                        <span
                          className={arr.arr.prefix12 ? "prefix12" : "prefix14"}
                        >
                          {arr.arr.prefix}
                        </span>
                        {" " + arr.arr.title + " "}
                        <span
                          className={arr.arr.suffix12 ? "suffix12" : "suffix"}
                        >
                          {arr.arr.suffix}
                        </span>
                      </div>
                    </div>
                    <img
                      width={"250px"}
                      height={"250px"}
                      src={arr.arr.imageUrl}
                      alt="title image"
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="holidayImageContainer d-flex justify-content-center my-2 col-lg-4 col-12">
                  <img
                    src={arr.arr.imageUrl1}
                    alt="title image"
                    width={"250px"}
                    height={"250px"}
                    className="rounded"
                  />
                </div>
                <div className="holidayImageContainer d-flex justify-content-center my-2 col-lg-4 col-12">
                  <img
                    src={arr.arr.imageUrl2}
                    alt="title image"
                    width={"250px"}
                    height={"250px"}
                    className="rounded"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container desc" id="holidayModalLabel">
                {arr.arr.description}
              </div>
              <div className="darkButtonContainer my-3">
                <a
                  className="whatsappButton d-flex align-items-center text-white rounded"
                  href="https://wa.me/919177177011?text=I'm%20interested"
                >
                  <img
                    src={whatsappColor}
                    width={"20px"}
                    alt="whatsapp Logo"
                  />
                  Book Now
                </a>
              </div>
            </div>
            <div className="modal-footer border-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
