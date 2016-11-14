import React from 'react';

import MapContainer from './MapContainer';
import EventList from './EventList';

export default class MapListings extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            current: {
                loading: true,
                latitude: false,
                longitude: false
            }
        };
    }

    componentDidMount() {
        this._isMounted = true;

        navigator.geolocation.getCurrentPosition((position) => {
            if (!this._isMounted) return;
            this.setState({
                current: {
                    loading: false,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
        }, (err) => {
            if (!this._isMounted) return;
            this.setState({
                current: {
                    loading: false,
                    latitude: false,
                    longitude: false
                }
            });
        }, {
            maximumAge: 60000,
            timeout: 15000,
            enableHighAccuracy: true
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const text = {
            title: 'Discover',
            subtitle: "What's happening near you!",
            loading: "One moment please, while we retrieve your location.",
            error: "Sorry, we are unable to retrieve your location."
        };

        return (
            <div className='map-listings map-container'>
                { this.state.current.latitude !== false && <MapContainer
                                                        latitude={this.state.current.latitude}
                                                        longitude={this.state.current.longitude}
                                                        current={this.state.current.loading ? false : this.state.current}
                                                        nearbyEvents={true}
                                                        isEvent={false}
                                                        onEventSelect={this.props.onEventSelect}
                                                    /> }
                { this.state.current.latitude === false && this.state.current.loading === false && (
                    <div className='map map-error'>{text['error']}</div>
                ) }
                { this.state.current.latitude === false && this.state.current.loading === true && (
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
