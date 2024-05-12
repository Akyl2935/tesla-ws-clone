import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model Y</h1>
        <p className = "p-2">From <span className="underline underline-offset-4">$399/mo at 0.99 APR</span></p>
      </div>

      <div>
        <button>Order Now</button>
        <button>Demo Drive</button>
      </div>

      <div>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default Model;
