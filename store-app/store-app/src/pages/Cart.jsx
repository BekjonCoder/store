import React from 'react';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';
import { IoIosRemove } from 'react-icons/io';
import { IoAddOutline } from 'react-icons/io5';
import { toast, Toaster } from 'sonner';
import { MdDelete } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, addToCart, isDarkTheme } = useGlobalContext();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };
  const Check=()=>{
    clearCart()
    alert("Tashrifingiz uchun rahmat yana tashrif buyurib turing😀")
    
  }
  return cartItems.length === 0 ? (
    <div className='w-full h-[70vh] justify-center items-center flex'>
      <div>
        <h1 className='justify-center flex text-3xl font-medium'>Your Cart is Empty</h1>
        <p className='text-gray-400'>Add some products to your cart to see them here.</p>
        <NavLink to={'/'}>
          <button className='text-white bg-blue-500 w-[230px] flex justify-center items-center h-[35px] mt-[2rem] rounded-[5px] cursor-pointer ml-[4.5rem]'>Continue Shopping</button>
        </NavLink>
      </div>
    </div>
  ) : (
    <div>
      <Toaster richColors position='bottom-right' />
      <h1 className={`${isDarkTheme ? 'text-white' : ''} font-medium text-3xl mt-3.5`}>Shopping Cart</h1>
      <div className='flex justify-between'>
        <div className='gap-[2rem] grid mt-[2.5rem]'>
          {cartItems.map((item) => (
            <div key={item.id} className='flex items-center gap-[1rem]'>
              <img className='w-[60px]' src={item.image} alt={item.title} />
              <div>
                <div className='flex justify-between w-[750px]'>
                  <p className={isDarkTheme ? 'font-medium text-white' : 'font-medium'}>{item.title}</p>
                  <p className={isDarkTheme ? 'font-medium text-white' : 'font-medium'}>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <p className='text-gray-400'>${item.price.toFixed(2)}</p>
                <div className={isDarkTheme ? 'flex gap-[0.3rem] mt-2 text-white' : 'flex gap-[0.3rem] mt-2'}>
                  <button onClick={() => removeFromCart(item.id)} className='border w-[20px] h-[20px] flex justify-center items-center rounded-[4px]'>
                    <IoIosRemove />
                  </button>
                  <p className='w-[20px] h-[20px] flex justify-center items-center'>{item.quantity}</p>
                  <button onClick={() => addToCart(item)} className='border w-[20px] h-[20px] flex justify-center items-center rounded-[4px]'>
                    <IoAddOutline />
                  </button>
                  <button className='w-[20px] h-[20px] flex justify-center items-center ml-2 text-gray-400' onClick={() => removeFromCart(item.id, true)}>
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-between w-[850px]'>
            <button className={isDarkTheme?'p-1 border cursor-pointer rounded-[4px] w-[100px] h-[40px] text-white':'p-1 border cursor-pointer rounded-[4px] w-[100px] h-[40px]'} onClick={clearCart}>Clear Cart</button>
            <NavLink to={'/'}>
              <button className={isDarkTheme?'p-2 border border-[#1e293b] text-white rounded-[4px] cursor-pointer w-[160px]':'p-2 border border-[#1e293b] rounded-[4px] cursor-pointer w-[160px]'}>Continue Shopping</button>
            </NavLink>
          </div>
        </div>

        <div className={`${isDarkTheme ? 'bg-[#0d1526] text-white' : 'bg-[#f9fbfd] text-black'} mt-[3rem] p-[1.5rem] rounded-2xl w-[450px] h-[300px]`}>
          <h1 className='font-bold text-2xl'>Order Summary</h1>
          <div className='flex justify-between w-full text-[1.2rem] mb-2.5'>
            <p>Subtotal</p>
            <p>${calculateTotal()}</p>
          </div>
          <div className='flex justify-between w-full text-[1.2rem] mb-[1.3rem]'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='flex justify-between w-full text-[1.5rem] mt-[1.5rem]'>
            <p>Total</p>
            <p>${calculateTotal()}</p>
          </div>
          <button onClick={Check} className='bg-blue-500 cursor-pointer text-white w-full h-[35px] flex justify-center items-center gap-[1rem] mt-[1.5rem] rounded-[5px]'>
            Checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
