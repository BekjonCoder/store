import styled from "styled-components";
const Wrapper=styled.section`
    background-color: transparent;
    margin-top: 5rem;
    h1{
        font-size: 2.5rem;
    }
    .categories-btn{
        display: flex;
        justify-content: space-between;
    }
    .white{
        color: white;
    }
    .turi{
        margin-top: 1.5rem;
        width: 300px;
        border:1px solid #1e293b;
        padding: 1rem 2rem;
        border-radius: 8px;
    }
    .turi:hover{
        box-shadow: 2px 4px 6px gray;
    }
    h3{
        font-size: 1.6rem;
        font-weight: medium;
    }
    p{
        color: gray;
        font-size: 0.9rem;
    }
    button{
        width: 200px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid #1e293b;
        padding: 1.1rem;
        cursor: pointer;
        border-radius: 4px;
        font-weight: medium;
        margin-top: 1rem;
    }

`


export default Wrapper