import React, { useCallback, useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { NavLink, Outlet } from 'react-router-dom'
import Liked from '../component/like'
import { toast } from 'sonner'

const Wishlist = () => {
  const [likeId, setLikeId] = useState([])
  const [proId, setProId] = useState([])
  const [likeProduct, setLikeProduct] = useState([])
  const [product, setProduct] = useState([])

  const { isDarkTheme, Like } = useGlobalContext()

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("Like")) || [];
    setLikeProduct(savedLikes)
    setLikeId(savedLikes.map(p => p.id))
  }, []);

  useEffect(() => {
    Like(likeProduct)
    localStorage.setItem("Like", JSON.stringify(likeProduct))
  }, [likeProduct])

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(product))
  }, [product])
  const removeLike = useCallback((item) => {
    setLikeId((prev) => prev.filter((p) => p !== item.id))
    setLikeProduct((prev) => prev.filter((p) => p.id !== item.id))
    toast.success(`${item.title} removed from wishlist`)
  }, [])

  const toggDetal = useCallback((item) => {
    const isProduct = proId.includes(item.id)
    setProId((prev) =>
      isProduct ? prev.filter((p) => p !== item.id) : [...prev, item.id]
    )
    setProduct((prev) =>
      isProduct ? prev.filter((p) => p.id !== item.id) : [...prev, item]
    );
  }, [proId])

  return (
    likeProduct.length === 0 ? (
      <div className='w-full h-[70vh] justify-center items-center flex'>
        <div>
          <h1 className='justify-center flex text-3xl font-medium'>Your Wishlist is Empty</h1>
          <p className='text-gray-400'>Add some products to your wishlist to see them here.</p>
          <NavLink to={'/'}>
            <button className='text-white bg-blue-500 w-[230px] flex justify-center items-center h-[35px] mt-[2rem] rounded-[5px] cursor-pointer ml-[4.5rem]'>Continue Shopping</button>
          </NavLink>
        </div>
      </div>
    ) : (
      <div>
        <h1 className={`${isDarkTheme ? 'text-white' : ''} font-medium text-3xl mt-3.5`}>
          My Wishlist ({likeProduct.length} items)
        </h1>
        <div className='grid grid-cols-4 gap-[1rem] mt-7'>
          {likeProduct.map(item => (
            <Liked
              key={item.id}
              product={item}
              isLiked={likeId.includes(item.id)}
              onlike={() => removeLike(item)}
              onProduct={() => toggDetal(item)}
            />
          ))}
        </div>
        <Outlet />
      </div>
    )
  )
}

export default Wishlist
