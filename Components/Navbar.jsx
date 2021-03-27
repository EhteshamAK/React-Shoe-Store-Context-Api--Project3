
import React,{useState} from 'react'
import icon from '../Images/ham.png';
import './Navbar.css';
import {Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './../StateProvider.js';

const Navbar = () => {
    const [Icon,setIcon] = useState(false);
    const[{basket}] = useStateValue();

    return (
        <div className="navbar">

            {/* HAMBURGER ICON  */}
            <div className="ham__icon ">
                <img  id="ham" src={icon} alt="side-menu" onClick={()=> setIcon(!Icon)}/>
            </div>

{/* WEBSITE TITLE  */}
         <div className="navbar__title">
             <Link  id="link" to="/">
             <p id="title">EAK</p>

                  </Link>
         </div>

{/* WEBSITE MENU  */}
         <div className="navbar__menu" id={Icon ? "hidden" : ""}>
             <Link   id="link" to="/"><p id="menu"> HOME</p>
             </Link> 
            <Link to="/checkout"  id="link">
            <p id="menu">CHECKOUT </p>
            </Link> 

            <Link to="/store"  id="link">
            <p id="menu"><ShoppingBasketIcon/> </p>
             </Link>
         <p Id="menu1">{basket?.length}</p>
         
         

         </div>

{/* WEBSITE SEARCH  */}
         <div className="search">
             <form >
                 <input  id="button "type="text" placeholder="search here"/>
                 <button id="button "><SearchIcon/> </button>
             </form>
         </div>
        </div>
       

    )
}

export default Navbar;