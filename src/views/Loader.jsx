import "../styles/Loader.scss";
import logo from "../assets/logo/logo.png";

export default function Loader() {
  return (
    <>
      <div className=" d-flex justify-content-end align-items-center flex-column w-100 h-100 loader-background">
        <img className="loader-logo" src={logo} alt="AeroWingsLogo" />
        <div className="loader-gif loadingio-spinner-ellipsis-t9jnxvauyv">
          <div className="ldio-voxxa58fjp position-relative w-100 h-100">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
