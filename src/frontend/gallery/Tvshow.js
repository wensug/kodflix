import React from 'react';
import {Link} from 'react-router-dom'
export default class Tvshow extends React.Component {
  render() {
    let { id, name } = this.props;
    return (
        <Link to={`/${id}`} className='item'>
          <img src={require(`../common/images/${id}.jpg`)} alt={name} />
          <div className='overlay'>
            <h1>{name}</h1>
          </div>
        </Link>
      );
    }
}