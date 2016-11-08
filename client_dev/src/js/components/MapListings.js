import React from 'react';

import MapContainer from './MapContainer';
import EventList from './EventList';

export default class MapListings extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            loading: true,
            latitude: false,
            longitude: false
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                loading: false,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (err) => {
            this.setState({
                loading: false,
                latitude: false,
                longitude: false
            });
        }, {
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        });
    }

    render() {
        const text = {
            title: 'Discover',
            subtitle: "What's happening near you!",
            loading: "One moment please, while we retrieve your location.",
            error: "Sorry, we are unable to retrieve your location."
        };

        return (
            <div className='map-listings'>
                { this.state.latitude !== false && <MapContainer latitude={this.state.latitude} longitude={this.state.longitude} /> }
                { this.state.latitude === false && this.state.loading === false && (
                    <div className='map map-error'>{text['error']}</div>
                ) }
                { this.state.latitude === false && this.state.loading === true && (
                    <div className='map map-error'>
                        {text['loading']}
                        <i className='fa fa-circle-o-notch fa-spin'></i>
                    </div>
                ) }
                <EventList onEventSelect={this.props.onEventSelect} />
            </div>
        );
    }
}
