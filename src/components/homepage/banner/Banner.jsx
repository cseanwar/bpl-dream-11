import React from "react";
import bannerImg from "../../../assets/banner-main.png";
import bgImg from "../../../assets/bg-banner.png";

const Banner = () => {
  return (
    <div
      className="container mx-auto rounded-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* <div className="absolute inset-0"></div> */}
      <div className="relative flex flex-col gap-6 justify-center items-center text-center px-6 py-20">
        <img src={bannerImg} alt="" />
        <h1 className="font-bold text-[40px] text-[#FFFFFF]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-[#FFFFFF70] font-medium text-2xl">Beyond Boundaries . Beyond Limits</p>
        <div className="p-2 rounded-2xl border border-[#E7FE29]">
          <button className="btn rounded-xl text-[#131313] bg-[#E7FE29]">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
