// import React, { useState } from 'react'
// import WrapDetal from '../Wrapper/ProductDetal'
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { NavLink } from 'react-router-dom'
// import { IoAddOutline } from "react-icons/io5";
// import { IoIosRemove } from "react-icons/io";
// import { MdOutlineShoppingCart } from 'react-icons/md';
// import { useGlobalContext } from '../context';
// import { toast, Toaster } from 'sonner';
// const ProductDetal = () => {
//        const {isDarkTheme}=useGlobalContext()
       
//       const pro = JSON.parse(localStorage.getItem("Product"));
//        const product=pro[0]
//         const {image,category,description,price,title,rating}=product
//         const [descrip,setDescrip]=useState(true)
//         const [details,setDetails]=useState(false)
//         const [shipping,setShipping]=useState(false)
//         const [count,setCount]=useState(1)
        
//   const des=()=>{
//     setDescrip(true)
//     setDetails(false)
//     setShipping(false)
//   }
//   const det=()=>{
//     setDescrip(false)
//     setDetails(true)
//     setShipping(false)
//   }
//   const ship=()=>{
//     setDescrip(false)
//     setDetails(false)
//     setShipping(true)
//   }
//   const remove=()=>{
//     if(count===1){
//      toast.warning("Kamida bitta mahsulot bo'lishi kerak")
      
//     }
//     else{
//       setCount(count-1)
//     }
//   }
//   const add=()=>{
//     setCount(count+1)
//   }
//   return (
//     <WrapDetal>
//       <Toaster position='right-bottom ' />
//         <NavLink to={'/'}><span className={isDarkTheme?'flex text-white items-center':'flex  items-center '}><FaLongArrowAltLeft/>Back to home</span></NavLink>
//         <div className="product">
//         <div className="image">
//           <img src={image} alt={description} />
//         </div>
//         <div className="type">
//           <h3 className={isDarkTheme?'category mb-[2rem] text-white':'category mb-[2rem]'}>{category}</h3>
//           <h1 className={isDarkTheme?'title mb-[2rem] text-white':' title mb-[2rem]  text-[#020817]'}>{title}</h1>
//           <p className={isDarkTheme?'price mb-[2rem] text-white':'price mb-[2rem] text-[#020817]'}>${price}</p>
//           <div className="flex justify-between bg-[#eef5fd] w-[262px] rounded-[8px] p-2 mb-[2rem]">
//             <button className={descrip?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={des}>Description</button>
//             <button className={details?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={det}>Details</button>
//             <button className={shipping?'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer':'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={ship}>Shipping</button>
//           </div>
//           <div>
//             {
//               descrip&&<p className='mt-[1rem] text-[16px] text-[#64748b] mb-[2rem]'>{description}</p>
//             }
//             {
//               details&& <div className='det  mb-[2rem]'>
//               <p className=''>Category: <span>{category}</span></p>
//               <p>Availability: <span>In Stock</span></p>
//               <p>Rating: <span>{rating.rate}/5 ({rating.count} reviews)</span></p>
//               </div>
//             }
//             {
//               shipping&& <div className="det  mb-[2rem]">
//                 <p><span>Free shipping on orders over $50</span></p>
//                 <p><span>Standard shipping: 3-5 business days</span></p>
//                 <p><span>Express shipping: 1-2 business days</span></p>
//                 <p><span>International shipping available</span></p>
//               </div>
//             }
//           </div>
//           <div className={isDarkTheme?"text-white flex gap-[2rem] items-center mt-2rem":"text-black flex gap-[2rem] items-center mt-2rem"}>
//             <h5 >Quantity</h5>
//             <div className='flex gap-[2rem]'>
//             <button className='border-[#1e293b] border-1 w-[40px] h-[40px] cursor-pointer flex rounded-[8px]  justify-center items-center' onClick={remove}><IoIosRemove /></button>
//             <p className='w-[40px] h-[40px] flex justify-center items-center'>{count}</p>
//             <button className='border-[#1e293b] border-1 w-[40px] h-[40px] cursor-pointer  flex rounded-[8px] justify-center items-center' onClick={add}><IoAddOutline/></button>
//             </div>
//           </div>
//           <button className='flex w-[500px] h-[40px] justify-center items-center text-white  border-[#1e293b] border-1 rounded-[5px] gap-[1rem] mt-[3rem] bg-blue-500'><MdOutlineShoppingCart /> Add to Cart</button>
//         </div>
//         </div>
//     </WrapDetal>
//   )}

