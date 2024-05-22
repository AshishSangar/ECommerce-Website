import { useEffect, useState } from "react"
import GooglePayButton from '@google-pay/button-react'
import "./Cart_CSS.css"

const Cart = ({cart,setCart,handleChange}) => {
const[price,setPrice] = useState(0)

function handlePrice(){
  let ans=0;
  cart.map(x=>ans+=x.price*x.amount)
  setPrice(ans)
}

useEffect(()=>{
  handlePrice()
})

function handleRemove(title){
  const arr = cart.filter(item => {if(item.title!==title) return title}  )
  setCart(arr)
}

async function checkout(e){
  e.preventDefault();
  try{
    const res = await fetch("http://localhost:8000/checkout",{
      method: "POST",
      headers : {
        "Content_Type": "application/json",
      },
      mode: "cors",
      body:JSON.stringify({
        item: [
          {
            id:'1',
            qquantity:11,
            price:1000,

            name:'Laptop'
          }
        ]
      })
    })
    const data = await res.json();
    window.location = data.url;
  } catch(err) {
    console.log(err);
  }
}


  return (
    <div className='Cart'>
      <table border={1} rules="all">
        <thead>
          <tr>
          <th><b>Image</b></th>
          <th><b>Name</b></th>
          <th><b>Incr</b></th>
          <th><b>Qty</b></th>
          <th><b>Decr</b></th>
          <th><b>TotalPrice</b></th>
          <th><b>Remove</b></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((x)=>{
            return(
              <tr key={x.id}>
                <td><img src={x.image} alt="" style={{height:'80px', width:'80px', borderRadius:'50%'}}/></td>
                <td>{x.title}</td>
                <td><button onClick={()=>handleChange(x,1)}>+</button></td>
                <td>{x.amount}</td>
                <td><button onClick={()=>handleChange(x,-1)}>-</button></td>
                <td>{x.price}</td>
                <td><button onClick={()=>handleRemove(x.title)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>The Total Amount</td>
            <td colSpan={5}>{price}$</td>
            <td><button onClick={checkout}>Pay Here</button></td>
            <td><button>
            <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
              </button></td>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default Cart