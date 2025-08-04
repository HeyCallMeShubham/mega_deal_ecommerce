import React from "react";

import userLogo from "../../images/userLogoImage.jpg";

const PlacedOrders = () => {
  const orders = [
    {
      id: "R0374915036",

      items: [
        {
          orderId: "747792038282120",
          name: "Milly Thomas",
          email: "shubhamkumarin2022@gmail.com",
          contactNumber: 9877503964,
          image:
            "",
        },
        {
          orderId: "747792038282120",
          name: "Sonia Agrawal",

          email: "shubhamkumarin2022@gmail.com",
          contactNumber: 9877503964,
          image:
            "https://th.bing.com/th/id/OIP.X0rcNRRNItEK06oq9-4lMwHaIw?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          orderId: "747792038282120",
          name: "Sonia Agrawal",

          email: "shubhamkumarin2022@gmail.com",
          contactNumber: 9877503964,
          image:
            "https://th.bing.com/th/id/OIP.X0rcNRRNItEK06oq9-4lMwHaIw?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 min-w-[24rem] max-w-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            newly placed Orders
          </h1>
        </header>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md mb-6 p-4 md:p-6"
          >
            {order.items.map((user, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b mb-2 py-2 px-2 border border-black hover:bg-gray-50 hover:cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={user?.image ? user?.image : userLogo}
                    alt={userLogo}
                    className="w-[4rem] aspect-square object-cover rounded-full border border-black"
                  />
                  <div className="flex flex-col gap-1 justify-between">
                    <h3 className="font-bold text-lg">
                      order by : {user.name}
                    </h3>
                    <p className="text-[clamp(0.80rem,2vw,1rem)] font-normal text-black">
                      customer Email : {user.email}
                    </p>
                    <p className="text-[clamp(0.80rem,2vw,1rem)] font-normal text-black">
                      order Id : {user.orderId}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-center lg:place-self-center md:place-self-center xsm:self-center">
                  <span className="text-[clamp(0.90rem,2vw,1rem)] font-bold">
                    payment method
                  </span>
                  <span className="text-[clamp(0.90rem,2vw,1rem)] font-semibold">
                    payment Status: {"Done"}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacedOrders;
