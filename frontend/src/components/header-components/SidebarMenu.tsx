import { Dispatch, SetStateAction } from "react";
import { PiShippingContainerBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const SidebarMenu = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="lg:hidden md:block xsm:block h-full md:w-[50%] xsm:min-w-[24rem] xsm:max-w-auto fixed top-0 z-[1] p-[clamp(0.70rem,2vw,1rem)] overflow-scroll border border-black bg-white">
      <div className="w-full h-[3rem] flex justify-end items-center  ">
        <span className="flex items-center text-[clamp(2rem,2vw,2.1rem)]  h-full">
          <RxCross1 onClick={() => setMenuOpen((prevState) => !prevState)} />
        </span>
      </div>

      <ul className="flex flex-col gap-y-2 w-full h-full ">
        <Link to="">
          <li className="flex gap-x-2 items-center text-center font-semibold text-[clamp(2rem,2vh,1.8rem)] hover:bg-hoverTextBg ">
            <span className="text-[clamp(2.4rem,2vw,1.8rem)]">
              <FaRegUserCircle />
            </span>
            My Profile
          </li>
        </Link>

        <Link to="">
          <li className="flex gap-x-2 items-center text-center font-semibold text-[clamp(2rem,2vh,1.8rem)] hover:bg-hoverTextBg ">
            <span className="text-[clamp(2.4rem,2vw,1.8rem)]">
              <PiShippingContainerBold />
            </span>
            My Orders
          </li>
        </Link>

        <Link to="">
          <li className="flex gap-x-2 items-center text-center font-semibold text-[clamp(2rem,2vh,1.8rem)] hover:bg-hoverTextBg ">
            <span className="text-[clamp(2.4rem,2vw,1.8rem)]">
              <IoIosHeartEmpty />
            </span>
            My Wishlist
            <span className="text-[clamp(1.2rem,2vw,1.4rem)]">({23})</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarMenu;
