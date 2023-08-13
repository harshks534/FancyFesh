const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const ap = express();
dotenv.config({path:'./config.env'});

const bodyparser = require('body-parser')
// const stripe = require('stripe')('sk_test_51NbF8ySG2O57Lh8CeefuCZvjdMACOJ68hiGTgdcRV6di4eILMHpzbHj3EOEcbQTyU6WdSrbCtcmfL26HSbs7IuI700MX0cDNC5')
const uuid = require('uuid').v4
const cors = require('cors');
const User = require('./model/userSchema');
const Data = require('./model/dataSchema');
const { status } = require('init');
// const productModel = require('./model/productSchema');

ap.use(bodyparser.urlencoded({extended:true}))
ap.use(bodyparser.json())
ap.use(cors())


ap.use(express.json());
const PORT= process.env.PORT;
// const DB ='mongodb://fancyfeshowner_harsh:-4udUD+58(!NaN()@ac-y73swbt-shard-00-00.hsklduz.mongodb.net:27017,ac-y73swbt-shard-00-01.hsklduz.mongodb.net:27017,ac-y73swbt-shard-00-02.hsklduz.mongodb.net:27017/?ssl=true&replicaSet=atlas-m9z8m9-shard-0&authSource=admin&retryWrites=true&w=majority';
require('./db/conn');
// const User = require('./model/userSchema');

ap.use(require('./router/auth'));
const middleware = (req,res,next) =>{
    console.log(`hello from middleware`);
    next();
}
 
ap.get('/', (req,res) => {
    res.send(`hello harsh from your server`);
});

ap.get('/Login', (req,res) => {
    res.cookie("Tet",'harsh')
    res.send(`hello harsh from your login server`);
});
// ap.get('/Signup', (req,res) => {
//     res.send(`hello harsh from your signup server`);
// });
ap.get('/checkout', middleware, (req,res) => {
    res.send(`hello harsh from your checkout server`);
});


// require('./model/dataSchema')

// ap.get("/getAllData", async(req,res)=>{
//     try{

//       const allUser= await Data.find({});
//       res.send({status:'ok', data:allUser})
//     }catch(error){
//         console.log(error);
//     }
// })






// for stripe

// ap.post('/check',async (req,res)=>{
//     console.log(req.body);

//     let error,status

//     try{
      
//        const{prod,token}=req.body
//        const customer = await stripe.customer.create({
//         email: token.email,
//         source:token.id
//        })

//        const key = uuid()
//        const charge = await stripe.charges.create(
//         {
//             amount: Prod.price*100,
//             currency:'usd',
//             customer:customer.id,
//             receipt_email:token.email,
//             decreption:`Purchased the ${product.name}`,
//             shipping:{
//                 name:token.card.name, 
//                 address:{
//                     line1: token.card.address_line1,
//                     line2:token.card.address_line2,
//                     city:token.card.address_city,
//                     country:token.card.address_country,
//                     postal_code:token.card.address_zip,
//                 },
//             },

//         },
//         {
//             key,
//         }
//        );

//        console.log("charge:",{charge});
//        status="success";

//     }catch(error){
//         console.log(error)
//         status="failure";
//     }
//      res.json({error,status});
// })

//--------------------------------------------

// require('dotenv').config();

const stripe = require('stripe')("sk_test_51NbF8ySG2O57Lh8CeefuCZvjdMACOJ68hiGTgdcRV6di4eILMHpzbHj3EOEcbQTyU6WdSrbCtcmfL26HSbs7IuI700MX0cDNC5")
ap.use(express.static('public'));
// var cors = require('cors');

// ap.use(bodyparser.json());
// ap.use(bodyparser.urlencoded({extented:true}));
// ap.use(cors());
// const port = process.env.PORT || 5000;
// appp.listen(port,error =>{
//     if(error) throw error;
//     console.log('Your server is on 5000')
// });

// const token = await Stripe.tokens.create({
//     card:{
//         number:'4242424242424242',
//         exp_month:8,
//         exp_year:2024,
//         cvc:'314'
//     },
// });

ap.post('/payment', async (req,res)=>{
    let status, error;
    const {token, amount}= req.body;
    console.log(token);

    try{
      
        await stripe.paymentIntents.create({
            source:token.id,
            // card[token]=token.id,
            amount,
            currency:'usd',
        });
        status="success";
        window.alert('payment Successfull, Please Click Logo to go "Home" ')
    }catch(error){
        console.log(error);
        status="Failure";
        window.alert('payment UnSuccessfull, Please try again ')
    }
    res.json({error, status}); 
});

//----------------------------------------------

// const YOUR_DOMAIN = 'http://localhost:4242';

// ap.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         // price :20,
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// ap.listen(4242, () => console.log('Running on port 4242'));



//-----------------------------------------------

ap.listen(PORT, () => { 
    console.log(`server is running at port no ${PORT}`);
});

