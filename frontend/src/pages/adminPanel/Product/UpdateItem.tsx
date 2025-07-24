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
    <div className="min-h-screen bg-gray-100 min-w-[24rem] max-w-auto p-4 md:p-8 border border-black">
      <div className="max-w-5xl mx-auto border border-black items-center flex flex-col justify-center gap-y-4">
        {products.map((item, index) => (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            key={index}
          >
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-4 w-[90%] border border-black py-4">
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
                className="bg-red-500 h-10 w-[5rem] text-[11px] p-1 font-bold rounded-[4px] border border-black"
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
              <form className="flex flex-col justify-center text-center gap-y-2 border border-black">
                <label htmlFor="productTitle">
                  <input
                    type="text"
                    name="productTitle"
                    placeholder="product title"
                  />
                </label>

                <label htmlFor="productDescription">
                  <input
                    type="text"
                    name="productDescription"
                    placeholder="product description"
                  />
                </label>

                <label htmlFor="productPrice">
                  <input
                    type="phone"
                    name="productPrice"
                    placeholder="product price"
                  />
                </label>

                <label htmlFor="productStrikedPrice">
                  <input
                    type="phone"
                    name="productStrikedPrice"
                    placeholder="product striked price"
                  />
                </label>

                <label htmlFor="percentDiscountOnProduct">
                  <input
                    type="phone"
                    name="percentDiscountOnProduct"
                    placeholder="percent discount on product"
                  />
                </label>

                <label htmlFor="productInStock">
                  <input
                    type="tel"
                    name="productInStock"
                    placeholder="how much product in stock"
                  />
                </label>

                <label htmlFor="productImage">
                  <input
                    type="file"
                    name="productImage"
                    onChange={(e: any) => setProductImages([...e.target.files])}
                    placeholder="product image"
                  />
                </label>

                <button>Add Item</button>
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
