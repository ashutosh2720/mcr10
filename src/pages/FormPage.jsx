import React from 'react'

const FormPage = () => {
    return (
        <div className='w-[100%]'>

            <div className="form  flex justify-center relative left-[150px] items-center">
                <form action="" className='flex flex-col h-[100%] w-[50%]   bg-gray-200 rounded-md p-5'>
                    <label htmlFor="" >Department</label>
                    <select name="" id="" className='border-[1px] p-2 border-black'>
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
                    <input className='border-[1px] p-2 border-black' type="text" name="" id="" />

                    <label htmlFor="">Description</label>
                    <textarea className='border-[1px] p-2 border-black' name="" id="" cols="10" rows="0"></textarea>


                    <label htmlFor="">Price</label>
                    <input className='border-[1px] p-2 border-black' type="number" />

                    <label htmlFor="">stock</label>
                    <input className='border-[1px] p-2 border-black' type="number" />

                    <label htmlFor="">SKU</label>
                    <input className='border-[1px] p-2 border-black' type="text" name="" id="" />

                    <label htmlFor="">supplier</label>
                    <input className='border-[1px] p-2 border-black' type="text" name="" id="" />


                    <label htmlFor="">Delevered</label>
                    <input className='border-[1px] p-2 border-black' type="text" name="" id="" />


                    <label htmlFor="">imge URL </label>
                    <input className='border-[1px] p-2 border-black' type="text" name="" id="" />
                    <button onClick={() => setModal(false)} className='bg-blue-600 p-2 text-white text-xl font-serif'>Add product</button>
                </form>
            </div>

        </div>
    )
}

export default FormPage
