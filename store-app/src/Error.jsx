import { Link, NavLink, useRouteError } from "react-router-dom"
import img from '../public/images.jpg'
import Wrap from "./Wrapper/Error"

const Error = () => {
    const error=useRouteError()
  if(error.status===404){
    return(
      <Wrap>
        <div>
          <img src={img} alt="" />
        <h1>Undefined 🤣</h1>
        <h2>
        <NavLink to={'/'}>Back to home</NavLink>
        </h2>
        </div>
        
      </Wrap>
    )
  }
}

export default Error