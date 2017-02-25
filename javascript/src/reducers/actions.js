module.exports = () => {
    let i = 0;
    return {
        place: {
            reset: i++,
            setFood: i++,
            setRadius: i++,
            setPrice: i++,
            setPlaceDisplayed: i++
        }
    };
};
