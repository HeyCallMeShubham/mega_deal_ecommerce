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
        image:
          "https://th.bing.com/th/id/OIP.X0rcNRRNItEK06oq9-4lMwHaIw?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        title: "Embroidered Sequin Mini Dress",
        author: "Sonia Agrawal",
        size: "S",
        qty: 1,
        price: 1760,
        image:
          "https://th.bing.com/th/id/OIP.X0rcNRRNItEK06oq9-4lMwHaIw?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    <div className="min-h-screen bg-gray-100 min-w-[24rem] max-w-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">My Orders</h1>
          <p className="text-gray-500 text-sm md:text-base">
            View and edit all your pending, delivered, and returned orders here.
          </p>
        </header>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md mb-6 p-4 md:p-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-gray-600 font-medium">Order</span>
                <span className="text-blue-500 font-semibold">#{order.id}</span>
                <span className="text-sm text-gray-400">
                  Order Placed: {order.placedDate}
                </span>
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div className="flex flex-col gap-1 justify-between">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">By: {item.author}</p>
                    <p className="text-sm">
                      Size: {item.size} Qty: {item.qty}
                    </p>
                    <p className="font-bold text-gray-800">Rs. {item.price}</p>
                  </div>
                </div>
                <div className="text-right md:text-center xsm:flex xsm:justify-between w-full">
                  <p className="text-orange-500 text-[clamp(0.80rem,2vw,1rem)] font-bold text-center">
                    Status
                    <br />
                    <span>{order.status}</span>
                  </p>
                  <p className="text-sm mt-1">
                    Delivery Expected by:
                    <br />
                    <span className="font-bold">{order.deliveryDate}</span>
                  </p>
                  <button className="text-red-500 lg:block md:hidden xsm:hidden text-[1rem] font-semibold hover:underline">
                    ✕ CANCEL ORDER
                  </button>
                </div>
                <button className="text-red-500 lg:hidden md:block xsm:block text-[clamp(1rem,2vw,0.70rem)] font-semibold  hover:underline">
                  ✕ CANCEL ORDER
                </button>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
              <p className="text-gray-500">
                Paid using credit card ending with {order.cardEnding}
              </p>
              <p className="font-bold text-[clamp(1.3rem,2vw,1.4rem)] text-lg text-right">
                total : Rs. {order.total.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
