import React from 'react';
import { withRouter } from 'react-router-dom';

const Photos = props => (
    <li>
    <img src={props.url} alt={props.alt} />
    </li>     
        
            
);

export default withRouter(Photos);