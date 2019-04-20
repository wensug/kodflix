import React from 'react';
import {Link} from 'react-router-dom'
export default function Tvshow(props) {
    return (
      <Link to={`./${props.id}`} className='item'>
        <img src={props.cover} alt={props.name} />
        <div className='overlay'>
          <h2>{props.name}</h2>
        </div>
      </Link>
    );
  }