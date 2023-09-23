import React from "react";
import Header from "../../components/Header";
import Question from "../../components/Question";
import { questionaires } from "../../utils/textData";
import statrPu from "../../assets/star-pu.png";
import dimStar from "../../assets/dimStar.png";
import brightStar from "../../assets/Brightstar.png";
import casualMan from "../../assets/cwok_casual_21 1.png";
import sataGra from "../../assets/sata-gra.png";
import markLight from "../../assets/mark_light.png";
import markDeep from "../../assets/mark_deep.png";

function FAQs() {
  return (
    <div id="FAQs" className="flex py-12 lg:pt-32 lg:pb-14 flex-wrap justify-center border-b border-gray-500 items-center relative ">
      <div className="w-full lg:w-1/2 flex flex-col items-center  ">
        <div className="w-4/5">
          <Header text1="Frequently Ask" text2="Question" />
        </div>
        <div className="w-4/5 mt-5 flex justify-center lg:justify-start">
          <div className="w-2/3">
            <p className="text-white text-center lg:text-start font-[montserrat]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
        </div>
        <div className="w-4/5 mt-10 flex flex-col items-center lg:items-start lg:justify-start">
          {questionaires.map((item, index) => (
            <div key={index} className="w-[90%] lg:w-[70%]">
              <Question key={index} text={item.text} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[18px] h-[22px] absolute top-6 left-16 lg:w-[30px] lg:h-[36px] lg:top-[120px] lg:left-8">
        <img src={statrPu} alt="img" />
      </div>
      <div className="w-2.5 h-3 absolute bottom-7 right-36 lg:w-[26px] lg:h-[32px] lg:bottom-[5%] lg:right-[240px]">
        <img src={brightStar} alt="img" />
      </div>
      <div className="w-[10px] h-[12px] absolute bottom-[200px] left-[12%] lg:w-[26px] lg:h-[32px] lg:top-[57%] lg:left-[38%]">
        <img src={dimStar} alt="img" />
      </div>
      <div className="w-[7px] h-[9px] absolute bottom-[250px] left-[25%] lg:w-[21px] lg:h-[25px] lg:top-[34%] lg:right-[40%] lg:left-auto">
        <img src={sataGra} alt="img" />
      </div>
      <div className="w-[10px] h-[10px] absolute bottom-[360px] right-[49%]  lg:w-[21px] lg:h-[25px] lg:top-[15%] lg:right-[30%]">
        <img src={sataGra} alt="img" />
      </div>
      <div className="w-[50px] h-[32px] absolute bottom-[350px] right-[75%]  lg:w-[100px] lg:h-[61px] lg:top-[16%] lg:right-[40%]">
        <img src={markLight} alt="img" />
      </div>
      <div className="w-[50px] h-[31px] absolute bottom-[400px] right-[55%]  lg:w-[100px] lg:h-[61px] lg:top-[6%] lg:right-[30%]">
        <img src={markDeep} alt="img" />
      </div>
      <div className="w-[50px] h-[32px] absolute bottom-[370px] right-[33%]  lg:w-[100px] lg:h-[61px] lg:top-[14%] lg:right-[20%]">
        <img src={markLight} alt="img" />
      </div>

      <div className="w-full lg:w-1/2 lg:justify-start flex items-center justify-center">
        <div className="w-4/5 lg:pt-0 pt-32 ">
          <div className="w-fit h-fit">
            <img src={casualMan} alt="img" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
