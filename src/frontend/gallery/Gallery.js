import React from 'react';
import './Gallery.css';
import Tvshow from './Tvshow';
import getShows from '../shows';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
            {
                getShows().map(show => {
                    return (
                        <Tvshow 
                            id={show.id} 
                            name={show.name} 
                            cover={show.cover} 
                            key={show.id} 
                        />
                    );
                })

            }
            </div>
        );
    }
}


