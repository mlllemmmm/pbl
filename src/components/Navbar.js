import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Button} from './Button';
import cart from "../components/assets/cartimg.jpg";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton]=useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu=()=> setClick(false);

  const showButton=()=>{
    if(window.innerWidth <=960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

useEffect(()=> {
  showButton();
}, []);


window.addEventListener('resize',showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FURNICOLE <i className="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/renting' className='nav-links' onClick={closeMobileMenu}>
              Renting Furniture
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/secondhand' className='nav-links' onClick={closeMobileMenu}>
              Second-Hand Furniture
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/local-furniture' className='nav-links' onClick={closeMobileMenu}>
              Local Furniture
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/log-out' className='nav-links' onClick={closeMobileMenu}>
              Log out
              </Link>
              </li>

          </ul>
          <Link to ='/shopping-cart'>
          {button && <Button buttonStyle='btn--outline' > <img src={cart} className='cartbutton'></img></Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
