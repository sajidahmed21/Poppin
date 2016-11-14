import React from 'react';

import { DivIcon } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Dummy from '../lib/Dummy';

export default class MapContainer extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            events: {}
        };

        this.mapClicked = this.mapClicked.bind(this);
    }

    componentDidMount() {
        this.setState({
            events: Dummy.events
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
        const position = [this.props.latitude, this.props.longitude];

        const iconHere = L.divIcon({
            className: 'marker-here'
        });

        const iconEvent = L.divIcon({
            className: 'fa fa-map-marker marker-event'
        });

        return (
            <Map center={position} zoom={16} onClick={this.mapClicked} >
              <TileLayer
                url={tileProvider}
              />
              {this.props.current && (
                  <Marker
                      position={[this.props.current.latitude, this.props.current.longitude]}
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
              {this.props.nearbyEvents && Object.keys(this.state.events).map(key => (
                  <Marker
                    key={key}
                    position={[this.state.events[key].latitude, this.state.events[key].longitude]}
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
    }
}