// export default ProductDetal




import React, { useState } from 'react';
import WrapDetal from '../Wrapper/ProductDetal';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useGlobalContext } from '../context';
import { toast, Toaster } from 'sonner';

const ProductDetal = () => {
  const { isDarkTheme, addToCart } = useGlobalContext();

  const pro = JSON.parse(localStorage.getItem("Product"));
  const product = pro?.[0];

  const [descrip, setDescrip] = useState(true);
  const [details, setDetails] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [count, setCount] = useState(1);

  if (!product) return <div className='text-center mt-10 text-red-500'>Mahsulot topilmadi</div>;

  const { image, category, description, price, title, rating } = product;

  const des = () => {
    setDescrip(true);
    setDetails(false);
    setShipping(false);
  };

  const det = () => {
    setDescrip(false);
    setDetails(true);
    setShipping(false);
  };

  const ship = () => {
    setDescrip(false);
    setDetails(false);
    setShipping(true);
  };

  const remove = () => {
    if (count === 1) {
      toast.warning("Kamida bitta mahsulot bo'lishi kerak");
    } else {
      setCount(count - 1);
    }
  };

  const add = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: count };
    addToCart(productWithQuantity);
    toast.success("Mahsulot savatchaga qo‘shildi!");
  };

  return (
    <WrapDetal>
      <Toaster position='right-bottom' />
      <NavLink to={'/'}><span className={isDarkTheme ? 'flex text-white items-center' : 'flex items-center'}><FaLongArrowAltLeft />Back to home</span></NavLink>
      
      <div className="product">
        <div className="image">
          <img src={image} alt={description} />
        </div>

        <div className="type">
          <h3 className={isDarkTheme ? 'category mb-[2rem] text-white' : 'category mb-[2rem]'}>{category}</h3>
          <h1 className={isDarkTheme ? 'title mb-[2rem] text-white' : 'title mb-[2rem] text-[#020817]'}>{title}</h1>
          <p className={isDarkTheme ? 'price mb-[2rem] text-white' : 'price mb-[2rem] text-[#020817]'}>${price}</p>

          <div className="flex justify-between bg-[#eef5fd] w-[262px] rounded-[8px] p-2 mb-[2rem]">
            <button className={descrip ? 'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer' : 'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={des}>Description</button>
            <button className={details ? 'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer' : 'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={det}>Details</button>
            <button className={shipping ? 'w-[100px] text-[#020817] shadow-2xl rounded-[5px] flex justify-center bg-white p-2 items-center cursor-pointer' : 'w-[100px] text-[#020817] p-2 flex justify-center items-center cursor-pointer'} onClick={ship}>Shipping</button>
          </div>

          <div>
            {descrip && <p className='mt-[1rem] text-[16px] text-[#64748b] mb-[2rem]'>{description}</p>}
            {details &&
              <div className='det mb-[2rem]'>
                <p>Category: <span>{category}</span></p>
                <p>Availability: <span>In Stock</span></p>
                <p>Rating: <span>{rating.rate}/5 ({rating.count} reviews)</span></p>
              </div>
            }
            {shipping &&
              <div className="det mb-[2rem]">
                <p><span>Free shipping on orders over $50</span></p>
                <p><span>Standard shipping: 3-5 business days</span></p>
                <p><span>Express shipping: 1-2 business days</span></p>
                <p><span>International shipping available</span></p>
              </div>
            }
          </div>

          <div className={isDarkTheme ? "text-white flex gap-[2rem] items-center mt-2rem" : "text-black flex gap-[2rem] items-center mt-2rem"}>
            <h5>Quantity</h5>
            <div className='flex gap-[2rem]'>
              <button className='border-[#1e293b] border-1 w-[40px] h-[40px] cursor-pointer flex rounded-[8px] justify-center items-center' onClick={remove}><IoIosRemove /></button>
              <p className='w-[40px] h-[40px] flex justify-center items-center'>{count}</p>
              <button className='border-[#1e293b] border-1 w-[40px] h-[40px] cursor-pointer flex rounded-[8px] justify-center items-center' onClick={add}><IoAddOutline /></button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className='flex w-[500px] h-[40px] justify-center items-center text-white border-[#1e293b] border-1 rounded-[5px] gap-[1rem] mt-[3rem] bg-blue-500'>
            <MdOutlineShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </WrapDetal>
  );
};

export default ProductDetal;
    