import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="aeroNavbar">
        <div className="logo">
          <Link to="/">
            <img className="navbarLogo" src={logo} alt="aerowingslogo" />
          </Link>
        </div>
        <div className="navbarMenuDiv">
          <ul className="navbarMenu">
            <BackButton to="/" className="navbarButtons">
              Home
            </BackButton>
            <CustomLink to="/about" className="navbarButtons">
              About Us
            </CustomLink>
            <CustomLink to="/services" className="navbarButtons">
              Services
            </CustomLink>
            <CustomLink to="/offers" className="navbarButtons">
              Offers
            </CustomLink>
            <CustomLink to="/contact" className="navbarButtons">
              Contact Us
            </CustomLink>
            <Link to="*"></Link>
          </ul>
        </div>
      </nav>
    </>
  );

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
  function BackButton({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isNotHome = !useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isNotHome ? "" : "notHome"}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
