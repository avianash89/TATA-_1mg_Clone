import React from 'react'
import "../Footer4/Footer4.css";
import blue from "../../assets/blue.png";
import orange from "../../assets/orange.png";

function Footer4() {
  return (
    <div>
        <div className="footer4">
        <div className="blue-orange">
          <div className="blue-img">
            <div>
              <a href="">
                <img src={blue} alt="blue" />
              </a>
            </div>
          </div>
          <div className="oranges">
            <div className="orange-img">
              <div>
                <img src={orange} alt="orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer4-text">
          India's only LegitScript and ISO/ IEC 27001 certified online
          healthcare platform
        </div>
      </div>
    </div>
  )
}

export default Footer4