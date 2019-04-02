import React from 'react';
export default function Tvshow(props) {
    return (
      <div className='item'>
        <img src={props.cover} alt={props.name} />
        <div className='overlay'>
          <h2>{props.name}</h2>
        </div>
      </div>
    );
  }