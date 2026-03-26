import React from "react";
import footerImg from "../../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#06091A] pt-8.5 flex flex-col gap-16 justify-center items-center pb-18">
        <div>
          <img src={footerImg} alt="" />
        </div>
        <div className="flex justify-between gap-44.25 items-center">
          <div className="w-72.75 flex flex-col gap-4">
            <h3 className="font-semibold text-[#FFFFFF] text-lg">About Us</h3>
            <p className="text-[#FFFFFF60] text-base">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="w-72.75 flex flex-col gap-4 items-center">
            <h3 className="font-semibold text-[#FFFFFF] text-lg">
              Quick Links
            </h3>
            <ul className="text-[#FFFFFF60] text-base list-disc">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-72.75 space-y-4">
            <h3 className="font-semibold text-[#FFFFFF] text-lg">Subscribe</h3>
            <p className="text-[#FFFFFF60] text-base">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <div>
                <label className="input rounded-l-xl text-[#13131340]">
                  <input type="email" placeholder="Enter your email" autoComplete="off"/>
                </label>
              </div>
              <button className="btn join-item rounded-r-xl text-[#EC76F6] font-bold text-base bg-linear-to-r from-[#FBCA57] to-[#EC76F690]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#06091A] border-t text-[#FFFFFF15]">
        <p className="text-center text-[#FFFFFF60] text-base py-8">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
