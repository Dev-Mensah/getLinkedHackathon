import React from "react";

function PlainText(props) {
  return (
    <div className="w-full mt-3">
      <p className="text-center lg:text-left font-[Montserrat] text-sm text-white leading-normal">
        {props.text}
      </p>
    </div>
  );
}

export default PlainText;
