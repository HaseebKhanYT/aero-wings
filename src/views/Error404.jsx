import { Link } from "react-router-dom";

import "../styles/Error.scss";
export default function Error404() {
  return (
    <>
      <div className="error">
        <div className="headerText my-5">Error 404</div>
        <div className="errorContainer my-5">
          <div className="errorMessageContainer my-5">
            <div className="errorMessage1 my-5">Oops, page not found!</div>
            <div className="errorMessage2 my-5">
              Looks like you've wandered off the beaten path. Let's get you back
              on track!
            </div>
            <div className="buttonContainer my-5">
              <Link to="/contact" className="goHomeButton">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
