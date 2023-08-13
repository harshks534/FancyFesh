
// import './Stripepay.css'
// import StripeCheckout from 'react-stripe-checkout'
// import { useState } from 'react';
// import axios from 'axios'
// import { toast} from 'react-toastify';


// import React from 'react'
// import "../Checkout.css";
// import "../Checkout.js";
// import CheckoutProduct from '../CheckoutProduct';
// import Subtotal from "../Subtotal";
// import { Link,useNavigate } from "react-router-dom";
// import {useStateValue} from "../StateProvider"
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from '../reducer';
// // import Product from '../Product';

// // import "react-toastify/dist/ReactTostify.css"; 
// function Stripepay(){
    
//     //product object name,price

//     // toast.configure()
//     const history = useNavigate();
//     const [{basket},dispatch] = useStateValue();
//     const [prod] =useState({
//       //  name:' Formal Shirt',
//       //  price:700,
//       //  description:'Sample full sleeves wear'
      
//       //  name:' Formal Shirt',
       
//       //  description:'Sample full sleeves wear

//     });

//     async function handleToken(token,addresses){
//         const response = await axios.post('http://localhost:5000/check',{token,prod})


  
//         console.log(response.status)
//         if(response.status===200){
           
//            toast("Success, Payment is Completed",{type:'success'})

//         }else{
//             toast("Failure, payment is not Completed",{type:'error'})
//         }
       
 
//     }
    

    

//     return(
       
//         <>

//                   {basket.map(item =>(
//                        <CheckoutProduct 
//                            id={item.id}
//                            title={item.title}
//                            image={item.image}
//                            price={item.price}
//                            rating={item.rating}
//                        />
//                    ))}     

            


// {/* ------------------------------------ */}

// <div className="subtotal">
//           <CurrencyFormat 
//               renderText={(value) =>(
//                   <>
//                   <p>
//                       Subtotal ({basket.length} items):
//                       <strong>{value}</strong>
                      
//                   </p>
//                   <small className="subtotal__gift">
//                     <input type="checkbox" /> This order contains a gift
//                   </small>
//                   </>
//               )}
//               decimalScale={2}
//               value={getBasketTotal(basket)}
//               displayType={"text"}
//               thousandSeparator={true}
//               prefix={"₹"}
//           />  
//   </div>








// {/* 
// -------------------------------------------- */}





//             <div className='container'>
//               <br/><br/>
//                 <h1 className="text-center"> Stripe Payment Checkout</h1>
//               <br/><br/>
              
//               <h2 className='text-center'>Your Total Products Listed Above</h2>
//               {/* <h3 className='text-center'>Product Name: {prod.name}</h3> */}
//               <h3 className='text-center'>Proceed to Payment : {} </h3>
//               {/* <h3 className='text-center'>Product Description: {prod.description}</h3> */}
//               <br/><br/>

//               <div className='form-group container'>
//                 <StripeCheckout
//                  className='center'
//                  stripeKey='pk_test_51NbF8ySG2O57Lh8CEb35l9XOKKFQMs0ci4JgNSvttDvrsIu7WRyucqWV7oDFfpp9UTMihtoa0VBNHDJywIXi69Ih00VLXIsJjo'
//                  token={handleToken}
//                  amount={prod.price*100}
//                  name={prod.name}
//                  billingAddress
//                  shippingAddress
                 
//                 />
                 
//               </div>
            
//             </div>
           
//         </>


//     );
    
// } 

// export default Stripepay; 









// import './Stripepay.css'
// import StripeCheckout from 'react-stripe-checkout'
// import { useState } from 'react';
// import axios from 'axios'
// import { getBasketTotal } from '../reducer';
// import CheckoutProduct from '../CheckoutProduct';
// import {useStateValue} from "../StateProvider"


import './Stripepay.css'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react';
import axios from 'axios'
import { toast} from 'react-toastify';


import React from 'react'
import "../Checkout.css";
import "../Checkout.js";
import CheckoutProduct from '../CheckoutProduct';
import Subtotal from "../Subtotal";
import { Link,useNavigate } from "react-router-dom";
import {useStateValue} from "../StateProvider"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../reducer';
import  photo1 from '../images/Free_Sample_By_Wix.jpg'

function Stripepay(){

  const publishableKey ='pk_test_51NbF8ySG2O57Lh8CEb35l9XOKKFQMs0ci4JgNSvttDvrsIu7WRyucqWV7oDFfpp9UTMihtoa0VBNHDJywIXi69Ih00VLXIsJjo';
  const [{basket},dispatch] = useStateValue();
const [product, setProduct]= useState({
  // name:'T-Shirt',
  // price: 20
});

const priceForStripe = product.price*100;

const PayNow= async token =>{
  try{
    const response=await axios({
      url:"http://localhost:5000/payment",
      method:'post',
      data:{
        amount:product.price*100,
        token,
      },
    });

    if(response.status===200){
      console.log('your payment was successful');
    }
  }catch(error){
    console.log(error)
  }
}


  return(
    <>

                 {basket.map(item =>(
                       <CheckoutProduct 
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                       />
                   ))}     
  


                   <div className="subtotal">
          <CurrencyFormat 
              renderText={(value) =>(
                  <>
                  <p>
                      Subtotal ({basket.length} items):
                      <strong>{value}</strong>
                      
                  </p>
                  <small className="subtotal__gift">
                    {/* <input type="checkbox" /> This order contains a gift */}
                  </small>
                  </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
          />  
          
  </div>











       <div className='container'>
       <h2> Complete your payment</h2>
       <p>
        <span>Product:</span>
        {product.name}
       </p>

       <p>
        <span>price:</span> ${product.price}
       </p>
<StripeCheckout

                 stripeKey={publishableKey}
                 name='Pay with Credit card'
                 billingAddress
                 shippingAddress
                 amount={priceForStripe}
                 description={`your total is ${product.price}`}
                 token={PayNow}
/>
<Link to='/'>
                <img
                    className="login__logo"
                    src={photo1} alt='Free_Sample_By_Wix.jpg'>
                    </img>
              
            </Link>
      <p>Note : Click FancyFesh Logo to go "Home"</p>
       </div>
    </>
  )
}
export default Stripepay; 


// ---------------------------------------------------------------------
// import React from 'react'
// import  { useState, useEffect } from "react";
// // import "./App.css";

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );



// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }