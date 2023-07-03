import whatsappColor from "../assets/services/whatsappColor.svg";

export default function ServicesModal(arr) {
  const uri = encodeURIComponent(
    "Hello, I am interested in your " + (arr.arr.prefix ? arr.arr.prefix + " " : "") + arr.arr.title + (arr.arr.suffix ? " " + arr.arr.suffix : "") + " service."
  );
  const whatsappURI = "https://wa.me/919177177011?text=" + uri;
  return (
    <>
      <div
        className="modal fade"
        id="servicesModal"
        tabIndex="-1"
        aria-labelledby="servicesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content  rounded">
            <div className="modal-header container border-0 p-0 px-5 pt-5 align-items-start">
              <div className="row w-100 g-3">
                <div className="d-flex justify-content-center col-lg-4 col-12">
                  <div className="menuBox d-flex justify-content-start align-items-end">
                    <div className="menuTextContainer position-absolute d-flex text-white">
                    <div className="menuText">
                          <div
                            className={arr.arr.prefix18 ? "prefix20" : "prefix"}
                          >
                            {arr.arr.prefix}
                          </div>
                          <span className={arr.arr.title14 ? "title16" : "title"}>
                            {" " + arr.arr.title + " "}
                          </span>
                          <span
                            className={arr.arr.suffix18 ? "suffix20" : "suffix"}
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
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5 pt-5 pb-0  ">
              <div className="container p-0  desc" id="servicesModalLabel">
                {arr.arr.description1}
              </div>
              <br />
              <div className="container p-0  desc" id="servicesModalLabel">
                {arr.arr.description2}
              </div>
              <div className="darkButtonContainer my-5">
                <a
                  className="whatsappButton d-flex align-items-center text-white rounded"
                  href={whatsappURI}
                  target="_blank"
                >
                  <img src={whatsappColor} width={"20px"} alt="whatsapp Logo" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
