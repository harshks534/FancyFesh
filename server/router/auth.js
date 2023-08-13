const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate"); 

const cookieParser = require("cookie-parser");
router.use(cookieParser());

// const stripe = require('../Stripecheck')
// ap.use('/api/stripe', stripe);


//-----------------------------------------------------


//-----------------------------------------------------















require('../db/conn');
const User = require("../model/userSchema");
const Data = require("../model/dataSchema")
router.get('/',(req,res) => {
    res.send(`Hello World ===from server router js`);
});

router.get('/getdata',authenticate,(req,res)=>{
   console.log("hello my About");
   res.send(req.rootUser);
});

// router.post('/signup',(req,res) =>{
//     const {firstname, lastname, email, password, cpassword} =req.body;
// //    console.log(req.body.firstname);
// //    console.log(req.body.password);
// // //    res.send("my signup page");
//     // res.json({message: req.body});
    
//     if(!firstname || !lastname || !email || !password || !cpassword){
//        return res.status(222).json({error:"fill it properly"}); 
//     }
    
//     User.findOne({email:email}).then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email Already Exist, Try logging in"});
//         }

//         const user = new User({firstname, lastname, email, password, cpassword});

//         user.save().then(() => {
//            res.status(201).json({message:"Registered Sucessfully"});
//         }).catch((err) => res.status(500).json({error:"Failed to Register"}));
//     }).catch(err => {console.log(err);})

// });




router.post('/signup', async(req,res) =>{
    const {firstName, lastName, email, password, cpassword} =req.body;
//    console.log(req.body.firstname);
//    console.log(req.body.password);
// //    res.send("my signup page");
    // res.json({message: req.body})
    
    if(!firstName || !lastName || !email || !password || !cpassword){
       return res.status(222).json({error:"fill it properly"}); 
    }


try{
       
       
       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({error:"Email Already Exist, Try logging in"});
       }else if(password != cpassword){
        return res.status(422).json({error:"Paawords are not Matching"});
       }else{
        const user = new User({firstName, lastName, email, password, cpassword});
        await user.save(); 
        res.status(201).json({message:"Registered Sucessfully"});
       }
       
          
} catch(err){
    console.log(err);
}

});

//login route

router.post('/login', async (req,res)=>{
//    console.log(req.body);
//    res.json({message:"Great"});
      
       try{
           let token;
          const {email, password} = req.body;
          if(!email || !password){
              return res.status(400).json({error:"fill it completely"})
          }

          const userLogin = await User.findOne({email:email});
        //   console.log(userLogin);
           
          if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
              if(!isMatch){
                  res.status(400).json({message:"Invalid credentials"});
              }else{
                  res.json({message:"Login Successfull"});
              }
          }else{
            res.status(400).json({message:"Invalid credentials"});
          }

          
       } catch(e) {
          console.log(err);
       }
})

  //Prime Account
  router.get('/YourPrimeAccount',authenticate,(req,res)=>{
    
    console.log("hello from prime Account");
    res.send(req.rootUser);
   });


   router.get('/Logout',authenticate,(req,res)=>{
    
    console.log("hello from Logout");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User logout');
   });
 

   router.get('/Hom', authenticate,(req,res)=>{
    console.log('hello prodata')
    res.send(req.rootData)
   })
 
module.exports = router;