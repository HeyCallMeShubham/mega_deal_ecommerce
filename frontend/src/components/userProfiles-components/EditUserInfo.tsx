import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const EditUserInfo = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="p-6 lg:w-full md:w-full xsm:min-w-[24rem] xsm:max-w-auto xsm:min-h-full lg:h-full md:h-full max-h-auto xsm:h-screen mx-auto bg-white shadow rounded space-y-6 text-sm text-gray-700">
      {/* Personal Information */}

      <div className="w-full lg:hidden md:hidden xsm:flex h-[3rem] text-center justify-start items-center ">
        <span className="text-[2.30rem]" onClick={() => navigate(-1)}>
          <IoIosArrowDropleft />
        </span>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-base">Personal Information</h2>
          <button
            onClick={() => setEditPersonalInfo((prevState) => !prevState)}
            className="text-blue-600 flex items-center space-x-1 text-sm hover:underline"
          >
            <FaEdit />
            <span>{editPersonalInfo ? "Cancel" : "Edit"}</span>
          </button>
        </div>
        <div
          className={`${
            editPersonalInfo ? "cursor-pointer" : "hover:cursor-not-allowed"
          } flex lg:space-x-4 lg:flex-row xsm:flex-col md:flex-col`}
        >
          <label className="block my-2 font-semibold text-base">
            First Name
          </label>
          <input
            type="text"
            placeholder="enter your first name"
            value={"shubham"}
            inert={editPersonalInfo ? false : true}
            className=" lg:w-[20rem] xsm:w-full md:w-full border rounded px-4 py-2 border-gray-600"
          />
          <label className="block my-2 font-semibold text-base">
            Last Name
          </label>
          <input
            type="text"
            placeholder="enter your last name"
            value={"kumar"}
            inert={editPersonalInfo ? false : true}
            className=" lg:w-[20rem] xsm:w-full md:w-full border rounded px-4 py-2 border-gray-600"
          />

          <div
            className={`${
              editPersonalInfo ? "flex" : "hidden"
            } w-[4rem] h-[2.5rem] mt-2 text-center items-center justify-center bg-primaryBg  text-white`}
          >
            Save
          </div>
        </div>

        <div
          className={`mt-4 ${
            editGender ? "cursor-pointer" : "hover:cursor-not-allowed"
          }`}
        >
          <div className=" flex justify-between items-center mb-2">
            <h2 className="font-semibold text-base">Your Gender</h2>

            <button
              onClick={() => setEditGender((prevState) => !prevState)}
              className="text-blue-600 flex items-center space-x-1 text-sm hover:underline"
            >
              <FaEdit />
              <span>{editGender ? "Cancel" : "Edit"}</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2  border-gray-600">
              <input
                inert={editGender ? false : true}
                type="radio"
                name="gender"
                value="male"
              />
              <span>Male</span>
            </label>

            <label className="flex items-center space-x-2  border-gray-600">
              <input
                inert={editGender ? false : true}
                type="radio"
                name="gender"
                value="female"
              />
              <span>Female</span>
            </label>
          </div>

          <div
            className={`${
              editGender ? "flex" : "hidden"
            } w-[4rem] h-[2.5rem] mt-2 text-center items-center justify-center bg-primaryBg  text-white`}
          >
            Save
          </div>
        </div>
      </div>

      {/* Email */}

      <div
        className={`${
          editEmail ? "cursor-pointer" : "hover:cursor-not-allowed"
        }`}
      >
        <div className="flex justify-between items-center mb-2  ">
          <h2 className="font-semibold text-base">Email Address</h2>
          <button
            onClick={() => setEditEmail((prevState) => !prevState)}
            className="text-blue-600 flex items-center space-x-1 text-sm hover:underline"
          >
            <FaEdit />
            <span>{editEmail ? "Cancel" : "Edit"}</span>
          </button>
        </div>
        <input
          type="email"
          placeholder="enter your email"
          inert={editEmail ? false : true}
          value={"shubhamkumarin2022@gmail.com"}
          className="lg:w-[20rem] xsm:w-full md:w-full border rounded px-4 py-2 inline border-gray-600 "
        />

        <div
          className={`${
            editEmail ? "flex" : "hidden"
          } w-[4rem] h-[2.5rem] mt-2 text-center items-center justify-center bg-primaryBg  text-white`}
        >
          Save
        </div>
      </div>

      {/* Mobile */}

      <div
        className={`${
          editMobile ? "cursor-pointer" : "hover:cursor-not-allowed"
        }`}
      >
        <div className=" flex justify-between items-center mb-2">
          <h2 className="font-semibold text-base">Mobile Number</h2>
          <button
            onClick={() => setEditMobile((prevState) => !prevState)}
            className="text-blue-600 flex items-center space-x-1 text-sm hover:underline"
          >
            <FaEdit />
            <span>{editMobile ? "Cancel" : "Edit"}</span>
          </button>
        </div>
        <input
          type="phone"
          placeholder="enter your number"
          inert={editMobile ? false : true}
          value={"91+9877503964"}
          className={`lg:w-[20rem] xsm:w-full md:w-full border rounded px-4 py-2 border-gray-600`}
        />
        <div
          className={`${
            editMobile ? "flex" : "hidden"
          } w-[4rem] h-[2.5rem] mt-2 text-center items-center justify-center bg-primaryBg  text-white`}
        >
          Save
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
