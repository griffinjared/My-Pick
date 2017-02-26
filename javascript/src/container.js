import React from 'react';
import {connect} from 'react-redux';
const Actions = require('./reducers/actions')();
import {Layout, Drawer, Content, Header, Navigation, Button, Slider, Card, CardTitle, CardText, Textfield, Grid, Cell} from 'react-mdl';
import FrontPage from './FrontPage';
import Place from './place';

export class Container extends React.Component{
    render() {
        const {placeDisplayed} = this.props;
        console.log(placeDisplayed);
        if(placeDisplayed == false) {
            return(<FrontPage/>);
        }else{
            return(<Place/>);
        }
    }
}
export function mapStateToProps(state) {
    const {distance, food, price, placeDisplayed} = state.place;
    return {distance, food, price, placeDisplayed};
}

export function mapDispatchToProps(dispatch) {
    return {
        setDisplay(){
            const action = {
                type: Actions.place.setPlaceDisplayed,
                value: true
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);