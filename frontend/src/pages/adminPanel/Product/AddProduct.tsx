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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>

        <form className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Product Title */}
            <div className="space-y-1">
              <label
                htmlFor="productTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Product Title
              </label>
              <input
                type="text"
                name="productTitle"
                placeholder="Enter product title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => setProductTitle(Number(e.target.value))}
              />
            </div>

            {/* Product Description */}
            <div className="space-y-1 sm:col-span-2">
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Product Description
              </label>
              <textarea
                name="productDescription"
                placeholder="Enter detailed product description..."
                rows={4} // Shows 4 lines by default
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            outline-none transition resize-y min-h-[100px]"
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>

            {/* Price Fields */}
            <div className="space-y-1">
              <label
                htmlFor="productPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Price ($)
              </label>
              <input
                type="number"
                name="productPrice"
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => setProductPrice(Number(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="productStrikedPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Original Price ($)
              </label>
              <input
                type="number"
                name="productStrikedPrice"
                placeholder="Enter original price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => setProductStrikedPrice(Number(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="percentDiscountOnProduct"
                className="block text-sm font-medium text-gray-700"
              >
                Discount (%)
              </label>
              <input
                type="number"
                name="percentDiscountOnProduct"
                placeholder="Enter discount percentage"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => setProductDiscount(Number(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="productInStock"
                className="block text-sm font-medium text-gray-700"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                name="productInStock"
                placeholder="Enter stock quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => setProductInStock(Number(e.target.value))}
              />
            </div>

            {/* Product Images */}
            <div className="space-y-1 sm:col-span-2">
              <label
                htmlFor="productImage"
                className="block text-sm font-medium text-gray-700"
              >
                Product Images
              </label>
              <input
                type="file"
                name="productImage"
                multiple
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={(e: any) => setProductImages([...e.target.files])}
              />
              <p className="mt-1 text-sm text-gray-500">
                Upload multiple images (PNG, JPG)
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
