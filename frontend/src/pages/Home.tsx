import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Home = () => {
  const [filterToggle, setFilterToggle] = useState<boolean>(false);

  const cards = [
    {
      title: "TRENDY HIGH BOOTS",
      percentOff: 20,
      image:
        "https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0",
    },

    {
      title: "TRENDY HIGH BOOTS",
      percentOff: 20,
      image:
        "https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0",
    },
  ];

  const products = [
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },

    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      productImage:
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <>
      <div className=" min-h-screen max-h-auto w-screen lg:px-32 ">
        <section className="w-full lg:h-[40rem] md:h-[40rem] xsm:h-[18rem] xsm:px-2">
          {/*hero-section*/}

          <div className="w-full h-full relative overflow-hidden">
            <img
              src="https://www.thefashionisto.com/wp-content/uploads/2020/05/Man-in-Buttondown-Shirt-and-Jeans-800x534.jpg"
              className="w-full h-full"
            />

            <div className="text-center items-center absolute lg:top-[10rem] md:top-[5rem] xsm:top-[1.2rem] left-[60%] flex flex-col gap-1">
              <span className="text-red-600 font-cursiveGreatVibes italic text-[clamp(0.70rem,3vw,1.5rem)] ">
                40% off
              </span>

              <h1 className="font-bold text-[clamp(0.50rem,6vw,2.5rem)] mt-[clamp(0.5rem,1vw,1rem)]">
                Go With Latest Trends
              </h1>

              <p className="font-lighter text-[clamp(0.5rem,2vw,1.2rem)] mt-[clamp(0.25rem,0.5vw,0.5rem)]">
                Buy the latest and onGoing trendy clothes
              </p>

              <button
                className="mt-[clamp(1rem,2vw,1.5rem)] 
                      w-[clamp(4rem,16vw,6rem)] h-[clamp(1.6rem,5vw,2.5rem)]
                      hover:w-[clamp(4.2rem,16vw,6.4rem)] hover:h-[clamp(1.8rem,5vw,2.8rem)]
                      text-[clamp(0.8rem,2vw,1rem)] rounded-md bg-red-600 text-white  "
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>

        <section className="w-full lg:min-h-[10rem] md:min-h-[10rem] xsm:min-h-[10rem] max-h-auto flex flex-wrap xsm:flex-col md:flex-row lg:flex-row lg:items-start lg:justify-center xsm:items-center xsm:justify-start gap-4 p-[clamp(1rem,2vw,1rem)] ">
          {cards.map((card) =>
            !card ? (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-black"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              <>
                <div className="flex lg:min-h-[10rem] lg:min-w-[18rem] md:min-h-[8rem] md:min-w-[16rem] xsm:h-[9rem] xsm:w-[clamp(16rem,2vw,16rem)] overflow-hidden  px-4">
                  <div className="flex flex-col h-full w-[10rem]  items-left justify-center gap-3">
                    <span className="font-bold text-[clamp(0.80rem,2vw,1.3rem)]">
                      {card.title.split(" ")[0]}
                      <br />
                      {card.title.split(" ").slice(1).join(" ")}
                    </span>

                    <button className="w-[7rem] h-[2rem] p-1 text-[clamp(0.60rem,2vw,12px)] font-bold rounded-[1rem] bg-black text-white">
                      Sale Up To {card.percentOff}%
                    </button>
                  </div>

                  <img
                    className="min-w-[2rem] max-w-[6rem] border  "
                    src={card.image}
                    alt={card.image}
                  />
                </div>
              </>
            )
          )}
        </section>

        <section className="w-full min-h-[40rem] border border-black py-6 lg:px-[6rem] md:px-2 xsm:px-1 ">
          {/*products slides section*/}

          <div className="xsm:px-2 flex justify-between items-center w-full min-h-[4rem] max-h-auto ">
            <h2 className="font-bold text-[clamp(1.1rem,2vw,1.4rem)]">
              Products
            </h2>

            <div className="hidden lg:block lg:w-[34rem]  items-center text-center ">
              <ul className="font-medium flex w-full h-full items-center text-center justify-center gap-7">
                <li>All</li>
                <li>Men's</li>
                <li>Woman's</li>
                <li>FootWears</li>
                <li>Accessories</li>
              </ul>
            </div>


            <img
              className="lg:hidden xsm:block md:block w-[3rem] h-[3rem]"
              onClick={() => setFilterToggle((prevState) => !prevState)}
              src="https://th.bing.com/th/id/OIP.w4Qv-3xoZvrHCYWLKJQPDgHaHa?cb=iwp2&pid=ImgDet&w=201&h=201&c=7"
              alt="https://th.bing.com/th/id/OIP.w4Qv-3xoZvrHCYWLKJQPDgHaHa?cb=iwp2&pid=ImgDet&w=201&h=201&c=7"
            />


          </div>

          <div
            className={`${
              filterToggle ? "block" : "hidden"
            } xsm:w-full md:w-[34rem] md:place-self-center items-center text-center `}
          >
            <ul className="font-medium w-full h-full items-center text-center justify-center gap-7">
              <li className="hover:bg-gray-100">All</li>
              <li className="hover:bg-gray-100">Men's</li>
              <li className="hover:bg-gray-100">Woman's</li>
              <li className="hover:bg-gray-100">FootWears</li>
              <li className="hover:bg-gray-100">Accessories</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center w-full lg:min-h-[26rem] lg:max-h-[52rem] md:min-h-[25rem] md:max-h-[auto] xsm:min-h-[20rem] xsm:max-h-[auto] gap-4 lg:overflow-y-hidden  py-6 lg:px-7">
            {/*products cards container*/}

            {products.map((product) => (
              <div className="group rounded-lg relative p-5 px-4 xsm:p-1 shadow-sm lg:min-w-[16rem] lg:max-w-[16rem] md:min-w-[18rem] md:max-w-[18rem] xsm:w-[clamp(16rem,2vw,22rem)]  h-[clamp(24rem,2vw,26rem)]  border border-black bg-white">
                <span className="hidden lg:group-hover:flex md:flex xsm:flex rounded-full w-10 h-10 font-semibold items-center justify-center text-black text-[clamp(0.64rem,2vw,0.68rem)] p-4 bg-red-300 absolute lg:left-right md:left-right xsm:left-right lg:top-[0.80rem]">
                  {product.percentOff}%off
                </span>

                <div className="lg:h-56 md:h-56 xsm:h-45 w-full">
                  <img
                    className="w-full h-full"
                    src={product.productImage}
                    alt={product.productImage}
                  />
                </div>

                <div className="lg:pt-6 md:pt-6 xsm:pt-3 flex flex-col gap-1">
                  <p className="min-h-[2.6rem] max-h-[2.6rem] overflow-hidden  text-[clamp(0.80rem,2vw,1rem) ] font-semibold leading-tight text-gray-900 hover:underline">
                    {product.title}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4 ">
                    <span className="text-[0.80rem] flex justify-center items-center text-center font-extrabold leading-tight text-green-400">
                      <FaArrowDown />
                      {product.percentOff}%
                    </span>
                    <s className="text-[0.80rem] font-bold leading-tight text-gray-600  ">
                      ${product.price}
                    </s>
                    <span className="text-[0.80rem] font-bold leading-tight text-black">
                      ${product.price}
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
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">1</span> of{" "}
                  <span className="font-medium">12</span> results
                </p>
              </div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft aria-hidden="true" className="size-5" />
                  </a>
                  {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>

                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <FaChevronRight aria-hidden="true" className="size-5" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
