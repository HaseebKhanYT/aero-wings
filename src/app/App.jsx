import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/shared/layout/Navbar";
import Footer from "@/shared/layout/Footer";
import WhatsAppFloat from "@/shared/layout/WhatsAppFloat";
import Loader from "@/shared/ui/Loader";

import { routes } from "./routes";
import "./App.scss";

function App() {
  return (
    <div className="pageContainer">
      <div className="navigationBar">
        <Navbar />
      </div>
      <div className="content">
        <WhatsAppFloat />
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
