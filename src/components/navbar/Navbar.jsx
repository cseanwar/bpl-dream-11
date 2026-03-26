import React from "react";
import dollarImg from "../../assets/coin.png";
import logo from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="container mx-auto flex justify-between items-center navbar mb-6 bg-[#FEFEFE]">
      <div className="flex-1">
        <img src={logo} alt="" />
      </div>
      
      <div
        className="flex gap-12">
        <ul className="flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-12 text-[#13131370]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        {/* <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            {coin} Coins
            <img src={dollarImg} alt="" />
          </button>
        </div> */}
        <button className="btn rounded-xl bg-[#FFFFFF] flex justify-between items-center gap-2 font-semibold text-base">
          {coin} Coins
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
