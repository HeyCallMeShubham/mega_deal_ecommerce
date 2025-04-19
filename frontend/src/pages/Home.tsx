
import ProductListingSlide from '../components/home-page-components/ProductListingSlide';
import ProductSlide from '../components/home-page-components/ProductSlide';
import { useDispatch } from "react-redux";
import { filterByCategory } from '../reduxjs/FilterProducts';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useOutletContext } from 'react-router-dom';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const dispatch = useDispatch();





  const categories = [
    {
      id: 1,
      name: "clothing",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },

    {
      id: 2,
      name: "men",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },

    {
      id: 3,
      name: "woman",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },
    {
      id: 4,
      name: "footwear",
      subCategories: [
        {
          id: 1,
          name: "shoes"
        },

        {
          id: 3,
          name: "slipers"
        },

      ]
    },
    {
      id: 5,
      name: "winter wear",
      subCategories: [
        {
          id: 1,
          name: "sweater"
        },

        {
          id: 3,
          name: "jackets"
        },

      ]
    },
    {
      id: 6,
      name: "activewear/sportswear",
      subCategories: [
        {
          id: 1,
          name: "shoes"
        },

        {
          id: 3,
          name: "jersey"
        },

      ]
    },

    {
      id: 7,
      name: "accessories",
      subCategories: [

        { id: 1, name: "belts" },
        { id: 2, name: "ear ring" },
        { id: 3, name: "gloves" },
        { id: 4, name: "scarves" },
        { id: 5, name: "chain" },
        { id: 6, name: "necklace" },

      ]
    },



  ];






  useEffect(() => {

    console.log(selectedCategory, 'se')

    dispatch(filterByCategory({ prop: "selectedCategory", value: selectedCategory }));


  }, [selectedCategory]);





  const [toggleSideBar]: any = useOutletContext()


  console.log(toggleSideBar, 'toggle')


  return (

    <>

      <div className='w-[100vw] min-h-screen max-h-[auto] grid grid-cols-[22rem_auto] px-4 border border-black  '>

        <div className='w-full h-10rem xsm:hidden md:hidden lg:block ' id='col-1'>

          <div className="max-w-md mx-auto  min-h-[20rem] max-h-[auto] border-[4px] border-primaryBg">

            <ul className="space-y-2">

              {categories.map((category, index) => (

                <li key={index} onClick={() => setSelectedCategory(category.name)} className=' group relative '>

                  <a
                    href="#"
                    className="flex justify-between items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >

                    <span className="font-medium">{category.name}</span>

                    {category.subCategories.length ?

                      <span className="mr-2 text-gray-500">
                        <IoIosArrowForward />
                      </span>

                      : ""}

                  </a>



                  <div className=" group-hover:block min-h-[4rem] max-h-[auto] min-w-[6rem] max-w-[20rem] hidden absolute z-[1] left-full top-4 w-[10rem] flex-wrap bg-white">

                    <ul className='group-hover:flex justify-between items-center gap-3 px-4 lg:min-h-10 lg:max-h-auto w-full h-full flex-wrap text-black'>

                      {category.subCategories.map((subCategory, index) => (

                        <li key={index} className='flex flex-col' id={`${subCategory.id}`} onClick={() => setSelectedCategory(subCategory.name)}>

                          <span className='hover:text-textHoverPrimary group-hover:cursor-pointer' >{subCategory.name}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </li>

              ))}


            </ul>

          </div>


        </div>





        <div className='relative min-w-full max-w-full h-[30rem] xsm:h-auto md:h-auto flex flex-col items-center xsm:col-span-2 md:col-span-2 lg:col-start-2' id='col-2'>

          <div className='lg:-z-10  relative w-[98%] xsm:h-[18rem] md:h-[22rem] lg:h-[35rem]' id="banner-container">


            <ul className='w-full h-full relative overflow-hidden '>

              <li className='w-full h-full flex flex-col items-center justify-center text-center float-left absolute'>
                <img
                  src="https://demoprestashop.aeipix.com/AX02/megadeal23/modules/aei_imageslider/views/img/sample-1.jpg"
                  alt="https://demoprestashop.aeipix.com/AX02/megadeal23/modules/aei_imageslider/views/img/sample-1.jpg"
                  className='w-full h-full align-middle self-center' />

                <span className={` xsm:hidden md:hidden lg:block absolute left-auto right-[35px] top-[20%] ${toggleSideBar ? "xsm:z-[1]" : "xsm:-z-10  md:-z-10"
                  } lg:z-[2] text-center w-auto   `}>

                  <h2 className='align-top inline-block text-textPrimary text-[20px] font-[400] tracking-[0.4px] capitalize leading-[28px] after:content-["Up To 45% Off"] '></h2>

                  <div className="block isolate">

                    <div className="text-[clamp(1.5rem, 3vw, 4rem)] leading-[28px] font-medium text-black tracking-[1.79px] capitalize py-[40px]">
                      Fashion

                      <span className='text-textSecondary'> Trends</span>
                    </div>

                    <div className="text-base font-normal capitalize text-black leading-[25px] tracking-[2.24px]">
                      Designer Clothes Exlusive Online Store
                    </div>

                    <p className="text-black font-[400] ">

                      <span className="text-[15px]  font-normal capitalize text-center mt-[10px] tracking-[0.56px] inline-block text-white bg-primaryBg align-top transition-all duration-500 py-[7px] px-[25px] ">
                        shop now
                      </span>

                    </p>

                  </div>

                </span>


 
                <span className={`lg:hidden absolute left-auto right-0 top-[8%] ${toggleSideBar ? "xsm:z-[1]" : "xsm:-z-10  md:-z-10"
                  } lg:z-[2] text-right w-auto `}>

                  <h2 className='align-top inline-block text-textPrimary text-[20px] font-[400] tracking-[0.4px] capitalize leading-[28px] after:content-["Up To 45% Off"] '></h2>

                  <div className="block isolate">

                    <div className="text-[24px] leading-[28px] font-medium text-black tracking-[1.79px] capitalize py-[40px]">
                      Fashion

                      <span className='text-textSecondary'> Trends</span>
                    </div>

                    <div className="text-base font-normal capitalize text-black leading-[25px] tracking-[1.24px]">
                      Designer Clothes <br/> Exlusive Online Store
                    </div>

                    <p className="text-black font-[400] ">

                      <span className="text-[15px]  font-normal capitalize text-center mt-[10px] tracking-[0.56px] inline-block text-white bg-primaryBg align-top transition-all duration-500 py-[7px] px-[25px] ">
                        shop now
                      </span>

                    </p>

                  </div>

                </span>
              





              </li>


            </ul>


          </div>


          {/*product-listing-section-start*/}

          <ProductListingSlide />

          {/*product-listing-section-end*/}


          <ProductSlide />


        </div>


      </div>





    </>

  )
}

export default Home