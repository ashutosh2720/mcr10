import React from 'react'

const Departments = () => {
    return (
        <div className=' fixed left-[550px] w-full h-full flex justify-start gap-7 items-start pt-10'>
            <div className="total-stock w-[210px] h-[150px] flex justify-center items-center flex-col relative left-[30px] rounded-md p-8 bg-gray-300 cursor-pointer">

                <h1 className='text-2xl font-semibold font-serif'>Kitchen</h1>
            </div>
            <div className="total-deleverd flex justify-center items-center flex-col relative left-[30px] rounded-md p-8  w-[210px] h-[150px] bg-gray-300 cursor-pointer">

                <h1 className='text-2xl font-semibold font-serif'>Clothing</h1>
            </div>
            <div className="total-lowStock flex justify-center items-center flex-col relative left-[30px] rounded-md p-8  w-[210px] h-[150px] bg-gray-300 cursor-pointer">

                <h1 className='text-2xl font-semibold font-serif'>Toys</h1>
            </div>
        </div>
    )
}

export default Departments
