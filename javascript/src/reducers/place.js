const Actions = require('./actions')();
import _ from 'lodash';

function getInitialState() {
    return {
        radius: 0,
        food: "",
        price: 0,
        placeDisplayed: false
    };
}

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case Actions.place.reset:
            return getInitialState();
        case Actions.place.setRadius:
            return Object.assign({}, state, {
                radius: action.value
            });
        case Actions.place.setFood:
            return Object.assign({}, state, {
                food: action.value
            });
        case Actions.place.setPrice:
            return Object.assign({}, state, {
                price: action.value
            });
        case Actions.place.setPlaceDisplayed:
            return Object.assign({}, state, {
                placeDisplayed: action.value
            });
        default:
            return state;
    }
};
