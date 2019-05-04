import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './details.css';

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        fetch('rest/shows')
            .then(response => response.json())
            .then(shows => {
                let showId = this.props.match.params.showId
                let show = shows.find(show => show.id === showId);
                this.setState({ show });
            });
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <DetailsContent show={show} /> :
                <div />
        } else {
            return <Redirect to='./not-found' />
        }
    }
}
function DetailsContent({ show }) {
    return (
        <div className='details' >
            <h1>{show.name}</h1>
            <div className='content'>
                <div className='text'>
                    {show.synopsis}
                </div>
                <div className='cover'>
                    <img
                        src={require(`../common/images/${show.id}.jpg`)}
                        alt={show.name} />
                </div>
            </div>
            <Link to='/'>Back to the Web Page</Link>
        </div >
    )
}
