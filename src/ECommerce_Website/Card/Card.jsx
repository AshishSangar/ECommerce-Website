import React, { useState } from 'react'
import './Card_CSS.css'
import { Link } from 'react-router-dom';
export const Card = ({item,setdisplay_item_,handleClick}) => {
          const{price,description,rating,image,title}=item;
          const [showmore,setshowmore]=useState(false);
  return (
    <div>
          <div className='card'>
                   <Link to={'/description'}><img  className="image_card" src={image} alt="" onClick={()=>{setdisplay_item_(item)}}/></Link> 
                    <p>{title}</p>
                    <button className='more_button_card' onClick={()=>{setshowmore(true)}}> More</button>
                    <button className='add_button_card' onClick={()=>handleClick(setdisplay_item_)}>Add Cart</button>
                    {(showmore)?<><p style={{color:'gray'}}>{description}</p>
                    <div className='other_operation'>
                    <button className='add_button_card' onClick={()=>{setshowmore(false)}}>Cancel</button>
                    <button className='add_button_card' onClick={()=>handleClick(setdisplay_item_)}>Add Cart</button>
                    </div>
                    </>:<></>}
          </div>

    </div>
  )
}
