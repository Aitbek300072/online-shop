import React from 'react';
import { Routes, Route } from 'react-router-dom';
// user
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess';
// product
import ProductList from './components/products/ProductList/ProductList';

const Routing = () => {
  return (
    <Routes>
        {/* users routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        {/* products routes */}
        <Route path="*" element={<Loader />} />
        <Route path="/products" element={<ProductList />} />
    </Routes>
  )
}

export default Routing