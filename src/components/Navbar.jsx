import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="aeroNavbar container-fluid d-flex justify-content-between navbar navbar-expand-lg">
          <div className="navbar-brand">
            <Link to="/">
              <img className="navbarLogo" src={logo} alt="aerowingslogo" />
            </Link>
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbarMenuDiv justify-content-lg-end justify-content-center collapse navbar-collapse"
            id="navbarToggler"
          >
            <ul className="navbarMenu navbar-nav me-2">
              <BackButton to="/" className="navbarButtons nav-item">
                Home
              </BackButton>
              <CustomLink to="/about" className="navbarButtons nav-item">
                About Us
              </CustomLink>
              <CustomLink to="/services" className="navbarButtons nav-item">
                Services
              </CustomLink>
              <CustomLink to="/offers" className="navbarButtons nav-item">
                Offers
              </CustomLink>
              <CustomLink to="/contact" className="navbarButtons nav-item">
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
