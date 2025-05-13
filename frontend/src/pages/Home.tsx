import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCards from "../components/home-page-components/CategoryCards";
import TrendingProducts from "../components/home-page-components/TrendingProducts";
import CustomerReviews from "../components/home-page-components/CustomerReview";
import FeaturedCollection from "../components/home-page-components/FeaturedCollection";
const Home = () => {
  return (
    <>
      <div className="border border-black min-h-screen max-h-auto w-screen lg:px-32 ">
        <section className="w-full lg:h-[40rem] md:h-[40rem] xsm:h-[18rem] border border-red-400">
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





        <section className="w-full lg:min-h-[30rem] md:min-h-[30rem] xsm:min-h-[30rem] max-h-auto flex flex-wrap xsm:flex-col md:flex-row lg:flex-row lg:items-start lg:justify-center xsm:items-center xsm:justify-start gap-4 border border-red-400 p-[clamp(1rem,2vw,1rem)] ">
          
          
 








          <div className="flex lg:min-h-[10rem] lg:min-w-[18rem] md:min-h-[8rem] md:min-w-[16rem] xsm:h-[9rem] xsm:w-[clamp(16rem,2vw,16rem)] overflow-hidden  px-4 border border-black">
          
            <div className="flex flex-col h-full w-[10rem]  items-left justify-center gap-3">
              <span className="font-bold text-[clamp(0.80rem,2vw,1.3rem)]">
                TRENDY
                <br />
                HiGH BOOTS
              </span>

              <button className="w-[7rem] h-[2rem] p-1 text-[clamp(0.60rem,2vw,12px)] font-bold rounded-[1rem] bg-black text-white">
                Sale Up To 20%
              </button>
            </div>

            <img 
            className=" min-w-[2rem] max-w-[6rem] border  "
              src="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
              alt="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
            />
            
          </div>







          <div className="flex lg:min-h-[10rem] lg:min-w-[18rem] md:min-h-[8rem] md:min-w-[16rem] xsm:h-[9rem] xsm:w-[clamp(16rem,2vw,16rem)] overflow-hidden  px-4 border border-black">
          
            <div className="flex flex-col h-full w-[10rem]  items-left justify-center gap-3">
              <span className="font-bold text-[clamp(0.80rem,2vw,1.3rem)]">
                TRENDY
                <br />
                HiGH BOOTS
              </span>

              <button className="w-[7rem] h-[2rem] p-1 text-[clamp(0.60rem,2vw,12px)] font-bold rounded-[1rem] bg-black text-white">
                Sale Up To 20%
              </button>
            </div>

            <img 
            className=" min-w-[2rem] max-w-[6rem] border  "
              src="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
              alt="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
            />
            
          </div>







          <div className="flex lg:min-h-[10rem] lg:min-w-[18rem] md:min-h-[8rem] md:min-w-[16rem] xsm:h-[9rem] xsm:w-[clamp(16rem,2vw,16rem)] overflow-hidden  px-4 border border-black">
          
            <div className="flex flex-col h-full w-[10rem]  items-left justify-center gap-3">
              <span className="font-bold text-[clamp(0.80rem,2vw,1.3rem)]">
                TRENDY
                <br />
                HiGH BOOTS
              </span>

              <button className="w-[7rem] h-[2rem] p-1 text-[clamp(0.60rem,2vw,12px)] font-bold rounded-[1rem] bg-black text-white">
                Sale Up To 20%
              </button>
            </div>

            <img 
            className=" min-w-[2rem] max-w-[6rem] border  "
              src="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
              alt="https://th.bing.com/th/id/R.6a66bce03f388d4a413d170f62117a96?rik=N5QIsZujnqyULw&pid=ImgRaw&r=0"
            />
            
          </div>


 
        </section>



      </div>
    </>
  );
};

export default Home;
