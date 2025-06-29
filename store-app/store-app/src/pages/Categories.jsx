import React, { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../Wrapper/Categories'
import { useGlobalContext } from '../context'
import Cart from '../component/cart'
import { toast, Toaster } from 'sonner'
import { useQuery } from '@tanstack/react-query'
import customFetch from '../baseUrl'
const Categories = () => {
  const {isDarkTheme,filteredElectronic,Like,Category1,Category2,Category3,Category4,Post}=useGlobalContext()
  const [likeId, setLikeId] = useState([]);
  const [proId, setProId] = useState([]);
  const [product, setProduct] = useState([]);
  
  const [likeProduct, setLikeProduct] = useState([]);
   const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get("/products");
      Post(data); 
      return data 
    }
  })

  useEffect(() => {
    Like(likeProduct);
  }, [likeProduct]);
useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(product))
  }, [product])
  const toggLike = useCallback((product) => {
    const isLiked = likeId.includes(product.id);

    setLikeId((prev) =>
      isLiked ? prev.filter((p) => p !== product.id) : [...prev, product.id]
    );

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
    <Wrapper>
      <h1 className={isDarkTheme?"white":"black"}>Categories</h1>
      <div className={isDarkTheme?"sm:categories-btn white flex flex-wrap ":"sm:categories-btn flex flex-wrap"}>
        <div className="turi">
          <h3>Electronics</h3>
          <p>Browse all electronics products</p>
          <button onClick={Category1}>View Products</button>
        </div><div className="turi">
          <h3>Jewelery</h3>
          <p>Browse all electronics products</p>
          <button onClick={Category2}>View Products</button>
        </div><div className="turi">
          <h3>Men's Clothing</h3>
          <p>Browse all electronics products</p>
          <button onClick={Category3}>View Products</button>
        </div><div className="turi">
          <h3>Women's Clothing</h3>
          <p>Browse all electronics products</p>
          <button onClick={Category4}>View Products</button>
        </div>
      </div>
          <div className='pb-[7rem] max-w-[1400px] mx-auto mt-5 relative'>
      <Toaster position='bottom-right' />

      <div className='w-full top-[5rem] relative gap-[1.5rem] grid grid-cols-1 sm:grid-cols-4'>
        {filteredElectronic.map((product) => (
          <Cart
            key={product.id}
            product={product}
            isLiked={likeId.includes(product.id)}
            onlike={() => toggLike(product)}
            onProduct={() => toggDetal(product)}
          />
        ))}
      </div>
    </div>
    <Outlet/>  
    </Wrapper>
  )
}

export default Categories