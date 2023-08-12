import React, { useState } from "react";
import { inventoryData } from "../db/inventoryData";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";


const Products = () => {
    const [department, selectedDepartment] = useState('');
    const [stock, selectStock] = useState(false);
    const [name, selectedName] = useState('');

    const handleDepartment = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleName = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleStock = (event) => {
        setCheckboxChecked(event.target.checked);
    };





    const filterData = inventoryData.filter((item) => item.department.includes(department))
    const navigate = useNavigate()

    return (
        <div className="w-[70%] h-screen relative left-[350px]">
            <div className="filter-bar flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <select value={department} name="" id="" className="border-2 border-black" onChange={handleDepartment}>
                    <option value="all">All departments</option>
                    <option value="kitchen">Kitchenn</option>
                    <option value="clothing">Clothing</option>
                    <option value="toys">Toys</option>
                </select>
                <div className="low flex gap-1">
                    <input type="checkbox" name="" id="" checked={checkboxChecked}
                        onChange={handleStock} /> <h1>Low Stocks items</h1>
                </div>
                <select value={name} name="" id="" className="border-2 border-black" onChange={handleName}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stocks">Stock</option>
                </select>
                <button className="bg-blue-500 pl-3 pr-3 text-2xl text-white" onClick={() => navigate('/form')}>New </button>

            </div>
            {filterData.map((data) => (
                <ProductCard data={data} />
            ))}
        </div>
    );
};

export default Products;
