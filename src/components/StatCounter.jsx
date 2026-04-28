
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatCounter() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  const num = (end) =>
    inView ? <CountUp start={0} end={end} duration={10} /> : 0;

  return (

    <div ref={ref} className="statsColumn position-absolute d-flex flex-column align-items-center">
      <div className="statsRow1 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat1">
          <div>
            {" "}
            <span className="blue statNumber"> {num(500000)}+</span>
            <br /> <span className="statText">trips </span>
          </div>
        </div>
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat2">
          <div>
            {" "}
            <span className="blue statNumber"> {num(500)}+ </span>
            <br />
            <span className="statText">destinations</span>
          </div>
        </div>
      </div>
      <div className="statsRow2 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat3">
          <div>
            {" "}
            <span className="blue statNumber"> {num(45)}+</span>
            <br />
            <span className="statText">years</span>
          </div>
        </div>
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat4">
          <div>
            {" "}
            <span className="blue statNumber"> {num(20)}+ </span>
            <br />
            <span className="statText"> services </span>
          </div>
        </div>
      </div>
      <div className="statsRow1 d-flex justify-content-between">
        <div className="statsContainer d-flex justify-content-center align-items-center bg-white stat5">
          <div>
            {" "}
            <span className="blue statNumber"> {num(40)}+ </span>
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
