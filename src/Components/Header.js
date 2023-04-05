import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <header>
      <Logo />
      <h3>Apple Store</h3>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
