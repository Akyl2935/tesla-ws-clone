import React from "react";
import QuestionSignSVG from "../assets/QuestionSignSVG";
import UserSignSVG from "../assets/UserSignSVG";
import InternetSignSVG from "../assets/InternetSignSVG";


const Navbar = () => {
  return (
    <div>
      <div>
        <img />
      </div>

      <div>
        <ul>
          <li>Vehicles</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <QuestionSignSVG/>
          </li>
          <li>
            <UserSignSVG/>
          </li>
          <li>
           <InternetSignSVG/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
