import React from "react";
import statImage from "../assets/statImage.png";
import Header from "../components/Header";
import ColouredText from "../components/ColouredText";
import { TextData } from "../utils/textData";
import RegisterBtn from "../components/RegisterBtn";
import flare from "../assets/criteria_flare.png";
import statrPu from "../assets/star-pu.png";
import dimStar from "../assets/dimStar.png";
import brightStar from "../assets/Brightstar.png";
import flare2 from "../assets/criteria_flare2.png"

function Criteria() {
  return (
    <div className="flex py-14 flex-wrap justify-center border-b border-gray-500 items-center relative ">
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="w-4/5 p-3 flex items-center justify-center relative">
          <div className="w-fit h-fit z-50 overflow-hidden">
            <img src={statImage} alt="img" className="object-center" />
          </div>
          <div className=" hidden absolute top-[-10px] left-[80px] lg:block w-24 h-24 rounded-full bg-gradient-to-r from-[#FF2674] to-[#8F01FE]"></div>
        </div>
        <div className="absolute top-[-40px] left-[-40px] lg:bottom-[-220px] lg:left-0">
          <img src={flare} alt="img" className="object-contain" />
        </div>
      </div>

      <div className="w-[13px] h-[17px] absolute top-5 lg:w-[30px] lg:h-[36px] lg:top-[30px] lg:left-44">
        <img src={statrPu} alt="img" />
      </div>
      <div className="w-2.5 h-3 absolute bottom-28 right-14 lg:w-[26px] lg:h-[32px] lg:bottom-[10%] lg:left-[40%]">
        <img src={brightStar} alt="img" />
      </div>
      <div className="w-[12px] h-[14px] absolute top-[18%] lg:w-[26px] lg:h-[32px] left-[53%] lg:top-[50%] lg:left-[27%]">
        <img src={dimStar} alt="img" />
      </div>
      

      <div className="w-full flex flex-col justify-center items-center lg:w-1/2 lg:justify-start lg:items-start relative">
        <div className="w-4/5">
          <Header text1="Judging Criteria" text2="Key attributes" />
        </div>
        <div className="py-5 w-4/5 flex flex-col gap-2">
          {TextData.map((item, index) => (
            <ColouredText key={index} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="w-fit h-fit mt-6 cursor-pointer">
          <RegisterBtn text="Read More" />
        </div>
        {/* <div className="absolute top-28 right-[-250px] lg:top-20 lg:right-[-150px]">
        <img src={flare2} alt="img" className="object-contain opacity-40" />
      </div> */}
      </div>
    </div>
  );
}

export default Criteria;
