import React, { useRef, useState } from "react";
import { FiPieChart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { TbArrowsTransferUp } from "react-icons/tb";
function Sidebar(props) {
  const [color, setcolor] = useState({ m: true, u: false, t: false, T: false })
  const changeColor = (data) => {
    setcolor(data);
    props.setit(data)
  }
  return (
    <div className=" h-full flex flex-col justify-between items-centershadow-inner  rounded-tr-3xl rounded-br-3xl shadow-2xl">
      <div className="py-4 space-y-5 flex flex-col justify-around items-center">
        <img src="/images/logo.png" className="w-10 h-10" alt="" />
        <button id='member' onClick={() => { changeColor({ m: true, u: false, t: false, T: false }); }} ><FiPieChart className={`w-8 h-8 bg-white ${color.m ? 'text-red-600' : 'text-purple-600'} `} /></button>
        <button id='user' onClick={(e) => { changeColor({ m: false, u: true, t: false, T: false }); }}>
          <IoPersonOutline className={`w-8 h-8 bg-white ${color.u ? 'text-red-600' : 'text-purple-600'}`} />
        </button>
        <button id="trans" onClick={() => { changeColor({ m: false, u: false, t: true, T: false }); }}>
          <AiOutlineDollar className={`w-8 h-8 bg-white ${color.t ? 'text-red-600' : 'text-purple-600'} `} />
        </button>
        <button id="Trans" onClick={() => { changeColor({ m: false, u: false, t: false, T: true }); }}>
          <TbArrowsTransferUp className={`w-8 h-8 bg-white ${color.T ? 'text-red-600' : 'text-purple-600'} `} />
        </button>
      </div>
      <IoSettingsOutline className="w-8 h-8 bg-white text-purple-600 mb-4 mx-auto " />
    </div>
  );
};

export default Sidebar;
