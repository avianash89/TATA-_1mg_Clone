import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/tata-1mg-logo.png";
import Logo2 from "../../assets/download.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-option">
          <div className="image">
            <a href="">
              <img src={Logo} alt="tata-1mg-logo" />
            </a>
          </div>
          <div className="option">
            <li>
              <a href="#" style={{ color: "#ff6f61" }}>
                <b>MEDICINES</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>LAB TESTS</b>
              </a>
            </li>
            <div className="safe">
              <a href="">
                <b>SAFE</b>
              </a>
            </div>
            <li>
              <a href="">
                <b>CONSULT DOCTORS</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>CANCER CARE</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>AYURVEDA</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>CARE PLAN</b>
              </a>
            </li>
          </div>
          <div className="save-more">
            <a href="">
              <b> SAVE MORE </b>
            </a>
          </div>
        </div>
        <div className="login-box">
          <div className="ls">
            <div className="ls">
              <div className="login">
                <a href="">
                  <span>Login</span>
                </a>
              </div>
              <span> | </span>
              <div className="signup">
                <a href="">Sign Up</a>
              </div>
              <div className="offer">
                <a href="">Offers</a>
              </div>
              <div className="image2">
                <img src={Logo2} alt="Add to card" />
              </div>
              <div className="need-help">
                <a href="">Need Help?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
