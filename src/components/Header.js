import React from "react";

function Header(props) {
  return (
    <div className="w-full flex flex-col items-center lg:items-start">
      <p className="z-10 text-white font-[ClashDisplay-Bold] text-xl lg:text-[32px] leading-normal">
        {props.text1}
      </p>
      {
        props.text2 && (
          <p className="text-[#D434FE] z-10 font-[ClashDisplay-Bold] text-xl lg:text-[32px]">
        {props.text2}
      </p>
        )
      }
    </div>
  );
}

export default Header;
