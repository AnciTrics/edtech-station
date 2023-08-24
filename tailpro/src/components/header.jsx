import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [hamMenu,setHamMenu] = useState('');
    const [cancel , setCancel] = useState('hidden')
    const [menu, setMenu] = useState('hidden');
    const toggleFunc = ()=>{
        if(hamMenu === 'hidden'){
            setHamMenu('');
            setCancel('hidden')
            setMenu('hidden top-[-100%]')
        }else{
            setHamMenu('hidden');
            setCancel("");
            setMenu("");
        }
    }
  return (
    <div className="bg-[#bf4646] py-[40px] text-[white]">
      <div className="max-w-[1240px] flex align-middle justify-between  mx-auto ">
        <div className="ml-10 text-2xl font-bold">
          <img
            style={{ height: "70px"}}
            src="https://assets.website-files.com/6113da5a5cd7a275d8ae5133/626f9767113e1b03505c18f6_Primary%20lockup%40web.svg"
            alt=""
          />
        </div>
        <ul className="hidden md:flex gap-3 mr-3">
          <li className="mx-2">Home</li>
          <li className="mx-2">Company</li>
          <li className="mx-2">Resources</li>
          <li className="mx-2">Contact</li>
        </ul>
        <RxHamburgerMenu
          onClick={() => {
            toggleFunc();
          }}
          className={`mr-[52px] ${hamMenu} md:hidden text-2xl`}
        />
        <AiOutlineClose
          onClick={() => {
            toggleFunc();
          }}
          className={`mr-[52px] ${cancel} md:hidden text-2xl`}
        />
        <ul
          className={`${menu} duration-500  absolute font-bold right-0 top-[112px] text-center bg-slate-700 text-[white] md:hidden flex  flex-col justify-start gap-12 pt-20 w-[100%] h-screen pr-0 py-3`}
        >
          <li className="mx-2">Home</li>
          <li className="mx-2">Company</li>
          <li className="mx-2">Resources</li>
          <li className="mx-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header
