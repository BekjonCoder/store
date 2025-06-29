import { FaRegHeart, FaRegMoon } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useGlobalContext } from '../context'
import { BsSunFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
const {hover,toggleHover,like,isDarkTheme,toggleTheme,toggleProfile,profile,cartItems}=useGlobalContext()

const user = JSON.parse(localStorage.getItem("Form"));
const remove=()=>{
    localStorage.removeItem("Form")
    toggleProfile()
}

  return (
    
    <div className='mt-[2rem]'>
        <nav className='w-full border-b border-[#1e293b]  flex justify-between h-[64px] grid-cols-4'>
        <div className={isDarkTheme?'flex gap-[1rem] text-white items-center justify-center ':'flex gap-[1rem] text-black items-center justify-center '}>
        <NavLink to={'/'} className=' text-2xl'>Store</NavLink>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'} className=''>Products</NavLink>
        <NavLink to={"/categories"}>Categories</NavLink>
        </div>
        <div className={isDarkTheme?'sm:text-[#fff] sm:flex sm:gap-[1rem]':"sm:text-[#000] sm:flex sm:gap-[1rem]  hidden"}>
            <span className='w-[40px] cursor-pointer h-[40px] flex justify-center items-center rounded-[4px] hover:border hover:border-[#1e293b]' onClick={toggleTheme}>{
            isDarkTheme?<FaRegMoon className='text-white'/>:<BsSunFill/>
        }</span>
            <NavLink to={'/wishlist'}><span onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="w-[40px] cursor-pointer h-[40px] flex justify-center  items-center rounded-[4px]"><FaRegHeart/><span className='w-[20px] h-[20px] top-[-0.8rem] relative  flex justify-center items-center rounded-[50%] bg-blue-600'>{like.length}</span></span></NavLink>
            <NavLink to={'/cart'}><span className='w-[40px] cursor-pointer h-[40px] flex justify-center items-center rounded-[4px] '><MdOutlineShoppingCart /><span className='w-[20px] h-[20px] top-[-0.8rem] relative  flex justify-center items-center rounded-[50%] bg-blue-600'>{cartItems.length}</span></span></NavLink>
            {user?.email? <p onClick={toggleProfile} className='flex capitalize gap-[10px] justify-center items-center rounded-[4px] cursor-pointer border w-[40px] bg-blue-500 h-[40px] text-white border-[#1e293b]'>{user.email.slice(0,2)}</p>:<NavLink to={'/login'}><span className='flex gap-[10px] justify-center items-center rounded-[4px] cursor-pointer border w-[94px] h-[40px] border-[#1e293b]'><IoPersonOutline /> Login</span></NavLink>}
            {profile&& <div className='w-[110px] mt-[2.7rem] ml-[6.1rem] bg-white  border-[#e2e8f0] text-black rounded-[7px] border absolute'>
                <p className=' border-b-[#e2e8f0] border-b p-[0.3rem]'>My Account</p>
                <NavLink to={'/profile'}><p className='p-[0.2rem]  w-full cursor-pointer'>Profile</p></NavLink>
                <p className='p-[0.2rem]  w-full cursor-pointer'>Wishlist</p>
                <p className='p-[0.2rem]  w-full cursor-pointer'>Cart</p>
                <p className='p-[0.2rem] border-[#e2e8f0] border-t cursor-pointer' onClick={remove}>Logout</p>
                </div>}
        </div>
        
        </nav>
        {
            hover&&<div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={isDarkTheme?'w-[200px] border absolute rounded-[4px]  border-[#e2e8f0] text-white px-[1rem] py-[1rem] right-[10rem] top-[5rem] bg-[#020817] ':'w-[200px] border absolute rounded-[4px] border-[#e2e8f0] text-white px-[1rem] py-[1rem] right-[10rem] top-[5rem] bg-[#fff] '}>
                <p className={isDarkTheme?'text-white text-[15px]':'text-black text-[15px]'}>Wishlist ({like.length})</p>
                {
                    like.map((item,inx)=>(
                        <div key={inx} className='flex gap-[5px] w-full h-[50px] relative mt-[0.5rem]'>
                           <div  className='w-[35px] h-[35px]'>
                             <img src={item.image} className='w-full h-full  object-cover' alt="" />
                           </div>
                            <div>
                            <p className={isDarkTheme?"text-white text-[10px]":"text-[12px] text-black"}>{item.title.length>20? `${item.title.slice(0,20)}`:item.title}</p>
                            <p className={isDarkTheme?"text-white text-[12px]":"text-black text-[12px]"}>${item.price}</p>
                            </div>
                        </div>
                    ))
                }
                <button className='flex justify-center items-center rounded-[2px] cursor-pointer relative top-1  text-[#0F172A] bg-[#3B82F6] w-full h-[30px]'>View Wishlist</button>
            </div>
            
        }
        
    </div>
        
  )
}

export default Navbar