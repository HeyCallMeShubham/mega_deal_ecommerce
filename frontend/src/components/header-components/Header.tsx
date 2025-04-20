
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom"
import { TbTruckDelivery } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from '../../reduxjs/FilterProducts';
 

const Header = () => {

    const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);


    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(filterByCategory({ prop: "selectedCategory", value: selectedCategory }));


        setToggleSideBar(prevState => !prevState);


    }, [selectedCategory]);







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







    const sidebarCategories = [
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






    return (
        <>

            <header className={`md:min-w-screen lg:min-w-screen md:max-w-screen lg:max-w-screen xsm:min-w-[24rem]  min-h-[10rem] max-h-[auto] flex xsm:flex-col xsm:justify-center text-center relative border border-black`}>


                <div className='xsm:hidden md:hidden lg:flex w-full h-[2rem] text-white flex flex-row lg:justify-between bg-black px-4'>{/*this component must be hidden in small and medium screens*/}

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



                            <span className='flex justify-center h-10 font-bold text-[1.5rem] w-20  items-center text-white text-center bg-secondaryBg '>

                                <IoPersonOutline />

                            </span>



                            <span className='flex justify-center relative h-10 font-bold text-[1.5rem] w-20 hover:cursor-pointer hover:text-textHoverPrimary items-center text-white text-center bg-secondaryBg '>

                                <BsBagCheck />

                                <span className="absolute top-[0] left-[1.4rem] text-[clamp(0.9rem,0.8vw,1rem)] border rounded-full p-[min(0.1em)] border-black bg-black">0</span>

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

                                {categories.map((category: any) => (




                                    <li className='hover:cursor-pointer flex justify-between items-center p-3 rounded-lg transition-colors duration-20 text-white  hover:text-textHoverPrimary group relative'>

                                        <span className="font-medium">{category.name}</span>


                                        <div className="group-hover:block min-h-[4rem] max-h-[auto] min-w-[6rem] max-w-[20rem] hidden absolute z-[1] top-full w-[10rem] flex-wrap bg-white">

                                            <ul className='group-hover:flex justify-between items-center gap-3 px-4 lg:min-h-10 lg:max-h-auto w-full h-full flex-wrap text-black'>

                                                {category.subCategories.map((subCategory: any, index: number) => (

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


                    <div className='flex justify-between h-full w-[6rem] items-center gap-2'>

                        <span className='flex justify-center h-12 font-bold text-[1.5rem] w-20 hover:cursor-pointer hover:text-textHoverPrimary items-center text-white text-center bg-secondaryBg '>

                            <IoPersonOutline />

                        </span>


                        <span className='flex justify-center relative h-12 font-bold text-[1.5rem] w-20 hover:cursor-pointer hover:text-textHoverPrimary items-center text-white text-center bg-secondaryBg '>

                            <BsBagCheck />


                            <span className="absolute top-[0] left-[1.4rem] text-[clamp(0.9rem,0.8vw,1rem)] border rounded-full p-[min(0.1em)] border-black bg-black">0</span>

                        </span>

                    </div>

                </nav>


                <div className={`${toggleSideBar === true ? `hidden` : `flex z-[1]`} xsm:fixed md:fixed animate-slide-in-left flex-col md:max-h-screen md:min-h-screen xsm:max-h-[100%] xsm:min-h-[100%] overflow-y-scroll z-1 xsm:w-full md:w-[25rem] top-0 border-[6px] border-primaryBg bg-secondaryBg p-1`}>

                    <div className="xsm:flex xsm:items-center xsm:w-full xsm:h-10 md:h-10 md:flex flex-col items-center text-center justify-center px-1">

                        <span className="text-[1.5rem] font-bold self-end" onClick={() => setToggleSideBar((prevstate) => !prevstate)}><RxCross1 /></span>

                    </div>

                    <div className="mx-auto w-full items-start overflow-y-scroll ">

                        <ul className="space-y-4 w-full xsm:min-h-full xsm:max-h-full flex flex-col overflow-y-scroll">

                            {sidebarCategories.map((category, index) => (

                                <li key={index} onClick={() => setSelectedCategory(category.name)}>

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


            </header>


            <Outlet context={[toggleSideBar]} />





        </>
    )
}

export default Header