import React from 'react'
import './NavBar_CSS.css'
import { Link } from 'react-router-dom'
export const NavBar = ({setsearch,cart_length}) => {
  return (
    <div>
          <nav className='navbar'>
                    <div>Store</div>
                    <div><Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link></div>
                    <div>About</div>
                    <div>Contact</div>
                    <div><input type="search" placeholder='Search Here' id='search_input' onChange={(e)=>{setsearch(e.target.value)}}/></div>
                    <div ><Link to={'/cart'} style={{textDecoration:'none', color:'white'}} > Cart{cart_length}🛒</Link></div>
          </nav>
    </div>
  )
}
