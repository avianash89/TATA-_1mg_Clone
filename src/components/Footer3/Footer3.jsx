import React from 'react'
import "../Footer3/Footer3.css";
import reliable from "../../assets/reliable.png";
import secure from "../../assets/secure.png";
import affordable from "../../assets/affordable.png";

function Footer3() {
  return (
    <div>
        <div className="footer3">
        <div className="reliable">
          <div className="reliable-img">
            <img src={reliable} alt="reliable" />
          </div>
          <div className="rel">
            <h5>Reliable</h5>
            <p>
              All products displayed on Tata 1mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>
        <div className="secure">
          <div className="secure-img">
            <img src={secure} alt="secure" />
          </div>
          <div className="sec">
            <h5>Secure</h5>
            <p>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </p>
          </div>
        </div>
        <div className="affordable">
          <div className="affordable-img">
            <img src={affordable} alt="affordable" />
          </div>
          <div className="aff">
            <h3>Affordable</h3>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer3