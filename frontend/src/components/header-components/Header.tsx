
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom"
import { TbTruckDelivery } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {

const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);




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

    ];



    return (
        <>

            <header className='w-screen min-h-[10rem] max-h-[auto] flex xsm:flex-col xsm:justify-center text-center relative border border-black'>


                <div className='xsm:hidden md:hidden lg:flex w-full h-[2rem] text-white flex flex-row lg:justify-between bg-black px-4'>{/*this
                 component must be hidden in small and medium screens*/}

                    <div className=''>

                        <select className='text-black'>

                            <option>English</option>
                            <option>English</option>
                            <option>English</option>
                            <option>English</option>

                        </select>

                        <select className='text-black'>

                            <option>$USD</option>
                            <option>$USD</option>
                            <option>$USD</option>
                            <option>$USD</option>
                            <option>$USD</option>

                        </select>

                    </div>

                    <div>

                        <span>icon Call Us at 98876783342 </span>

                    </div>

                </div>





                <div className='flex xsm:flex-col md:flex-col lg:flex-row xsm:items-center md:items-center md:justify-center xsm:justify-center lg:justify-between h-[8rem] px-4'>


                    <img src='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' alt='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' className="xsm:hidden md:hidden lg:block  hover:cursor-pointer " />


                    <div className="xsm:flex lg:hidden xsm:flex-row w-full items-center  justify-between">


                        <span className="lg:hidden xsm:text-[1.4rem] md:text-[1.4rem]" onClick={() => setToggleSideBar(prevState => !prevState)}>

                            <GiHamburgerMenu />

                        </span>


                        <img src='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' alt='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' className="lg:hidden xsm:max-h-[50px] xsm:max-w-[100%]" />


                        <div className='flex justify-between h-full w-[6rem] border items-center gap-2'>


                            <span className='flex justify-center h-10 font-bold text-[1.5rem] w-20 border border-black items-center text-white text-center bg-secondaryBg '>

                                <IoPersonOutline />

                            </span>



                            <span className='flex justify-center h-10 font-bold text-[1.5rem] w-20 border border-black items-center text-white text-center bg-secondaryBg '>

                                <BsBagCheck />

                            </span>

                        </div>

                    </div>


                    <div className='flex items-center xsm:justify-center md:justify-center lg:justify-between max-h-[100%] max-w-[100%] h-[100%] w-[76rem]  '>

                        <form className='items-center text-center flex justify-center flex-row xsm:w-full md:w-full lg:w-[35rem] h-[3rem] lg:py-0.5 border border-black'>

                            <input type='text' placeholder='Search our catalog' className='w-full h-full text-center border border-black ' />

                            <button className='w-[3rem] h-[100%] border border-black bg-[#f68b1f] hover:bg-secondaryBg text-center items-center '>

                                <span className='w-full h-full text-white text-[1.8rem] font-bold text-center flex justify-center items-center'>

                                    <CiSearch />

                                </span>

                            </button>

                        </form>


                        <div className="xsm:hidden md:hidden lg:flex flex-row justify-center items-center gap-2">

                            <span className="text-[3rem] font-light">
                                <TbTruckDelivery />
                            </span>

                            <div className="xsm:hidden md:hidden flex-col lg:flex">

                                <span className="leading-[25px] text-secondaryBg text-[14px] font-bold">Free Shipping</span>
                                <span className="leading-[16px] text-[12px] text-black font-medium">Order Of $99</span>

                            </div>

                        </div>


                        <div className="xsm:hidden md:hidden lg:inline-block ml-8 align-top  ">

                            <div className="bg-secondaryBg color-white py-0 px-2.5 gap-6">

                                <div className="w-12 bg-primaryBg text-center p-2.5 float-left my-[-10px] mx-0 relative" >

                                    <span className="text-[14px] text-white font-bold leading-4 tracking-[3px] block">50% Off</span>

                                </div>
                                <div className="inline-block text-[19px] text-white font-bold leading-[15px] text-center items-center tracking-[0.38px] py-3 px-0">

                                    Big Sale

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <nav className='xsm:hidden md:hidden lg:flex w-full h-[4rem] bg-[#36526b] justify-between px-4'>

                    <div className='flex gap-5'>

                        <div className="w-[20rem] h-full bg-[#f68b1f] shadow-md text-center flex justify-around items-center overflow-hidden">

                            {/* Category Header */}

                            <div className=" px-4 py-3 h-full flex items-center text-center ">

                                <h3 className="text-white text-[1.1rem] font-bold ">Shop By Category</h3>

                            </div>

                            <span className="text-white text-[1.4rem] hover:cursor-pointer ">
                                <GiHamburgerMenu />
                            </span>

                        </div>

                        <div className='flex flex-row justify-between'>

                            <ul className='w-[28rem] flex flex-row items-center justify-between'>

                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>
                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>
                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>
                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>
                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>
                                <li className='hover:cursor-pointer text-white  hover:text-textHoverPrimary '>Clothes</li>

                            </ul>

                        </div>

                    </div>


                    <div className='flex justify-between h-full w-[6rem] items-center gap-2'>

                        <span className='flex justify-center h-12 font-bold text-[1.5rem] w-20 hover:cursor-pointer hover:text-textHoverPrimary  border border-black items-center text-white text-center bg-secondaryBg '>

                            <IoPersonOutline />

                        </span>


                        <span className='flex justify-center h-12 font-bold text-[1.5rem] w-20 hover:cursor-pointer hover:text-textHoverPrimary  border border-black items-center text-white text-center bg-secondaryBg '>

                            <BsBagCheck />

                        </span>

                    </div>

                </nav>


{toggleSideBar ? <>

    <div className="flex flex-col absolute min-h-screen max-h-screen overflow-y-scroll xsm:w-full md:w-[25rem] top-0 border-[6px] border-primaryBg bg-secondaryBg p-1">

<div className="xsm:flex xsm:items-center xsm:w-full xsm:h-10 md:h-10 md:flex flex-col items-center text-center justify-center px-1">

    <span className="text-[1.5rem] font-bold self-end" onClick={()=> setToggleSideBar((prevstate) => !prevstate)}><RxCross1 /></span>

</div>

<div className="mx-auto w-full items-start overflow-y-scroll ">

    <ul className="space-y-4 w-full xsm:min-h-full xsm:max-h-full flex flex-col overflow-y-scroll">

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


</> : ""}
               

            </header>


            <Outlet />


        </>
    )
}

export default Header