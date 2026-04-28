import { lazy } from "react";

import Home from "@/features/home/Home";
import AboutUs from "@/features/about/AboutUs";
import Services from "@/features/services/Services";
import Offers from "@/features/home/Offers";

const India = lazy(() => import("@/features/holidays/India"));
const Foreign = lazy(() => import("@/features/holidays/Foreign"));
const Holiday = lazy(() => import("@/features/holidays/Holiday"));
const Hyderabad = lazy(() => import("@/features/holidays/Hyderabad"));
const Hajj = lazy(() => import("@/features/holidays/Hajj"));
const Holylands = lazy(() => import("@/features/holidays/Holylands"));
const Airlines = lazy(() => import("@/features/services/Airlines"));
const Visa = lazy(() => import("@/features/services/Visa"));
const Cruise = lazy(() => import("@/features/services/Cruise"));
const Train = lazy(() => import("@/features/services/Train"));
const Corporate = lazy(() => import("@/features/services/Corporate"));
const Contact = lazy(() => import("@/features/contact/Contact"));
const Error404 = lazy(() => import("@/shared/ui/Error404"));

export const routes = [
  { path: "/", element: <Home />, eager: true },
  { path: "/about", element: <AboutUs />, eager: true },
  { path: "/services", element: <Services />, eager: true },
  { path: "/offers", element: <Offers />, eager: true },
  { path: "/india", element: <India /> },
  { path: "/foreign", element: <Foreign /> },
  { path: "/holiday", element: <Holiday /> },
  { path: "/hyderabad", element: <Hyderabad /> },
  { path: "/hajj", element: <Hajj /> },
  { path: "/holylands", element: <Holylands /> },
  { path: "/airlines", element: <Airlines /> },
  { path: "/visa", element: <Visa /> },
  { path: "/cruise", element: <Cruise /> },
  { path: "/train", element: <Train /> },
  { path: "/corporate", element: <Corporate /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Error404 /> },
];
