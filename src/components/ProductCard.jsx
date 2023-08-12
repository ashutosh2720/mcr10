import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data }) => {

    const navigate = useNavigate()
    return (
        <div className='data cursor-pointer w-[100%] h-[100px] flex justify-around border-2 border-black items-center con p-10' onClick={() => navigate(`/products/${data.id}`)}>
            <img src={data.imageUrl} alt="" className='h-[50px] w-[50px]' />
            <h1 >{data.name}</h1>
            <h1 className='w-[300px]'>{data.description}</h1>
            <h1>{data.price}</h1>
            <h1>{data.stock}</h1>


        </div>
    )
}

export default ProductCard
