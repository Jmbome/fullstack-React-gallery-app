import React from 'react';
import '../css/index.css';

const Nav=()=> {
  return (
    <div>
      <nav class="main-nav">
        <ul>
          <li><a href='/cats'>Cats</a></li>
          <li><a href='/dogs'>Dogs</a></li>
          <li><a href='/zebras'>Zebras</a></li>
          <li><a href='/giraffe'>Giraffe</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;