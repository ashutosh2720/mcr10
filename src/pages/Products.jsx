import React, { useState } from "react";
import { inventoryData } from "../db/inventoryData";
import { useNavigate } from "react-router-dom";
import { useGlobalInventory } from "../contexts/inventoryManagementContext";
import ProductTable from "../components/ProductTable";

const Products = () => {
    const {
        allDetartments,
        setSelectedDepartmentFilter,
        setSortBy,
        setIsLowStockItem,
        selectedDepartmentFilter,
    } = useGlobalInventory();
    const navigate = useNavigate();

    const checkboxHandler = (e) => {
        setIsLowStockItem(e.target.checked);
    };

    return (
        <div className="w-[70%] h-screen relative left-[350px]">
            <div className="filter-bar flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <select
                    onChange={(e) => setSelectedDepartmentFilter(e.target.value)}
                    value={selectedDepartmentFilter}
                    className="border-2 border-black/40 p-2"
                >
                    <option value="">All Departments</option>

                    {allDetartments.map((department) => (
                        <option key={department} value={department}>
                            {department}
                        </option>
                    ))}
                </select>

                <div className="stock flex gap-1">
                    <input type="checkbox" name="" id="" onChange={checkboxHandler} />
                    <h1>low Stock</h1>
                </div>
                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    name=""
                    id=""
                    className="border-2 border-black"
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stocks">Stock</option>
                </select>
                <button
                    className="bg-blue-500 pl-3 pr-3 text-2xl text-white"
                    onClick={() => navigate("/form")}
                >
                    New{" "}
                </button>
            </div>

            <ProductTable />
        </div>
    );
};

export default Products;
