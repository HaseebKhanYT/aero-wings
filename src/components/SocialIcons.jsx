import "../styles/SocialIcons.scss"
import FBicon from "../assets/icons/facebook-light.svg";
import Instaicon from "../assets/icons/instagram-light.svg";
import TWTicon from "../assets/icons/twitter-light.svg";
import WAicon from "../assets/icons/whatsapp-light.svg";
import MAILicon from "../assets/icons/mail-light.svg";


export default function SocialIcons() {
    return (
      <>
        <span className="socialIcons">
          <a href="https://facebook.com">
            <img src={FBicon} alt="fb" />
          </a>
          <a href="https://instagram.com">
            <img src={Instaicon} alt="insta" />
          </a>
          <a href="https://twitter.com">
            <img src={TWTicon} alt="twitter" />
          </a>
          <a href="https://whatsapp.com">
            <img src={WAicon} alt="whatsapp" />
          </a>
          <a href="mailto:info@aerowings.in">
            <img src={MAILicon} alt="mail" />
          </a>
        </span>
      </>
    );
  }