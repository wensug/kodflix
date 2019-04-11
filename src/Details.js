import React from 'react';
import {Link, Redirect } from 'react-router-dom';
import getShows from './shows';


export default class Details extends React.Component {
    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId
        let show = getShows()
            .find(show => show.id === showId);
        this.setState({ show });
    }
    render() {
        if (this.state.show === undefined) {
            return <Redirect to='./not-found' />
        } else {
            return (
                <div>
                    <h1>{this.state.show.name}</h1>
                    <Link to='/'>Back to the Web Page</Link>
                </div>
            );
        }
    }
}