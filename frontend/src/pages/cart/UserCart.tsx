import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
const UserCart = () => {
  return (
    <>
      <div className="min-w-screen max-w-screen min-h-screen max-h-auto xsm:min-w-[24rem] xsm:w-max-auto py-3  grid grid-cols-[repeat(3,minmax(1fr,1fr))] bg-white text-black  ">
        <div className="h-full flex lg:flex-row md:flex-row xsm:flex-col lg:col-start-2 lg:col-end-2 lg:w-[70rem] md:col-start-1 md:col-span-3 min-w-full max-w-full  ">
          <div className="flex flex-col lg:w-[45rem] md:w-[40rem]  ">
            <div className="flex justify-between w-full p-4">
              {/*this div contains user deliver address info*/}

              <div className="flex flex-col">

                 <span className="font-bold text-[1rem]">Items {6}</span>      

                <span className="flex gap-x-1 font-lighter">
                  Deliver to:<span className="font-bold">Shubham</span>,
                  <span className="font-bold">23131</span>
                </span>

                <span className="flex gap-x-1 font-lighter xsm:font-light">
                  Khuda Ali Sher near Ambedkar ground 3rd floor sahibzada
                </span>
              </div>

              <button className="w-[6rem] h-[2.5rem] font-lighter bg-secondaryBg text-white rounded-sm hover:cursor-pointer">
                Change
              </button>
            </div>

            <div className="flex flex-col border xsm:min-w-full xsm:max-w-full md:w-full lg:w-full lg:min-h-[20rem] overflow-x-hidden lg:max-h-full ">
              {/*this will contain all the cart items*/}





              <div className="flex lg:min-h-[11rem] lg:max-h-[11rem] md:min-h-[11rem] md:max-h-[11rem] w-full xsm:min-h-[13rem] xsm:max-h-[13rem]  ">
                {/*item div*/}

                <div className="flex flex-col p-3 lg:min-w-40 lg:max-w-40  md:min-w-40 md:max-w-40  xsm:min-w-32 xsm:max-w-32">
                  <img
                    src="https://www.bing.com/th?id=OPAC.fEULtOf81WF1Gw474C474&o=5&pid=21.1&w=160&h=228&rs=1&qlt=100&dpr=0.9&c=8&pcl=f5f5f5"
                    alt="https://www.bing.com/ck/a?!&&p=c38d7614a07c39ec966b2a860d908c44a7014fa4d25e321e0e7f8c6cfd6771d4JmltdHM9MTc0NTUzOTIwMA&ptn=3&ver=2&hsh=4&fclid=30e60132-110a-6973-17a8-12b9101a6816&u=a1L2ltYWdlcy9zZWFyY2g_cT10LXNoaXJ0JTIwZGVzaWduJkZPUk09SVFGUkJBJmlkPTJENEM3OUE5OTI4QUY2MTVDNURGNUNFREJGRjI4QzJBQTVBMTY0MTU&ntb=1"
                    className="h-[75%] w-full "
                  />

                  <div
                    x-data="{ currentVal: 1, minVal: 0, maxVal: 10, decimalPoints: 0, incrementAmount: 1 }"
                    className="flex flex-col gap-1   "
                  >
                    <div className="flex items-center justify-center">
                      <button
                        x-on:click="currentVal = Math.max(minVal, currentVal - incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-l-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="subtract"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </button>

                      <input
                        x-model="currentVal.toFixed(decimalPoints)"
                        id="counterInput"
                        type="text"
                        value={1}
                        className="  h-6 w-10 rounded border border-black border-outline bg-surface-alt/50 text-center text-on-surface-strong focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary dark:border-outline-dark dark:bg-surface-dark-alt/50 dark:text-on-surface-dark-strong dark:focus-visible:outline-primary-dark"
                        readOnly
                      />

                      <button
                        x-on:click="currentVal = Math.min(maxVal, currentVal + incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-r-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="add"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-3 lg:min-w-[35rem] lg:max-w-full md:min-w-[40rem] md:max-w-full xsm:min-w-full xsm:max-w-full lg:h-full   ">
                  {/*this div will contain item information*/}

                  <div className="flex flex-col lg:min-w-[23rem] lg:max-w-[23rem] md:min-w-[23rem] md:max-w-[23rem] xsm:min-w-[12rem] xsm:max-w-[14rem] text-nowrap overflow-x-hidden lg:min-h-[6rem] lg:max-h-[6rem] ">
                    <span className="font-bold text-[1.1rem] min-w-full max-w-full min-h-[2rem] max-h-[3rem] text-nowrap overflow-x-hidden ">
                      OverSized T-shirt
                      fffffffdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggff
                    </span>

                    <span className="text-gray-600">
                      Selected Size:{" "}
                      <span className="font-medium">{"Small"}</span>
                    </span>

                    <span className="text-gray-600">
                      Brand: <span className="font-medium">{"Adidas"}</span>
                    </span>
                  </div>

                  <div className="flex h-10 xsm:gap-4 xsm:min-w-[14rem] xsm:max-w-[14rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-full lg:max-w-full justify-between items-center">
                    <div className="flex lg:gap-4 md:gap-4 xsm:gap-3 ">
                      {false ? (
                        <span className="xsm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                          <FaRegHeart />
                        </span>
                      ) : (
                        <span className="xsm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] text-red-500 items-center flex justify-center font-medium cursor-pointer ">
                          <IoHeartSharp />
                        </span>
                      )}

                      <span className="xsm:text-[1rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                        <RiDeleteBin6Line />
                      </span>
                    </div>

                    <span className="xsm:w-full  xsm:text-right md:text-right lg:text-right font-bold text-[1.2rem]  ">
                      Price: ${522}
                    </span>
                  </div>
                </div>
              </div>




              <div className="flex lg:min-h-[11rem] lg:max-h-[11rem] md:min-h-[11rem] md:max-h-[11rem] w-full xsm:min-h-[13rem] xsm:max-h-[13rem]  ">
                {/*item div*/}

                <div className="flex flex-col p-3 lg:min-w-40 lg:max-w-40  md:min-w-40 md:max-w-40  xsm:min-w-32 xsm:max-w-32">
                  <img
                    src="https://www.bing.com/th?id=OPAC.fEULtOf81WF1Gw474C474&o=5&pid=21.1&w=160&h=228&rs=1&qlt=100&dpr=0.9&c=8&pcl=f5f5f5"
                    alt="https://www.bing.com/ck/a?!&&p=c38d7614a07c39ec966b2a860d908c44a7014fa4d25e321e0e7f8c6cfd6771d4JmltdHM9MTc0NTUzOTIwMA&ptn=3&ver=2&hsh=4&fclid=30e60132-110a-6973-17a8-12b9101a6816&u=a1L2ltYWdlcy9zZWFyY2g_cT10LXNoaXJ0JTIwZGVzaWduJkZPUk09SVFGUkJBJmlkPTJENEM3OUE5OTI4QUY2MTVDNURGNUNFREJGRjI4QzJBQTVBMTY0MTU&ntb=1"
                    className="h-[75%] w-full "
                  />

                  <div
                    x-data="{ currentVal: 1, minVal: 0, maxVal: 10, decimalPoints: 0, incrementAmount: 1 }"
                    className="flex flex-col gap-1   "
                  >
                    <div className="flex items-center justify-center">
                      <button
                        x-on:click="currentVal = Math.max(minVal, currentVal - incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-l-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="subtract"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </button>

                      <input
                        x-model="currentVal.toFixed(decimalPoints)"
                        id="counterInput"
                        type="text"
                        value={1}
                        className="  h-6 w-10 rounded border border-black border-outline bg-surface-alt/50 text-center text-on-surface-strong focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary dark:border-outline-dark dark:bg-surface-dark-alt/50 dark:text-on-surface-dark-strong dark:focus-visible:outline-primary-dark"
                        readOnly
                      />

                      <button
                        x-on:click="currentVal = Math.min(maxVal, currentVal + incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-r-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="add"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-3 lg:min-w-[35rem] lg:max-w-full md:min-w-[40rem] md:max-w-full xsm:min-w-full xsm:max-w-full lg:h-full   ">
                  {/*this div will contain item information*/}

                  <div className="flex flex-col lg:min-w-[23rem] lg:max-w-[23rem] md:min-w-[23rem] md:max-w-[23rem] xsm:min-w-[12rem] xsm:max-w-[14rem] text-nowrap overflow-x-hidden lg:min-h-[6rem] lg:max-h-[6rem] ">
                    <span className="font-bold text-[1.1rem] min-w-full max-w-full min-h-[2rem] max-h-[3rem] text-nowrap overflow-x-hidden ">
                      OverSized T-shirt
                      fffffffdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggff
                    </span>

                    <span className="text-gray-600">
                      Selected Size:{" "}
                      <span className="font-medium">{"Small"}</span>
                    </span>

                    <span className="text-gray-600">
                      Brand: <span className="font-medium">{"Adidas"}</span>
                    </span>
                  </div>

                  <div className="flex h-10 xsm:gap-4 xsm:min-w-[14rem] xsm:max-w-[14rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-full lg:max-w-full justify-between items-center">
                    <div className="flex lg:gap-4 md:gap-4 xsm:gap-3 ">
                      {false ? (
                        <span className="xsm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                          <FaRegHeart />
                        </span>
                      ) : (
                        <span className="xsm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] text-red-500 items-center flex justify-center font-medium cursor-pointer ">
                          <IoHeartSharp />
                        </span>
                      )}

                      <span className="xsm:text-[1rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                        <RiDeleteBin6Line />
                      </span>
                    </div>

                    <span className="xsm:w-full  xsm:text-right md:text-right lg:text-right font-bold text-[1.2rem]  ">
                      Price: ${522}
                    </span>
                  </div>
                </div>
              </div>




              <div className="flex lg:min-h-[11rem] lg:max-h-[11rem] md:min-h-[11rem] md:max-h-[11rem] w-full xsm:min-h-[13rem] xsm:max-h-[13rem]  ">
                {/*item div*/}

                <div className="flex flex-col p-3 lg:min-w-40 lg:max-w-40  md:min-w-40 md:max-w-40  xsm:min-w-32 xsm:max-w-32">
                  <img
                    src="https://www.bing.com/th?id=OPAC.fEULtOf81WF1Gw474C474&o=5&pid=21.1&w=160&h=228&rs=1&qlt=100&dpr=0.9&c=8&pcl=f5f5f5"
                    alt="https://www.bing.com/ck/a?!&&p=c38d7614a07c39ec966b2a860d908c44a7014fa4d25e321e0e7f8c6cfd6771d4JmltdHM9MTc0NTUzOTIwMA&ptn=3&ver=2&hsh=4&fclid=30e60132-110a-6973-17a8-12b9101a6816&u=a1L2ltYWdlcy9zZWFyY2g_cT10LXNoaXJ0JTIwZGVzaWduJkZPUk09SVFGUkJBJmlkPTJENEM3OUE5OTI4QUY2MTVDNURGNUNFREJGRjI4QzJBQTVBMTY0MTU&ntb=1"
                    className="h-[75%] w-full "
                  />

                  <div
                    x-data="{ currentVal: 1, minVal: 0, maxVal: 10, decimalPoints: 0, incrementAmount: 1 }"
                    className="flex flex-col gap-1   "
                  >
                    <div className="flex items-center justify-center">
                      <button
                        x-on:click="currentVal = Math.max(minVal, currentVal - incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-l-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="subtract"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </button>

                      <input
                        x-model="currentVal.toFixed(decimalPoints)"
                        id="counterInput"
                        type="text"
                        value={1}
                        className="  h-6 w-10 rounded border border-black border-outline bg-surface-alt/50 text-center text-on-surface-strong focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary dark:border-outline-dark dark:bg-surface-dark-alt/50 dark:text-on-surface-dark-strong dark:focus-visible:outline-primary-dark"
                        readOnly
                      />

                      <button
                        x-on:click="currentVal = Math.min(maxVal, currentVal + incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-r-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="add"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-3 lg:min-w-[35rem] lg:max-w-full md:min-w-[40rem] md:max-w-full xsm:min-w-full xsm:max-w-full lg:h-full   ">
                  {/*this div will contain item information*/}

                  <div className="flex flex-col lg:min-w-[23rem] lg:max-w-[23rem] md:min-w-[23rem] md:max-w-[23rem] xsm:min-w-[12rem] xsm:max-w-[14rem] text-nowrap overflow-x-hidden lg:min-h-[6rem] lg:max-h-[6rem] ">
                    <span className="font-bold text-[1.1rem] min-w-full max-w-full min-h-[2rem] max-h-[3rem] text-nowrap overflow-x-hidden ">
                      OverSized T-shirt
                      fffffffdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggff
                    </span>

                    <span className="text-gray-600">
                      Selected Size:{" "}
                      <span className="font-medium">{"Small"}</span>
                    </span>

                    <span className="text-gray-600">
                      Brand: <span className="font-medium">{"Adidas"}</span>
                    </span>
                  </div>

                  <div className="flex h-10 xsm:gap-4 xsm:min-w-[14rem] xsm:max-w-[14rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-full lg:max-w-full justify-between items-center">
                    <div className="flex lg:gap-4 md:gap-4 xsm:gap-3 ">
                      {false ? (
                        <span className="xsm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                          <FaRegHeart />
                        </span>
                      ) : (
                        <span className="xsm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] text-red-500 items-center flex justify-center font-medium cursor-pointer ">
                          <IoHeartSharp />
                        </span>
                      )}

                      <span className="xsm:text-[1rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                        <RiDeleteBin6Line />
                      </span>
                    </div>

                    <span className="xsm:w-full  xsm:text-right md:text-right lg:text-right font-bold text-[1.2rem]  ">
                      Price: ${522}
                    </span>
                  </div>
                </div>
              </div>




              <div className="flex lg:min-h-[11rem] lg:max-h-[11rem] md:min-h-[11rem] md:max-h-[11rem] w-full xsm:min-h-[13rem] xsm:max-h-[13rem]  ">
                {/*item div*/}

                <div className="flex flex-col p-3 lg:min-w-40 lg:max-w-40  md:min-w-40 md:max-w-40  xsm:min-w-32 xsm:max-w-32">
                  <img
                    src="https://www.bing.com/th?id=OPAC.fEULtOf81WF1Gw474C474&o=5&pid=21.1&w=160&h=228&rs=1&qlt=100&dpr=0.9&c=8&pcl=f5f5f5"
                    alt="https://www.bing.com/ck/a?!&&p=c38d7614a07c39ec966b2a860d908c44a7014fa4d25e321e0e7f8c6cfd6771d4JmltdHM9MTc0NTUzOTIwMA&ptn=3&ver=2&hsh=4&fclid=30e60132-110a-6973-17a8-12b9101a6816&u=a1L2ltYWdlcy9zZWFyY2g_cT10LXNoaXJ0JTIwZGVzaWduJkZPUk09SVFGUkJBJmlkPTJENEM3OUE5OTI4QUY2MTVDNURGNUNFREJGRjI4QzJBQTVBMTY0MTU&ntb=1"
                    className="h-[75%] w-full "
                  />

                  <div
                    x-data="{ currentVal: 1, minVal: 0, maxVal: 10, decimalPoints: 0, incrementAmount: 1 }"
                    className="flex flex-col gap-1   "
                  >
                    <div className="flex items-center justify-center">
                      <button
                        x-on:click="currentVal = Math.max(minVal, currentVal - incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-l-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="subtract"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </button>

                      <input
                        x-model="currentVal.toFixed(decimalPoints)"
                        id="counterInput"
                        type="text"
                        value={1}
                        className="  h-6 w-10 rounded border border-black border-outline bg-surface-alt/50 text-center text-on-surface-strong focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary dark:border-outline-dark dark:bg-surface-dark-alt/50 dark:text-on-surface-dark-strong dark:focus-visible:outline-primary-dark"
                        readOnly
                      />

                      <button
                        x-on:click="currentVal = Math.min(maxVal, currentVal + incrementAmount)"
                        className="flex h-10 items-center justify-center rounded-r-radius border border-outline bg-surface-alt text-on-surface hover:opacity-75 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
                        aria-label="add"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-3 lg:min-w-[35rem] lg:max-w-full md:min-w-[40rem] md:max-w-full xsm:min-w-full xsm:max-w-full lg:h-full   ">
                  {/*this div will contain item information*/}

                  <div className="flex flex-col lg:min-w-[23rem] lg:max-w-[23rem] md:min-w-[23rem] md:max-w-[23rem] xsm:min-w-[12rem] xsm:max-w-[14rem] text-nowrap overflow-x-hidden lg:min-h-[6rem] lg:max-h-[6rem] ">
                    <span className="font-bold text-[1.1rem] min-w-full max-w-full min-h-[2rem] max-h-[3rem] text-nowrap overflow-x-hidden ">
                      OverSized T-shirt
                      fffffffdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggff
                    </span>

                    <span className="text-gray-600">
                      Selected Size:{" "}
                      <span className="font-medium">{"Small"}</span>
                    </span>

                    <span className="text-gray-600">
                      Brand: <span className="font-medium">{"Adidas"}</span>
                    </span>
                  </div>

                  <div className="flex h-10 xsm:gap-4 xsm:min-w-[14rem] xsm:max-w-[14rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-full lg:max-w-full justify-between items-center">
                    <div className="flex lg:gap-4 md:gap-4 xsm:gap-3 ">
                      {false ? (
                        <span className="xsm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                          <FaRegHeart />
                        </span>
                      ) : (
                        <span className="xsm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] text-red-500 items-center flex justify-center font-medium cursor-pointer ">
                          <IoHeartSharp />
                        </span>
                      )}

                      <span className="xsm:text-[1rem] md:text-[1rem] lg:text-[1.1rem] items-center flex justify-center font-medium cursor-pointer ">
                        <RiDeleteBin6Line />
                      </span>
                    </div>

                    <span className="xsm:w-full  xsm:text-right md:text-right lg:text-right font-bold text-[1.2rem]  ">
                      Price: ${522}
                    </span>
                  </div>
                </div>
              </div>
















            </div>
          </div>

          <div className="lg:min-w-[23rem] lg:max-w-[23rem] md:w-full xsm:w-full relative flex xsm:items-center xsm:text-center xsm:justify-center ">
            <div className="lg:min-w-full lg:max-w-full md:min-w-full md:max-w-full xsm:min-w-[20rem] xsm:max-w-[24rem] min-h-[28rem]  max-h-[28rem] p-3 bg-secondaryBg flex flex-col gap-3 lg:absolute lg:top-28 rounded-[0.60rem] ">
              
              
              <h2 className="font-bold lg:text-[1.4rem] md:text-[1.2rem] xsm:text-[1rem] text-white">
                Order Summary
              </h2>

              <ul className="w-full min-h-full max-h-full border border-y-black border-x-0">
                <li className="w-full h-[2.5rem] flex justify-between items-center text-white">
                  <span className="text-gray font-[540] text-light">
                    Original Price
                  </span>
                  <span className="font-bold text-green-600">$6099</span>
                </li>
                <li className="w-full h-[2.5rem] flex justify-between items-center text-white">
                  <span className="text-gray font-[540] text-light">
                    Savings
                  </span>
                  <span className="font-bold text-green-600">-$99</span>
                </li>
                <li className="w-full h-[2.5rem] flex justify-between items-center text-white">
                  <span className="text-gray font-[580] text-light">
                    Delivey Charges
                  </span>
                  <span className="font-bold text-white">$50</span>
                </li>
                <li className="w-full h-[2.5rem] flex justify-between items-center text-white">
                  <span className="text-gray font-[580] text-light">Tax</span>
                  <span className="font-bold text-white">$10</span>
                </li>
              </ul>

              <div className="flex flex-col justify-center items-center gap-1">
                <div className="w-full flex justify-between my-4">
                  <span className="text-gray font-[780] text-light text-white">
                    SubTotal
                  </span>
                  <span className="font-[600] text-white">$3880</span>
                </div>

                <button className="font-semibold text-white bg-primaryBg min-w-[14rem] max-w-[15rem] h-[2.5rem] hover:max-w-[15.10rem] hover:h-[2.8rem] rounded-lg">
                  Proceed To Checkout
                </button>

                <span className="text-gray-400">or</span>

                <span className=" hover:cursor-pointer underline font-lighter text-white min-w-[14rem] max-w-[15rem] h-[2.5rem] flex justify-center text-center items-center align-middle rounded-lg">
                  Continue Shopping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
