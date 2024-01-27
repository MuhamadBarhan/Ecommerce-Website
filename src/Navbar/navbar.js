import React, { useState } from 'react'
import './navbar.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={Logo} alt='Logo' className='logo' />
      <div className="desktopMenu">
        <div className="wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" id='search' />
          <input type="text" placeholder="Search..." className='search-container' id='search' />
        </div>
        <Link activeClass='active' className="desktopMenuListItem"><FontAwesomeIcon icon={faBell} /> Notifications</Link>
        <Link activeClass='active' to='/cart' className="desktopMenuListItem"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link>
        <Link activeClass='active' to='/wishlist' className="desktopMenuListItem"><FontAwesomeIcon icon={faHeart} /> Wishlist</Link>
        <Link activeClass='active' to="/login" className="desktopMenuListItem"><FontAwesomeIcon icon={faUser} />  Login</Link>
        {/*<Link to='/signup'><button className="signupBtn">Sign Up</button></Link>*/}
      </div>

      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} className='burger-menu' />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <div className="mob-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" id='search' />
          <input type="text" placeholder="Search..." className='search-container' id='search' />
        </div>
        <Link activeClass='active' className="ListItem"><FontAwesomeIcon icon={faBell} /> Notifications</Link>
        <Link activeClass='active' to='/cart' className="ListItem"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link>
        <Link activeClass='active' to="/login" className="ListItem"><FontAwesomeIcon icon={faUser} />  Login</Link>
        <Link activeClass='active' to="/signup" className="ListItem"><FontAwesomeIcon icon={faUserPlus} />  Signup</Link>
        
      </div>



    </nav>
  )
}

export default Navbar


