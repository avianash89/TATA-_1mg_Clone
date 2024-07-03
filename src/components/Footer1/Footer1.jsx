import React from "react";
import "../Footer1/Footer1.css"

function Footer1() {
  return (
    <div>
      <div className="footer1">
        <div className="india">
          <h3>INDIA’S LARGEST HEALTHCARE PLATFORM</h3>
        </div>
        <div className="number">
          <div className="a-1">
            <div className="num1">260m+</div>
            <div className="alp1">Visitors</div>
          </div>
          <div className="a-2">
            <div className="num2">31m+</div>
            <div className="alp2">Orders Delivered</div>
          </div>
          <div className="a-3">
            <div className="num1">1800+</div>
            <div className="alp1">Cities</div>
          </div>
        </div>
        <div className="border"></div>
        <div className="download-app">
          <div className="free-text">Get the link to download App</div>
          <div className="input1">
            <input type="text" placeholder="Enter Phone Number" />
          </div>
          <div className="btn2">
            <button>Send Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
