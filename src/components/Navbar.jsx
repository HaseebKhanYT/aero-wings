import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="aeroNavbar position-relative container-fluid d-flex justify-content-between navbar navbar-expand-lg">
        <div className="d-flex flex-grow-1">
          <span className="w-100 d-block d-lg-none"></span>
          <Link to="/" className="navbar-brand mx-0">
            <img className="navbarLogo" src={logo} alt="aerowingslogo" />
          </Link>
          <div className="w-100 d-flex align-items-center justify-content-end text-end">
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
          </div>
        </div>
        <div
          className="navbarMenuDiv justify-content-lg-end justify-content-center collapse navbar-collapse"
          id="navbarToggler"
        >
          <ul className="navbarMenu d-flex justify-content-center navbar-nav ">
            <BackButton to="/" className="navbarButtons nav-item">
              <div
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Home
              </div>
            </BackButton>
            <CustomLink to="/about" className="navbarButtons nav-item">
              <div
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                About Us
              </div>
            </CustomLink>
            <CustomLink to="/services" className="navbarButtons nav-item">
              <div
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Services
              </div>
            </CustomLink>
            <CustomLink to="/offers" className="navbarButtons nav-item">
              <div
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Offers
              </div>
            </CustomLink>
            <CustomLink to="/contact" className="navbarButtons nav-item">
              <div
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Contact Us
              </div>
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
      <li className={isNotHome ? "d-flex" : "d-none"}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
//Responsive and Complete
