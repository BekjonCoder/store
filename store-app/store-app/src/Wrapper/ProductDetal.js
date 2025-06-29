import styled from "styled-components";
const WrapDetal=styled.section`
    .span{
        position: absolute;
        margin-top: -5rem;
        display: flex;
        gap: 0.3rem;
        width: 150px;
        height: 20px;
        align-items: center;
    }
    .product{
        width: 1368px;
        margin: 6rem auto;
        display: flex;
        .image{
            width: 668px;
            height: 668px;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .type{
            width: 668px;
            padding-left: 2rem;
            .category{
                border: 1px solid #e2e8f0;
                border-radius: 999px;
                padding: 0.3rem;
                font-weight: 600;
                font-size: 12px;
                width: 108px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .title{
                font-size: 24px;
                font-weight: bold;
            }
            .price{
                font-size: 20px;
                font-weight: 600;
            }
            .det{
                margin-top: 1rem;
                line-height: 2rem;
                p{
                color: #64748b;
                font-size: 16px;
                font-weight: bold;
                span{
                    font-weight: normal;
                }
                }
                
            }
            
        }
    }
`


export default WrapDetal