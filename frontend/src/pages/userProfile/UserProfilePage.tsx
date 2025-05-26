import { FaSignOutAlt } from "react-icons/fa";
import { PiShippingContainerBold } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const UserProfilePage = () => {
  return (
    <div className="h-screen w-screen  md:px-2 lg:px-32">
      <div className="lg:grid xsm:flex md:grid xsm:flex-col md:grid-cols-[16rem,1fr] lg:grid-cols-[20rem,1fr] h-full w-full min-w-[24rem] max-w-auto justify-center border border-gray-400">
      
        <div className="w-full h-[100%] bg-white shadow-md col-start-1 col-end-1 p-4 space-y-6 text-sm text-gray-700  ">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <div className="border overflow-hidden border-black rounded-full w-[3rem] h-[3rem]">
              <img
                src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                alt="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
              />
            </div>
            <div>
              <p className="text-xs">Hello,</p>
              <p className="text-[1rem] font-semibold text-blue-600">
                Shubham Kumar Jatav
              </p>
            </div>
          </div>

          {/* My Orders */}

          <div className="border-t pt-4">
            <p className="font-semibold text-lg mb-2 flex gap-x-2">
              {" "}
              <span className="text-[1.5rem]">
                <PiShippingContainerBold />
              </span>{" "}
              MY ORDERS
            </p>

            <div className=" lg:flex md:flex xsm:hidden justify-between items-center cursor-pointer text-blue-600">  
              <Link to="/account/orders">
              <div className="flex items-center space-x-2">
                <span className="text-[1rem] font-lighter hover:underline">
                  My Orders
                </span>
              </div>
              </Link>

              <span className="text-[1.5rem]">
                <FiChevronRight />
              </span>{" "}
            
            </div>


          </div>

          {/* Account Settings */}
          <div className="border-t pt-4">
            <p className="font-semibold text-lg mb-2 flex gap-x-2">
              {" "}
              <span className="text-[1.5rem]">
                <FaRegUser />
              </span>{" "}
              ACCOUNT SETTINGS
            </p>
      
      
            <div className="lg:block md:block xsm:hidden  space-y-2 pl-5">
              <Link to="/account/edituserinfo">
              <div className="cursor-pointer text-blue-600">
                <span className="text-[1rem] font-lighter hover:underline">
                  Personal Information
                </span>
              </div>
              </Link>
            </div>
      
            <div className="lg:hidden md:hidden xsm:block  space-y-2 pl-5">
              <Link to="/user/account/edituserinfo">
              <div className="cursor-pointer text-blue-600">
                <span className="text-[1rem] font-lighter hover:underline">
                  Personal Information
                </span>
              </div>
              </Link>
            </div>


          </div>

          {/* Logout */}
          <div className="border-t pt-4 flex items-center space-x-2 cursor-pointer text-blue-600">
            <FaSignOutAlt />
            <span className="text-[1rem] font-lighter hover:underline">
              Logout
            </span>
          </div>
        </div>

        <div className={` xsm:hidden lg:block md:block w-auto h-full col-start-2 col-end-2 `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
