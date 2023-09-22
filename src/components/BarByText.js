import React from "react";

function BarByText(props) {
  return (
    <div className="h-fit flex  py-5">
      <div className="w-[14%] h-full ">
        <div className="h-full w-full flex flex-col justify-center pt-2 gap-[6px] items-center">
          <div className="w-[2px] h-[70px] verticalLinear"></div>
          <div className="w-fit h-fit flex justify-center">
            <span className="max-w-fit max-h-fit min-w-[30px] min-h-[30px] font-[montserrat] font-bold text-[18px] roundedFilter text-white flex justify-center items-center bg-gradient-to-r  from-[#D434FE] to-[#903AFF]">
              {props.count}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[78%] h-fit">
        <p className="w-5/6 h-8  font-[montserrat] flex items-start  text-[12px] text-[#D434FE] text-lg font-bold ">{props.title}</p>
        <p className="w-full h-[54px] text-[12px] text-white font-[montserrat] text-left">{props.text}</p>
        <p className=" w-5/6 h-8 font-[montserrat]  flex items-end text-lg font-bold text-[#D434FE] text-[12px]">{props.subTitle}</p>
      </div>
    </div>
  );
}

export default BarByText;
