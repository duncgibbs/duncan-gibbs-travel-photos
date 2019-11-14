import React, { Component } from 'react';
import WorldMapBackground from './WorldMapBackground';
import TopNavigation from './TopNavigation';
import Gallery from './Gallery/Gallery';

import locations from '../json/locations.json';

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: 'all',
            type: ''
        };

        this.clickLocation = this.clickLocation.bind(this);
    }

    clickLocation(event) {
        let location, type;
        if (event.label === 'all') {
            this.setState({location: 'all'})
        } else {
            this.setState({location: event.value.split('-')[0], type: event.value.split('-')[1]});
        }
    }

    render() {
        const jsonLocation = locations[this.state.location];
        return (
            <div id='app-div'>
                <div id='background-div'>
                    <WorldMapBackground location={jsonLocation.coordinates} zoom={jsonLocation.zoom}/>
                </div>
                <div id='foreground-div'>
                    <TopNavigation clickLocation={this.clickLocation} />
                    <Gallery location={this.state.location} type={this.state.type} />
                </div>
            </div>
        );
    }
}
