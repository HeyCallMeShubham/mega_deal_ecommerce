import React from "react";

const CheckoutPage = () => {
  const addresses = Array(5).fill({
    fName: "shubham",
    lName: "kumar",
    email: "user@gmail.com",
    phone: "97898868",
    city: "chandigarh",
    state: "chandigarh",
    address: "2nd floor near land mark hospital"
  });

  const orderItems = [
    { name: "Apple iMac 27”", quantity: 1, price: 1499, image: "imac-front.svg" },
    { name: "Apple iPhone 14", quantity: 2, price: 999, image: "iphone-light.svg" },
    { name: "Apple iPad Air", quantity: 1, price: 898, image: "ipad-light.svg" },
    { name: "Xbox Series X", quantity: 4, price: 499, image: "xbox-light.svg" }
  ];

  const orderSummary = {
    subtotal: 3893,
    savings: 299,
    tax: 799,
    total: 4393
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
        
        <div className="lg:flex lg:space-x-6">
          {/* Left Column - Shipping Info */}
          <div className="lg:w-2/3 space-y-6">
            {/* Shipping Address Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
              
              {/* Saved Addresses */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Choose from your saved addresses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((address, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{address.fName} {address.lName}</p>
                          <p className="text-sm text-gray-600">{address.email}</p>
                          <p className="text-sm text-gray-600">{address.phone}</p>
                          <p className="text-sm text-gray-600 mt-2">{address.address}</p>
                          <p className="text-sm text-gray-600">{address.city}, {address.state}</p>
                        </div>
                        <input 
                          type="radio" 
                          name="address" 
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                          defaultChecked={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Address Form */}
              <div>
                <h3 className="text-md font-medium mb-3">Or add a new address</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <select
                        id="state"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option>Punjab</option>
                        <option>Haryana</option>
                        <option>Chandigarh</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="cash-on-delivery"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor="cash-on-delivery" className="ml-3 block text-sm font-medium text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit Card
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="border-b border-gray-200 pb-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={`https://flowbite.s3.amazonaws.com/blocks/e-commerce/${item.image}`}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900">${orderSummary.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Savings</p>
                  <p className="text-sm font-medium text-green-600">-${orderSummary.savings.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Tax</p>
                  <p className="text-sm font-medium text-gray-900">${orderSummary.tax.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-base font-bold text-gray-900">${orderSummary.total.toFixed(2)}</p>
                </div>
              </div>

              {/* Terms and Place Order */}
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Place Order
                </button>

                <button
                  type="button"
                  className="mt-3 w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;