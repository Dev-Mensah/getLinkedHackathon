import React from "react";
import { TextCenter, TextLeft, TextRight } from "../../components/TextAlign";
import {
  TimelineCount,
  timeLineArray1,
  timeLineArray2,
} from "../../utils/textData";
import dimStar from "../../assets/dimStar.png";
import brightStar from "../../assets/Brightstar.png";
import statrPu from "../../assets/star-pu.png";

function TimeLineLg() {
  return (
    <div id="Timeline" className="pt-5 pb-10 relative">
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-24 ">
        <p className="font-[ClashDisplay-Bold] text-[32px] text-white">Timeline</p>
        <p className="w-1/4 font-[montserrat] text-center text-[14px] text-white">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="w-full flex">
        <div className="w-[45%] mt-7 flex flex-col items-end gap-2">
          {timeLineArray1.map((item, index) => (
            <div key={index} className=" w-5/6 h-24 max-h-max flex flex-col justify-center ">
              <TextRight title={item.title} text={item?.text} />
            </div>
          ))}
        </div>
        <div className="w-[10%] flex flex-col items-center ">
          {TimelineCount.map((item, index) => (
            <div
              key={index}
              className="w-44 h-[88px] mt-3 flex justify-center items-center"
            >
              <TextCenter text={item.count} />
            </div>
          ))}
        </div>
        <div className="w-[45%] mt-7 flex flex-col items-start gap-2 ">
          {timeLineArray2.map((item, index) => (
            <div key={index} className=" w-5/6 h-24 max-h-max flex flex-col justify-center ">
              <TextLeft title={item.title} text={item?.text} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute lg:w-[30px] lg:h-[36px] lg:right-[200px] lg:top-[50%]">
        <img src={brightStar} alt="img" />
      </div>
      <div className="absolute lg:w-[30px] lg:h-[36px] lg:bottom-14  lg:left-52 ">
        <img src={dimStar} alt="img" />
      </div>
      <div className="absolute lg:w-[30px] lg:h-[36px] lg:left-[27%] lg:top-[200px]">
        <img src={statrPu} alt="img" />
      </div>
    </div>
  );
}

export default TimeLineLg;
