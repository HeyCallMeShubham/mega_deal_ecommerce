
import ProductListingSlide from '../components/home-page-components/ProductListingSlide';
import ProductSlide from '../components/home-page-components/ProductSlide';
import { useDispatch } from "react-redux";
import { filterByCategory } from '../reduxjs/FilterProducts';
import { useEffect, useState } from 'react';



const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const dispatch = useDispatch();

  const categories = [
    {
      id: 1,
      name: "traditional",
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
      id: 1,
      name: "accessories",
      slug:"accessories",
      icon: "👕",
      description: "Browse our fashionable accessories  collection",
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
      name: "t-shirt",
      slug: "t-shirt",
      icon: "👜",
      description: "Complete your look with our t-shirt",
      subCategories: [
      
      ]
},
  
    
  ];


  useEffect(() => {


    dispatch(filterByCategory({ prop: "selectedCategory", value: selectedCategory }));


  }, [selectedCategory]);
 


  return (

    <>

      <div className='w-screen min-h-screen max-h-[auto] grid grid-cols-[20rem_auto] px-4 '>

        <div className='w-full h-10rem xsm:hidden md:hidden lg:block ' id='col-1'>

          <div className="max-w-md mx-auto  min-h-[20rem] max-h-[auto] border-[4px] border-primaryBg">

            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} onClick={()=> setSelectedCategory(category.name)}>
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




        <div className='relative   w-full h-[30rem] xsm:h-auto md:h-auto border flex flex-col items-center xsm:col-span-2 md:col-span-2 lg:col-start-2 border-black' id='col-2'>

          <div className='border  lg:z-1 relative border-red-500 w-[98%] xsm:h-[18rem] md:h-[22rem] lg:h-[35rem]' id="banner-container">

            <div className='absolute  flex flex-row xsm:items-end xsm:justify-end xsm:w-full md:w-full w-full h-full border bg-[url("https://demoprestashop.aeipix.com/AX02/megadeal23/modules/aei_imageslider/views/img/sample-1.jpg")] bg-cover bg-no-repeat bg-center   ' id='banner-slide-1'>

              <div className='xsm:top-[50%] transform -translate-x-1/1 -translate-y-[2rem] lg:right-[10rem] lg:w-[30rem] xsm:w-[15rem] xsm:h-[auto] lg:min-h-[10rem] lg:max-h-[auto] flex flex-col gap-2 justify-center items-center text-center'>

                <span className='text-primaryBg xsm:text-[13px] lg:text-[1.5rem]'>
                  Up To 30% Off
                </span>

                <h2 className='font-bold xsm:text-[20px]  lg:text-[1.5rem] '>Fashion Trends</h2>

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


        </div>


      </div>

    </>

  )
}

export default Home