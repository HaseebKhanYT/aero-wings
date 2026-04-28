import { useEffect, useState } from "react";
import { whatsappLink } from "@/shared/config/contact";

const SCROLL_THRESHOLD = 400;

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Hi! I'm interested in your services.")}
      className={visible ? "whatsapp-button d-block" : "whatsapp-button d-none"}
      target="_blank"
      rel="noreferrer"
    >
      <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="Chat on WhatsApp" />
    </a>
  );
}
