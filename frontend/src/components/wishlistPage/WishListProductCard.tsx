import { useState } from "react";

import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsVertical } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
const WishListProductCard = () => {

    const [toggleItemOptions, setToggleItemsOptions] = useState<boolean>(false)


  return (
    <div className="group rounded-lg relative p-4 xsm:p-1 shadow-sm lg:min-w-[20rem] lg:max-w-[20rem] md:min-w-[18rem] md:max-w-[18rem] xsm:w-full border border-gray-400 bg-white">
    <div onClick={() => setToggleItemsOptions(prevState => !prevState)} className="hidden lg:group-hover:flex md:flex xsm:flex rounded-full w-6 h-6 items-center justify-center text-black bg-gray-200 absolute lg:left-[90%] md:left-[90%] xsm:left-[80%] top-[1rem]">
      <TbDotsVertical />
    </div>

    <div className={` ${toggleItemOptions ? "grid" : "hidden"} transition-all duration-500 ease-in-out w-full h-[clamp(100%,2vh,100%)] top-0 left-0 bg-gray-100 rounded-lg absolute grid-rows-[25px,1fr] p-4`}>
      <span onClick={() => setToggleItemsOptions(prevState => !prevState)} className="justify-self-end w-full border text-[clamp(1.2rem,2vw,1.4rem)] flex items-center justify-end   h-full">
        <RxCross1 />
      </span>

      <div className="w-full h-full ">
        <ul className="w-full h-full ">

          <li className="cursor-pointer flex justify-start gap-x-2 items-center text-center my-2 ">
            <span className="justify-self-end inline-block border text-[clamp(1.2rem,2vw,1.4rem)]  h-full">
              <RiDeleteBin6Line />
            </span>
            <span className="justify-self-end inline-block border font-bold text-[clamp(0.50rem,2vw,0.80rem)] h-full">
              Delete this Item
            </span>
          </li>




        </ul>
      </div>
    </div>

    

    <div className="lg:h-56 md:h-56 xsm:h-45 w-full">
      <img
        className="w-full h-full"
        src="https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain"
        alt="https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain"
      />
    </div>

    <div className="lg:pt-6 md:pt-6 xsm:pt-3 flex flex-col gap-1">
      <p className="min-h-[2.6rem] max-h-[2.6rem] overflow-hidden  text-[0.80rem] font-semibold leading-tight text-gray-900 hover:underline">
        Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
      </p>

      <div className="mt-2 flex items-center justify-between gap-4 ">
        <span className="text-[0.80rem] flex justify-center items-center text-center font-extrabold leading-tight text-green-400">
          <FaArrowDown />
          75%
        </span>
        <s className="text-[0.80rem] font-bold leading-tight text-gray-600  ">
          $1,699
        </s>
        <span className="text-[0.80rem] font-bold leading-tight text-black">
          $1,699
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">
          <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
          <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
          <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
          <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
          <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-900">5.0</p>
        <p className="text-sm font-medium text-gray-600">(455)</p>
      </div>

      <button
        type="button"
        className="flex items-center text-center justify-center rounded-md bg-primaryBg hover:bg-secondaryBg px-5 py-2.5 text-sm font-medium text-white w-full h-8 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        Add to cart
      </button>
    </div>
  </div>
  )
}

export default WishListProductCard