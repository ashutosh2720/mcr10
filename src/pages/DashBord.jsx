import React from 'react'
import { inventoryData } from '../db/inventoryData'

const DashBord = () => {
    const totalStocks = inventoryData.reduce((acc, cur) => acc + cur.stock, 0)
    const totalDelevered = inventoryData.reduce((acc, cur) => acc + cur.delivered, 0)
    const lowStock = inventoryData.filter((item) => item.stock <= 10)
    const lowStockCount = lowStock.length
    return (
        <div className=' fixed left-[550px] w-full h-full flex justify-start gap-7 items-start pt-10'>
            <div className="total-stock w-[210px] h-[150px] flex justify-center items-center flex-col relative left-[30px] rounded-md p-8 bg-gray-300">
                <h1 className='text-green-700 font-serif text-3xl'>{totalStocks}</h1>
                <h1 className='text-2xl font-serif'>Total stocks</h1>
            </div>
            <div className="total-deleverd flex justify-center items-center flex-col relative left-[30px] rounded-md p-8  w-[210px] h-[150px] bg-gray-300">
                <h1 className='text-orange-600 font-serif text-3xl'>{totalDelevered}</h1>
                <h1 className='text-2xl font-serif'>TotalDelevered</h1>
            </div>
            <div className="total-lowStock flex justify-center items-center flex-col relative left-[30px] rounded-md p-8  w-[210px] h-[150px] bg-gray-300">
                <h1 className='text-red-700 font-serif text-4xl'>{lowStockCount}</h1>
                <h1 className='text-2xl font-serif'>low Stock</h1>
            </div>
        </div>
    )
}

export default DashBord
