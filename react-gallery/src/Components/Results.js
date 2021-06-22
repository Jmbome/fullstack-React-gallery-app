import React from 'react';
import '../css/index.css';
import Photos from '../Components/Photos';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';

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
        <ul>
        {/*Conditional statement that displays fetched data if any and an error message if the search is empty*/}
        { (props.data.length > 0) ? photos: <NotFound /> }
        </ul>
     
    </div>
  );
}

export default withRouter(Results);