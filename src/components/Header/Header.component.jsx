import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.styles.scss'

const Header = ({

}) => (
    <div className="Header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="navbar-options">
        <Link to="/shop" className="option">
            Shop
        </Link>
        <Link to="/contact" className="option">
            Contact
        </Link>
        </div>
    
    </div>

)

export default Header;