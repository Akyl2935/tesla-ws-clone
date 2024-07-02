import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model Y</h1>
        <p className="p-2 text-sm">
          From{" "}
          <span className="underline underline-offset-4">
            <a href="https://tesla.com/shop">$399/mo at 0.99 APR</a>
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
        <button className="bg-[#ffffff] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 font-bold">
          <a href="https://www.tesla.com/modely/design#overview">Order Now</a>
        </button>
        <button className="bg-[#222222] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white md:bg-opacity-65">
          <a href="https://www.tesla.com/drive?selectedModel=modely">
            Demo Drive
          </a>
        </button>
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Model;
