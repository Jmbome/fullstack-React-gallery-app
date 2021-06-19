import React from 'react';
import { NavLink,withRouter} from 'react-router-dom';
import '../css/index.css';

const Nav=()=> {
  return (
   
    <div>
      <nav className="main-nav">
        <ul>
          <NavLink to="/cats">Cats</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
          <NavLink to="/zebras">Zebras</NavLink>
          <NavLink to="/giraffe">giraffe</NavLink>
        </ul>
      </nav>
    </div>
  
  );
}

export default withRouter(Nav);