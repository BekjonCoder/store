import React, { useState } from 'react'
import { useGlobalContext } from '../context';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("Form"));
  const {isDarkTheme,cartItems,like}=useGlobalContext()
const remove=()=>{
    localStorage.removeItem("Form")
    toggleProfile()
}
const [descrip,setDescrip]=useState(true)
        const [details,setDetails]=useState(false)
        const [shipping,setShipping]=useState(false)
  const des=()=>{
    setDescrip(true)
    setDetails(false)
    setShipping(false)
  }
  const det=()=>{
    setDescrip(false)
    setDetails(true)  
    setShipping(false)
  }
  const ship=()=>{
    setDescrip(false)
    setDetails(false)
    setShipping(true)
  }
  return (
    <div>
        <h1 className={isDarkTheme?'mt-[1rem] font-bold text-4xl text-white':'mt-[1rem] font-bold text-4xl '}>My Account</h1>
        <div className='w-full mt-[3rem] flex gap-[5rem]'>
            <div className='w-[400px] h-[321px] border-[#e2e8f0] border rounded-[10px]'>
                <div className='w-[96px] ml-[38%] mt-[2rem] h-[96px] bg-blue-400 text-white rounded-[50%] capitalize flex justify-center items-center text-4xl'>{user.email.slice(0,2)}</div>
                <h3 className={isDarkTheme?'text-center font-bold text-xl mt-2 text-white':'text-center font-bold text-xl mt-2'}>{user.email.split("@")[0]}</h3>
                <p className='text-center text-gray-500 text-[14px] mt-[0.3rem]'>{user.email}</p>
                <button className={isDarkTheme?'w-[80%] mt-[2rem] ml-[2.3rem] cursor-pointer border rounded-[4px] border-[#e2e8f0] text-white':'w-[80%] mt-[2rem] ml-[2.3rem] cursor-pointer border rounded-[4px] border-[#e2e8f0] text-black'} onClick={remove}>Logout</button>
            </div>
            <div>
        <div className="flex justify-between bg-[#eef5fd] w-[262px] rounded-[8px] p-2 mb-[2rem]">
            <button className={descrip?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={des}>Overview</button>
            <button className={details?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={det}>Orders</button>
            <button className={shipping?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={ship}>Settings</button>
          </div>
          <div className={isDarkTheme?'w-[850px] p-5.5 border-2 border-[#e2e8f0] rounded-[4px] text-white':'w-[850px] p-5.5 border-2 border-[#e2e8f0] rounded-[4px] '}>
            {
              descrip&&<div>
                <h3 className='font-bold text-2xl'>Account Overview</h3>
                <p className='text-gray-400 mt-[0.3rem]'>Summary of your account activity</p>
                <div className='flex gap-[1.3rem] mt-5.5'>
                  <div className='border-2 border-[#eef5fd] w-[50%] p-[0.5rem]'>
                    <p className='font-bold text-2xl'>Wishlist</p>
                    <p className='font-bold text-[1.2rem]'>{like.length}</p>
                    <p className='text-gray-400'>Items saved for later</p>
                  </div>
                  <div className='border-2 border-[#eef5fd] w-[50%] p-[0.5rem]'>
                    <p className='font-bold text-2xl'>Cart</p>
                    <p className='font-bold text-[1.2rem]'>{cartItems.length}</p>
                    <p className='text-gray-400'>Items in your cart</p>
                  </div>
                </div>
              </div>
            }
            {details&& <div>
                <h3 className='font-bold text-2xl'>Order History</h3>
                <p className='text-gray-400'>View your past orders</p>
                <p className='text-gray-400 mt-[2rem]'>You haven't placed any orders yet.</p>
              </div>
             
            }
            {shipping&& <div>
                <h3 className='font-bold text-2xl'>Account Settings</h3>
                <p className='text-gray-400'>Manage your account preferences</p>
                <p className='text-gray-400 mt-[2rem]'>Account settings will be available soon.</p>
              </div>
             
            }
          </div>
            </div>
        </div>
    </div>
  )
}

export default Profile