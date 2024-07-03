import React from "react";
import "../Display/Display.css";


function Display() {
  return (
    <div>
      <div className="display">
        <div className="display-box">
          <div className="medicine-offer">
            <div className="medicine-offers">
              <a href="">Medicine Offers</a>
            </div>
            <div className="lab-test">
              <a href="">Lab Test Offers</a>
            </div>
            <div className="otc">
              <a href="">OTC / Health Products Offer</a>
            </div>
            <div className="online-doc">
              <a href="">Online Doctor Consultation</a>
            </div>
            <div className="other-offer">
              <a href="">Other Offers</a>
            </div>
            <div className="care-plan-offer">
              <a href="">Care Plan Offers</a>
            </div>
          </div>
          <div className="medicine-offer-display">
            <div className="l">Medicine Offers</div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
