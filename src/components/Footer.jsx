import SocialIcons from "./SocialIcons";
import logo from "../assets/logo/logo-white.svg"
import "../styles/Footer.scss"

export default function Footer() {
    return (
      <>
        <div className="footerBackground">
            <div className="footerContainer">

            <span className="copyrightText">Copyright © 2023 All Rights Reserved</span>
           <a href="#">
            <img className="footerLogo" src={logo} alt="whitelogo" />
            </a>
            <SocialIcons/>
            </div>
        </div>
      </>
    );
  }