import React, { Component } from 'react';
import Select from 'react-select';

import './TopNavigation.scss';

export default class App extends Component {
    generateLocationDropdown(locationObject) {
        return (
            <td key={locationObject.name}>
                <div className='nav-select-cell'>
                    <Select
                        options={locationObject.dropdownOptions}
                        onChange={this.props.clickLocation}
                        placeholder={locationObject.name}
                        className='nav-select'
                        classNamePrefix='nav-select'
                        controlShouldRenderValue={false}
                        onFocus={locationObject.onFocus}
                    />
                </div>
            </td>
        );
    }

    render() {
        let locations = [
            {
                name: 'all',
                dropdownOptions: [],
                onFocus: () => { this.props.clickLocation({label: 'all'}); }
            },
            {
                name: 'iceland',
                dropdownOptions: [
                    { value: 'iceland-photos', label: 'photos' },
                    { value: 'iceland-story', label: 'story' }
                ],
                onFocus: null
            },
            {
                name: 'italy',
                dropdownOptions: [
                    { value: 'italy-photos', label: 'photos' },
                ],
                onFocus: null
            },
            {
                name: 'japan',
                dropdownOptions: [
                    { value: 'japan-photos', label: 'photos' },
                    { value: 'japan-story', label: 'story' }
                ],
                onFocus: null
            }
        ];

        return (
            <div id="top-nav-div">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h1>travels</h1>
                            </th>
                            {locations.map(this.generateLocationDropdown.bind(this))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}