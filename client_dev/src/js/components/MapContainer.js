import React from 'react';

import { Icon } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

export default class MapContainer extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const tileProvider = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png';
        const position = [this.props.latitude, this.props.longitude];

        const myIcon = L.icon({
            iconUrl: 'img/marker-icon.png'
        });

        return (
            <Map center={position} zoom={16}>
              <TileLayer
                url={tileProvider}
              />
              <Marker
                  position={position}
                  draggable={false}
                  icon={myIcon}
              ></Marker>
            </Map>
        );
    }
}
