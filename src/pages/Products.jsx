import React, { useState } from "react";
import { inventoryData } from "../db/inventoryData";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";

const Products = () => {

    const [modal, setModal] = useState(false)
    return (
        <div className="w-[70%] h-screen relative left-[350px]">
            <div className="filter-bar flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <select name="" id="" className="border-2 border-black">
                    <option value="all">All departments</option>
                    <option value="kitchen">Kitchenn</option>
                    <option value="clothing">Clothing</option>
                    <option value="toys">Toys</option>
                </select>
                <div className="low flex gap-1">
                    <input type="checkbox" name="" id="" /> <h1>Low Stocks items</h1>
                </div>
                <select name="" id="" className="border-2 border-black">
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stocks">Stock</option>
                </select>
                <button className="bg-blue-500 pl-3 pr-3 text-2xl text-white" onClick={() => setModal(true)}>New </button>

                {
                    modal && <Modal setModal={setModal} />
                }
            </div>
            {inventoryData.map((data) => (
                <ProductCard data={data} />
            ))}
        </div>
    );
};

export default Products;
