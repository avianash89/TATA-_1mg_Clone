import React from "react";
import "../Navbar/Navbar.css";
import Logo from "./tata-1mg-logo.png";
import Logo2 from "./download.png";
import Logo3 from "./location-black-png.png";
import Logo4 from "./auto location.png";
import Logo5 from "./search.png";
import Logo6 from "./current.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import linkedin from "./linkedin.png";
import medium from "./medium link.png";
import google from "./Google play.png"
import appstore from "./app store.png"

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-option">
          <div className="image">
            <img src={Logo} alt="tata-1mg-logo" />
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
      <div className="search-quick-offer">
        <div className="search">
          <div className="lol">
            <div className="location">
              <img src={Logo3} alt="location point" />
              <input
                type="text"
                placeholder="Enter your city"
                value="New Delhi"
              />
              <img src={Logo4} alt="auto locate" />
            </div>
          </div>
          <div className="lol2">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for Medicines and Health Products"
              />
              <img src={Logo5} alt="search png" />
            </div>
          </div>
        </div>
        <div className="quick-offer">
          <div className="lol3">
            <img src={Logo6} alt="current png" />
            <span>QUICK BUY! Get 15% off on medicines*</span>
          </div>
          <div className="btn">
            <button>Quick order</button>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <select name="" id="">
          <option value="">Health Resource Center</option>
          <option value="">
            <b>All Diseases</b>
          </option>
          <option value="">
            <b>All Medicines</b>
          </option>
          <option value="">
            <b>Medicines by Therapeutic Class</b>
          </option>
        </select>
        <select name="" id="">
          <option value="">Vitamins & Nutrition</option>
          <option value="">
            {/* <div className="vitamins">
              <ul>
                <li>
                  <a href="">Vitamins & Supplements</a>
                </li>
                <li>
                  <a href="">Multivitamins</a>
                </li>
                <li>
                  <a href="">Vitamin D3</a>
                </li>
                <li>
                  <a href="">Vitamin C</a>
                </li>
                <li>
                  <a href="">Minerals</a>
                </li>
                <li>
                  <a href="">Calcium</a>
                </li>
                <li>
                  <a href="">Vitamin B12 & B Complex</a>
                </li>
                <li>
                  <a href="">Other Vitamins</a>
                </li>
                <li>
                  <a href="">Nutritional Drinks</a>
                </li>
                <li>
                  <a href="">Adult Daily Nutrition</a>
                </li>
                <li>
                  <a href="">Kids Nutrition (2-15 Yrs)</a>
                </li>
                <li>
                  <a href="">Women Nutrition</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div> */}
          </option>
        </select>
        <select name="" id="">
          <option value="">Diabetes</option>
          <option value="">
            <b>Diabetes Monitor</b>
          </option>
          <option value="">
            <b>Sugar Free</b>
          </option>
          <option value="">
            <b>Diabetic Medicines</b>
          </option>
          <option value="" style={{ color: "#757575" }}>
            Vitamins & Minerals
          </option>
          <option value="" style={{ color: "#757575" }}>
            Homeopathy
          </option>
          <option value="">
            <b>Sugar Substitutes</b>
          </option>
          <option value="">
            <b>Diabetic Diet</b>
          </option>
          <option value="" style={{ color: "#757575" }}>
            Juices & Vinegars
          </option>
          <option value="" style={{ color: "#757575" }}>
            Diabetic Nutrition
          </option>
        </select>
        <select name="" id="">
          <option value="">Healthcare Devices</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Personal Care</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Health Conditions</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Ayurveda Products</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Homeopathy</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Featured</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
        <select name="" id="">
          <option value="">Covid Essentials</option>
          <option value="">;fd,f</option>
          <option value="">kf</option>
          <option value="">mlfmf</option>
          <option value="">,,f</option>
        </select>
      </div>
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
          </div>
        </div>
      </div>
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
            <li><span>Social Links</span></li>
            <li>
              <a href=""><img src={facebook} alt="facebook" /></a>
              <a href=""><img src={instagram} alt="instagram" /></a>
              <a href=""><img src={twitter} alt="twitter" /></a>
              <a href=""><img src={youtube} alt="youtube" /></a>
              <a href=""><img src={linkedin} alt="linkedin" /></a>
              <a href=""><img src={medium} alt="medium" /></a>
            </li>
            <li><span>Want daily dose of health?</span></li>
            <li><button>SIGN UP</button></li>
          </ul>
        </div>
        <div className="download">
          <h3>Download App</h3>
          <ul>
            <li><a href=""><img src={google} alt="google play" /></a></li>
            <li><a href=""><img src={appstore} alt="app store" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer4">
        
      </div>
    </div>
  );
}
