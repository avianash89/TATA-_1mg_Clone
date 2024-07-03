import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Search from "./Search/Search.jsx";
import Dropdown from "./Dropdown/Dropdown.jsx";
import Display from "./Display/Display.jsx";
import Footer1 from "./Footer1/Footer1.jsx";
import Footer2 from "./Footer2/Footer2.jsx";
import Footer3 from "./Footer3/Footer3.jsx";
import Footer4 from "./Footer4/Footer4.jsx";
import Footer5 from "./Footer5/Footer5.jsx";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Search />
      <Dropdown />
      <Display />
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <Footer5 />
    </div>
  );
}
