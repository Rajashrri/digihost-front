import React, { useState } from "react";
import Popupform from "./Popupform";

const CareerCta = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="careercta">
        <div className="container">
          <h2 data-gsap>
            If you want to build brands that carry weight and become someone
            who carries weight too
          </h2>

          <p data-gsap>Send your CV + portfolio + a short note:</p>

          <button
            className="btn1 w-auto" data-gsap
            onClick={() => setShowPopup(true)}
          >
            Apply
          </button>
        </div>
      </div>

      <Popupform
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
};

export default CareerCta;