import SocialIcons from "./SocialIcons";
import logo from "../assets/logo/logo-white.png";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footerBackground container-fluid d-flex justify-content-center align-items-center">
        <div className="footerContainer container-fluid justify-content-center align-items-center my-4">
          <div className="row w-100 align-items-center">
            <span className="copyrightText text-white col-sm-4 my-3">
              Copyright © 2023 All Rights Reserved
            </span>
            <a href="#" className="col-sm-4 my-3">
              <img
                className="footerLogo"
                src={logo}
                width={"100px"}
                alt="whitelogo"
              />
            </a>
            <div className="d-flex justify-content-center col-sm-4 my-3">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
