import { createContext,  useContext, useEffect, useMemo, useState } from "react";

const AppContext=createContext()

export const AppProvider=({children})=>{
        const [post,setPost]=useState([])
        const [search,setSearch]=useState('')
        const [catego,setCatego]=useState('')
    const [isDarkTheme,setIsDarkTheme]=useState(false)
    const [profile,setProfile]=useState(false)
        const [like,setLike]=useState('')
         const toggleTheme=()=>{
    const newDarkTheme=!isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body=document.querySelector("body")
    body.classList.toggle("bg-[#020817]")
         }
         const toggleProfile=()=>{
            const newProfile=!profile
            setProfile(newProfile)
         }
    
        const [hover,setHover]=useState(false)
        const toggleHover=()=>{
            const nevHover=!hover
            setHover(nevHover)
        }
        const Post=(data)=>{
            setPost(data)
        }
        
        const Category1=()=>{
            setCatego("electronics")
        }
        const Category2=()=>{
            setCatego("jewelery")
        }
        const Category3=()=>{
            setCatego("men's clothing")
        }
        const Category4=()=>{
            setCatego("women's clothing")
        }
        const Like=(data)=>{
            setLike(data)
        }
        const Search=(e)=>{
            setSearch(e.target.value)
           
        }
         const filteredPost=useMemo(()=>{
            return post.filter((post)=>post.title.toLowerCase().includes(search))
   })
   const filteredElectronic=useMemo(()=>{
            return post.filter((post)=>post.category.includes(catego))
   })
    
          const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // 3. Savatchadan mahsulotni kamaytirish yoki o'chirish
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 4. Savatchani tozalash
  const clearCart = () => {
    setCartItems([]);
  };
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('CartItems')) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('CartItems', JSON.stringify(cartItems));
  }, [cartItems]);


       
       
    return(
        <AppContext.Provider value={{toggleHover,hover,Post,post,filteredPost,Search,search,like,Like,toggleTheme,isDarkTheme,filteredElectronic,Category1,Category2,Category3,Category4,toggleProfile,profile, cartItems,
        addToCart,
        removeFromCart,
        clearCart}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>useContext(AppContext)