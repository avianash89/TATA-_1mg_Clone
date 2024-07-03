import React from "react";
import "../Search/Search.css"
import Logo3 from "../../assets/location-black-png.png";
import Logo4 from "../../assets/auto location.png";
import Logo5 from "../../assets/search.png";
import Logo6 from "../../assets/current.png";

function Search() {
  return (
    <div>
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
    </div>
  );
}

export default Search;
