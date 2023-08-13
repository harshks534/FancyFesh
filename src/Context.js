
import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext();

const API_URL='https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';

const AppProvider = ({children}) =>{
    
    const getMovies = async (url)=>{
        try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
        }catch(error){
            console.log(error);
        }
    }



    useEffect(()=>{
       getMovies(API_URL);
    },[]);

    return <AppContext.Provider value="cot"> {children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};