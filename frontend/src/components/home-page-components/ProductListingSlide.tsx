import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductListingSlide = () => {

    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10
        },


        // More products...
    ]

    return (
        <div className='flex flex-col w-full h-auto border border-green-700'>

            <div className='w-[100%] h-[3rem] flex justify-between px-4 items-center'>

                <span>Top Products</span>

                <div className="flex items-center">
                    <span className="relative px-4">
                        Featured products
                        <span className="absolute top-1/2 right-1 w-1 h-8 bg-white transform -translate-y-1/2 rotate-20 skew-x-20 origin-center"></span>
                    </span>

                    <span className="relative px-4">
                        Best Sellers
                        <span className="absolute top-1/2 right-1 w-1 h-8 bg-white transform -translate-y-1/2 rotate-20 skew-x-20 origin-center"></span>
                    </span>

                    <span>New Arrivals</span>
                </div>


                <div className='flex w-[5rem] h-full gap-0.5 justify-between'>

                    <span className='bg-secondaryBg h-full w-full flex text-center  items-center justify-center'>
                        < IoIosArrowBack />
                    </span>

                    <span className='bg-secondaryBg h-full w-full flex text-center items-center  justify-center'>
                        < IoIosArrowForward />
                    </span>

                </div>

            </div>



            <div className="bg-white w-full h-full border border-red-500">

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 border border-red-400 ">

                        {products.map((product) => (

                            <div key={product.id} className="group relative">

                                <div className='aspect-square w-full relative rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'>
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="w-full h-full"
                                    />


                                    <div className='hidden group-hover:flex w-auto z-[1] h-auto absolute bottom-0 right-0'>

                                        <span className='text-white bg-secondaryBg text-[1.8rem] font-bold'>
                                            <IoBagHandleOutline />
                                        </span>

                                        <span className='text-white bg-secondaryBg text-[1.8rem] font-bold'>
                                            <IoMdEye />
                                        </span>

                                    </div>

                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>

                                        <span></span>

                                        <h3 className="text-sm text-gray-700">

                                            <a href={product.href}>

                                                <span aria-hidden="true" className="absolute inset-0" />

                                                {product.name}

                                            </a>

                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>

                                    </div>

                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>

                                    <p className="text-sm font-medium w-[40px] h-[20px] text-center items-center text-white bg-secondaryBg">-{product.percentOff}%</p>

                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>





        </div>
    )
}

export default ProductListingSlide