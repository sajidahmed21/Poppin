import React from 'react';

import MapContainer from './MapContainer';
import EventList from './EventList';

const MapListings = props => (
    <div className='map-listings map-container'>
        <MapContainer
            nearbyEvents={true}
            isEvent={false}
            onEventSelect={props.onEventSelect}
        />
        <EventList onEventSelect={props.onEventSelect} />
    </div>
);

export default MapListings;
