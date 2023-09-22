import React from "react";
import womanImage from "../assets/womanImage1.png";
import Header from "../components/Header";
import PlainText from "../components/PlainText";
import dimStar from "../assets/dimStar.png";
import brightStar from "../assets/Brightstar.png";
import purpleFlare1 from "../assets/rules_guide_purple_flare.png";
import purpleFlare2 from "../assets/rules_guide_purple_flare2.png";

function RulesAndGuidelines() {
  return (
    <div className="w-full pt-5 pb-10 flex flex-col-reverse border-b border-gray-500 lg:flex-row">
      <div className="w-full flex flex-col items-center relative lg:w-1/2 lg:justify-center ">
        <div className="w-4/5 ">
          <Header text1="Rules and" text2="Guidelines" />
        </div>
        <div className="w-4/5 z-10">
          <PlainText
            text="Our tech hackathon is a melting pot of visionaries, 
         and its purpose is as clear as day: to shape the future. Whether you're a 
         coding genius, a design maverick, or a concept wizard, you'll have the chance to 
         transform your ideas into reality. Solving real-world problems, pushing the boundaries 
         of technology, and creating solutions that can change the world, that's what we're all about!"
          />
        </div>
        <div className="w-3 h-3.5 absolute top-12 right-6 lg:w-[26px] lg:h-[32px] lg:top-44 lg:right-72">
          <img src={dimStar} alt="img" />
        </div>
        <div className=" absolute top-[-430px] left-[-80px] lg:top-[-10px] lg:left-[60px]">
          <img
            src={purpleFlare1}
            alt="img"
            className="object-center opacity-50"
          />
        </div>
        <div className="w-2.5 h-3 absolute top-[-170px] left-14 lg:w-[26px] lg:h-[32px] lg:bottom-32 lg:right-0 lg:left-auto lg:top-auto">
          <img src={brightStar} alt="img" />
        </div>
        {/* star under text */}
        <div className="w-2.5 h-3 absolute bottom-[-20px] left-16 lg:hidden">
          <img src={brightStar} alt="img" />
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center relative">
        <div className="w-4/5">
        <div className="">
          <img src={womanImage} alt="img" className="object-center" />
        </div>
        </div>
        <div className=" absolute bottom-[-530px] lg:bottom-[-470px] right-[2px]">
          <img
            src={purpleFlare2}
            alt="img"
            className="object-center opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

export default RulesAndGuidelines;
