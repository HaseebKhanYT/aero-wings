import "../styles/SocialIcons.scss";
import FBiconColor from "../assets/icons/facebook-color.svg";
import InstaiconColor from "../assets/icons/instagram-color.svg";

import WAiconColor from "../assets/icons/whatsapp-color.svg";
import MAILiconColor from "../assets/icons/mail-color.svg";
import LiconColor from "../assets/icons/linkedin-color.svg";
import LiconLight from "../assets/icons/linkedin-light.svg";
import FBiconLight from "../assets/icons/facebook-light.svg";
import InstaiconLight from "../assets/icons/instagram-light.svg";

import WAiconLight from "../assets/icons/whatsapp-light.svg";
import MAILiconLight from "../assets/icons/mail-light.svg";

export default function SocialIcons() {
  return (
    <>
      <span className="socialIcons">
        <a className="socialIcon" href="https://facebook.com">
          <img className="imageMain" src={FBiconLight} alt="fb" />
          <img className=" imageHover" src={FBiconColor} alt="fb" />
        </a>
        <a className="socialIcon" href="https://instagram.com">
          <img className="imageMain" src={InstaiconLight} alt="insta" />
          <img className=" imageHover" src={InstaiconColor} alt="insta" />
        </a>
        <a className="socialIcon" href="https://linkedin.com">
          <img className="imageMain" src={LiconLight} alt="linkedin" />
          <img className="imageHover" src={LiconColor} alt="linkedin" />
        </a>
        <a className="socialIcon" href="https://whatsapp.com">
          <img className="imageMain" src={WAiconLight} alt="whatsapp" />
          <img className=" imageHover" src={WAiconColor} alt="whatsapp" />
        </a>
        <a className="socialIcon" href="mailto:info@aerowings.in">
          <img className="imageMain" src={MAILiconLight} alt="mail" />
          <img className="imageHover" src={MAILiconColor} alt="mail" />
        </a>
      </span>
    </>
  );
}
