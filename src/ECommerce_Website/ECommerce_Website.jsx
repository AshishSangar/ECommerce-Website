import React, { useState } from 'react'
import { NavBar } from './NavBar'
import {Home} from './Home/Home'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Description } from './Description/Description';

import Cart from './Cart/Cart'
export const ECommerce_Website = () => {
        
          const[search,setsearch]=useState("");
          const[display_item,setdisplay_item]=useState([]);
          const[cart,setCart]=useState([])
          

          function handleClick(item){
            setCart([...cart,item])
          }

          function handleChange(x,d){
            let arr = cart
            let ind = cart.indexOf(x)
            arr[ind].amount+=d
            setCart([...cart])
          }
  return (
    <div>
      <BrowserRouter>
      <NavBar setsearch={setsearch} cart_length={cart.length}/>
      <Routes>
        <Route path='/' element={<Home search={search} setdisplay_item={setdisplay_item} handleClick={handleClick}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        <Route path='/description' element={<Description display_item={display_item} handleClick={handleClick}/>}/>
      </Routes>
    
      </BrowserRouter>

         

          
    </div>
  )
}
