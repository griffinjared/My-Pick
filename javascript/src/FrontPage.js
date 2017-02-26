
import React from 'react';
import {connect} from 'react-redux';
const Actions = require('./reducers/actions')();
import {Layout, Drawer, Content, Header, Navigation, Button, Slider, Card, CardTitle, CardText, Textfield, Grid, Cell} from 'react-mdl';

export class FrontPage extends React.Component{
    render() {
        const {setFood, setDisplay, setDistance, setPrice, food, distance, price} = this.props;
        return(
            <Card shadow={0}>
                <CardTitle>What sound's good?</CardTitle>
                <CardText>

                    <Grid >
                        <Cell col={8}>
                            <Textfield label="What Are You In The Mood For?" onChange={setFood}/>
                        </Cell>
                        <Cell col={4} align="middle">
                            Cost:
                            <Slider min={0} max={4} default={2} onChange={setPrice}/>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={8} align="top">
                            <Textfield  label="Max Distance...(Miles)" pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!"onChange={setDistance}/>
                        </Cell>
                    </Grid>
                    <Grid noSpacing>
                        <Cell col={12}>
                            <center>
                                <Button onClick={setDisplay}>Find!</Button>
                            </center>
                        </Cell>
                    </Grid>
                </CardText>
            </Card>
        );
    }
}
function printPlaces() {
    console.log(this.props.price);
}

export function mapStateToProps(state) {
    const {distance, food, price} = state.place;
    return {distance, food, price};
}

export function mapDispatchToProps(dispatch) {
    return {
        setDistance(){
            const action = {
                type: Actions.place.setRadius,
                value: parseInt(event.target.value) * 1609
            };

            dispatch(action);

        },
        setFood(){
            const action = {
                type: Actions.place.setFood,
                value: event.target.value
            };
            dispatch(action);
        },
        setPrice(){
            const action = {
                type: Actions.place.setPrice,
                value: parseInt(event.target.value)
            };
            dispatch(action);
        },
        setDisplay(){
            const action = {
                type: Actions.place.setPlaceDisplayed,
                value: true
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);