import React from 'react'
import { Data } from '../Data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home_CSS.css'
import { Card } from '../Card/Card';
export const Home = ({search,setdisplay_item,handleClick}) => {
  return (
    <div>
<Carousel showArrows={true} showThumbs={false}> 
    {Data.filter((x)=>x.category.toLowerCase().includes(search)).map((x)=>{
          return (
                    <section key={x.id} style={{height:'90vh',width:'100%'}} >
                              <div>
                                        <img src={x.image} className='image_style' />
                                        <div className="legend">
                                                  <h1>{x.title}</h1>
                                                  <p>{x.description}</p>
                                                  <p>{x.rating.rate}⭐</p>
                                                  <button onClick={()=>handleClick(x)}>Add Cart</button>
                                        </div>
                              </div>
                              
                    </section>
          )
    })}
   </Carousel>

   <section className='card_display' style={{marginTop:'50px'}}>
          {Data.filter((x)=>x.category.toLocaleLowerCase().includes(search)).map((x)=>{
                   return( <Card key={x.id} handleClick={()=>handleClick(x)} item={x} setdisplay_item_={setdisplay_item}></Card>)
          })}
   </section>
    </div>
  )
}
