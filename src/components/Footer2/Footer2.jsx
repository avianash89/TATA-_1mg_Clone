import React from 'react';
import "../Footer2/Footer2.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium link.png";
import google from "../../assets/Google play.png";
import appstore from "../../assets/app store.png";

function Footer2() {
  return (
    <div>
        <div className="footer2">
        <div className="know-us">
          <h3>Know-Us</h3>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Press Coverage</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Business Partnership</a>
            </li>
            <li>
              <a href="">Become a Health Partner</a>
            </li>
            <li>
              <a href="">Corporate Governance</a>
            </li>
          </ul>
        </div>
        <div className="our-policies">
          <h3>Our Policies</h3>
          <ul>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Editorial Policy</a>
            </li>
            <li>
              <a href="">Return Policy</a>
            </li>
            <li>
              <a href="">IP Policy</a>
            </li>
            <li>
              <a href="">Grievance Redressal Policy</a>
            </li>
            <li>
              <a href="">Fake Jobs and Fraud</a>
            </li>
          </ul>
        </div>
        <div className="our-services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="">Order Medicines</a>
            </li>
            <li>
              <a href="">Book Lab Tests</a>
            </li>
            <li>
              <a href="">Consult a Doctor</a>
            </li>
            <li>
              <a href="">Ayurveda Articles</a>
            </li>
            <li>
              <a href="">Hindi Articles</a>
            </li>
            <li>
              <a href="">Care Plan</a>
            </li>
          </ul>
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <ul>
            <li>
              <span>Social Links</span>
            </li>
            <li>
              <a href="">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="">
                <img src={medium} alt="medium" />
              </a>
            </li>
            <li>
              <span>Want daily dose of health?</span>
            </li>
            <li>
              <button>SIGN UP</button>
            </li>
          </ul>
        </div>
        <div className="download">
          <h3>Download App</h3>
          <ul>
            <li>
              <a href="">
                <img src={google} alt="google play" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={appstore} alt="app store" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer2