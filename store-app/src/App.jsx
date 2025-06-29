import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Products,Wishlist,Categories,Home,Login, Profile, Cart} from './pages'
import Error from './Error'
import ProductDetal from './pages/ProductDetal'
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/categories",
                element:<Categories/>
            },
            {
                path:'/',
                index:true,
                element:<Products/>,
            },
            {
                path:'/wishlist',
                element:<Wishlist/>,
            },
            {
                path:'/product',
                element:<ProductDetal/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/profile',
                element:<Profile/>,
            },
            {
                path:'/cart',
                element:<Cart/>,
            }
        ]
    }
])
const App = () => {
 
  return <RouterProvider router={router}/>
}

export default App