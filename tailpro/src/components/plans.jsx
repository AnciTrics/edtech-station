import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import {SiGooglemarketingplatform} from 'react-icons/si'
import {PiUsersThreeFill} from 'react-icons/pi'
const Plans = () => {
  return (
    <div className="p-[100px] bg-white">
      <div className="flex md:flex-row flex-col items-center md:justify-center gap-[50px] md:gap-6">
        <div
          id="card1"
          className="duration-300 hover:scale-[1.1] hover:z-10 h-[370px] w-[300px] bg-white drop-shadow-xl relative flex flex-col items-center justify-center gap-3"
        >
          <AiOutlineUserAdd className="absolute top-[-25px] text-[60px]" />
          <div className="flex flex-col items-center gap-2">
            <h1
              style={{ letterSpacing: "1.1px" }}
              className="text-[20px] font-bold"
            >
              Web development
            </h1>
            <h2
              style={{ letterSpacing: "1.1px" }}
              className="text-[28px] font-bold"
            >
              $149
            </h2>
          </div>
          <div
            style={{ letterSpacing: "0.2px", wordSpacing: "1px" }}
            className="w-[230px] text-center  flex flex-col gap-2 text-[10px] font-semi-bold mb-3"
          >
            <p>Lorem ipsum is simply</p>
            <hr />
            <p>Lorem ipsum is simply dummy text of the printing</p>
            <hr />
            <p>Lorem ipsum is simply dummy</p>
            <hr />
          </div>
          <button className="duration-300 w-[150px] h-[40px] rounded-lg bg-black text-[white] hover:bg-white hover:text-black shadow-xl">
            Start Trial
          </button>
        </div>
        <div
          id="card2"
          className="duration-300 hover:scale-[1.1] hover:z-10 md:h-[400px] md:w-[330px] h-[370px] w-[300px] bg-[#ffd300] drop-shadow-xl relative flex flex-col items-center justify-center gap-3"
        >
          <SiGooglemarketingplatform className="bg-white rounded-3xl absolute top-[-25px] text-[60px]" />
          <div className="flex flex-col items-center gap-2">
            <h1
              style={{ letterSpacing: "1.1px" }}
              className="text-[20px] font-bold"
            >
              Digital Marketing
            </h1>
            <h2
              style={{ letterSpacing: "1.1px" }}
              className="text-[28px] font-bold"
            >
              $149
            </h2>
          </div>
          <div
            style={{ letterSpacing: "0.2px", wordSpacing: "1px" }}
            className="w-[230px] text-center  flex flex-col gap-2 text-[10px] font-semi-bold mb-3"
          >
            <p>Lorem ipsum is simply</p>
            <hr className="" />
            <p>Lorem ipsum is simply dummy text of the printing</p>
            <hr />
            <p>Lorem ipsum is simply dummy</p>
            <hr />
          </div>
          <button className="duration-300 w-[150px] h-[40px] rounded-lg bg-white text-[black] drop-shadow-lg hover:bg-black hover:text-white">
            Start Trial
          </button>
        </div>
        <div
          id="card3"
          className="duration-300 hover:scale-[1.1] hover:z-10 h-[370px] w-[300px] bg-white drop-shadow-xl relative flex flex-col items-center justify-center gap-3"
        >
          <PiUsersThreeFill className="absolute top-[-25px] text-[60px]" />
          <div className="flex flex-col items-center gap-2">
            <h1
              style={{ letterSpacing: "1.1px" }}
              className="text-[20px] font-bold"
            >
              Designing
            </h1>
            <h2
              style={{ letterSpacing: "1.1px" }}
              className="text-[28px] font-bold"
            >
              $149
            </h2>
          </div>
          <div
            style={{ letterSpacing: "0.2px", wordSpacing: "1px" }}
            className="w-[230px] text-center  flex flex-col gap-2 text-[10px] font-semi-bold mb-3"
          >
            <p>Lorem ipsum is simply</p>
            <hr />
            <p>Lorem ipsum is simply dummy text of the printing</p>
            <hr />
            <p>Lorem ipsum is simply dummy</p>
            <hr />
          </div>
          <button className="duration-300 w-[150px] h-[40px] rounded-lg bg-black text-[white] hover:bg-white hover:text-black shadow-xl">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
