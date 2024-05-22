import React from 'react'
import './Description_CSS.css'
export const Description = ({display_item,handleClick}) => {
          const{price,description,rating,image,title}=display_item;
  return (
    <div>
          <div className='description_data'>
                    <div className='Image_description'>
                              <img src={image} alt="" width={'80%'} height={'100%'}/>
                    </div>
                    <div className='Description_data'>
                              <h1>{title}</h1>
                              <p><b>Description: <br /></b>{description}</p>
                              <h4>$: {price}</h4>
                              <button onClick={()=>{handleClick(display_item)}} className='cart_add'>Add To Cart</button>
                    </div>
          </div>
    </div>
  )
}
