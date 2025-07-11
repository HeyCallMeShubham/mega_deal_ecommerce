
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";



const AdminPanel = () => {
 
  const [toggle, setToggle] = useState<boolean>(false);



  return (
    <div className="flex flex-row h-screen border border-black">
      <div className="border border-black lg:w-[30rem]">
        <ul>

          <li className="flex" onClick={() => setToggle(prevValue => !prevValue)}>
            Product
            <div className={`${toggle ? "flex flex-col" : "hidden"}`}>
              <ul>
                <li>Add Product</li>
                <li>Update Product</li>
                <li>Delete Product</li>
              </ul>
            </div>
            
            <FaArrowDown />
          
          </li>

          <li className="flex">Orders</li>
          <li className="flex">Delivered</li>
          <li className="flex">Dashboard</li>

        </ul>
      </div>

      <div className="border border-black lg:w-full"></div>

    </div>
  );
};


export default AdminPanel;




