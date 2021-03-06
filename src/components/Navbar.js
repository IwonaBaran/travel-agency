import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
               <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
               <i className="fas fa-globe-americas" /> LDTR 
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
               </div>
               <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                   <li className="nav-item">
                       <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                           HOME
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                           ABOUT
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/offers" className="nav-links" onClick={closeMobileMenu}>
                           OFFERS
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                           CONTACT
                       </Link>
                   </li>
               </ul>
           </div>
       </nav>
       </>
    )
}

export default Navbar;