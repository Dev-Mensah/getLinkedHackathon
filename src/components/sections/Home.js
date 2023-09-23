import React from "react";
import Navbar from "../../components/Navbar";
import curveVector from "../../assets/curveVector.png";
import bulbVector from "../../assets/bulb.png";
import globeImage from "../../assets/globe.png";
import glowLight from "../../assets/Purple-Lens-Flare-PNG.png";
import manImage from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import RegisterBtn from "../../components/RegisterBtn";
import chainVector from "../../assets/chain.png";
import fireVector from "../../assets/fire.png";
import brightStar from "../../assets/Brightstar.png";
import dimStar from "../../assets/dimStar.png";
import TextSlide2 from "../TextSlide2";
import TextSlideRight from "../TextSlideRight";

function Home() {

  return (
    <div id="Home" className=" h-fit  border-b border-gray-500">
      <Navbar className="z-[999]" />
      <div className="w-full flex justify-center border-t lg:border-t-0 relative ">
        <div className="w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] absolute bottom-0 lg:bottom-4 left-32 ">
          <img src={brightStar} alt="img" className="object-contain"/>
        </div>
        <div className="hidden lg:block lg:w-1/4 "></div>
        <div className="w-fit lg:mr-10 my-5 lg:my-0 lg:w-3/4 lg:h-[65px] p-2 flex flex-col items-end relative">
          <span className="text-white text-base lg:text-4xl font-bold italic font-[Montserrat] leading-none">
            <TextSlideRight text="Igniting a Revolution in HR Innovation" />
          </span>
          <div className=" w-24 absolute right-4 bottom-0 lg:w-52 lg:bottom-1 ">
            <img src={curveVector} alt="img" />
          </div>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:pt-4 items-center lg:items-start  flex flex-col  lg:flex-row ">
        <div className="w-[260px] flex flex-col lg:pl-16  lg:w-2/4 relative ">
          <div className="lg:w-96 lg:h-72 absolute top-[-80px] left-[-200px] lg:top-[-100px] lg:left-72 ">
            <img
              src={glowLight}
              alt="img"
              className="object-center lg:opacity-30 opacity-40"
            />
          </div>
          <div className="w-[6px] h-[8px] lg:w-[26px] lg:h-[32px] absolute top-[-20px] right-[-15px] lg:top-[-20px] lg:right-[-30px]">
            <img src={dimStar} alt="img" className="object-contain"/>
          </div>
          <p className=" text-white font-[ClashDisplay-Bold] text-[32px] lg:text-[70px] lg:leading-none text-center lg:text-left">
            getlinked Tech
          </p>
          <p className="text-white font-[ClashDisplay-Bold] text-[32px] lg:text-[70px] leading-none">
            Hackathon" <span className="text-[#D434FE]">1.0</span>
          </p>
          <div className="w-8 h-8 lg:w-fit lg:h-fit absolute top-[47px] right-[-3px] lg:top-[60px] lg:right-[-16px]">
            <img src={chainVector} alt="img" className="object-contain" />
          </div>
          <div className="w-[22px] h-[22px] lg:w-fit lg:h-fit absolute top-[51px] right-[-25px] lg:top-[75px] lg:right-[-78px]">
            <img src={fireVector} alt="img" className="object-contain" />
          </div>
          <div className="w-4 h-4 lg:w-8 lg:h-8 absolute top-[-8px] right-[28px] lg:top-[-25px] lg:right-[90px]">
            <img src={bulbVector} alt="img" className="object-contain"/>
          </div>
          <div className="w-[250px] lg:w-[520px] flex justify:center mt-3 lg:mt-0 pl-3 lg:pl-0 lg:pr-16 ">
            <p className="text-[13px] lg:text-xl text-white font-[Montserrat] text-center  lg:text-left ">
              <TextSlide2 text= "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize" />
            </p>
          </div>

          <div className="mt-5 mb-7 flex justify-center lg:justify-start z-50">
            <RegisterBtn link="/register" text="Register" />
          </div>
          <div className="w-full flex gap-4 relative">
            <div className="w-[6px] h-[8px] lg:w-4 lg:h-4 absolute top-[-48px] right-[50px] lg:top-[-20px] lg:right-24">
              <img src={dimStar} alt="img" className="object-contain"/>
            </div>
            <p className="font-[UnicaOne] font-normal text-white text-[64px]">
              00
              <span className="text-[14px] font-[Montserrat]">H</span>
            </p>
            <p className="font-[UnicaOne] font-normal text-white text-[64px]">
              00
              <span className="text-[14px] font-[Montserrat]">M</span>
            </p>
            <p className="font-[UnicaOne] font-normal text-white text-[64px]">
              00
              <span className="text-[14px] font-[Montserrat]">S</span>
            </p>
          </div>
        </div>
        <div className="w-full h-[300px] lg:w-2/4 lg:h-[385px] relative ">
          <div className="w-full h-full z-30">
            <img
              src={manImage}
              alt="img"
              className="w-full h-full object-center grayscale"
            />
          </div>
          <div className="w-80 h-80 lg:w-[500px] lg:h-80 absolute top-[-30px] right-[55px] lg:top-[10px] lg:right-[75px] z-50">
            <img
              src={globeImage}
              alt="img"
              className="w-full h-full object-center violetFilter"
            />
          </div>
          <div className="hidden lg:block w-72 lg:w-96 lg:h-72 rounded-[50%] absolute top-[-25px] right-0 ">
            <img
              src={glowLight}
              alt="img"
              className="object-contain opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
