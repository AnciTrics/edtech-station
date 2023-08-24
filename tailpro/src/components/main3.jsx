import React from "react";

const Main3 = () => {
  return (
    <div className="bg-[#bf4646] p-4 py-[70px] pb-[140px]">
      <div className="max-w-[1240px] flex flex-col md:flex-row m-auto md:justify-between items-center justify-between">
        <div className="duration-300 md:mb-0 mb-[70px]">
          <h2 className="duration-300 text-2xl md:text-4xl font-bold text-white mb-3">Want to learn latest I.T skills?</h2>
          <h3 className="text-white text-[10px]]">Sign up to our newsletter and stay up to date.</h3>
        </div>
        <div className="">
          <div className="flex gap-3 mb-6">
            <input className="w-[200px] px-3 py-2 rounded-lg" type="email" name="" id="" placeholder="Enter Email" />
            <button className="w-[130px] bg-black text-white rounded-lg">Notify Me</button>
          </div>
          <div className="text-white">
            <p>We care about the problems of your data Read out</p>
            <p className="text-black">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
