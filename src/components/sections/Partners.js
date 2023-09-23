import React from "react";
import Header from "../../components/Header";
import partnersImage from "../../assets/partnersImage.png";
import purpleFlare1 from "../../assets/rules_guide_purple_flare.png";
import purpleFlare2 from "../../assets/rules_guide_purple_flare2.png";
import starGra from "../../assets/sata-gra.png";
import brightStar from "../../assets/Brightstar.png";

function Partners() {
  return (
    <div className="bg-[#110B21] pt-20 lg:pt-32 pb-24 relative lg:overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <div>
          <Header text1="Partners and Sponsors" />
        </div>
        <div className="lg:w-2/3 flex justify-center items-center mt-1 lg:mt-4 ">
          <p className="z-10 w-4/5 lg:w-2/5 text-white text-center font-[montserrat] text-[14px]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <div className="w-full h-fit mt-10 flex justify-center p-3 ">
        <div className="w-[90%] lg:h-[385px] ">
        <div className="w-full h-full z-10">
            <img src={partnersImage} alt="img" className="w-full h-full object-center z-10" />
        </div>
        </div>
        {/*  */}
      </div>
      <div className="absolute top-[-150px] left-[-250px] lg:top-[-220px] lg:left-[-300px]">
        <img src={purpleFlare1} alt="img" className="whitish"/>
      </div>
      <div className="hidden lg:block absolute lg:bottom-[-420px] lg:right-[0]">
        <img src={purpleFlare2} alt="img" className="whitish"/>
      </div>
      <div className="w-72 h-72 absolute bottom-[-150px] right-[-130px] lg:hidden lg:w-auto lg:h-auto  lg:bottom-[-350px] lg:right-[-450px]">
        <img src={purpleFlare1} alt="img" className="whitish opacity-70"/>
      </div>
      <div className="w-[14px] h-[16px] absolute bottom-[25%] left-[70%] lg:w-auto lg:h-auto lg:bottom-40 lg:left-[55%]">
        <img src={brightStar} alt="img" className="whitish"/>
      </div>
      {/* top purple star */}
      <div className="w-[14px] h-[16px] absolute top-[47%] left-14 lg:w-auto lg:h-auto  lg:top-64 lg:left-32 z-50">
        <img src={starGra} alt="img" className="whitish"/>
      </div>
      {/* inside awards */}
      <div className="w-[14px] h-[16px] absolute top-[56%] left-[54%] lg:w-auto lg:h-auto lg:top-[43%] lg:left-[55%]">
        <img src={starGra} alt="img" className="whitish"/>
      </div>
    </div>
  );
}

export default Partners;
