import React from "react";
import ContactForm from "../components/ContactForm";
import socialsImage from "../assets/Social-media.png";
import statrPu from "../assets/star-pu.png";
import sataGra from "../assets/sata-gra.png";
import dimStar from "../assets/dimStar.png";
import brightStar from "../assets/Brightstar.png";
import purpleFlare1 from "../assets/rules_guide_purple_flare.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/back_btn.png";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="bg-[#150E28] relative overflow-hidden">
      <div className="hidden lg:block w-full">
        <Navbar />
      </div>
      <Link to="/" className="z-50">
        <div className="lg:hidden absolute top-10 left-10 z-50">
          <img src={backBtn} alt="img" />
        </div>
      </Link>
      <div className="flex py-14 lg:py-20 relative">
        <div className="hidden lg:flex w-1/2  py-10 flex-col items-center ">
          <div className="w-3/6 z-50">
            <p className="font-[ClashDisplay-SemiBold] text-[32px] text-[#D434FE]">
              Get in touch
            </p>
          </div>
          <div className="w-3/6 my-4 z-50">
            <p className="w-1/4 font-[montserrat] text-[16px] text-white">
              Contact Information
            </p>
          </div>
          <div className="w-3/6 my-2 z-50">
            <p className="w-2/5 font-[montserrat] text-[16px] text-white">
              27, Alara Street Yaba 100012 Lagos State
            </p>
          </div>
          <div className="w-3/6 my-2 z-50">
            <p className="w-4/5 font-[montserrat] text-[16px] text-white">
              Call Us : 07067981819
            </p>
          </div>
          <div className="w-3/6 my-2 z-50">
            <p className="w-5/6 font-[montserrat] text-[16px] text-white">
              we are open from Monday-Friday 08:00am - 05:00pm
            </p>
          </div>
          <div className="w-3/6 my-4 z-50">
            <p className="w-5/6 font-[montserrat] text-[16px] text-[#D434FE]">
              Share on
            </p>
          </div>
          <div className="w-3/6 ">
            <div className="">
              <img src={socialsImage} alt="img" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-[80%] h-fit py-10 flex flex-col justify-center items-center gap-8  rounded-md lg:bg-[#1C152E] ">
            <div className="w-full flex flex-col items-center ">
              <div className="w-5/6 ">
                <p className="font-[ClashDisplay-SemiBold] text-[20px] text-[#D434FE]">
                  Questions or need assistance?
                </p>
                <p className="font-[ClashDisplay-SemiBold] text-[20px] text-[#D434FE]">
                  Let us know about it!
                </p>
              </div>
              <div className="mt-4 lg:hidden">
                <p className=" text-white font-[montserrat] text-[12px]">
                  Email us below to any question related to our event
                </p>
              </div>
            </div>
            <div className="w-full z-50">
              <ContactForm />
            </div>
            <div className="w-3/6 flex flex-col items-center lg:hidden ">
              <div className="w-full flex justify-center py-1">
                <p className="w-fit text center font-[montserrat] text-[16px] text-[#D434FE]">
                  Share on
                </p>
              </div>
              <div className="">
                <img src={socialsImage} alt="img" className="object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[11px] h-[13px] absolute top-14 left-[50%] lg:w-[21px] lg:h-[25px] lg:top-12 lg:left-48">
          <img src={sataGra} alt="img" className="object-contain" />
        </div>
        <div className="w-[12px] h-[14px] absolute bottom-52 left-12 lg:w-[30px] lg:h-[36px] lg:bottom-44 lg:left-[49%]">
          <img src={statrPu} alt="img" className="object-contain" />
        </div>
        <div className="w-[16px] h-[20px] absolute top-40 right-10 lg:w-[26px] lg:h-[32px] lg:top-7 lg:right-[14%]">
          <img src={dimStar} alt="img" className="object-contain" />
        </div>
        <div className="w-[12px] h-[14px] absolute bottom-72 right-10 lg:w-[26px] lg:h-[32px] lg:bottom-24 lg:right-[4%] z-10">
          <img src={brightStar} alt="img" className="object-contain" />
        </div>
        <div className="w-96  rounded-[50%] absolute top-14 left-[-80px] lg:w-[650px] lg:h-[650px] lg:top-[-64px] lg:left-[-100px] ">
          <img
            src={purpleFlare1}
            alt="img"
            className="object-contain opacity-50"
          />
        </div>
        <div className="hidden lg:block w-72 lg:w-[750px] lg:h-[750px] rounded-[50%] absolute bottom-[-274px] right-[-280px] ">
          <img
            src={purpleFlare1}
            alt="img"
            className="object-contain opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
