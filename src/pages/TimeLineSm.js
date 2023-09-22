import React from "react";
import BarByText from "../components/BarByText";
import { TimeLineSmallData } from "../utils/textData";
import dimStar from "../assets/dimStar.png";
import brightStar from "../assets/Brightstar.png";
import statrPu from "../assets/star-pu.png";

function TimeLineSm() {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 relative">
      <div className="w-full flex flex-col items-center justify-center my-10  ">
        <p className="font-[ClashDisplay-Bold] text-[20px] text-white">Timeline</p>
        <p className="w-4/5 font-[montserrat] text-center text-[14px] text-white">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      {TimeLineSmallData.map((item, index) => (
        <div key={index} className="w-[90%] h-fit">
          <BarByText
            title={item.title}
            count={index + 1}
            subTitle={item.subtitle}
            text={item.text}
          />
        </div>
      ))}
      <div className="w-[14px] h-[16px] absolute top-32 left-20">
        <img src={statrPu} alt="img" />
      </div>
      <div className="w-[14px] h-[16px] absolute top-[53%] left-64">
        <img src={brightStar} alt="img" />
      </div>
      <div className="w-[14px] h-[16px] absolute bottom-7 left-5">
        <img src={dimStar} alt="img" />
      </div>
    </div>
  );
}

export default TimeLineSm;
