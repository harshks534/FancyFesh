 import React, { useEffect,useState } from 'react'
 import photo from './images/img1.png'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import {useStateValue} from "./StateProvider"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";
import  photo1 from './images/Free_Sample_By_Wix.jpg'
 const YourPrimeAccount = () =>{
    
    // const history = useHistory();
    const history = useNavigate();
    const [userData, setUserData]= useState({});
    const [{basket},dispatch] = useStateValue();
    const callYourPrimeAccount= async() =>{
        try{
            const res = await fetch('/YourPrimeAccount',{
            method: "GET",
            headers:{
               Accept: "application/json",
               "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const  data= await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status ===200){
            const error = new Error(res.error);
            throw error;
        }
        
        } catch(err){
            console.log(err);
            history('/login');
        }
    }

     useEffect(()=>{
        callYourPrimeAccount();
     }, []);

     return(

        <> 

            <div className='comtainer emp-profile'>
                <form method="GET">
                    <div className="row">
                        <div className='col-md-3'>
                        <div className='profile-img'>
                        <img src={photo} alt='img1'></img>
                        </div>
                          
                        </div>

                        <div className='col-md-6'>
                           <div className='profile-head'>
                              <h5>{userData.firstName} {userData.lastName}</h5>
                            <p className="profile-rating mt-3 mb-5"></p>
                            <ul className="nav nav-tabs" role='tablist'>
                               <li className="nav-item">
                                  <a className="nav-link active" id='home-tab' data-toggle='tab' href="#home" role='tab'>Your Prime Account</a>
                               </li>
                            </ul>
                           </div>
                        </div>
                        <div className='col-md-2'>
                          {/* <input type='submit' className='profile-edit-btn' name='btnAddMore' value='Edit Profile'/> */}
                        </div>
                    </div>
                    <div className='row'>
                    <div className='col-md-3'>
                        <div className='profile-work' >
                             {/* <p> Data :-</p> 
                             <p> First Name :</p> 
                             <p> Last Name :</p> 
                             <p> E-mail :</p>  */}
                             {/* <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>
                            <a href="https://www.youtube.com/channel/UCwfaAHy4zQUB2APNOGXUCCA" target='_youtube'>Youtube</a><br/>  */}
                        </div>
                    </div>
                 </div>     
                     <div className='col-md-8 pl-5 Account-info'>
                         <div className='tab-content profile-tab' id='myTabContent'>
                             <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='hoem-tab'>
                                {/* <div className='row'>
                                    <div className='col-md-6'>
                                        <label User ID></label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>User</p>
                                    </div>
                                </div> */}

                                {/* <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label Name></label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>{userData.firstName}</p>
                                    </div>
                                </div> */}

                                {/* <div className='row'>
                                    <div className='col-md-6'>
                                        <label User ID></label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>{userData.lastName}</p>
                                    </div>
                                </div> */}
  

                                {/* <div className='row'>
                                    <div className='col-md-6'>
                                        <label User ID></label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>{userData.email}</p>
                                    </div>
                                </div> */}

                         </div>
                     </div>   
                    </div>
                </form>
            </div>

   


      <Form.Group className="mb-3">
        <Form.Label>First Name :-</Form.Label>
        {/* <Form.Control  /> */}
        <div className='col-md-6'>
        <p>{userData.firstName}</p>
        </div>
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name :-</Form.Label>
        {/* <Form.Control placeholder="Disabled input" disabled /> */}
        <div className='col-md-6'>
        <p>{userData.lastName}</p>
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail :-</Form.Label>
        {/* <Form.Control placeholder="Disabled input" disabled /> */}
        <div className='col-md-6'>
        <p>{userData.email}</p>
        </div>
      </Form.Group>



                 {basket.map(item =>(
                       <CheckoutProduct 
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                       />
                    ))}  

                    <Link to='/'>
                <img
                    className="login__logo"
                    src={photo1} alt='Free_Sample_By_Wix.jpg'>
                    </img>
              
            </Link>



     
      {/* <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group> */}
      {/* <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group> */}

        </>
       

        
     )

     
 }

 export default YourPrimeAccount;