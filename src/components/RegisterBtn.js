import React from "react";
import { Link } from "react-router-dom";

function RegisterBtn(props) {
  return (
    <div className="w-full">
      <Link to={props?.link} type={props?.type} className="w-full text-center text-base font-[montserrat] text-white bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] py-2 px-7 rounded-sm">
        {props.text}
      </Link>
    </div>
  );
}

export default RegisterBtn;
