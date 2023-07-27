const express = require('express');
const appp = express();
const path = require('path');
const stripe = require('stripe');

const YOUR_DOMAIN = "http://localhost:8080";

//static files
appp.use(express.static(path.join(__dirname,"views")));

//middleware
appp.use(express.json());

//routes
appp.post("/payment",async(req,res) =>{
    const{product}=req.body;
    const session = await stripe.checkout.session.create({
        payment_method_types:['card'],
        line_items:[
            {
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:product.name,
                        image:[product.image]
                    },
                    unit_amount:product.amount*100,
                },
                quantity:product.quantity,
            }
        ],
        mode:"payment",
        success_url:`${YOUR_DOMAIN}/success.html`,
        cancel_url:`${YOUR_DOMAIN}/cancel.html`
    })
    res.json({id:session.id})
})

//listening
const port =process.env.PORT || 8080;
appp.listen(port,() => console.log('Listening on port ${port}...'))