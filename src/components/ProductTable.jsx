import React from 'react'
import { useGlobalInventory } from '../contexts/inventoryManagementContext'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductTable = ({ products }) => {
    const { filteredData } = useGlobalInventory()
    const navigate = useNavigate()

    const textShortener = (text) => {
        return text.length > 20 ? `${text.slice(0, 20)}...` : text;
    }

    return (
        <div>
            <table className='w-full my-10 flex flex-col'>
                <tr className='w-full bg-black/10 border flex justify-between p-3'>
                    <th>Image</th>
                    <th>Name</th>
                    <th className='w-[40%]'>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                </tr>
                {
                    filteredData.length ?
                        filteredData.map(({ id, imageUrl, name, description, price, stock, supplier }) => (
                            <tr key={id} className='w-full border flex items-center p-5 justify-between'>
                                <td>
                                    <img src={imageUrl} alt="" className='w-40' />
                                </td>
                                <td className='text-blue-600 hover:underline cursor-pointer' onClick={() => navigate(`/products/${id}`)} >{name}</td>
                                <td ></td>
                                <td>${price}</td>
                                <td>{stock}</td>
                                <td>{supplier}</td>
                            </tr>
                        )) :
                        <p className='py-16 text-center text-2xl text-black/50'>No Product Found</p>
                }
            </table>
        </div>
    )
}

export default ProductTable





