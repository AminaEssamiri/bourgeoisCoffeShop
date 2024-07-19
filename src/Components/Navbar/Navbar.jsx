import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo_big.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    return (
        <div className='navbar'>
            <div className="nav-logo"> 
                <img  src={logo} alt='logo'/>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:"none"}} to='/'>Demander</Link> {menu === 'shop' ?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('boissons')}}><Link style={{textDecoration:"none"}} to='/boissons'>Boissons</Link> {menu === 'boissons' ?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('plats')}}><Link style={{textDecoration:"none"}} to='/plats'>Plats</Link> {menu === 'plats' ?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('petit')}}><Link style={{textDecoration:"none"}} to='/petit'>Petit-déjeuner</Link> {menu === 'petit' ?<hr/>:<></>}</li>
                </ul>
                <div className='nav-login-cart'>
                    <Link style={{textDecoration:"none"}} to='/login'><button>S'inscrire</button></Link>
                    <Link style={{textDecoration:"none"}} to='cart'><img  src={cart_icon} alt='logo'/></Link>
                    <div className='nav-cart-count'>0</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;