import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaSearch, FaShoppingBag } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>Fudo</h2>
        </div>
        <div className="links">
            <ul className="nav-list">
                <li>
                    <Link to="/">Why Fudo?</Link>
                </li>
                <li>
                    <Link to="/">Services <span className='link-chevron'><FaChevronDown size={10} color='#f54748' /></span></Link>
                </li>
                <li>
                    <Link to="/menu">Menu <span className='link-chevron'><FaChevronDown size={10} color='#f54748' /></span></Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="others">
            <div className="icons">
                <FaSearch />
                <FaShoppingBag />
                <Link to="/login" className='login-button'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar