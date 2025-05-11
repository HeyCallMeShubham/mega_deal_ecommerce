import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCards from "../components/home-page-components/CategoryCards";
import TrendingProducts from "../components/home-page-components/TrendingProducts";
import CustomerReviews from "../components/home-page-components/CustomerReview";
import FeaturedCollection from "../components/home-page-components/FeaturedCollection";
const Home = () => {
  return (
    <>
      <div className="border border-black h-screen w-screen lg:px-32 ">
        <section className="w-full lg:h-[40rem] border border-red-400">
          {/*hero-section*/}

          <div className="w-full h-full relative">
            <img
              src="https://www.thefashionisto.com/wp-content/uploads/2020/05/Man-in-Buttondown-Shirt-and-Jeans-800x534.jpg"
              className="w-full h-full"
            />

            <div className="text-center items-center absolute lg:top-[10rem] md:top-[5rem] xsm:top-[1.2rem] left-[60%] flex flex-col gap-1">
              <span className="text-red-600 font-cursiveGreatVibes italic text-[clamp(0.70rem,3vw,1.5rem)] ">40% off</span>

              <h1 className="font-bold text-[clamp(0.70rem,6vw,3rem)] mt-[clamp(0.5rem,1vw,1rem)]">Go With Latest Trends</h1>

              <p className="font-lighter text-[clamp(0.6rem,2vw,1.2rem)] mt-[clamp(0.25rem,0.5vw,0.5rem)]">
                Buy the latest and onGoing trendy clothes
              </p>

              <button className="mt-[clamp(1rem,2vw,1.5rem)] 
                      w-[clamp(6rem,20vw,8rem)] h-[clamp(2rem,6vw,2.5rem)]
                      text-[clamp(0.8rem,2vw,1rem)] rounded-md bg-red-600 text-white  ">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
