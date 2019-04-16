import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getShows from '../shows';
import './details.css';



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
        let show = this.state.show;
        return (
            show ?
                <div className='details'>
                    <h1>{show.name}</h1>
                    <div className='content'>
                        <div className='text'>
                            {show.synopsis}
                        </div>
                        <div className='cover'>
                            <img
                            src={show.cover}
                            alt={show.name} />
                    </div>
                </div>
                <Link to='/'>Back to the Web Page</Link>
                </div > :
        <Redirect to='./not-found' />
        );
    }
}
