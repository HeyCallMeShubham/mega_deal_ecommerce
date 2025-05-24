import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const UserCart = () => {
  
  const items = [1,2,3,4,5,6,7]


  return (
    <>
      <section className="xsm:min-w-[24rem] xsm:max-w-auto py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-black sm:text-2xl">
            My Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-400 xsm:min-h-[12rem] xsm:max-h-auto bg-white p-2 shadow-sm  md:p-4">
                  
                  {/* product card start*/}
                  
                  {items.map(() =>(

                  <div className="space-y-1 xsm:min-h-[10rem] xsm:max-h-auto xsm:flex xsm:flex-row lg:flex md:flex md:items-center md:justify-between md:gap-6 xsm:gap-4 md:space-y-0 p-[1rem] my-2">
                    <div className="shrink-0 md:order-1 w-[8rem] h-[8rem] xsm:flex xsm:flex-col justify-between xsm:h-[9rem] xsm:gap-3">
                      <img
                        className="h-full w-full "
                        src="https://image.hm.com/assets/hm/e4/60/e46048d47ddb03740cfd48d9c49f0e796fb6f2f6.jpg?imwidth=1260"
                        alt="https://image.hm.com/assets/hm/e4/60/e46048d47ddb03740cfd48d9c49f0e796fb6f2f6.jpg?imwidth=1260"
                      />

                      <div className="lg:hidden md:hidden xsm:flex items-center justify-between">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 hover:h-7 hover:w-7 shrink-0 items-center justify-center rounded-md border border-black focus:outline-none focus:ring-2 bg-white hover:bg-gray-200 "
                        >
                          <FaMinus />
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter=""
                          className="w-10 shrink-0  bg-transparent text-center text-sm font-medium text-black border border-black"
                          placeholder=""
                          defaultValue={1}
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 hover:h-7 hover:w-7 shrink-0 items-center  justify-center rounded-md border border-black focus:outline-none focus:ring-2 bg-white hover:bg-gray-200 "
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  

                    <div className="lg:flex md:flex xsm:hidden items-center justify-between md:order-3  md:justify-end ">
                      <div className="flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-black  focus:outline-none focus:ring-2  bg-white hover:bg-gray-200 "
                        >
                          <FaMinus />
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter=""
                          className="w-10 shrink-0 bg-transparent text-center text-sm font-medium text-black border border-black rounded"
                          placeholder=""
                          defaultValue={1}
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-black  focus:outline-none focus:ring-2  bg-white hover:bg-gray-200 "
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <div className="text-end md:order-4  md:w-32">
                        <p className="text-base font-bold text-black">$1,499</p>
                      </div>
                    </div>

                    <div className="w-full lg:flex md:flex xsm:flex xsm:flex-col justify-between min-w-0 flex-1 space-y-4 md:order-2 xsm:xsm:order-2 md:max-w-md gap-2 ">
                      <span className="text-[clamp(0.90rem,2vw,1rem)] font-medium text-black border  xsm:min-h-[5rem] xsm:max-h-[5rem] md:min-h-[5rem] md:max-h-[6rem] lg:min-h-[5rem] lg:max-h-[8rem] overflow-y-hidden">
                        PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                        M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                        Keyboard layout INT
                      </span>

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

                      <div className="text-end hidden xsm:flex w-full items-left justify-between self-end ">
                        <div className="hidden items-center gap-8 xsm:flex">
                          {false ? (
                            <button
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-black hover:text-black hover:underline "
                            >
                              <span className="text-[1.3rem] flex items-center hover:text-[1.4rem]">
                                <FaRegHeart />
                                <span className="text-[1rem] xsm:hidden lg:block md:block">
                                  add to wishlist
                                </span>
                              </span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-black hover:text-black hover:underline "
                            >
                              <span className="text-[1.3rem] text-red-500 flex items-center hover:text-[1.4rem] justify-center gap-1">
                                <IoHeartSharp className="" />
                                <span className="text-[1rem] text-black xsm:hidden lg:block md:block">
                                  remove from wishlist
                                </span>
                              </span>
                            </button>
                          )}

                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-black hover:underline"
                          >
                            <span className="text-[1.3rem] text-black hover:text-[1.4rem] flex gap-1">
                              <RiDeleteBin6Line className="" />

                              <span className="text-[1rem] xsm:hidden lg:block md:block">
                                delete item
                              </span>
                            </span>
                          </button>
                        </div>

                        <p className="text-[clamp(0.90rem,2vw,1rem)] font-bold text-black self-start lg:hidden md:hidden xsm:block">
                          $1,499
                        </p>
                      </div>

                      <div className="flex items-center gap-8 xsm:hidden">
                        {/*its for desktop and tablet screens*/}
                        {false ? (
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-black hover:text-black hover:underline "
                          >
                            <span className="text-[1.3rem]">
                              <FaRegHeart />
                            </span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-black hover:text-black hover:underline "
                          >
                            <span className="text-[1.3rem] text-red-500 ">
                              <IoHeartSharp className="" />
                            </span>
                          </button>
                        )}

                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-black hover:underline"
                        >
                          <span className="text-[1.3rem] text-black hover:text-[1.4rem]">
                            <RiDeleteBin6Line className="" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  ))}


                </div>{" "}
                {/*product card end*/}
              </div>
            </div>
            <div className="mx-auto mt-6 min-w-3xl max-w-4xl flex-1 space-y-6 lg:mt-0 lg:min-w-[] ">
              <div className="space-y-4 rounded-lg border border-gray-400 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-black">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-black">
                        $7,592.00
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -$299.00
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-black">$99</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-black">Total</dt>
                    <dd className="text-base font-bold text-black">
                      $8,191.00
                    </dd>
                  </dl>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-primaryBg px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserCart;
