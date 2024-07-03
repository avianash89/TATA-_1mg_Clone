import React from "react";
import "../Footer5/Footer5.css";
import arow from "../../assets/arow.png";
import payment from "../../assets/payment.png";

function Footer5() {
  return (
    <div>
      <div className="footer5">
        <div className="know-more">
          <h2>
            Know more about Tata 1mg
            <span className="l1">
              <span>
                <img src={arow} alt="arow" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="footer6">
        <div>
          <div className="copy-right">
            © 2023 Tata 1mg. All rights reserved. All medicines are dispensed in
            compliance with the Drugs and Cosmetics Act, 1940 and Drugs and
            Cosmetics Rules, 1945. We do not process requests for Schedule X and
            habit forming drugs.
          </div>
        </div>
        <div className="payment">
          <img src={payment} alt="payment" />
        </div>
      </div>
    </div>
  );
}

export default Footer5;
