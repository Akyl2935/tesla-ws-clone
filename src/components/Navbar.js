import React from "react";
import questionSVG from "../assets/questionSVG";
import userMarkSVG from "../assets/userMarkSVG";
import internetMarkSVG from "../assets/internetMarkSVG";

const navbar = () => {
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

          <li><questionSVG/></li>
          <li><userMarkSVG/></li>
          <li><internetMarkSVG/></li>

        </ul>

      </div>

    </div>
  );
};

export default navbar;
