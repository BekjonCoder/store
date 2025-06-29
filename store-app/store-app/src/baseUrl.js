import axios from "axios";
const customFetch=axios.create({
    baseURL:"https://fakestoreapi.com"
})
export default customFetch