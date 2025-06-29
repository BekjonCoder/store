import React, { useRef } from 'react'
import { FaEye, FaHeart, FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context';

const Cart = ({product,isLiked,onlike,onProduct}) => {
  const { addToCart } = useGlobalContext();
    const clickCounterRef=useRef(0)
    const timeRef=useRef(null)
    const handleRightClick=(e)=>{
        e.preventDefault()
        clickCounterRef.current+=1
        if(clickCounterRef===1){
            onlike()
            clickCounterRef.current=0
            clearTimeout(timeRef.current)
        }else{
            clickCounterRef.current=0
        }
    }
    
  return (
    <div onContextMenu={handleRightClick} className=' bg-[#020817] shadow-2xl h-[512px] border border-[#1e293b] '>
                              <div className='w-full h-[322.4px] overflow-hidden relative'>
        
                            <img src={product.image} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' alt="" />
                            <NavLink to={'/product'}><span  className='absolute top-[0.5rem] text-[1rem] left-2 rounded-[8px] cursor-pointer text-white bg-[#020817CC] flex items-center justify-center w-[40px] h-[40px]'onClick={onProduct}><FaEye/></span></NavLink>
                            <span className='absolute top-[0.5rem] text-[1rem] right-2 rounded-[8px] text-white bg-[#020817CC] flex items-center justify-center w-[40px] h-[40px]' onClick={onlike}> {isLiked?<FaHeart className='text-red-600'/>:<FaRegHeart/>}</span>
                              </div>
                                <div className='w-full p-[16px] top-[0.5rem] relative'>
                                <p className='text-[16px]  text-[#F8FAFC] cursor-pointer'>{product.title.length>34? `${product.title.slice(0,34)}`:product.title}</p>
                                <p className='text-[14px]  text-[#94A3B8] relative top-[0.3rem]'>{product.description.slice(0,60)}</p>
                                <p className='text-[16px]  text-[#F8FAFC] font-bold top-[0.6rem] relative'>$ {product.price}</p>
                                <button className='flex justify-center items-center rounded-[2px] cursor-pointer relative top-[1rem]  text-white bg-[#3B82F6] w-full h-[40px]' onClick={() => addToCart(product)} >Add to Cart</button>
                                </div>
                            </div> 
  )
}

export default Cart