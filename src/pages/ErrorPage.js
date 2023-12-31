import manInChair from "../assets/manInChairImage.png";
import emoji from "../assets/emoji.png";
import { Link } from "react-router-dom";

function errorPage() {
  return (
    // isRegistered && (
    <div className="fixed flex items-center justify-center w-screen h-screen top-0 left-0 modal-overlay">
      <div className="w-fit flex pt-5 pb-9 flex-col items-center justify-start border border-[#D434FE] rounded-md bg-[#150e287d]  mt-5 z-50">
        <div className="w-80 h-80">
          <img src={manInChair} alt="img" className="object-center" />
        </div>
        <div className="w-full flex justify-center ">
          <p className="font-[montserrat] text-center text-[24px] text-white">
            Ooops! Page Under Construction
          </p>
        </div>
        {/* <div className="w-3/6 my-3 flex items-center justify-center bg-[#150e28] relative">
          <p className=" flex  bg-[#150e28] font-[montserrat] font-semibold text-center text-[14px] text-white">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <div className="">
            <img src={emoji} alt="img" className="object-contain" />
          </div>
        </div> */}
        <div className="w-96 mt-3 flex justify-center">
          <Link to="/">
            <button className="w-[100%] text-center text-base font-[montserrat] text-white bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] py-2 px-7 rounded-sm">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
    // )
  );
}

export default errorPage;
