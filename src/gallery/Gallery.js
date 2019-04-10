import React from 'react';
import './Gallery.css';
import Tvshow from './Tvshow';
import getGallery from './gallery-get';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
            {
                getGallery().map(cover => {
                    return (
                        <Tvshow 
                            id={cover.id} 
                            name={cover.name} 
                            cover={cover.cover} 
                            key={cover.id} />
                    );
                })

            }
            </div>
        );
    }
}


