import "../styles/Loader.scss";
import logo from "../assets/logo.png";
import loader from "../assets/loader.gif";

export default function Loader() {
  return (
    <>
      <div className="loader-background">
        <img className="loader-logo" src={logo} alt="AeroWingsLogo" />
        <img className="loader-gif" src={loader} alt="Loadergif" />
      </div>
    </>
  );
}

//Completed