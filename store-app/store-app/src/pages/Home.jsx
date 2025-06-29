import React from 'react'
import Navbar from '../component/navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='sm:w-[1340px] w-[90%] mx-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home