import React from "react";
import bigIdea from "../../assets/The-big-idea.png";
import statrPu from "../../assets/star-pu.png";
import sataGra from "../../assets/sata-gra.png";
import arrowVector from "../../assets/arrow.png";
import Header from "../../components/Header";
import PlainText from "../../components/PlainText";

function About() {
  return (
    <div className="w-full py-5 h-fit lg:p-10 flex-col flex lg:flex lg:flex-row border-b border-gray-500 relative">
      <div className="mb-10  flex items-center justify-center relative lg:justify-end lg:w-1/2 lg:mb-0 ">
        <div className="w-4/5">
          <div className="w-fit h-fit">
            <img src={bigIdea} alt="img" className="object-contain" />
          </div>
        </div>
        <div className="w-[20px] h-[23px]  absolute left-[185px] bottom-[-20px] lg:w-[49px] lg:h-[57px] lg:bottom-[-20px] lg:left-auto lg:right-[-20px]">
          <img src={arrowVector} alt="img" className="object-center" />
        </div>
        <div className=" w-[11px] h-[13px] absolute top-24 left-[30px] lg:w-[21px] lg:h-[25px] lg:top-44 lg:left-12">
          <img src={sataGra} alt="img" className="object-center" />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col  justify-center items-center lg:pl-20 relative ">
        <div className="w-4/5 ">
          <Header
            text1="Introduction to getlinked"
            text2="tech Hackathon 1.0"
          />
        </div>
        <div className="w-[8px] h-[10px] absolute right-[44px] top-6 lg:w-[30px] lg:h-[36px] lg:top-40 lg:right-0">
          <img src={statrPu} alt="img" className="object-center" />
        </div>
        <div className="w-4/5 flex items-center justify-center">
          <PlainText
            text="Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
