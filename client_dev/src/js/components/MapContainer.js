import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

export default class MapContainer extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const position = [51.505, -0.09];

        return (
            <Map center={position} zoom={13}>
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </Map>
        );
    }
}
