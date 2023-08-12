import React from 'react'
import { useParams } from 'react-router-dom'
import { inventoryData } from '../db/inventoryData'

const ProductsDescription = () => {
    const { id } = useParams()
    const Product = inventoryData.find((item) => item.id === Number(id))
    console.log(Product)
    return (
        <div className='w-[70%] flex flex-col gap-3 h-full relative left-[350px] p-5 mb-5' >
            <h1 className='text-4xl'>{Product?.name}</h1>
            <img src={Product.imageUrl} alt="" className='w-[60%] h-[70%]' />
            <h1 className='text-xl font-semibold'>{Product?.price}</h1>
            <h1 className='text-xl font-semibold'>{Product?.stock}</h1>
            <h1 className='text-xl font-semibold'>{Product?.supplier}</h1>
            <h1 className='text-xl font-semibold'>{Product?.department}</h1>
            <h1 className='text-xl font-semibold'>{Product?.sku}</h1>
            <h1 className='text-xl font-semibold'>{Product?.delivered}</h1>
            <h1 className='text-xl font-semibold'>{Product?.description}</h1>

        </div>
    )
}

export default ProductsDescription
