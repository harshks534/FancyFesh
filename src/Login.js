
import React, { useState } from 'react';
import './Login.css'
import { Link,useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import './Signup';
import  photo1 from './images/Free_Sample_By_Wix.jpg'

function Login() {
    // const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             history.push('/')
    //         })
    //         .catch(error => alert(error.message))
    // }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // it successfully created a new user with email and password
    //             if (auth) {
    //                 history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

   
    const history = useNavigate();
     const [email, setEmail] =useState('');
     const [password, setPassword]= useState('');



      
     





     const loginUser = async(e) =>{
        e.preventDefault();
        const res = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = res.json();


        if(res.status === 400 || !data){
            window.alert("Invalid Crenditials");
        } else{
            window.alert("Login Successfull");
            history("/");

        }

     }

    return (
        <div className='login'>
       

            <Link to='/'>
                <img
                    className="login__logo"
                    src={photo1} alt='Free_Sample_By_Wix.jpg'>
                    </img>
              
            </Link>

            <div className='login__container'>
                <h1>Log-in</h1>

                <form method="POST">
                    <h5>E-mail</h5>
                    <input type='text' autoComplete="off" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' autoComplete="off"
                         value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />

                    <button type='submit'  className='login__signInButton'  
                    onClick={loginUser}
                    >Log In</button>
                </form>

                <p>
                   By Signing-in you agree our Terms and Conditions.
                </p>

              <Link to="/Signup"><button  className='login__registerButton'>Create your Amazon Account</button></Link>  
            </div>
            <p>Note : Click the FancyFesh Logo to go "Home"</p>
        </div>

       
    )
}

export default Login

