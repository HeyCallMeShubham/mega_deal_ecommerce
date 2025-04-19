
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom";

const ProductSlide = () => {

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

            const filtered = products.filter(product => product.category === selectedCategory);

            setAllProducts(filtered);

        } else {

            setAllProducts(products); // Show all products if no category is selected

        }

    }, [selectedCategory]);


    const [toggleSideBar]: any = useOutletContext();


    



    return (




        <div className="bg-white min-w-full max-w-full min-h-[40rem] h-[auto] flex flex-col relative  ">

            <div className='w-[100%] h-[2rem] flex justify-between px-4 items-center  '>

                <span>Special Products</span>

                <div className='flex w-[5rem] h-full gap-0.5 justify-between'>

                    <span className='bg-secondaryBg h-full w-full flex text-center  items-center justify-center'>
                        < IoIosArrowBack />
                    </span>

                    <span className='bg-secondaryBg h-full w-full flex text-center items-center  justify-center'>
                        < IoIosArrowForward />
                    </span>

                </div>

            </div>





 

            <div className="mx-auto xsm:w-full md:w-full px-4 py-16 xsm:px-6 xsm:py-24 lg:max-w-7xl lg:px-8  flex flex-col items-center  ">

                <h2 className="xsm:text-[15px] md:text-1xl lg:text-2xl font-bold tracking-tight self-start border border=black text-gray-900">Customers also purchased</h2>

                <div className="flex xsm:min-w-[18rem] xsm:max-w-[18rem] md:min-w-[40rem] md:max-w-[50rem] lg:min-full lg:max-w-full xsm:min-h-[22rem] xsm:max-h-[22rem] md:min-h-[24rem] md:max-h-[26rem] xsm:justify-center mt-6 xsm:flex-row md:flex-row lg:flex-row gap-4 overflow-x-scroll border border-black">

                    {allProducts.map((product) => (

                        <div key={product.id} className="group relative xsm:h-[18rem] md:h-[20em] lg:w-[17rem] xsm:w-full md:min-w-[18rem] md:max-w-[18rem]  " >

                            <div className='aspect-square h-full w-full relative rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'>

                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="w-full h-full"
                                />

                                <div className={`lg:hidden xsm:flex md:flex lg:group-hover:flex w-auto ${toggleSideBar ? "z-[1]" : "-z-[20]"}  h-auto absolute gap-1 bottom-0 right-0`}>

                                    <span className='text-white bg-secondaryBg hover:bg-primaryBg text-[1.5rem] font-bold'>
                                        <IoBagHandleOutline />
                                    </span>



                                    <span className='text-white bg-secondaryBg hover:bg-primaryBg text-[1.5rem] font-bold'>
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

    )
}

export default ProductSlide