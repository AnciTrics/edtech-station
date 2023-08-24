import React from 'react'
import Typed from "react-typed";
const Main1 = () => {
  return (
    <div className="bg-[#bf4646] w-full py-[100px]">
      <div className="max-w-[1240px] flex flex-col gap-4 mx-auto text-center font-bold my-[40px] text-[white]">
        <h1 className="text-2xl md:text-4xl transition-all duration-300 mb-2">
          learn with us
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold transition-all duration-300">
          Grow with us.
        </h1>
        <h3 className="text-1xl md:text-3xl transition-all duration-300">
          learn{" "}
          <Typed strings={["Marketing" ,'Web Development','Designing']} typeSpeed={90} loop={true} backSpeed={60}/>
        </h3>
        <button className='mt-5 bg-black w-[100px] m-auto px-0 py-2 text-[13px] rounded-xl'>Get Started</button>
      </div>
    </div>
  );
}

export default Main1
