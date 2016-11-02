import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import MapListings from '../components/MapListings';

export default class Discover extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const text = {
            title: 'Discover',
            subtitle: "What's happening near you!"
        };

        return (
            <Container className='expand'>
                <div className='discover-header'>
                    <span className='title'>{text['title']}</span>
                    <span className='subtitle'>{text['subtitle']}</span>
                </div>
                <MapListings />
            </Container>
        );
    }
}
