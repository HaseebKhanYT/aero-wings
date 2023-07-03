import SocialIcons from "./SocialIcons";

import "../styles/SubHeader.scss";

export default function SubHeader() {
  return (
    <>
      <div className="subHeaderContainer container-fluid g-0 position-relative d-flex flex-column justify-content-center">
        <div className="subHeader position-relative">
          <div className="iconContainer d-flex justify-content-between">
            <SocialIcons />
            <span>
              <span className="blue">since</span>&nbsp;
              <span className="red">1975</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
