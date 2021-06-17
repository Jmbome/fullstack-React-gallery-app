import React from 'react';
import '../css/index.css';

const Nav=()=> {
  return (
    <div>
      <nav class="main-nav">
        <ul>
          <li><a href='/search/cats'>Cats</a></li>
          <li><a href='/search/dogs'>Dogs</a></li>
          <li><a href='/search/zebras'>Zebras</a></li>
          <li><a href='/search/giraffe'>Giraffe</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;