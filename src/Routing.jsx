import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
// user
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess';
// product
import ProductList from './components/products/ProductList/ProductList';

const PrivateRoutes = () => {
  const user = localStorage.getItem('email')

  return user ? <Outlet /> : <Navigate to='/login' />
}

const Routing = () => {
  return (
    <Routes>
        {/* users routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* products routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="*" element={<Loader />} />
          <Route path="/products" element={<ProductList />} />
        </Route>
    </Routes>
  )
}

export default Routing