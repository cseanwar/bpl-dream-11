import React from "react";
import bgSubImg from "../../../assets/bg-shadow.png";

const Subscription = () => {
  return (
    <div className="container mx-auto border border-[#FFFFFF15] rounded-3xl p-6 mb-10">
      <div
        className="rounded-3xl bg-cover bg-center overflow-hidden py-22 px[391px]"
        style={{ backgroundImage: `url(${bgSubImg})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-[32px] text-[#131313]">Subscribe to our Newsletter</h2>
          <p className="pt-4 pb-6 text-[#13131370] font-medium text-xl">Get the latest updates and news right in your inbox!</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" autoComplete="off" className="input py-4.5 pl-7.5 rounded-xl w-100" />
            <button className="btn rounded-xl font-bold text-base py-4.5 px-7.5 bg-linear-to-r from-[#EC76F690] to-[#FBCA57]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
