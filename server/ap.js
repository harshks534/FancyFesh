const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const ap = express();
dotenv.config({path:'./config.env'});
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


ap.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});