import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    renderGalleryImage(image) {
        return (
            <img key={image.generation} src={image.mediaLink} />
        );
    }

    renderGalleryVideo(image) {
        return (
            <div>
                <video autoPlay loop muted controls disablePictureInPicture>
                    <source key={image.generation} src={image.mediaLink} type={image.contentType} />
                </video>
            </div>
        );
    }

    render() {
        if (this.props.image.contentType === 'image/jpeg') {
            return this.renderGalleryImage(this.props.image);
        } else if (this.props.image.contentType === 'video/mp4') {
            return this.renderGalleryVideo(this.props.image);
        } else {
            return '';
        }
    }
}