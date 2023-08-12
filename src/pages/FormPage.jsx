import React, { useState } from 'react'
import { useGlobalInventory } from '../contexts/inventoryManagementContext'

const FormPage = () => {
    const [product, setProduct] = useState({
        department: '',
        name: '',
        description: '',
        price: 0,
        stock: 0,
        sku: '',
        supplier: '',
        delivered: 0,
        imageUrl: '',
    })

    const { allDetartments, addNewProduct } = useGlobalInventory()

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }))
    }


    const submitHandler = (e) => {
        e.preventDefault();
        addNewProduct(product);
        setProduct({
            department: '',
            name: '',
            description: '',
            price: 0,
            stock: 0,
            sku: '',
            supplier: '',
            delivered: 0,
            imageUrl: '',
        })
    }


    return (
        <div className='w-[100%]'>

            <div className="form  flex justify-center relative left-[150px] items-center">
                <form onSubmit={submitHandler} action="" className='flex flex-col h-[100%] w-[50%]   bg-gray-200 rounded-md p-5'>
                    <label htmlFor="" >Department</label>
                    <select onChange={changeHandler} name="department" id="" className='border-[1px] p-2 border-black'>
                        <option value="">
                            Kitchen
                        </option>
                        <option value="">
                            Clothing
                        </option>
                        <option value="">
                            Toys
                        </option>
                    </select>

                    <label htmlFor="">Name</label>
                    <input onChange={changeHandler} className='border-[1px] p-2 border-black' type="text" name="name" id="" />

                    <label htmlFor="">Description</label>
                    <textarea onChange={changeHandler} className='border-[1px] p-2 border-black' name="description" id="" cols="10" rows="0"></textarea>


                    <label htmlFor="">Price</label>
                    <input name='price' onChange={changeHandler} className='border-[1px] p-2 border-black' type="number" />

                    <label htmlFor="">stock</label>
                    <input name='stock' onChange={changeHandler} className='border-[1px] p-2 border-black' type="number" />

                    <label htmlFor="">SKU</label>
                    <input name='sku' onChange={changeHandler} className='border-[1px] p-2 border-black' type="text" id="" />

                    <label htmlFor="">supplier</label>
                    <input name='supplier' onChange={changeHandler} className='border-[1px] p-2 border-black' type="text" id="" />


                    <label htmlFor="">Delevered</label>
                    <input name='delivered' onChange={changeHandler} className='border-[1px] p-2 border-black' type="text" id="" />


                    <label htmlFor="">imge URL </label>
                    <input name='imageUrl' onChange={changeHandler} className='border-[1px] p-2 border-black' type="text" name="" id="" />
                    <button type='submit' className='bg-blue-600 p-2 text-white text-xl font-serif'>Add product</button>
                </form>
            </div>

        </div>
    )
}

export default FormPage
