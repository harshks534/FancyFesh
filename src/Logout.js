import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";
const Logout = () => {

    // using Promises
   
  const history = useNavigate();
   useEffect(() =>{
      fetch('/logout', {
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
      }).then((res) =>{
          history('/login', {replace: true});
          if(res.status != 200){
            const error =new Error(res.error);
            throw error;
          }
      }).catch((err)=>{
        console.log(err);
      })
   }); 
  return (
     <>
        <h2>Logout page</h2>
     </>
  )
}
//window.localStorage.clear();
export default Logout