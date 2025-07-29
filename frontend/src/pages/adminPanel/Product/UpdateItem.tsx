import React, { useState } from "react";

const UpdateItem = () => {
  const [toggleUpdateItem, setToggleUpdateItem] = useState<boolean>(false);

  const [productTitle, setProductTitle] = useState<number>(0);

  const [productDescription, setProductDescription] = useState<string>("");

  const [productPrice, setProductPrice] = useState<number>(0);

  const [productStrikedPrice, setProductStrikedPrice] = useState<number>(0);

  const [productDiscount, setProductDiscount] = useState<number>(0);

  const [productStock, setProductStock] = useState<number>(0);

  const [productBrand, setProductBrand] = useState<string>("");

  const [productInStock, setProductInStock] = useState<number | any>(0);

  const [productCategory, setProductCategory] = useState<string>("");

  const [productImages, setProductImages] = useState<any[] | string[]>([]);

  const products = [
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
    {
      title: "Apple iMac 27 1TB HDD Retina 5K Display, M3 Max",
      price: 344,
      strikePrice: 233,
      percentOff: 20,
      ItemBrand: "apple",
      ItemCategory: "electronic",
      ItemSubCategory: "mobilePhone",
      productImage: [
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Imr1IiMBRcFjHYPeanyHBgHaHa?rs=1&pid=ImgDetMain",
      ],
    },
  ];

  return (
    <div className="min-h-screen max-h-auto min-w-full max-w-full xsm:min-w-[24rem] xsm:max-w-auto bg-gray-100 p-4 md:p-8 border border-green-600">
      <div className="max-w-5xl mx-auto border border-black items-center flex flex-col justify-center gap-y-4 px-2">
        {products.map((item, index) => (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            key={index}
          >
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-4 w-[100%] border border-black py-4">
              <div className="flex items-start gap-4">
                <img
                  src={item.productImage[0]}
                  alt={item.title}
                  className="w-20 h-28 object-cover rounded"
                />
                <div className="flex flex-col gap-1 justify-between">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">By: {item.ItemBrand}</p>
                  <p className="text-sm">
                    Size: {28} Qty: {1}
                  </p>
                  <p className="font-bold text-gray-800">Rs. {item.price}</p>
                </div>
              </div>

              <button
                className="bg-gray-200 h-10 w-[5rem] text-[11px] p-1 font-bold rounded-[4px] border border-black"
                onClick={() => setToggleUpdateItem((prevState) => !prevState)}
              >
                Update Item
              </button>
            </div>

            <div
              className={` ${
                toggleUpdateItem ? "flex" : "hidden"
              } w-full min-h-full max-h-auto border border-black justify-center`}
            >
              <form className="flex flex-col  justify-center text-center items-center w-full gap-y-6 border border-red-700 p-8">
                <div className="flex lg:flex-row md:flex-row xsm:flex xsm:flex-col justify-around  gap-y-4 gap-x-2">
                  <label htmlFor="productTitle">
                    <input
                      type="text"
                      name="productTitle"
                      placeholder="product title"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>

                  <label htmlFor="productPrice">
                    <input
                      type="phone"
                      name="productPrice"
                      placeholder="product price"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>
                </div>

                <div className="flex lg:flex-row md:flex-row xsm:flex xsm:flex-col justify-around gap-y-4 gap-x-2">
                  <label htmlFor="productStrikedPrice">
                    <input
                      type="phone"
                      name="productStrikedPrice"
                      placeholder="product striked price"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>

                  <label htmlFor="percentDiscountOnProduct">
                    <input
                      type="phone"
                      name="percentDiscountOnProduct"
                      placeholder="percent discount on product"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>
                </div>

                <div className="flex lg:flex-row md:flex-row xsm:flex xsm:flex-col justify-around gap-y-4 gap-x-2">
                  <label htmlFor="productInStock">
                    <input
                      type="tel"
                      name="productInStock"
                      placeholder="how much product in stock"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>

                  <label htmlFor="productDescription">
                    <input
                      type="text"
                      name="productDescription"
                      placeholder="product description"
                      className="lg:w-[clamp(14rem,2vw,30rem)] md:w-[clamp(10rem,2vw,20rem)] xsm:w-[clamp(10rem,2vw,16rem)] text-left p-2 flex  h-[2rem] rounded-md border border-black"
                    />
                  </label>
                </div>

                <label htmlFor="productImage">
                  <input
                    type="file"
                    name="productImage"
                    onChange={(e: any) => setProductImages([...e.target.files])}
                    placeholder="product image"
                  />
                </label>

                {products[0].productImage.map((image, index) => (
                  <div className="w-[clamp(14rem,2vw,14rem)] h-[10rem] border border-black relative group">
                    <img src={image} alt={image} className="w-full h-full" />

                    <span className="lg:hidden lg:group-hover:flex xsm:flex md:flex absolute lg:group-hover:top-0 lg:group-hover:left-[101%] xsm:top-0 xsm:left-[101%] md:top-0 md:left-[101%] bg-red-500 rounded-md font-semibold cursor-pointer text-[0.90rem] w-[clamp(3.5rem,2vw,4rem)] h-[clamp(2rem,2vw,2rem)] items-center justify-center text-white">
                      Delete
                    </span>
                  </div>
                ))}

                <div className="flex justify-between w-full">

                  <button
                    className="
                  px-3 py-2 md:px-6 md:py-3 lg:px-2.5 lg:py-1 text-sm md:text-base 
                  lg:text-lg font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out bg-blue-600
                   hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 text-white hover:text-blue-50 focus:ring-2
                    focus:ring-blue-400 focus:ring-opacity-75transform hover:-translate-y-0.5 hover:shadow-lgactive:translate-y-0 lg:place-self-start md:place-self-center xsm:place-self-end"
                  >
                    Save Changes
                  </button>

                  <button
                    className="px-3 py-2 md:px-6 md:py-3 lg:px-2.5 lg:py-1 text-sm md:text-base 
                  lg:text-lg font-medium rounded-lg shadow-md transition-all duration-200
                  ease-in-out bg-red-600 focus:ring-opacity-75 transform hover:-translate-y-0.5 
                  hover:shadow-lg text-white active:translate-y-0 lg:place-self-end md:place-self-end xsm:place-self-end"
                  >
                    Delete Item
                  </button>

                </div>
              </form>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm"></div>
      </div>
    </div>
  );
};

export default UpdateItem;
