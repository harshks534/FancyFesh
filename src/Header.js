import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
        <Link to="/">
        <img className="header__logo" src="https://tse2.mm.bing.net/th?id=OIP.4cDH8tq0xFTEKi8WjXpg8wHaCy&pid=Api&P=0&w=484&h=182" /> 
        </Link>
            <div className="header__search">
               <input className="header__searchInput" type="text" />
               <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__nav">
               <Link to='/Login'>
               <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        Hello User
                    </spam>
                    <spam className='header__optionLineOne'>
                        Log In
                    </spam>
                </div>
               </Link>
               

                <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        Return
                    </spam>
                    <spam className='header__optionLineOne'>
                        & Orders
                    </spam>
                </div>
 
                <div className='header__option'>
                    <spam className='header__optionLineOne'>
                        Your
                    </spam>
                    <spam className='header__optionLineOne'>
                        Prime
                    </spam>
                </div>
                
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