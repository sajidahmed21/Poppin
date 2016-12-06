import React from 'react';

import MapContainer from './MapContainer';

export default class AddressPicker extends React.Component {
    constructor(props) {
        super();

        /* Initialize blank state. */
        this.state = {
            visible: false,
            latitude: false,
            longitude: false
        };

        this.show = this.show.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    show() {
        this.setState({
            visible: true
        });
    }

    updateLocation(loc) {
        this.setState({
            latitude: loc.latitude,
            longitude: loc.longitude
        });

        if (this.props.onLocationSelected) {
            this.props.onLocationSelected({
                latitude: loc.latitude,
                longitude: loc.longitude
            });
        }
    }

    render() {
        const attrs = {
            readOnly: 'readOnly'
        };

        return (
            <div className='addresspicker map-container'>
                <div className='mui-textfield'>
                    <input
                        className='addresspicker-input'
                        {...attrs}
                        onClick={this.show}
                        placeholder={this.placeholder || 'Click Here To Set Location'}
                        value={this.state.latitude === false ? (
                            this.state.visible ? 'No Location Set' : ''
                        ) : `${this.state.latitude}, ${this.state.longitude}`}
                    />
                    {this.props.label && (
                        <label style={{transition: '0.15s ease-out'}}>{this.props.label}</label>
                    )}
                </div>
                <MapContainer
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    nearbyEvents={false}
                    events={false}
                    isEvent={true}
                    onCurrentLocation={(loc) => {
                        if (this.state.latitude === false) {
                            this.updateLocation(loc);
                        }
                    }}
                    onLocationSelected={this.updateLocation}
                />
            </div>
        );
    }
}
