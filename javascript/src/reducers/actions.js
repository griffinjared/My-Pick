module.exports = () => {
    let i = 0;
    return {
        liveFeed: {
            updatePhotos: i++,
            toggleIsRunning: i++,
            setSensitivity: i++,
            setRefresh: i++,
            setFeedFrequency: i++,
            toggleShowCaptured: i++,
            deleteCapturedImage: i++,
            saveCapturedImage: i++,
            deleteAllImages: i++
        }
    };
};
