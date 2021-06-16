import React from 'react';
import '../css/index.css';
import Photos from '../Components/Photos';

const Results=(props)=> {
 const results=props.data;
 let photos=results.map(photo=>
    <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
       key={photo.id} 
       alt={photo.title}
     />
    );
  return (
    <div className="photo-container">
        <h2>Results</h2>
        <div className="container">
        <ul>
         {photos}
        </ul>
      </div>
    </div>
  );
}

export default Results;