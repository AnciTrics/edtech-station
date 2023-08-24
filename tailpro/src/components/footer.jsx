import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#bf4646] p-6  ">
      <div className=" max-w-[1240px] m-auto flex flex-col items-center md:flex-row gap-6">
        <div className="">
          <div className="w-[300px] md:w-[500px] md:text-left text-center">
            <img
              className="m-auto md:m-0"
              style={{ height: "70px"}} 
              src="https://assets.website-files.com/6113da5a5cd7a275d8ae5133/626f9767113e1b03505c18f6_Primary%20lockup%40web.svg"
              alt=""
            />
            <p className="md:w-[450px] text-[white]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              nemo nisi. A molestiae, repellendus, cumque quam rem magnam harum
              hic iure voluptate suscipit veritatis vero placeat commodi veniam
              voluptates ullam?
            </p>
          </div>
          <div
            id="social-hands"
            className=" text-white w-[300px] flex text-3xl justify-between py-8"
          >
            <AiOutlineInstagram />
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiFillGithub />
          </div>
        </div>
        <div className="mt-7 flex flex-col md:flex-row text-center md:text-left items-center md:items-start gap-9 md:gap-[200px]">
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-xl font-semibold text-[#ffd300]">Solution</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-xl font-semibold text-[#ffd300]">Support</h3>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Status</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-xl font-semibold text-[#ffd300]">Company</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Career</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
