import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { Outlet } from "react-router-dom"

const Header = () => {
    return (
        <>

            <header className='w-screen min-h-[10rem] max-h-[auto] flex flex-col'>

                <div className='w-full h-[2rem] text-white flex flex-row justify-between bg-black px-4'>

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



                <div className='flex flex-row items-center justify-between h-[8rem] px-4'>

                    <img src='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' alt='https://demoprestashop.aeipix.com/AX02/megadeal23/img/kenzy-fashion-logo-1542786700.jpg' />

                    <div className='flex items-center justify-between max-h-[100%] max-w-[100%] h-[100%] w-[76rem] '>

                        <form className='items-center text-center flex justify-center flex-row w-[35rem] h-[3rem] border border-black'>

                            <input type='text' placeholder='Search our catalog' className='w-full h-full text-center' />

                            <button className='w-[3rem] h-[3rem] border border-black bg-[#f68b1f] text-center items-center'>

                                <span className='w-full h-full '>

                                    <CiSearch />

                                </span>

                            </button>

                        </form>

                        <div>

                            <span>Free Shipping</span>
                            <span>Order Of $99</span>

                        </div>


                        <div>

                            big sale

                        </div>

                    </div>

                </div>



                <nav className='w-full h-[4rem] bg-[#36526b] flex justify-between px-4'>

                    <div className='flex  gap-5'>

                        <div className="w-[20rem] h-full bg-[#f68b1f] shadow-md text-center flex justify-around items-center overflow-hidden">

                            {/* Category Header */}

                            <div className=" px-4 py-3 h-full items-center text-center">

                                <h3 className="text-white font-semibold border">Shop By Category</h3>

                            </div>

                            <span>
                                <GiHamburgerMenu />
                            </span>

                        </div>

                        <div className='flex flex-row justify-between'>

                            <ul className='w-[28rem] flex flex-row items-center justify-between'>

                                <li className='hover:'>Clothes</li>
                                <li className='hover:'>Clothes</li>
                                <li className='hover:'>Clothes</li>
                                <li className='hover:'>Clothes</li>
                                <li className='hover:'>Clothes</li>
                                <li className='hover:'>Clothes</li>

                            </ul>

                        </div>

                    </div>


                    <div className='flex justify-between h-full w-[6rem] border items-center gap-2'>

                        <span className='flex justify-center h-10 font-bold text-xl w-20 border border-black items-center text-black text-center bg-secondaryBg '>

                            <IoPersonOutline />

                        </span>


                        <span className='flex justify-center h-10 font-bold text-xl w-20 border border-black items-center text-black text-center bg-secondaryBg '>

                            <IoPersonOutline />

                        </span>

                    </div>

                </nav>

            </header>


            <Outlet />


        </>
    )
}

export default Header