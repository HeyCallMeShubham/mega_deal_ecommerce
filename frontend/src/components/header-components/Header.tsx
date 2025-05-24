import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
const Header = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  

  return (
    <>
      <header className="lg:h-[5rem] w-screen border border-y-black xsm:min-w-[24rem] xsm:max-w-auto xsm:px-4 md:px-10 lg:px-32  ">
        <nav className="flex flex-row justify-between h-full items-center py-2">
          <h2 className="text-lg font-bold">eMart</h2>

          {/* Hamburger Menu Icon */}
          <div className={`lg:hidden ${menuOpen ? "hidden" : "block"} `}>
            <span onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              <TiThMenu />
            </span>
          </div>

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
            <Link to="/mywishlist">
              <span className="text-[1.3rem] hover:text-[1.4rem] relative after:content-['01'] after:text-[13px] after:text-white after:rounded-full after:p-[4px]  after:text-center after:items-center after:content-center after:absolute after:bottom-[40%] after:left-[70%] h-2 w-2 after:bg-primaryBg cursor-pointer">
                <IoIosHeartEmpty />
              </span>
            </Link>

            <Link to="/cart">
              <span className="text-[1.3rem] hover:text-[1.4rem] relative after:content-['01'] after:text-[13px] after:text-white after:rounded-full after:p-[4px]  after:text-center after:items-center after:content-center after:absolute after:bottom-[40%] after:left-[70%] h-2 w-2 after:bg-primaryBg cursor-pointer">
                <FaCartShopping />
              </span>
            </Link>

            {true ? (
              <div className="group cursor-pointer relative flex flex-col items-center justify-center  ">
                <span className="text-[1.8rem]">
                  <FaRegUserCircle />
                </span>

                <div className="hidden group-hover:block border absolute z-[1] min-h-[10rem] max-h-auto top-full w-[8rem] bg-white  ">
                  <ul className="flex flex-col w-full text-center gap-y-1">
                    <li className="text-[1.2rem] hover:underline hover:text-blue-500 cursor-pointer">
                      My Profile
                    </li>

                    <li className="text-[1.2rem] hover:underline hover:text-blue-500 cursor-pointer">
                      My Wishlist
                    </li>

                    <li className="text-[1.2rem] hover:underline hover:text-blue-500 cursor-pointer">
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


        {/*sidebar for mobile section*/}

      </header>

      {menuOpen ? <SidebarMenu setMenuOpen={setMenuOpen} /> : ""}

      <Outlet />
    </>
  );
};

export default Header;
