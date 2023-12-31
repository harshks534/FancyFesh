const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongooose.Schema({
   firstName:{
       type:String,
       required:true
   },
   lastName:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   }, 
   password:{
       type:String,
       required:true
   },
   cpassword:{
       type:String,
       required:true
   },
   tokens: [
       {
           token:{
               type: String,
               required:true
           }
       }
   ] 
})

// hashing Password
userSchema.pre('save', async function(next){
    console.log('hi i am pre')
    if(this.isModified('password')){
        console.log('hi am pre password')
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

//generating token

userSchema.methods.generateAuthToken = async function(){
    try{
      let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
      this.tokens =this.tokens.concat({token:token});
      await this.save();
      return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongooose.model('USER', userSchema );
module.exports = User;