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
        const tileProvider = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png';

        return (
            <Map center={position} zoom={16}>
              <TileLayer
                url={tileProvider}
              />
            </Map>
        );
    }
}
