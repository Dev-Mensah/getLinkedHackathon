import React from "react";

function RegisterBtn(props) {
  return (
    <div>
      <button className="text-base font-[montserrat] text-white bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] py-1 px-7 rounded-sm">
        {props.text}
      </button>
    </div>
  );
}

export default RegisterBtn;
