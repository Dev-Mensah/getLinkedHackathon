import React from "react";
import cupImage from "../../assets/cup.png";
import rewardsImage from "../../assets/Rewards.png";
import Header from "../../components/Header";
import starGra from "../../assets/sata-gra.png";
import dimStar from "../../assets/dimStar.png";
import brightStar from "../../assets/Brightstar.png";
import purpleFlare1 from "../../assets/rules_guide_purple_flare.png";
import purpleFlare2 from "../../assets/rules_guide_purple_flare2.png";

function Rewards() {
  return (
    <div className="bg-[#110B21] pt-16 pb-24 relative">
      <div className="w-full lg:flex lg:justify-between mb-5">
        <div className="hidden lg:block lg:w-2/4"></div>
        <div className="lg:w-2/4 flex flex-col items-center">
        <div className="">
        <Header text1="Prizes and" text2="Rewards" />
        </div>
        <div className="w-2/3 flex justify-center items-center mt-1 lg:mt-4">
        <p className="text-white font-[montserrat] text-center lg:text-left text-[16px]">Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 lg:flex">
      <div className="w-full flex justify-center items-center lg:justify-end lg:items-start lg:w-2/5">
        <div className="w-4/5 flex justify-center lg:justify-end items-center ">
          <div className="z-10">
            <img src={cupImage} alt="img" className="object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:w-3/5 ">
        <div className="w-4/5 flex justify-center mt-20 ">
          <div className="z-50">
            <img src={rewardsImage} alt="img" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[12px] h-[14px] hidden absolute lg:w-[15px] lg:h-[18px] lg:bottom-[10%] lg:left-[18%]">
        <img src={brightStar} alt="img" />
      </div>
      {/* under cloud not on small screens*/}
      <div className="hidden lg:block w-[12px] h-[14px] z-20 absolute lg:w-[26px] lg:h-[32px] lg:bottom-[36%] lg:left-[35%]">
        <img src={brightStar} alt="img" />
      </div>
      {/* by 3rd award */}
      <div className="w-[10px] h-[12px] z-20 top-[65%] right-10 absolute  lg:w-[26px] lg:h-[32px] lg:top-[50%] lg:right-10">
        <img src={brightStar} alt="img" />
      </div>
      {/* below cup on small screens */}
      <div className="w-[10px] h-[12px] top-[55%] left-16 absolute  lg:w-[26px] lg:h-[32px]  lg:top-[38%] lg:left-[50%]">
        <img src={brightStar} alt="img" />
      </div>
      <div className="w-[7px] h-[9px] top-20 right-24 absolute lg:w-[21px] lg:h-[25px] lg:right-auto lg:top-10 lg:left-64">
        <img src={starGra} alt="img" />
      </div>
      {/* not on large screens */}
      <div className="w-[7px] h-[9px] top-5 left-14 absolute lg:hidden">
        <img src={starGra} alt="img" />
      </div>
      <div className="w-[12px] h-[14px] bottom-10 right-32 absolute lg:w-[26px] lg:h-[32px] lg:bottom-8 lg:right-64">
        <img src={dimStar} alt="img" />
      </div>
      <div className="absolute top-16 left-[-70px] lg:top-[-80px] lg:left-[-50px]">
        <img src={purpleFlare1} alt="img" className="whitish"/>
      </div>
      <div className="absolute top-60 lg:bottom-auto lg:top-[180px] lg:right-0">
        <img src={purpleFlare2} alt="img" className="whitish"/>
      </div>
    </div>
  );
}

export default Rewards;
