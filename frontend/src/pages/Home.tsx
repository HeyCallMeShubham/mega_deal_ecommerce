import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductListingSlide from '../components/home-page-components/ProductListingSlide';
import ProductSlide from '../components/home-page-components/ProductSlide';

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "Clothing",
      slug: "clothing",
      icon: "👕",
      description: "Browse our fashionable clothing collection",
      subCategories: [
        {
          id: 101,
          name: "Men's Wear",
          slug: "mens-wear",
          icon: "👔",
          description: "Clothing for men"
        },
        {
          id: 102,
          name: "Women's Wear",
          slug: "womens-wear",
          icon: "👗",
          description: "Clothing for women"
        },
        {
          id: 103,
          name: "Kids' Wear",
          slug: "kids-wear",
          icon: "👶",
          description: "Clothing for children"
        }
      ]
    },
    {
      id: 2,
      name: "Accessories",
      slug: "accessories",
      icon: "👜",
      description: "Complete your look with our accessories",
      subCategories: [
        {
          id: 201,
          name: "Bags",
          slug: "bags",
          icon: "🛍️",
          description: "Various types of bags"
        },
        {
          id: 202,
          name: "Wallets",
          slug: "wallets",
          icon: "💳",
          description: "Leather and fabric wallets"
        },
        {
          id: 203,
          name: "Belts",
          slug: "belts",
          icon: "⛓️",
          description: "Fashionable belts"
        }
      ]
    },
    {
      id: 3,
      name: "Electronics",
      slug: "electronics",
      icon: "📱",
      description: "Latest gadgets and devices",
      subCategories: [
        {
          id: 301,
          name: "Smartphones",
          slug: "smartphones",
          icon: "📲",
          description: "Latest mobile phones"
        },
        {
          id: 302,
          name: "Laptops",
          slug: "laptops",
          icon: "💻",
          description: "Powerful computing devices"
        },
        {
          id: 303,
          name: "Headphones",
          slug: "headphones",
          icon: "🎧",
          description: "Audio accessories"
        }
      ]
    },
    {
      id: 4,
      name: "Home & Living",
      slug: "home-living",
      icon: "🏠",
      description: "Items for your home",
      subCategories: [

      ]
    }
  ];


  {/*
    
    const heading_Title: any = document.querySelectorAll(".heading-title")
 

    for (const content of heading_Title) {
  
      const words = content.textContent.split(" ")
  
       words[2] = `<span className='font-bold text-[3.5rem] text-secondaryBg'>${words[2]}</span>`
       
       content.textContent = words.join(" ");

     
  
      }
      
      
  */}



  return (

    <>

      <div className='w-screen min-h-screen max-h-[auto] grid grid-cols-[20rem_auto] px-4 border border-green-500'>

        <div className='w-full h-10rem border border-black' id='col-1'>

          <div className="max-w-md mx-auto  min-h-[20rem] max-h-[auto] border-[4px] border-primaryBg">

            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex justify-between items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <span className="font-medium">{category.name}</span>

                    {category.subCategories.length ?

                      <span className="mr-2 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>

                      : ""}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className='w-full h-20rem border flex flex-col items-center border-black' id='col-2'> {/*column-2 start*/}

          <div className='border border-red-500  w-[95%] h-[35rem]' id="banner-container">

            <div className='w-full h-full border bg-[url("https://demoprestashop.aeipix.com/AX02/megadeal23/modules/aei_imageslider/views/img/sample-1.jpg")] bg-cover bg-[100%] ' id='banner-slide-1'>

              <div className='border border-black absolute top-[50%] right-[10rem] w-[30rem] min-h-[10rem] max-h-[auto] flex flex-col gap-2 justify-center items-center text-center'>

                <span className='text-primaryBg text-[1.5rem]'>
                  Up To 30% Off
                </span>

                <h2 className='font-bold text-[3.5rem] heading-title'>Fashion Trends</h2>

                <p>
                  Designer Clothes Exlusive Online Store
                </p>

                <button className='border text-lg border-black w-[7rem] h-[2.5rem] bg-primaryBg'>Shop Now</button>

              </div>

            </div>

          </div>





         {/*product-listing-section-start*/}

           <ProductListingSlide />

         {/*product-listing-section-end*/}


           <ProductSlide />
    

        </div> {/*column-2 end*/}



      </div>

    </>

  )
}

export default Home