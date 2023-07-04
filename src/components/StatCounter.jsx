
import CountUp from "react-countup"

export default function StatCounter() {
  return (
    
    <div className="statsColumn position-absolute d-flex flex-column align-items-center">
      <div className="statsRow1 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat1">
          <div>
            {" "}
            <span className="blue statNumber"> <CountUp start={0} end={500000} duration={10}/>+</span>
            <br /> <span className="statText">trips </span>
          </div>
        </div>
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat2">
          <div>
            {" "}
            <span className="blue statNumber"> <CountUp start={0} end={500} duration={10}/>+ </span>
            <br />
            <span className="statText">destinations</span>
          </div>
        </div>
      </div>
      <div className="statsRow2 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat3">
          <div>
            {" "}
            <span className="blue statNumber"> <CountUp start={0} end={45} duration={10}/>+</span>
            <br />
            <span className="statText">years</span>
          </div>
        </div>
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat4">
          <div>
            {" "}
            <span className="blue statNumber"> <CountUp start={0} end={20} duration={10}/>+ </span>
            <br />
            <span className="statText"> services </span>
          </div>
        </div>
      </div>
      <div className="statsRow1 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat5">
          <div>
            {" "}
            <span className="blue statNumber"> <CountUp start={0} end={40} duration={10}/>+ </span>
            <br />
            <span className="statText"> awards</span>
          </div>
        </div>
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat6">
          <div>
            {" "}
            <span className="blue statNumber"> 24/7 </span>
            <br />
            <span className="statText"> support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
