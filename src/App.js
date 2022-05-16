import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Navbar/Home'
import { Routes, Route, } from 'react-router-dom'
import Products from './components/Navbar/Products'
import Product from './components/Navbar/Product'
import Login from './components/Navbar/Login'
import Cart from './components/Navbar/Cart'
import Checkout from './components/Navbar/Checkout'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}