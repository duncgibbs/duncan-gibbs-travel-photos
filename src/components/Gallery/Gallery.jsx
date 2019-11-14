import React, { Component } from 'react';
import Image from './Image';
import { photoApi } from '../../API.js'
import { chunkify } from '../../util.js';

import './Gallery.scss';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        };

        this.getPhotosFromApi = this.getPhotosFromApi.bind(this);
        this.renderPhotoGallery = this.renderPhotoGallery.bind(this);
    }

    getPhotosFromApi() {
        photoApi.getPhotos(this.props.location, this.props.type)
            .then(photos => {
                this.setState({photos: photos});
            });
    }

    componentDidMount() {
        this.getPhotosFromApi();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location || prevProps.type !== this.props.type) {
            this.getPhotosFromApi();
        }
    }

    renderPhotoGallery() {
        let gridSize = 3;
        if (this.props.type === 'story') {
            gridSize = 4;
        }
        let rows = chunkify(this.state.photos, gridSize, true).map((photoColumn, colIdx) => {
            return (
                <div key={colIdx} className={`gallery-column-${gridSize}`}>
                    {photoColumn.map((image, rowIdx) => <Image image={image} />)}
                </div>
            );
        });

        return (
            <div className='gallery-row'>
                {rows}
            </div>
        );
    }

    render() {
        return (
            <div id='gallery-div'>
                {this.renderPhotoGallery()}
            </div>
        );
    }
}