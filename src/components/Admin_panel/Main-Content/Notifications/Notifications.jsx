import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import Pagination from "../../Pagination/Pagination";
import { MdDelete } from "react-icons/md";

const Notifications = () => {
  
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"membership",
      action: <RiDeleteBinLine /> ,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      message: "Our area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"All User",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"membership",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      message: "Area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"All User",
      action: <HiOutlineDotsVertical />,
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  const totalPages = Math.ceil(contactData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]); 
    } else {
      setSelectedItems(contactData.map((_, index) => index)); 
    }
    setSelectAll(!selectAll);
  };


  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div >
      

   
      <div className="py-4 bg-white rounded-xl lightdropshadowbox">
        <div className="flex px-4 space-x-4 mb-4 items-center">
          <div className="flex space-x-3 items-center ">
            <h2 className="font-bold text-lg">Notifications</h2>
            <span className="bg-purple-200 px-2  text-xs rounded-full">
              {contactData.length} Users
            </span>
          </div>

      
          <div className="flex justify-end flex-1  items-center space-x-4 ">
            <div className="relative w-[55%]">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>
            {selectedItems.length>=2 &&  <MdDelete size={26} />}
            <div className="flex max-lg:flex-col gap-2">
              <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                Download all
              </button>
              <button className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md">
                <LuUploadCloud size={18} className="" />
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>

    
        <div>
        <div className="overflow-x-scroll">
          <table className="  min-w-[1232px]  w-full ">
            <thead className="border-b bg-gray-200 border-gray-200 h-16  ">
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
            <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Heading
                </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Date & Time
                </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Content
                </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  User Type
                </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((contact, index) => (
                <tr key={index} className="border-b h-16 hover:bg-gray-50">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                  <td className="py-3 px-4 font-medium">{contact.name}</td>
                  <td className="py-3 px-4 text-gray-500 ">{contact.date}</td>
                  <td className="py-3 px-4 text-gray-500">{contact.message}</td>
                  <td className="py-3 px-4 text-gray-500">
                    <span className={` font-medium  ${contact.user_type == "membership" ?"text-purple-800 bg-purple-100" :"text-green-800 bg-green-100"} px-3 py-1 rounded-full`}>
                      {contact.user_type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">
                    <button className="text-gray-500 flex gap-x-5 hover:text-gray-700">
                    <RiDeleteBinLine  />  <FiEdit2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

  
          
        </div>
         {/* Pagination */}
         <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
