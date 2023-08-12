import { useState } from 'react'

import './App.css'
import LeftSide from './components/LeftSide'
import { Route, Routes } from 'react-router-dom'
import DashBord from './pages/DashBord'
import Departments from './pages/Departments'
import Products from './pages/Products'
import ProductsDescription from './pages/ProductsDescription'

function App() {


  return (
    <>
      <LeftSide />
      <Routes>
        <Route path='/' element={<DashBord />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsDescription />} />
      </Routes>



    </>
  )
}

export default App
