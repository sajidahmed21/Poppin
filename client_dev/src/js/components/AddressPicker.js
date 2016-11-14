import React from 'react';

import MapContainer from './MapContainer';

export default class AddressPicker extends React.Component {
    constructor(props) {
        super();

        /* Initialize blank state. */
        this.state = {
            visible: false,
            current: {
                loading: true,
                latitude: false,
                longitude: false
            },
            latitude: false,
            longitude: false
        };

        this.show = this.show.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                current: {
                    loading: false,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                },
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (err) => {
            this.setState({
                current: {
                    loading: false,
                    latitude: false,
                    longitude: false
                }
            });
        }, {
            maximumAge: 60000,
            timeout: 5000,
            enableHighAccuracy: true
        });
    }

    show() {
        this.setState({
            visible: true
        });
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
                {this.state.current.loading === false &&
                    this.state.current.latitude !== false && (
                    <MapContainer
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        current={this.state.current.loading ? false : this.state.current}
                        nearbyEvents={false}
                        isEvent={true}
                        onLocationSelected={(loc) => {
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
                        }}
                    />
                )}
            </div>
        );
    }
}
