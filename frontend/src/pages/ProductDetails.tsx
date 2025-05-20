import { useState } from "react";

const ProductDetails = () => {
  const [showMore, setToggleShowMore] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white text-black font-ancizar font-[900] text-[clamp(1rem,2vw,1.1rem)] border xsm:items-center xsm:min-w-[24rem] xsm:max-w-auto min-h-screen max-h-auto  py-2 ">
        <div className=" flex justify-center items-center lg:max-w-[100rem] mx-auto xsm:px-1 lg:px-4 ">
          <div className="flex flex-col md:flex-col lg:flex-row lg:gap-x-2 -mx-4 w-full">
            <div className="flex flex-col w-full gap-2 md:flex-1 px-1  ">
              <div
                className={`${
                  showMore
                    ? "max-h-[100rem] overflow-scroll"
                    : "max-h-[50rem] overflow-y-hidden"
                } h-full w-full transition-all duration-500 ease-in-out`}
              >
                <div
                  className={`hidden h-[clamp(40rem,2vh,auto)] lg:grid lg:grid-cols-[1fr,1fr] lg:grid-rows-[1fr,auto] gap-2 rounded-lg bg-gray-300 p-1 mb-4 `}
                >
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                      src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                      alt="Product Image"
                    />
                  </div>
                </div>

                <div className="w-full h-full md:block xsm:block lg:hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://th.bing.com/th/id/OIP.8fUK2aanMigNbqqnu4TQCQHaJ-?cb=iwp2&rs=1&pid=ImgDetMain"
                    alt="Product Image"
                  />
                </div>
              </div>

              <div className="hidden lg:flex w-full justify-center items-center text-center h-[3rem] ">
                <button
                  className="w-[6rem] h-[2rem] text-center border border-black"
                  onClick={() => setToggleShowMore((prevState) => !prevState)}
                >
                  {showMore ? "show less" : "show more"}
                </button>
              </div>

              <div className="lg:hidden md:flex xsm:flex lg:min-w-[35rem] lg:max-w-[35rem] h-[5rem] border border-black gap-1 overflow-x-scroll">
                <div className="border border-black min-w-[5rem] max-w-[5rem] h-full ">
                  <img
                    className="w-full h-full"
                    src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                    alt="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  />
                </div>

                <div className="border border-black min-w-[5rem] max-w-[5rem] h-full ">
                  <img
                    className="w-full h-full"
                    src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                    alt="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  />
                </div>

                <div className="border border-black min-w-[5rem] max-w-[5rem] h-full ">
                  <img
                    className="w-full h-full"
                    src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                    alt="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  />
                </div>
              </div>

              <div className=" -mx-2 mb-4 lg:hidden md:flex xsm:flex">

                <div className="w-1/2 px-2">

                  <button className="w-full xsm:bg-secondaryBg xsm:text-[0.80em] lg:bg-primaryBg text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>

                <div className="w-1/2 px-2 ">
                  <button className="w-full xsm:bg-primaryBg  xsm:text-[0.80em] lg:bg-secondaryBg text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>

              </div>
              
            </div>
            <div className="md:flex-1 lg:w-[50rem] px-4 gap-y-1 ">
              <h2 className="text-[clamp(1.5rem,2vw,2.8rem)] font-bold text-black mb-2">
                Plain White t-shirt by h&m |
              </h2>
         
              <div className="flex mb-2">
                <div className="mr-4">
                  <span className="font-bold text-black">Price: </span>
                  <span className="text-black">₹29.99</span>
                </div>
                <div className=" flex gap-1">
                  <span className="font-bold text-black">Availability:</span>

                  {true ? (
                    <span className="bg-green-600 p-[2px] rounded">
                      In Stock{" "}
                    </span>
                  ) : (
                    <span className="bg-red-600 p-[2px] rounded">
                      out of Stock
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-1 py-2 w-full">
                <span className="text-[1rem] gap-1 font-[1rem] flex">
                  {`100`} peoples
                  <span className="text-[1.1rem] font-bold ">
                    {" "}
                    {"   "} bought this item
                  </span>
                </span>

                <span className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold">ratings</span>

                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-black text-[1.2rem]">Select Color:</span>
                <div className="flex items-center mt-2  relative min-h-[5rem] gap-[6px]">
                  <button
                    className="w-6 h-6 rounded-full after:absolute after:items-center after:top-0 after:flex hover:after:content-[attr(color)] border border-black bg-gray-800  mr-2"
                    color={"color"}
                  />
                  <button
                    className="w-6 h-6 rounded-full after:absolute after:items-center after:top-0 after:flex hover:after:content-[attr(color)] border border-black bg-red-500  mr-2"
                    color={"color"}
                  />
                  <button
                    className="w-6 h-6 rounded-full after:absolute after:items-center after:top-0 after:flex hover:after:content-[attr(color)] border border-black bg-blue-500  mr-2"
                    color={"color"}
                  />
                  <button
                    className="w-6 h-6 rounded-full after:absolute after:items-center after:top-0 after:flex hover:after:content-[attr(color)] border border-black bg-yellow-500  mr-2"
                    color={"color"}
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <span className="font-bold text-black">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-white  text-black border text-[0.70rem] border-black py-2 px-4  w-14 text-center items-center font-bold mr-2 ">
                    S
                  </button>
                  <button className="bg-white text-black border text-[0.70rem] border-black py-2 px-4  w-14 text-center items-center font-bold mr-2 ">
                    M
                  </button>
                  <button className="bg-white text-black border text-[0.70rem] border-black py-2 px-4  w-14 text-center items-center font-bold mr-2 ">
                    L
                  </button>
                  <button className="bg-white text-black border text-[0.70rem] border-black py-2 px-4  w-14 text-center items-center font-bold mr-2 ">
                    XL
                  </button>
                  <button className="bg-white text-black border text-[0.70rem] border-black py-2 px-4  w-14 text-center items-center font-bold mr-2 ">
                    XXL
                  </button>
                </div>

                {true ? (
                  <span className=" font-lighter text-[1.1rem] flex gap-1.5 text-green-800">
                    size
                    <span className="font-bold">{"Medium"}</span>
                    is in stock
                  </span>
                ) : (
                  <span className=" font-lighter text-[1.1rem] flex gap-1.5 text-red-800 ">
                    size
                    <s className="font-bold">{"Large"}</s>
                    is out Of stock
                  </span>
                )}
              </div>
              <div>
                <span className="font-bold text-2xl text-black">
                  Product Description:
                </span>
                <p className="text-black text-[clamp(1rem,2vw,20px)] text-sm mt-2 tracking-tight [word-spacing:3px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>

              <div className="my-9 mb-4 lg:flex hidden">
                <div className="w-1/2 px-2">
                  <button className="w-full xsm:text-[0.80em] lg:bg-primaryBg text-white py-2 px-4 rounded-full font-bold ">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2 ">
                  <button className="w-full xsm:text-[0.80em] lg:bg-secondaryBg text-white  py-2 px-4 rounded-full font-bold ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
