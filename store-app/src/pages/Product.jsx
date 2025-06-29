import React, { useState, useCallback, useEffect } from 'react';
import Cart from '../component/cart';
import { toast, Toaster } from 'sonner';
import { useGlobalContext } from '../context';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import customFetch from '../baseUrl';

const Product = () => {
  const [likeId, setLikeId] = useState([]);
  const [proId, setProId] = useState([]);
  const [likeProduct, setLikeProduct] = useState([]);
  const [product, setProduct] = useState([]);


  const { Post, filteredPost, Like,isDarkTheme,Search,search } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get("/products");
      Post(data) 
      return data
       
    }
  })

  useEffect(() => {
    Like(likeProduct)
    localStorage.setItem("Like",JSON.stringify(likeProduct))
  }, [likeProduct]);
  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(product))
  }, [product]);
  const toggLike = useCallback((product) => {
    const isLiked = likeId.includes(product.id);
    setLikeId((prev) =>
      isLiked ? prev.filter((p) => p !== product.id) : [...prev, product.id]
    )
        
    setLikeProduct((prev) =>
      isLiked ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    );

    toast.success(
      `${product.title} ${isLiked ? 'remove' : 'add to'} like product list`
    );
  }, [likeId]);

   const toggDetal = useCallback((product) => {
    const isProduct = proId.includes(product.id);
    setProId((prev) =>
      isProduct ? prev.filter((p) => p !== product.id) : [...prev, product.id]
    )
        
    setProduct((prev) =>
      isProduct ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    );
  }, [proId])

  if (isLoading) return <p className='mt-[4rem]'>Yuklanmoqda...</p>;
  if (isError) return <p className='mt-[4rem]'>Xatolik yuz berdi...</p>;
  return (
    <div>
      <h1 className={isDarkTheme?'text-[#fff] text-[2.5rem] relative bottom-4 top-[3rem] ':'text-[#000] text-[2.5rem] relative bottom-4 top-[3rem] '}>Online Store</h1>
        <input 
        type="text"
        className={isDarkTheme?'w-full border  relative outline-0   hover:outline-blue-700 hover:outline-3 top-[5.5rem] border-[#1e293b] mb-[2rem] p-[0.3rem] text-[#fff] rounded-[4px]':'w-full border  relative outline-0   hover:outline-blue-700 hover:outline-3 top-[5.5rem]  mb-[2rem] p-[0.3rem] text-[#000] rounded-[4px]'}
        placeholder="Search products..."
        onChange={Search}
        value={search}
        />
    <div className='pb-[7rem] max-w-[1400px] mx-auto mt-[3rem] relative'>
      <Toaster position='bottom-right' />

      <div className='w-full top-[5rem] relative gap-[1.5rem] grid grid-cols-1 sm:grid-cols-4'>
        {filteredPost.map((product) => (
          <Cart
            key={product.id}
            product={product}
            isLiked={likeId.includes(product.id)}
            onlike={() => toggLike(product)}
            onProduct={() => toggDetal(product)}
          />
        ))}
      </div>
      <Outlet/>
    </div>
    </div>
  );
};

export default Product;
