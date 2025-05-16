import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const ProductCarousel = () => {
  const carouselRef: React.RefObject<null | any> = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 128,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: true,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.2,
      reviews: 86,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: false,
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 215,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: true,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviews: 174,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: true,
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      price: 89.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 92,
      image: "https://th.bing.com/th/id/OIP.ZW7mWRSABzfpTRPxZHdQPwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: false,
    },
    {
      id: 6,
      title: "Wireless Earbuds",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 143,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: true,
    },
    {
      id: 7,
      title: "Power Bank",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.1,
      reviews: 67,
      image: "https://th.bing.com/th/id/OIP.PIfNMS_ZNsYB__qOhWrrMwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      onSale: false,
    },
  ];

  const renderRating = (rating: any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <div className="flex space-x-4">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Previous products"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Next products"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6 -mx-4 px-4"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.onSale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                {product.title}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex mr-1">{renderRating(product.rating)}</div>
                <span className="text-gray-500 text-sm">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <button className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <BsCartPlus className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
