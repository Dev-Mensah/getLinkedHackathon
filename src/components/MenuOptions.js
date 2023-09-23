import React, { useState } from "react";
import closeBtn from "../assets/closeBtn.png"

function MenuOptions({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="fixed flex items-start justify-end p-2 w-screen h-screen top-0 left-0 modal-overlay">
        <div className="w-64 h-[400px] py-7 px-5 rounded-md bg-[#150E28] relative">
          <div className="flex justify-end  ">
            <div className="w-7 h-7" onClick={onClose}>
              <img src={closeBtn} alt="img" className="object-contain" />
            </div>
          </div>
          <div className="w-full mt-10 h-fit flex flex-col gap-5  ">
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default MenuOptions;
