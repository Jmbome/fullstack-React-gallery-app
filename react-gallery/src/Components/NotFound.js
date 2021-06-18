import React from 'react';
import '../css/index.css';


const NotFound=()=> {
    return (
      <div>
       {/*  Not Found*/}
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
      </div>
    );
  }
  
  export default NotFound;