import React, { useState, useEffect, Suspense, lazy } from "react";

import "./App.scss";
import Navbar from "./components/Navbar";
import Loader from "./views/Loader";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import Offers from "./views/Offers";
import India from "./views/India";
import Foreign from "./views/Foreign";
import Hajj from "./views/Hajj";
import Holylands from "./views/Holylands";
import Holiday from "./views/Holiday";
import Airlines from "./views/Airlines";
import Visa from "./views/Visa";
import Cruise from "./views/Cruise";
import Train from "./views/Train";
import Corporate from "./views/Corporate";
import Hyderabad from "./views/Hyderabad";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => delayForDemo(import("./views/Home")));

function App() {
  return (
    <div className="pageContainer">
      <Suspense fallback={<Loading />}>
        <div className="navigationBar">
          <Navbar />
        </div>
        <div className="content">
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
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Suspense>
    </div>
  );

  function Loading() {
    return <Loader />;
  }
}

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}
export default App;
