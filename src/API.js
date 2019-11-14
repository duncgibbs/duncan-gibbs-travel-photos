export const photoApi = {
    getPhotos: (location, type) => {
        return fetch(`${process.env.PHOTOS_URL}?prefix=${location}/${type}`)
            .then(response => response.json())
            .then(data => {
                let photoData = [];
                if (data.items && data.items.length > 0) {
                    photoData = data.items
                        .filter(photo => {
                            const isImage = photo.contentType === 'image/jpeg';
                            const isVideo = photo.contentType === 'video/mp4';
                            return isImage || isVideo;
                        });
                }
                
                return photoData;
            });
    }
};
