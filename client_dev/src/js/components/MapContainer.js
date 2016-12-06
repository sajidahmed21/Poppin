import React from 'react';

import { DivIcon } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Dummy from '../lib/Dummy';

export default class MapContainer extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            current: {
                loading: false,
                latitude: false,
                longitude: false
            },
            initial: true
        };

        this.mapClicked = this.mapClicked.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        this.setState({
            events: Dummy.events
        }, () => {
            this.updateLocation();
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    updateLocation() {
        if (this.state.current.loading && !this.state.initial) return;
        if (!this._isMounted) return;

        this.setState({
            current: Object.assign({}, this.state.current, {
                loading: true
            }),
            initial: false
        }, () => {
            if (!this._isMounted) return;

            navigator.geolocation.getCurrentPosition((position) => {
                if (!this._isMounted) return;
                this.setState({
                    current: {
                        loading: false,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                }, () => {
                    if (this.props.onCurrentLocation) {
                        this.props.onCurrentLocation({
                            latitude: this.state.current.latitude,
                            longitude: this.state.current.longitude
                        });
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
        });
    }

    mapClicked(e) {
        if (this.props.onLocationSelected) {
            this.props.onLocationSelected({
                latitude: e.latlng.lat,
                longitude: e.latlng.lng
            });
        }
    }

    render() {
        const tileProvider = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png';

        const iconHere = L.divIcon({
            className: 'marker-here'
        });

        const iconEvent = L.divIcon({
            className: 'fa fa-map-marker marker-event'
        });

        const text = {
            loading: "One moment please, while we retrieve your location.",
            error: "Sorry, we are unable to retrieve your location."
        };

        if (this.state.current.latitude !== false) {
            let position = [this.state.current.latitude, this.state.current.longitude];
            if (typeof this.props.latitude !== 'undefined' && this.props.latitude !== false) {
                position = [this.props.latitude, this.props.longitude];
            }

            return (
                <Map center={position} zoom={14} onClick={this.mapClicked} >
                  <TileLayer
                    url={tileProvider}
                  />
                  {this.state.current && (
                      <Marker
                          position={[this.state.current.latitude, this.state.current.longitude]}
                          draggable={false}
                          icon={iconHere}
                      ></Marker>
                  )}
                  {this.props.isEvent && (
                      <Marker
                          position={position}
                          draggable={false}
                          icon={iconEvent}
                      ></Marker>
                  )}
                  {this.props.nearbyEvents && this.props.events !== false && Object.keys(this.props.events).map(key => (
                      <Marker
                        key={key}
                        position={[this.props.events[key].latitude, this.props.events[key].longitude]}
                        draggable={false}
                        icon={iconEvent}
                        clickable={true}
                        onClick={(e) => {
                            if (this.props.onEventSelect) {
                                this.props.onEventSelect(key);
                            }
                        }}
                    ></Marker>
                  ))}
                </Map>
            );
        } else {
            const msg = {
                false: (
                    <div className='map map-error refresh' onClick={this.updateLocation}>
                        {text['error']}
                        <i className='fa fa-refresh'></i>
                    </div>
                ),
                true: (
                    <div className='map map-error'>
                        {text['loading']}
                        <i className='fa fa-circle-o-notch fa-spin'></i>
                    </div>
                )
            };
            return msg[this.state.current.loading];
        }

    }
}
