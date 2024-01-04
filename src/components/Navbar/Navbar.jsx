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
import google from "./Google play.png";
import appstore from "./app store.png";
import reliable from "./reliable.png";
import secure from "./secure.png";
import affordable from "./affordable.png";
import blue from "./blue.png";
import orange from "./orange.png";
import arow from "./arow.png";
import payment from "./payment.png";

export default function Navbar() {
  return (
    <div className="container">
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
        <ul>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Health Resource Center</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="health-center-1">
              <ul>
                <li>
                  <a href="">
                    <span>All Diseases</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>All Medicines</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Medicines by Therapeutic Class</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Vitamins & Nutrition</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health1-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Vitamins & Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Multivitamins</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Vitamin D3</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Vitamin C</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Minerals</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Calcium</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Vitamin B12 & B Complex</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Other Vitamins</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Nutritional Drinks</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Adult Daily Nutrition</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Kids Nutrition (2-15 Yrs)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Women Nutrition</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Global supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Now Foods</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Solgar</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nordic naturals</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Nutritional Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr. Morepen</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Power Gummies</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Tata 1mg</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">HealthKart</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Carbamide Forte</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Swisse</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Zingavita</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Protein Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Whey Protein</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Amino Acids</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mass Gainers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Workout Essential</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Fat Burners</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Healthy Snacks & Drinks</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Green Tea & Herbal Tea</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Energy Foods</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Rehydration Beverages</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Apple Cider Vinegar</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nuts & Cereals</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Chyawanprasha</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Omega & Fish Oil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Fish Oil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cod Liver Oil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Flax Seed Oil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Specialty Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pre and Probiotics</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Glucosamine</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Collagen</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Antioxidants</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Biotin</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Supplements by category</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Kid</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Adult 50+</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Vegetarian</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sports</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Women</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Men</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Supplements by concern</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Weight Management</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Daily Wellness</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Energy</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Immunity Boosters</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair, skin & nails</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sleep</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bone & Joint</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Personal Care</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health1-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Sexual Wellness</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Condoms</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Lubricants & Massage Gels</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Personal body massagers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Men Performance Enhancers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sexual Health Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Skin Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Body Lotions</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mosquito Repellents</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Lip Balm</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Acne Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bath Essentials</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Facewash</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sanitizers & Handwash</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sunscreen</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cetaphil</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Baby Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby & Infant Food</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby Diapers, wipes & more</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nursing & Feeding</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby Bath Essentials</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby Skin Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby Healthcare</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baby Oral Health</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Hair Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Shampoo</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair Conditioners</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair Growth Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair Oils</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair Growth Products</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Elderly Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Adult Diapers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bone & Joint Health</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Orthopaedic Supports</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Women Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Feminine Hygiene</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Women Care Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mother Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Menopause</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Polycystic Ovary Syndrome</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Men Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Men Grooming</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Oral Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Toothbrush</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Toothpaste</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mouthwash</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Oral Care Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Dental Floss & Tongue Cleaners
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Tooth Powder</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Pet Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pet Grooming</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pet Food</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pet Health Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Friends Adult Diapers</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Healthcare Devices</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health1-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Top Selling Categories</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">BP Monitors</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nebulizers & Vaporizers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Smart Wearables</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Weighing Scales</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Thermometers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Respiratory & Surgical Mask</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pulse Oximeter</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Stethoscopes</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Diabetes Devices</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Blood Glucose Monitors</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Test Strips & Lancets</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Syringes & Pens</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Continuous glucose monitors</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Insulin Coolers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Diabetic Footwear</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Pain Management</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Electric heating pads</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hot Water Bottles</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hot & Cold packs</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Body Massager</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Wound Care & Dressings</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Adhesive bandage</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Crepe Bandage</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Surgical tapes</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Supports, Splints & Braces</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Knee Support</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Back & Abdomen Support</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Arm & Elbow Support</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ankle, Foot & Leg Support</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hand & Wrist Braces</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Neck & Shoulder Support</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cervical Pillows & Mattress</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Compression support & socks</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Surgicals</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Needles & Syringes</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Gloves</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Catheter</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cannula</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Swab</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Mobility Aids</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Walking Sticks</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Walkers & Rollators</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Wheelchair</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Daily Living Aids</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hearing Aid</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Commode Chair</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bed Pan and Urinal Pot</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pill Box Organizer</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Ayurveda Products</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health1-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Popular categories</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Herbal Juice</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Chyawanparash</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurvedic Immunity Boosters</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Unani Medicines</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Herbal Supplements</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Ayurveda Personal Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurveda Oral Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurveda Baby Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurveda Skin Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurveda Hair Care</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Best Selling Brands</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dabur</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Baidyanath</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dhootapapeshwar</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Aimil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Zandu</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Kapiva Ayurveda</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Patanjali</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Himalaya</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Top Selling Herbs</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Ashwagandha (Immunity & Stress)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Aloevera</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Giloy or Guduchi</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Shilajit (Men Sexual Wellness)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Brahmi</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Top Health Concerns</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cough, Cold & Fever</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sexual Wellness</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bone, Joint and Muscle Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurvedic Stomach Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Diabetic Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Liver Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mind Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cardiac Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ayurveda Women's Health</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Diabetes</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health2-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Diabetes Monitoring Devices</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Sugar Free</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Diabetic Medicines</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Vitamins, Minerals & Antioxidants
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Homeopathy Medicines</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Sugar Substitutes</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Diabetic Diet</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Juices & Vinegars</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Diabetic Nutrition Supplements
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Health Conditions</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health2-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Stomach Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Constipation</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">General Digestion/Indigestion</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Loose motion/Diarrhoea</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Heart Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Bone, Joint & Muscle Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Pain Relief</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Omnigel products</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Volini</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Iodex</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Moov</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Eye Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Eye Lubricants</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Ear Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">First Aid</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Liver Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Cold & Cough</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nasal Sprays</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Chest Rubs & Balms</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cough Syrups</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Lozenges</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Fever & Headache</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Crocin</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Calpol</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Saridon</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Mental Wellness</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Kidney Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Respiratory Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Piles, Fissures & Fistula</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Smoking Cessation</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">2baconil</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ryze</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Nicotex</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Derma Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Antifungal Creams and Powders</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dry & Itchy Skin</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Wounds & Insect Bite</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Acne & Pimples</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Skin Infection & Psoriasis</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Homeopathy</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health2-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Homeopathy Top Brands</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">SBL Homoeopathy</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr Reckeweg</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr Willmar Schwabe India</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Adel Pekana</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">BJAIN Homeopathy</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bakson's</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Allen</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Wheezal</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr Willmar Schwabe Germany</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Haslab</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Medisynth</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Boiron</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bhandari</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr Bakshi Bakson</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dr Batra's</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Homeopathy Wellness Combos</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">
                      Homeopathy Popular Categories
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">
                      Homeopathic Care for Cold & Cough
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Homeopathic Respiratory Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Homeopathy Covid Essentials</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Sexual Health</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Hair Care Products</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Skin Care Products</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Children's Health</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Women's Health</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Homeopathy Medicines</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Homeopathic Drops</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Dilutions</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Mother Tinctures</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Triturations</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bio Combinations</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Millesimal LM Potencies</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Biochemics</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Bach Flower Remedies</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Featured</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health2-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Winter Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Body & Skin Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Winter Hair & Scalp Care</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Cough & Cold</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Headache & Fever</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Vaporizers & Nebulizers</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Heating Aid</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Best Combos</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Tata 1mg Health Products</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Trending now</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">New Arrivals on Tata1MG</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Buy More, Save More</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Minimum 33% Off</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Popular Combo Deals</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Deals of the Day</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Top Brands</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Accu-Chek</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Ensure</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Revital</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Optimum Nutrition (ON)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Pediasure</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">Scalpe</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color">La Shield</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Super savings</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mg-center">
              <a href="">
                <span>Covid Essentials</span>
              </a>
              <img src={arow} alt="arow" />
            </div>
            <div className="Health2-center">
              <ul>
                <li>
                  <a href="">
                    <span className="color1">Covid-19 Self test kits</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Oxygen Cans & Concentrators</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Masks</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Sanitizers & Handwash Products</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Support Your Immunity</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Thermometer</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="color1">Chyawanprash</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
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
