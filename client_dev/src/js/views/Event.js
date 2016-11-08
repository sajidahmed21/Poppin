import React from 'react';


import MapContainer from '../components/MapContainer';
/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

export default class Event extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const text = {
            title: 'Go Leafs Go',
            subtitle: "Join us to cheer on the leafs while they win the Stanley cup. Tell your friends about us."
        };

        return (
            <Container className='expand'>
                <div className='event-header'>
                    <span className='title'>{text['title']}</span>
                </div>
                <div className='map-display'>
                    <MapContainer latitude={38.898556}longitude={-77.037852} />
                </div>
                <div className='event-details'>
                    <span className='subtitle'>{text['subtitle']} </span><br />
                    <span className='subtitle'>Duration: </span><br />
                    <span className='date'> 1478045486 - 1478049486 </span><br />
                    <span className='subtitle'>Distance: </span><br />
                    <span className='date'> 3.2 </span><br />
                    <span className='subtitle'>Communities: </span>
                </div>

            </Container>
        );
    }
}
