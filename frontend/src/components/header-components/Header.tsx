import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
 
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
 
import { Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="lg:h-[5rem] w-screen border border-black xsm:min-w-[24rem] xsm:max-w-auto xsm:px-4 md:px-10 lg:px-32  ">
        <nav className="flex flex-row justify-between h-full items-center py-2">
          <h2 className="text-lg font-bold">eMart</h2>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden block">
            <span onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <TiThMenu />
            </span>
          </div>

          {/* Menu Items */}
          <ul
            className={`flex-col lg:flex-row lg:flex items-center gap-4 absolute lg:static bg-white  lg:bg-transparent left-0 top-full w-full lg:w-auto px-4 lg:px-0 transition-all duration-300 z-50 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <li className="mx-2 font-[400] hover:cursor-pointer">Home</li>
            <li className="mx-2 font-[400] hover:cursor-pointer">Shop</li>
            <li className="mx-2 font-[400] hover:cursor-pointer">About</li>
            <li className="mx-2 font-[400] hover:cursor-pointer">Contact</li>
            <li className="mx-2 font-[400] hover:cursor-pointer">Support</li>
          </ul>

          {/* Right Section */}
          <div className="hidden h-full lg:flex   items-center gap-8">
            {/* Search */}
            <div className="flex border rounded-md  ">
              <input
                type="text"
                placeholder="search item"
                className="px-2 py-1 outline-none"
              />
              <button className="px-2 text-[1.3rem] ">
                <IoMdSearch />
              </button>
            </div>

            <span className="text-[1.3rem] relative after:content-['01'] after:text-[13px] after:text-white after:rounded-full after:p-[4px]  after:text-center after:items-center after:content-center after:absolute after:bottom-[10%] after:left-full h-2 w-2 after:bg-red-500 cursor-pointer">
              <IoIosHeartEmpty />
            </span>

            <span className="text-[1.3rem] relative after:content-['01'] after:text-[13px] after:text-white after:rounded-full after:p-[4px]  after:text-center after:items-center after:content-center after:absolute after:bottom-[10%] after:left-full h-2 w-2 after:bg-red-500 cursor-pointer">
              <FaCartShopping />
            </span>

            {true ? (
              <div className="group cursor-pointer relative flex flex-col items-center justify-center  ">
                <span className="text-[1.8rem]">
                  <FaRegUserCircle />
                </span>

                <div className="hidden group-hover:block border absolute z-[1] min-h-[10rem] max-h-auto top-full w-[8rem] bg-white  ">
       
        
                  <ul className="flex flex-col w-full text-center gap-y-1">
                    
                    <li className="text-[1.2rem] hover:text-blue-500 cursor-pointer">
                      My Profile
                    </li>
                    
                    <li className="text-[1.2rem] hover:text-blue-500 cursor-pointer">
                      My Wishlist
                    </li>

                    <li className="text-[1.2rem] hover:text-blue-500 cursor-pointer">
                      LogOut
                    </li>

                  </ul>
                
                </div>
              </div>
            ) : (
              <div className="w-[5rem] h-full bg-red-500 text-center items-center font-[700] p-2 rounded-md">
                <p className="text-sm">Sign In</p>
              </div>
            )}
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
