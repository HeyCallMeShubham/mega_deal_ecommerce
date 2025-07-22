import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const SpecificUserOrders = () => {
  const [dropDownToggle, setDropDownToggle] = useState<boolean>(false);

  const orders = [
    {
      id: "R0374915036",
      status: "In - Transit",
      orderPlacedDate: "24 December 2016",
      total: 3010,
      cardEnding: "7343",

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
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-100 min-w-[24rem] max-w-auto p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold">My Orders</h1>
            <p className="text-gray-500 text-sm md:text-base">
              View and edit order status
            </p>
          </header>

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md mb-6 p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm text-gray-600 font-medium">
                    Order
                  </span>

                  <span className="text-blue-500 font-semibold">
                    #{order.id}
                  </span>

                  <span className="text-sm text-black-400">
                    Order Placed: {order.orderPlacedDate}
                  </span>

                  <span className="text-sm text-black-400">
                    Customer Phone: 9877365926
                  </span>

                  <span className="text-sm text-black-400">
                    Customer Email: shubhamkumarin2022@gmail.com
                  </span>
                </div>
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
                      <p className="font-bold text-gray-800">
                        Rs. {item.price}
                      </p>
                    </div>
                  </div>
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

              <div className="md:flex-row items-center mt-4 text-sm ">
                <p className="text-black font-bold text-lg">
                  Change Order status :
                </p>

                <div className="flex flex-col gap-y-3 ">
                  <span
                    className={`${
                      dropDownToggle ? "hidden" : "block"
                    } font-semibold text-[1.2rem]`}
                    onClick={(e) =>
                      setDropDownToggle((prevState) => !prevState)
                    }
                  >
                    <FaChevronDown />
                  </span>
                  <span
                    className={`${
                      dropDownToggle ? "block" : "hidden"
                    } font-semibold text-[1.2rem]`}
                    onClick={(e) =>
                      setDropDownToggle((prevState) => !prevState)
                    }
                  >
                    <FaChevronUp />
                  </span>

                  <ul
                    className={`${
                      dropDownToggle ? "flex" : "hidden"
                    } flex-col gap-y-2 `}
                  >
                    <li className="text-[1.2rem] font-bold cursor-pointer hover:bg-slate-300">
                      Pending
                    </li>
                    <li className="text-[1.2rem] font-bold cursor-pointer hover:bg-slate-300">
                      Being Dispatched
                    </li>
                    <li className="text-[1.2rem] font-bold cursor-pointer hover:bg-slate-300">
                      Out For Delivery
                    </li>
                    <li className="text-[1.2rem] font-bold cursor-pointer hover:bg-slate-300">
                      Successfully delivered
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificUserOrders;
