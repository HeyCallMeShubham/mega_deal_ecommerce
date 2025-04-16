
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom";


const ProductListingSlide = () => {

    const selectedCategory = useSelector((state: any) => state.filterProducts.selectedCategory);

    const [allProducts, setAllProducts] = useState<any[]>([]);



    const products = [

        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },


        {
            id: 1,
            name: 'kurta pajama',
            imageSrc: 'https://th.bing.com/th/id/OIP.5CyrA0AVoYoTVukd3VLS8wHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "traditional",
            category: "clothing"
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.kmGnlLezWd1NKPY5LZlYpwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },

        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://th.bing.com/th/id/OIP.xU1B1N4yNIitYKdy61_5RgHaIC?w=181&h=196&c=7&r=0&o=5&pid=1.7',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            category: "clothing",
            subCategory: "t-shirt",
        },




        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_956eaeec-b4d9-4c29-8882-fe74b2bb45eb.jpg?v=1572182257',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "chain",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://www.watchtime.com/wp-content/uploads/2022/09/Zenith-A277-Chronograph.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },
        {
            id: 1,
            name: 'rolex daytona',
            imageSrc: 'https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg',
            imageAlt: "kurta pajama for mens tradional wedding outfit",
            price: '$35',
            color: 'Black',
            percentOff: 10,
            gender: "male",
            subCategory: "watch",
            category: "accessories"
        },






        // More products...

    ]




    useEffect(() => {

        if (selectedCategory) {

            const filtered = products.filter(product => product.category === selectedCategory || product.subCategory === selectedCategory);

            setAllProducts(filtered);

        } else {

            setAllProducts(products); // Show all products if no category is selected

        }

    }, [selectedCategory]);



    const [toggleSideBar]: any = useOutletContext()


    return (

        <div className='flex xsm:flex-col w-full h-auto relative  '>

            <div className='lg:w-full xsm:w-[100%] md:w-[100%] justify-self-center h-[3rem] flex justify-between px-4 xsm:gap-1 items-center'>

                <span className="">Top Products</span>

                <div className="flex items-center xsm:gap-1 md:gap-2 lg:gap-8">

                    <span className="relative  hover:cursor-pointer  ">
                        Featured products
                        <span className="absolute top-1/2 right-1 w-1 h-8 bg-white transform -translate-y-1/2 rotate-20 skew-x-20 origin-center"></span>
                    </span>

                    <span className="relative  hover:cursor-pointer  w-auto">
                        Best Sellers
                        <span className="absolute top-1/2 right-1 w-1 h-8 bg-white transform -translate-y-1/2 rotate-20 skew-x-20 origin-center"></span>
                    </span>

                    <span>New Arrivals</span>

                </div>


                <div className='flex w-[5rem] h-full gap-0.5 justify-between'>

                    <span className='bg-secondaryBg h-full w-full flex text-center   hover:cursor-pointer  items-center justify-center'>
                        < IoIosArrowBack />
                    </span>

                    <span className='bg-secondaryBg h-full w-full flex text-center  hover:cursor-pointer  items-center  justify-center'>
                        < IoIosArrowForward />
                    </span>

                </div>

            </div>



            <div className="bg-white w-full h-full ">

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">

                        {allProducts.map((product) => (

                            <div key={product.id} className="group relative">

                                <div className='aspect-square w-full relative rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'>
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="w-full h-full"
                                    />


                                    <div className={`xsm:flex md:flex lg:hidden lg:group-hover:flex w-auto gap-1 ${toggleSideBar ? "z-[1]" : "-z-[20]"} h-auto absolute bottom-0 right-0`}>

                                        <span className='text-white bg-secondaryBg text-[1.6rem] font-bold'>
                                            <IoBagHandleOutline />
                                        </span>

                                        <span className='text-white bg-secondaryBg text-[1.6rem] font-bold'>
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