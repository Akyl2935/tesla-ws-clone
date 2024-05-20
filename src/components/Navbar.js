import React from "react";
import QuestionSignSVG from "../assets/QuestionSignSVG";
import UserSignSVG from "../assets/UserSignSVG";
import InternetSignSVG from "../assets/InternetSignSVG";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className = "flex justify-between items-center px-12 p-4 text-sm font-bold">
      <div>
      <a href="https://tesla.com">
        <img
          className="h-3"
          src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
          alt="tesla-logo"
        />
        </a>
      </div>
      <div className = "hidden lg:inline">
        <ul className = "flex justify-center hover:cursor-pointer">
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/vehicles">Vehicles</a></li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/energy">Energy</a></li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/charging">Charging</a></li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/discover">Discover</a></li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/shop">Shop</a></li>
        </ul>
      </div>

      <div className = "hidden lg:inline">
        <ul className = "flex justify-center hover:cursor-pointer">
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/shop">
            <QuestionSignSVG /></a>
          </li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/shop">
            <UserSignSVG /></a>
          </li>
          <li className = "py-1 px-3 hover:rounded hover:bg-black/5"><a href="https://tesla.com/shop">
            <InternetSignSVG /></a>
          </li>
        </ul>
      </div>
      <div className = "lg:hidden">
            <button className = "inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg:black/5 shadow-sm hover:bg-black/10">Menu</button>
      </div>
    <div className="bg-white absolute top-0 right-0 w-80 h-full z-10">
      <div className="flex justify-end pr-8 pt-8"><TfiClose size = {28}/></div>
    </div>
    </div>
  );
};  

export default Navbar;
