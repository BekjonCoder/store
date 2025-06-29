import React, { useRef } from 'react'
import { FaEye } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Like = ({ product, onlike, onProduct }) => {
  const clickCounterRef = useRef(0);
  const timeRef = useRef(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    clickCounterRef.current += 1;

    if (clickCounterRef.current === 1) {
      onlike();
      clickCounterRef.current = 0;
      clearTimeout(timeRef.current);
    } else {
      clickCounterRef.current = 0;
    }
  };

  return (
    <div
      onContextMenu={handleRightClick}
      className='bg-[#020817] shadow-2xl h-[512px] border border-[#1e293b]'
    >
      <div className='w-full h-[322.4px] overflow-hidden relative'>
        <img
          src={product.image}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
          alt={product.title}
        />
        <NavLink to={'/product'}>
          <span
            className='absolute top-[0.5rem] text-[1rem] left-2 rounded-[8px] cursor-pointer text-white bg-[#020817CC] flex items-center justify-center w-[40px] h-[40px]'
            onClick={onProduct}
          >
            <FaEye />
          </span>
        </NavLink>
      </div>
      <div className='w-full p-[16px] relative'>
        <p className='text-[16px] text-[#F8FAFC] cursor-pointer'>
          {product.title.length > 34 ? `${product.title.slice(0, 34)}...` : product.title}
        </p>
        <p className='text-[14px] text-[#94A3B8] mt-1'>
          {product.description.slice(0, 60)}...
        </p>
        <p className='text-[16px] text-[#F8FAFC] font-bold mt-2'>
          $ {product.price}
        </p>
        <div className='flex gap-3 mt-4'>
          <button className='flex justify-center items-center rounded-[2px] text-white bg-[#3B82F6] w-full h-[40px]'>
            Add to Cart
          </button>
          <button
            onClick={onlike}
            className='flex justify-center items-center rounded-[2px] text-white bg-[#EF4444] w-[20%] h-[40px]'
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Like;
