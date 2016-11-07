import React from 'react';

import MapContainer from './MapContainer';
import EventList from './EventList';

export default class MapListings extends React.Component {
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
            <div className='map-listings'>
                <MapContainer />
                <EventList onEventSelect={this.props.onEventSelect} />
            </div>
        );
    }
}
