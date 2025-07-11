import React, { useState } from "react";

const AddProduct = () => {

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




  return (
    <div className="">
      <form className="">
        <label htmlFor="productTitle">
          <input type="text" name="productTitle" placeholder="product title" />
        </label>

        <label htmlFor="productDescription">
          <input
            type="text"
            name="productDescription"
            placeholder="product description"
          />
        </label>

        <label htmlFor="productPrice">
          <input type="phone" name="productPrice" placeholder="product price" />
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
          <input type="file" name="productImage" onChange={(e:any) => setProductImages([...e.target.files])} placeholder="product image" />
        </label>

        <button onClick={}>Add Item</button>
      </form>
    </div>
  );
};

export default AddProduct;
