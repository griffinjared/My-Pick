import React from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import {Card, CardTitle, CardText, CardActions, Grid, Cell, Textfield, Button} from "react-mdl";
import "../sass/place.scss";

const Actions = require('./reducers/actions')();

let sampleResults = "Has not changed";
function sampleResult() {
    return sampleResults;
}
function getLocation() {
    const {setFood} = this.props;
    navigator.geolocation.getCurrentPosition(position => {
        console.log(document.getElementById("map"));

        const {distance, food, price} = this.props,
            location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 15
            }),
            service = new google.maps.places.PlacesService(map);

        console.log("we got through const inits");
        console.log("location", location);

        service.nearbySearch({
            location: location,
            radius: distance,
            type: ['restaurant'],
            keyword: food,
            maxPriceLevel: price,
            openNow: false
        }, callback);

        function callback(results, status) {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                let num = Math.floor(Math.random()* results.length)+1
                for( var i =0; i < num;i++){
                   sampleResults = results[1].name;
                   console.log(sampleResults);
                }
                setFood(sampleResults);

            }
        }

    });
}

export class Place extends React.Component {
    render() {
        const {resetValues, food} = this.props;

        return (
            <Card shadow={0}>
                <CardTitle>Here's my pick!</CardTitle>
                <CardText>
                    <cell col={12}>
                        {food}
                    </cell>
                </CardText>
                <CardActions>
                    <Grid>
                        <Cell col={6}>
                            <div className="back-button">
                                <Button
                                    onClick={resetValues}
                                >Go back</Button>
                            </div>
                        </Cell>
                        <Cell col={6}>
                            <div className="try-again-button">
                                <Button
                                    onClick={getLocation.call(this)}
                                >Pick again</Button>
                            </div>
                        </Cell>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}

export function mapStateToProps(state) {
    const {distance, food, price} = state.place;

    return {
        distance,
        food,
        price
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        resetValues() {
            const action = {
                type: Actions.place.reset
            };

            dispatch(action);
        },
        setFood(val){
            const action = {
                type: Actions.place.setFood,
                value: val
            };
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);