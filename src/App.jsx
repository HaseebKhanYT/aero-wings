import { React, Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./views/Loader";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import Offers from "./views/Offers";

const India = lazy(() => import("./views/India"));
const Foreign = lazy(() => import("./views/Foreign"));
const Hajj = lazy(() => import("./views/Hajj"));
const Holylands = lazy(() => import("./views/Holylands"));
const Holiday = lazy(() => import("./views/Holiday"));
const Airlines = lazy(() => import("./views/Airlines"));
const Visa = lazy(() => import("./views/Visa"));
const Cruise = lazy(() => import("./views/Cruise"));
const Train = lazy(() => import("./views/Train"));
const Corporate = lazy(() => import("./views/Corporate"));
const Hyderabad = lazy(() => import("./views/Hyderabad"));
const Contact = lazy(() => import("./views/Contact"));
const Error404 = lazy(() => import("./views/Error404"));
const Footer = lazy(() => import("./components/Footer"));

import Home from "./views/Home";
import "./styles/AboutUs.scss";
import "./styles/Airlines.scss";
import "./styles/CardsAccordian.scss";
import "./styles/Contact.scss";
import "./styles/ContactModal.scss";
import "./styles/Corporate.scss";
import "./styles/Cruise.scss";
import "./styles/Error.scss";
import "./styles/Footer.scss";
import "./styles/Foreign.scss";
import "./styles/Hajj.scss";
import "./styles/Holiday.scss";
import "./styles/HolidayCarousel.scss";
import "./styles/HolidayModal.scss";
import "./styles/Holylands.scss";
import "./styles/Home.scss";
import "./styles/HomeCarousel.scss";
import "./styles/Hyderabad.scss";
import "./styles/India.scss";
import "./styles/Loader.scss";
import "./styles/Navbar.scss";
import "./styles/Offers.scss";
import "./styles/Services.scss";
import "./styles/SocialIcons.scss";
import "./styles/SubHeader.scss";
import "./styles/Train.scss";
import "./styles/VerticalCarousel.scss";
import "./styles/Visa.scss";
import "./App.scss";

function App() {
  const [scroll, setScroll] = useState(0);
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 400;
      const scrollUncheck = window.scrollY <= 400
      if (scrollCheck <= scroll) {
        setScroll(scrollCheck);
        setShowWhatsappButton(true);
      }
      if(scrollUncheck >= scroll){
        setScroll(scrollUncheck);
        setShowWhatsappButton(false)
      }
    });
  });

  return (
    <div className="pageContainer">
      <div className="navigationBar">
        <Navbar />
      </div>
      <div className="content">
        <a
          href="https://wa.me/919177177011?text=Hi%21%20I'm%20interested%20in%20your%20services."
          className={showWhatsappButton ? "whatsapp-button d-block" : "whatsapp-button d-none" }
          target="_blank"
        >
          <img
            src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
            alt="botão whatsapp"
          />
        </a>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/india" element={<India />} />
            <Route path="/foreign" element={<Foreign />} />
            <Route path="/hajj" element={<Hajj />} />
            <Route path="/holylands" element={<Holylands />} />
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/holiday" element={<Holiday />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/cruise" element={<Cruise />} />
            <Route path="/train" element={<Train />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/hyderabad" element={<Hyderabad />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );

  function Loading() {
    return <Loader />;
  }
}
export default App;
