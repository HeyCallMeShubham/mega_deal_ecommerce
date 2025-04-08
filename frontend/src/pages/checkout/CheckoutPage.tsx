import React from 'react'

const CheckoutPage = () => {




    const addresses = [

        {

            fName: "shubham",
            lName: "kumar",
            email: "user@gmail.com",
            phone: 97898868,
            city: "chandigarh",
            state: "chandigarh",
            address: '2nd floor near land mark hospital'

        },



    ]


    return (

        <div className='group w-screen max-h-auto h-screen flex flex-col items-center text-center border border-green-800'>

            <div className='sm:w-full sm:min-h-full max-h-full lg:w-[80rem] lg:min-h-full lg:h-full border border-red-500'>

                <h2 className='w-full border border-black text-left sm:text-[0.8rem] lg:text-[2rem] font-bold'>Getting Your Order</h2>

                <form className='flex flex-col sm:w-[25rem] lg:w-[50rem]   border border-black'>

                    <label htmlFor='First-Name' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                        First Name

                        <input type="text" placeholder="First Name" className="border border-black h-full" />

                    </label>

                    <label htmlFor='Last-Name' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                        Last Name

                        <input type="text" placeholder="Last Name" className="border border-black h-full" />

                    </label>

                    <div className='flex gap-2 lg:flex-row sm:flex-col'>

                        <label htmlFor='Phone' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                            Phone

                            <input type="tel" placeholder="Phone Number" className="border border-black h-full" />

                        </label>

                        <label htmlFor='email' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                            email Address

                            <input type="email" placeholder="email" className="border border-black h-full" />

                        </label>



                    </div>




                    <label htmlFor='First-Name' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                        Addresses

                        <input type="text" placeholder="Apt #. Suite Floor" className="border border-black h-full" />

                    </label>

                    <label htmlFor='City' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                        City

                        <input type="text" placeholder="City" className="border border-black h-full" />

                    </label>


                    <div className='flex sm:flex-col lg:flex-row gap-2 items-start w-full text-center'>

                        <div className='flex flex-col'>

                            Choose State

                            <select className='bg-white h-10 w-[50%] sm:w-[14rem] border border-black '>

                                <option>Punjab</option>
                                <option>Haryana</option>
                                <option>Chandigarh</option>

                            </select>

                        </div>



                        <label htmlFor='zipCode' className="sm:w-[10rem] lg:w-[18rem] lg:h-[4rem] flex flex-col">

                            ZIP Code

                            <input type="tel" placeholder="Zip Code" className="border lg:w-[18rem] border-black h-full" />

                        </label>

                    </div>


                  <button className='self-end h-10 w-[10rem] text-white rounded-md bg-secondaryBg'>submit address</button>

                </form>



                <form className="flex flex-col lg:h-[50%] sm:w-[25rem] lg:w-[50rem] border border-black">


                    <h2 className='w-full border border-black text-left sm:text-[0.8rem] lg:text-[2rem] font-bold'>Choose From Your Address</h2>

                    {addresses.map((address: any) => (


                        <div className='flex w-[18rem] border px-4 border-black items-center' id='[]'>

                            <div className='flex flex-col  text-left w-[18rem]'>

                                <p className='text-[1rem] px-2 font-bold'>{address.fName + " " + address.lName}</p>
                                <p className='text-[1rem] px-2 font-bold'>{address.email}</p>
                                <p className='text-[1rem] px-2 font-bold'>{address.state}</p>
                                <p className='text-[1rem] px-2 font-bold'>{address.city}</p>


                            </div>

                            <label htmlFor='zipCode' className="h-full ">


                                <input type="radio" className="self-end" />

                            </label>

                        </div>

                    ))}




                </form>



            </div>

        </div>




    )
}



export default CheckoutPage;


