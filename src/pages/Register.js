import React, { useState } from "react";
import Navbar from "../components/Navbar";
import manInChairImage from "../assets/manInChairImage.png";
import moveImage from "../assets/Part-of-move1.png";
import RegisterForm from "../components/RegisterForm";
import purpleFlare1 from "../assets/rules_guide_purple_flare.png";
import statrPu from "../assets/star-pu.png";
import sataGra from "../assets/sata-gra.png";
import dimStar from "../assets/dimStar.png";
import brightStar from "../assets/Brightstar.png";

function Register() {

  return (
    <div className="bg-[#150E28] relative overflow-hidden">
      <div className="hidden lg:block lg:w-full">
      <Navbar />
      </div>
      <div className="flex flex-col py-10 items-center lg:items-start lg:flex-row relative">
        <div className=" w-full lg:w-2/5">
          <div className="w-full flex items-center justify-center">
            <div className="w-72 h-72 lg:w-auto lg:h-auto z-50">
              <img src={manInChairImage} alt="img" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex">
          <div className="w-full lg:w-[96%] flex flex-col items-center lg:items-start lg:py-6 lg:pl-20 lg:pr-5 lg:bg-[#1C152E]">
            <div className="absolute top-3 left-14 lg:relative lg:top-auto lg:left-auto w-4/6 my-4 ">
              <p className="text-[15px] lg:text-[32px] font-[ClashDisplay-SemiBold] text-[#D434FE]">
                Register
              </p>
            </div>
            <div className="w-5/6 lg:w-4/6 flex items-end gap-2 relative">
              <p className="font-[montserrat] text-[12px] lg:text-[14px] text-white">
                Be part of this movement!
              </p>
              <div className=" ">
                <img src={moveImage} alt="img" className="object-center" />
              </div>
            </div>
            <div className="w-5/6 my-3 lg:w-4/6">
                <p className="text-[20px] lg:text-[24px] font-[montserrat] text-white">CREATE YOUR ACCOUNT</p>
            </div>
            <div className="w-5/6 lg:w-full z-50">
                <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      <div className="w-96  rounded-[50%] absolute top-24 left-[-70px] lg:w-[650px] lg:h-[650px] lg:top-[-54px] lg:left-[-100px] ">
        <img src={purpleFlare1} alt="img" className="object-contain opacity-50" />
      </div>
      <div className="hidden lg:block w-96  rounded-[50%] absolute lg:w-[650px] lg:h-[650px] lg:bottom-[-254px] lg:right-[-300px] ">
        <img src={purpleFlare1} alt="img" className="object-contain opacity-50" />
      </div>
      <div className="w-[11px] h-[13px] absolute top-48 left-[85%] lg:w-[21px] lg:h-[25px] lg:top-40 lg:left-16">
        <img src={sataGra} alt="img" className="object-contain" />
      </div>
      <div className="w-[11px] h-[13px] absolute bottom-auto top-[40%] left-3 lg:w-[21px] lg:h-[25px] lg:bottom-44 lg:top-auto lg:left-20">
        <img src={dimStar} alt="img" className="object-contain" />
      </div>
      <div className="w-[11px] h-[13px] absolute bottom-72 top-auto left-auto right-6 lg:w-[21px] lg:h-[25px] lg:bottom-72 lg:right-auto lg:top-auto lg:left-[35%]">
        <img src={statrPu} alt="img" className="object-contain" />
      </div>
      <div className="hidden lg:block w-[11px] h-[13px] absolute bottom-10 top-auto left-auto right-6 lg:w-[21px] lg:h-[25px] lg:bottom-5 lg:right-32 lg:top-auto lg:left-auto">
        <img src={brightStar} alt="img" className="object-contain" />
      </div>
    </div>
  );
}

export default Register;
