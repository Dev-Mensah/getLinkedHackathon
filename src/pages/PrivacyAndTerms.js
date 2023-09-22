import React from "react";
import Header from "../components/Header";
import PlainText from "../components/PlainText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RegisterBtn from "../components/RegisterBtn";
import startPu from "../assets/star-pu.png";
import starGra from "../assets/sata-gra.png";
import brightStar from "../assets/Brightstar.png";
import dimStar from "../assets/dimStar.png";
import padlockImage from "../assets/padlock.png";
import padlockguyImage from "../assets/padlockGuy.png";
import purpleFlare2 from "../assets/rules_guide_purple_flare2.png";
import purpleFlare1 from "../assets/rules_guide_purple_flare.png";

function PrivacyAndTerms() {
  return ( 
    <div className=" bg-[#110B21] pt-24 pb-52 flex flex-wrap justify-center overflow-hidden  relative">
      <div className="w-full lg:w-1/2 flex flex-col items-center ">
        <div className="w-4/6">
          <Header text1="Privacy Policy and" text2="Terms" />
        </div>
        <div className="w-4/6 mt-5 flex flex-col items-center lg:items-start ">
          <div className="lg:w-2/3 my-3">
            <p className="text-center lg:text-start font-[montserrat] text-[14px] text-gray-300">
              Last updated on September 12, 2023
            </p>
          </div>
          <div className="w-full lg:w-5/6 my-3">
            <p className="text-center lg:text-start font-[montserrat] text-[14px] text-white">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
        </div>
        <div className="w-5/6 z-50 lg:w-4/6 my-10 py-7 p-2 lg:p-5 flex flex-col items-center justify-center gap-6 border border-[#D434FE] rounded-sm">
          <div className="w-[98%] lg:w-[90%]">
            <PlainText text="At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy." />
          </div>
          <div className="w-[90%]">
            <p className="font-[montserrat] text-[16px] font-bold text-[#D434FE]">
              Licensing Policy
            </p>
            <p className="text-white pt-1 font-[montserrat] text-[14px]">
              Here are terms of our Standard License:
            </p>
          </div>
          <div className="w-[98%] pl-3">
            <div className="flex mb-5">
              <div className="w-[14%] flex justify-start items-start ">
                <div className="">
                  <CheckCircleIcon className="text-green-500 bg-white border-0 roundedFilter" />
                </div>
              </div>
              <div className="w-[86%] flex flex-col ">
                <div className="">
                  <p className="font-[montserrat] text-[14px] text-white">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mb-7">
              <div className="w-[14%] flex justify-start items-start ">
                <div className="">
                  <CheckCircleIcon className="text-green-500 bg-white border-0 roundedFilter" />
                </div>
              </div>
              <div className="w-[86%] flex flex-col">
                <div className="">
                  <p className="font-[montserrat] text-[14px] text-white">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center py-4">
              <div>
                <RegisterBtn text="Read More" />
              </div>
            </div>
          </div>
        </div>

        {/* beside box */}
        <div className="w-[17px] h-[20px] lg:w-[30px] lg:h-[36px] absolute bottom-[54%] left-2  lg:bottom-[30%] lg:left-10">
          <img src={startPu} alt="img" />
        </div>
        <div className="w-[8px] h-[8px] lg:w-[26px] lg:h-[32px] absolute top-14 right-24 lg:top-20 lg:left-[33%]">
          <img src={dimStar} alt="img" />
        </div>
        {/* next to text */}
        <div className="w-[17px] h-[20px] lg:w[23px] lg:h-[28px] absolute top-[300px] left-[80%] lg:top-52 lg:left-[42%]">
          <img src={startPu} alt="img" />
        </div>
        <div className="w-[17px] h-[20px] absolute bottom-[30%] left-3 lg:hidden">
          <img src={startPu} alt="img" />
        </div>
        <div className="hidden w[15px] h-[18px] absolute lg:block lg:bottom-72 lg:right-[36%]">
          <img src={starGra} alt="img" />
        </div>
        <div className="w-[7px] h-[8px] lg:w-[15px] lg:h-[18px] absolute top-[70%] right-28 lg:top-64 lg:right-[12%]">
          <img src={brightStar} alt="img" />
        </div>
        <div className="w-[9px] h-[10px] lg:w-[15px] lg:h-[18px] absolute bottom-24 left-20 lg:left-auto lg:bottom-44 lg:right-[44%]">
          <img src={brightStar} alt="img" />
        </div>
        <div className="w-[8px] h-[8px] lg:w-[15px] lg:h-[18px] absolute bottom-24 right-16 lg:bottom-52 lg:right-14">
          <img src={dimStar} alt="img" />
        </div>
        {/* <div className="w-[8px] h-[8px] absolute top-14 right-24 lg:hidden">
          <img src={dimStar} alt="img" />
        </div> */}
        <div className="w-72 h-72 absolute top-[-300px] right-[0] lg:w-auto lg:h-auto lg:top-[-400px] lg:right-[0]">
        <img src={purpleFlare2} alt="img" className="whitish"/>
      </div>
        <div className="absolute bottom-[30%] left-[-300px] lg:bottom-[-350px] lg:left-[-300px]">
        <img src={purpleFlare1} alt="img" className="whitish"/>
      </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center relative">
        <div className="w-4/5 flex justify-center items-center">
          <div className="">
            <img src={padlockImage} alt="img" className="object-contain" />
          </div>
        </div>
        <div className="absolute top-32 left-12 lg:top-48 lg:left-20">
          <div className="w-[270px] h-[270px] lg:w-[450px] lg:h-[470px]">
            <img src={padlockguyImage} alt="img" className="object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndTerms;
