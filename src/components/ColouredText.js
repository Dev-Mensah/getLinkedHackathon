import React from "react";

function ColouredText(props) {
  return (
      <p className="w-full text-white text-center text-sm lg:text-left font-[montserrat]">
        <span className="text-[#FE34B9] font-bold">{props.title}:&nbsp;</span>
        {props.text}
      </p>
  );
}

export default ColouredText;
