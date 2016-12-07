import React from 'react';

import MapContainer from './MapContainer';
import EventList from './EventList';
import EmptyEventList from './EmptyEventList';

import consts from '../lib/Constants';

export default class MapListings extends React.Component {
    constructor() {
        super();

        this.state = {
            location: false,
            events: false
        };

        this.locationChanged = this.locationChanged.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchEvents() {
        if (this.state.location === false || !this._isMounted) return;

        poppin.axios().get('events', {
            params: {
                radius: 25,
                longitude: this.state.location.longitude,
                latitude: this.state.location.latitude
            }
        }).then(resp => {
            if (!this._isMounted) return;
            this.setState({
                events: resp.data.data
            });
        }).catch(err => {
            if (!this._isMounted) return;
        });
    }

    locationChanged(loc) {
        this.setState({
            location: loc
        }, () => {
            this.fetchEvents();
        });
    }

    render() {
        return (
            <div className='map-listings map-container'>
                <MapContainer
                    nearbyEvents={true}
                    isEvent={false}
                    events={this.state.events}
                    onEventSelect={this.props.onEventSelect}
                    onCurrentLocation={this.locationChanged}
                />
                { this.state.events !== false && Object.keys(this.state.events).length > 0 && (
                    <EventList
                        onEventSelect={this.props.onEventSelect}
                        location={this.state.location}
                        events={this.state.events}
                    />
                ) }
                {this.state.events !== false && Object.keys(this.state.events).length === 0 && (
                    <EmptyEventList
                        text={'Nothing To Do Today :('}
                        icon={'fa-bed'}
                    />
                )}
                {this.state.events === false && (
                    <EmptyEventList
                        text={'Discovering Events...'}
                        icon={'fa-circle-o-notch fa-spin'}
                    />
                )}
            </div>
        );
    }
}
