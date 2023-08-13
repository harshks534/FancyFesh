
import React, { useEffect,useState } from 'react'
import {useNavigate} from "react-router-dom";

const Hom =()=>{
     
    const histor = useNavigate();
    const callHomePage = async()=>{
        try{
         const re = await fetch('/Hom', {
           method: "GET",
           headers:{
             Accept:"application/json",
             "Content-Type":"application/json"
           },
           credentials:"include"
         })
 
         const dat = await re.json();
         console.log(dat);
 
         if(!re.status ===200){
           const erro = new Error(re.error);
           throw erro;
         }
         
         
 
        }catch(err){
         console.log(err);
         histor('/');
        }
     }
 
 
     useEffect(()=>{
       callHomePage();
     },[]);
   return(
    <>

    </>
   )
}
export default Hom