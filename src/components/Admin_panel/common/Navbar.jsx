import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import '../../../index.css'
const Navbar = () => {
  const [ham, setham] = useState(true);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const sethamfunc = () => {
    setham(!ham);
  };
  const signupfunc = () => {
    navigate("/signup");
  };

  return (
    <>
      <nav className="absolute z-10 w-full bg-white opacity-100 flex  flex-row justify-between items-center">
        <Link to="/">
          <div
            className=" adeiou flex  flex-row justify-center items-center"
            id="brand"
          >
            <img src="./images/logo.png" className="max-sm:h-[50px]   pl-2" alt="logo" />
          </div>
        </Link>

        <div className="  max-lg:hidden lg:flex  lg:flex-row  gap-2 ">
          <div className=" adeiou flex flex-row justify-between items-center">
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600  ${pathname === "/" && "text-purple-600 border-purple-600 border-b"
                } `}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${pathname === "/event" &&
                "text-purple-600 border-purple-600 border-b"
                } `}
              to="/event"
            >
              AIDEOA Events
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${pathname === "/mutualtransfer" &&
                "text-purple-600 border-purple-600 border-b"
                } `}
              to="/mutualtransfer"
            >
              Mutual Transfer
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${pathname === "/education" &&
                "text-purple-600 border-purple-600 border-b"
                } `}
              to="/education"
            >
              Education cell
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${pathname === "/about" &&
                "text-purple-600 border-purple-600 border-b"
                } `}
              to="/about"
            >
              About us
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${pathname === "/contact" &&
                "text-purple-600 border-purple-600 border-b"
                } `}
              to="/contact"
            >
              Contact us
            </NavLink>
          </div>
          <div className=" wo py-3 px-4">
            <button
              onClick={signupfunc}
              className="btn hover:text-white hover:bg-purple-600 text-center rounded-2xl font-medium duration-200  p-3 rounded-[25px] px-6 text-purple-600 border border-purple-600"
            >
              Sign up
            </button>
          </div>
        </div>
        <div id="hamicon  " onClick={sethamfunc} className="sm:block lg:hidden">
          <RxHamburgerMenu className="w-[44px] cursor-pointer mx-3 h-[44px]" />
        </div>
        <div
          className={`fixed bg-white flex flex-col lg:hidden  inset-0 ${ham ? "hidden" : "block"
            } `}
        >
          <div className="flex flex-row border-b border-gray-300 justify-between items-center ">
            <div
              className="flex flex-row justify-center items-center"
              id="brand"
            >
              <img src="./images/logo.png" className="pl-2 h-[50px] " alt="logo" />
            </div>
            <div onClick={sethamfunc} id="hamicon lg:block ">
              {ham ? (
                <RxHamburgerMenu className="w-[44px] mx-3 h-[44px]" />
              ) : (
                <IoMdClose className="w-[44px] cursor-pointer mx-3 h-[44px]" />
              )}
            </div>
          </div>
          {!ham ? (
            <div className="flex flex-col-reverse max-lg:flex-col gap-2 ">
              <div className="flex flex-col">
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/"
                  onClick={sethamfunc}
                >
                  Home
                </NavLink>
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/event"
                  onClick={sethamfunc}
                >
                  AIDEOA Events
                </NavLink>
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/mutualtransfer"
                  onClick={sethamfunc}
                >
                  Mutual Transfer
                </NavLink>
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/education"
                  onClick={sethamfunc}
                >
                  Education cell
                </NavLink>
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/about"
                  onClick={sethamfunc}
                >
                  About us
                </NavLink>
                <NavLink
                  className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                  to="/contact"
                  onClick={sethamfunc}
                >
                  Contact us
                </NavLink>
              </div>
              <div className=" px-5">
                <button
                  onClick={() => {
                    signupfunc();
                    sethamfunc();
                  }}
                  className="btn hover:text-white hover:bg-purple-600 text-center rounded-2xl font-medium duration-200  p-3 rounded-[25px] px-6 text-purple-600 border border-purple-600"
                >
                  Sign up
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;