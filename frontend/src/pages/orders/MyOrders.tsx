import React from "react";
import { FiSearch } from "react-icons/fi";

const orders = [
  {
    id: "R0374915036",
    placedDate: "Thu, 17th Nov'16",
    items: [
      {
        title: "Netting Mykonos Tunic Dress",
        author: "Milly Thomas",
        size: "S",
        qty: 1,
        price: 1250,
        image: "https://i.imgur.com/1ZQZ1Zm.png",
      },
      {
        title: "Embroidered Sequin Mini Dress",
        author: "Sonia Agrawal",
        size: "S",
        qty: 1,
        price: 1760,
        image: "https://i.imgur.com/whKjsCu.png",
      },
    ],
    status: "In - Transit",
    deliveryDate: "24 December 2016",
    total: 3010,
    cardEnding: "7343",
  },
];

export default function MyOrders() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">My Orders</h1>
          <p className="text-gray-500 text-sm md:text-base">
            View and edit all your pending, delivered, and returned orders here.
          </p>
        </header>

        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl shadow-md mb-6 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-gray-600 font-medium">Order</span>
                <span className="text-blue-500 font-semibold">#{order.id}</span>
                <span className="text-sm text-gray-400">Order Placed: {order.placedDate}</span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full mt-2 md:mt-0">
                TRACK ORDER
              </button>
            </div>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b py-4"
              >
                <div className="flex items-start gap-4">
                  <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">By: {item.author}</p>
                    <p className="text-sm">Size: {item.size} Qty: {item.qty}</p>
                    <p className="font-semibold text-gray-800">Rs. {item.price}</p>
                  </div>
                </div>
                <div className="text-right md:text-center xsm:flex xsm:justify-between border border-black w-full">
                  <p className="text-orange-500 text-[clamp(0.80rem,2vw,1rem)] font-semibold">Status<br />{order.status}</p>
                  <p className="text-sm mt-1">Delivery Expected by:<br /><span className="font-bold">{order.deliveryDate}</span></p>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
              <button className="text-red-500 hover:underline">✕ CANCEL ORDER</button>
              <p className="text-gray-500">Paid using credit card ending with {order.cardEnding}</p>
              <p className="font-bold text-lg text-right">Rs. {order.total.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
