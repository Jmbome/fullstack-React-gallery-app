import React from 'react';
import '../css/index.css';
import Photos from '../Components/Photos';

const Results=(props)=> {
 const results=props.data;
 let photos=results.map(photos=>
    <Photos />
    );
  return (
    <div className="photo-container">
        <h2>Results</h2>
        <div className="container">
        <ul>
        <Photos />
        </ul>
      </div>
    </div>
  );
}

export default Results;