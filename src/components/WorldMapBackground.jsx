import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import googleMapStyles from '../json/google-maps-styles.json';

import './WorldMapBackground.scss';

export default class WorldMapBackground extends Component {
    render() {
        return (
            <div id='world-map-div'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    center={this.center || this.props.location}
                    zoom={this.props.zoom}
                    options={this.props.options}
                />
            </div>
        );
    }
}

WorldMapBackground.defaultProps = {
    location: {
        lat: 35.47,
        lng: -97.53
    },
    zoom: 8,
    options: {
        disableDefaultUI: true,
        zoomControl: false,
        gestureHandling: 'none',
        styles: googleMapStyles
    }
};