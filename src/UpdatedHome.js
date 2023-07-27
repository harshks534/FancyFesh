import React,{useEffect} from 'react';
import "./UpdatedHome.css";



import Product from "./Product"
function UpdatedHome() {
  
    let API = "https://data.mongodb-api.com/app/data-ztyck/endpoint/data/v1";
      const fetchApiData = async(url) => {
        try{
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
        } catch(error){
          console.log(error);
        }
      };

    useEffect(() => {
      fetchApiData(API);
    }, [])

    return (
        <div className='home'>
           <div className="home__container">
             <img 
                 className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/UK_COVID19_Prime_FT_XSite_HeroTALL_1500x600._CB419556475_.jpg"
             />

          <div className="home__row">
               <Product 
                 id="0698798"
                 title="EYEBOGLER Men's Solid Regular Fit T-Shirt"
                 image="https://m.media-amazon.com/images/I/51mjLMt9XOL._UL1300_.jpg"
                 price={335}
                 rating={5}
               />
               <Product 
                 id="7858644"
                 title="Jockey Men's Regular Fit Round Neck Half Sleeved T-Shirt"
                 image="https://m.media-amazon.com/images/I/71DaKKQ93ZL._UL1500_.jpg"
                 price={321}
                 rating={4}
               /> 
          </div>

          <div className="home__row">
               <Product 
                 id="8576789"
                 title="LEOTUDE Regular Fit Half Sleeve Men's T-Shirt"
                 image="https://m.media-amazon.com/images/I/41nvyksD5lL.jpg"
                 price={329}
                 rating={4}
                />
  
               <Product
                  id="9758976" 
                  title="Allen Solly Men's Polo"
                 image="https://m.media-amazon.com/images/I/31W4g5yl6-L.jpg"
                 price={519}
                 rating={4}
               /> 

               <Product 
                  id="8697097"
                  title="AELOMART Men's T Shirt-(Amt250105-P_Green)"
                 image="https://m.media-amazon.com/images/I/71O1QaI-sbL._UY550_.jpg"
                 price={447}
                 rating={4}
               /> 

          </div>

          <div className="home__row">
               <Product 
                  id="0975574"
                  title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
                 image="https://m.media-amazon.com/images/I/71vp8Lec9JL._UL1500_.jpg"
                 price={449}
                 rating={5}
               />
               
          </div>
           </div>
        </div>
    );
}

export default UpdatedHome