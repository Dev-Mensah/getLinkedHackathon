import React from "react";

export function TextRight(props) {
  return (
    <div className="flex flex-col items-end">
      <p className="w-full text-[#D434FE] text-[22px] text-right font-[montserrat] font-semibold">
        {props.title}
      </p>
      {props.text && (
        <p className="w-4/5 text-right text-[14px] font-[montserrat] text-white">
          {props.text}
        </p>
      )}
    </div>
  );
}

export function TextLeft(props) {
  return (
    <div className="flex flex-col items-start">
      <p className="w-full text-[#D434FE] text-[22px] text-left font-[montserrat] font-bold">
        {props.title}
      </p>
      {props.text && (
        <p className="w-4/5 text-left text-[14px] font-[montserrat] text-white">
          {props.text}
        </p>
      )}
    </div>
  );
}

export function TextCenter(props) {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-[6px] items-center">
      <div className="w-[2px] h-[60px] verticalLinear"></div>
      <div className="w-fit h-fit flex justify-center">
        <span className="max-w-fit max-h-fit min-w-[30px] min-h-[30px] font-[montserrat] font-bold text-[18px] roundedFilter text-white flex justify-center items-center bg-gradient-to-r  from-[#D434FE] to-[#903AFF]">
          {props.text}
        </span>
      </div>
    </div>
  );
}
