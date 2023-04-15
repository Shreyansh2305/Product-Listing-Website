import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export default function Header(){
  
  return (
    <nav>
      <div className="logo">Raven</div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About US</li>
        <li>Contact</li>
      </ul>
      <div className="search">
      <FontAwesomeIcon className="header-icon" icon={faMagnifyingGlass} />
      <FontAwesomeIcon className="header-icon" icon={faBasketShopping} />
      </div>
    </nav>
  )
}

