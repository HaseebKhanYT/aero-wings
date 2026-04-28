import "./SocialIcons.scss";
import FBiconColor from "@/assets/icons/facebook-color.svg";
import InstaiconColor from "@/assets/icons/instagram-color.svg";

import WAiconColor from "@/assets/icons/whatsapp-color.svg";
import MAILiconColor from "@/assets/icons/mail-color.svg";
import LiconColor from "@/assets/icons/linkedin-color.svg";
import LiconLight from "@/assets/icons/linkedin-light.svg";
import FBiconLight from "@/assets/icons/facebook-light.svg";
import InstaiconLight from "@/assets/icons/instagram-light.svg";

import WAiconLight from "@/assets/icons/whatsapp-light.svg";
import MAILiconLight from "@/assets/icons/mail-light.svg";

import { EMAIL, SOCIAL, whatsappLink } from "@/shared/config/contact";

export default function SocialIcons() {
  return (
    <>
      <span className="socialIcons">
        <a className="socialIcon" href={SOCIAL.facebook} target="_blank" rel="noreferrer">
          <img className="imageMain" src={FBiconLight} alt="Facebook" />
          <img className=" imageHover" src={FBiconColor} alt="Facebook" />
        </a>
        <a className="socialIcon" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
          <img className="imageMain" src={InstaiconLight} alt="Instagram" />
          <img className="imageHover" src={InstaiconColor} alt="Instagram" />
        </a>
        <a className="socialIcon" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
          <img className="imageMain" src={LiconLight} alt="LinkedIn" />
          <img className="imageHover" src={LiconColor} alt="LinkedIn" />
        </a>
        <a className="socialIcon" href={whatsappLink()} target="_blank" rel="noreferrer">
          <img className="imageMain" src={WAiconLight} alt="WhatsApp" />
          <img className="imageHover" src={WAiconColor} alt="WhatsApp" />
        </a>
        <a className="socialIcon" href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
          <img className="imageMain" src={MAILiconLight} alt="Email" />
          <img className="imageHover" src={MAILiconColor} alt="Email" />
        </a>
      </span>
    </>
  );
}
