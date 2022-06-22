import React, { useState } from 'react';
import './Signup.css'
import { Link, useNavigate} from "react-router-dom";
import { auth } from "./firebase";
import { Form, Alert } from "react-bootstrap";
import Header from './Header';

      const Signup = () => {
     
        const history = useNavigate();
        const[user,setUser] = useState({
          firstName:"", lastName:"", email:"", password:"", cpassword:""
        });

        let nam,valu;
        const handleInputs = (e) => {
            console.log(e);
            nam = e.target.name;
            valu = e.target.value;
            
            setUser({ ...user, [nam]:valu});
        }

        const PostData = async (e) => {
            e.preventDefault();
            const {firstName, lastName, email, password, cpassword} = user;
            const res = await fetch("/signup", {
                method:"POST",
                headers:{
                   "Content-Type" : "application/json" 
                },
                body: JSON.stringify({
                    // "firstname":"K.L",
                    // "lastname":"Rahul",
                    // "email":"rahul1@gmail.com",
                    // "password":"rahul1",
                    // "cpassword":"rahul1"
                    firstName, lastName,email, password, cpassword
                    
                })
            });

            const data = await res.json();

            if(res.status === 422 || !data){
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }else{
                window.alert("Registration Success");
                console.log("Registration Success");
                history("/login");
            }
        }

    return (
        <div className='signup'>
       

            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://tse4.mm.bing.net/th?id=OIP.OVaV5Z7H3ukt9H8aEbFepwHaCO&pid=Api&P=0&w=560&h=168' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-up</h1>
              
                <form method="POST">

                    <h5>First Name</h5>
                    <input type='text' name="firstName" id="firstName" autoComplete="0ff" value={user.firstName} onChange={handleInputs}  /> 
                     
                    <h5>Last Name</h5>
                    <input type='text'  name="lastName" id="lastName" autoComplete="0ff"  value={user.lastName} onChange={handleInputs} />  

                    <h5>E-mail</h5>
                    <input type='text'  name="email" id="email"  autoComplete="0ff" value={user.email} onChange={handleInputs} />  
 
                    <h5>Password</h5>
                    <input type='password'  name="password" id="password"  value={user.password} onChange={handleInputs}/>

                    <h5>Confirm Password</h5>
                    <input type='password'  name="cpassword" id="cpassword"  value={user.cpassword} onChange={handleInputs}/>

                    <button type='submit'  className='login__signInButton'  onClick={PostData} >Create</button>
                </form>

                <p>
                   By Signing-in you agree our Terms and Conditions.
                </p>

              <Link to="/Login"><button  className='login__registerButton'>Sign in</button></Link>  
            </div>
        </div>
    )
}

export default Signup;


