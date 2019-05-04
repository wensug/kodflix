import React from 'react';
import './Gallery.css';
import Tvshow from './Tvshow';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = { shows: [] }
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => this.setState({ shows }));
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.shows.map(show => {
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


