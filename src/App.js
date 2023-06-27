import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import { useDispatch, useSelector } from 'react-redux'
import { total } from './redux/cartSlice';
import About from './components/About';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)
    useEffect(()=>{
        dispatch(total())
    },[cartItems,dispatch])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/checkout" element={<CheckOut/>} />
         <Route path="/product/:pid" element={<SingleProduct/>} />
         <Route path="/registration" element={<Registration/>} />
         <Route path="/login" element={<Login/>} />
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
