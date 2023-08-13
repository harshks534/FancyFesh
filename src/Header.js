import {React, useState, useEffect} from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { useRadioGroup } from '@material-ui/core';
import  photo1 from './images/Free_Sample_By_Wix.jpg'

// import axios from 'axios'




function Header() {

  
     
//    const[searchResult, setSearchResult]= useState([])
//    const[key, setKey] = useState("")
// useEffect(() =>{
//     const search = async() =>{
//       try{
//          if(!key.trim()){
//             setSearchResult([])
//             return
//          }
//          const res = await axios.get('http://localhost:3000/api/v1/books', {params:{key:key,limit: 5}})
//          console.log(res)
//       }catch(error){
//         console.log(error)
//       }
//     }
//     search()
// }, [])














   const[userName, setUserName] = useState('');
//    const show=false;

// const [show, setShow]= useState(false);
   const userHomepage = async()=>{
     
    try{
      const res = await fetch('/getdata',{
        method:"GET",
         headers:{
          "Content-Type": "application/json"
         }, 
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.firstName);
    //   setShow(true);

    //   if(!res.status===200){
    //     const error=new Error(res.Error);
    //     throw error;
    //   }
    } catch(err){
      console.log(err);
    }
    }
    

    useEffect(()=>{
      userHomepage();
    }, []);








    // const name={userName}
    // const str='Log In'
    const [{basket}, dispatch] = useStateValue();
    // src={photo1} alt='Free_Sample_By_Wix.jpg'>
    // src="https://tse2.mm.bing.net/th?id=OIP.4cDH8tq0xFTEKi8WjXpg8wHaCy&pid=Api&P=0&w=484&h=182"
    return (
        <div className='header'>
        <Link to="/">
        <img className="header__logo" src={photo1} alt='Free_Sample_By_Wix.jpg'></img>  
        </Link>
            <div className="header__search">
               {/* <input className="header__searchInput" type="text" 


                  value={key}
                  onChange={(e)=>setKey(e.target.value)}


               /> */}
               {/* <SearchIcon className="header__searchIcon" /> */}

               {/* <form>

                 <div className='search-wrapper'>
                 <button className='search-btn'> <BsSearch/> </button>
                 <div className="form-group">
               <input
                         type="text"
                    className="form-control"
                       placeholder='searching...'
              />
            </div>
  
              </div>

                </form> */}
           
 
            </div>
            
            <div className="header__nav">
           
               <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        Hello 
                    </spam>
                    <spam className='header__optionLineOne'>
                     
                      {/* {show ?  '{userName}':'User' }  */}
                        {/* Log In */}
                        {/* {userName} */}
                        {/* {newUser} */}
                        {userName}
                        
                    </spam>
                </div>
                
               
                <Link to='/Login'> 
            
               <div className='header__option'>
                    <spam className='header__optionLineOne'>
                      Welcome
                    </spam>
                    <spam className='header__optionLineOne'>
                     
                     login
                        
                    </spam>
                </div>
               </Link>
               
                
               <Link to='/Logout'> 
                <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        logout
                    </spam>
                    <spam className='header__optionLineOne'>
                        Visit Again
                    </spam>
                </div>
                </Link>

                <Link to='/YourPrimeAccount'>
                <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        Your
                    </spam>
                    <spam className='header__optionLineOne'>
                        Prime
                    </spam>
                </div>
                </Link>
                
                <Link to="/checkout">
                <div className='header__optionBasket'>
                   <ShoppingBasketIcon />
                   <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                </div>
                </Link>

            </div>

        </div>
    );
  

}

export default Header