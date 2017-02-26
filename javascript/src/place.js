import React from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import {Card, CardTitle, CardText, CardActions, Grid, Cell, Textfield, Button} from "react-mdl";
import "../sass/place.scss";

const Actions = require('./reducers/actions')();

let sampleResults = "Has not changed";

function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        const {distance, food, price, setPlace} = this.props,
            location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 15
            }),
            service = new google.maps.places.PlacesService(map);

        service.nearbySearch({
            location: location,
            radius: distance,
            type: ['restaurant'],
            keyword: food,
            maxPriceLevel: price,
            openNow: false
        }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                sampleResults = _.sample(results);
                console.log("sample", sampleResults);

                service.getDetails({
                    placeId: sampleResults.place_id
                }, (place, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        console.log("place", place);
                        setPlace(place);
                    }
                });
            }
        });
    });
}

export class Place extends React.Component {
    render() {
        const {resetValues, place} = this.props;

        return (
            <Card shadow={0}>
                <CardTitle>Here's my pick!</CardTitle>
                <CardText>
                    <Grid>
                        <Cell col={12}>
                            <div className="place-name">
                                <p>
                                    {place.name}
                                </p>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="place-address">
                                <p>
                                    {place.vicinity}
                                </p>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="place-phone">
                                <p>
                                    {place.formatted_phone_number}
                                </p>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div className="place-map">
                                <a href={place.url} target="_blank">Maps Link</a>
                            </div>
                        </Cell>
                    </Grid>
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
                                <Button disabled
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
    const {distance, food, price, place} = state.place;

    return {
        distance,
        food,
        price,
        place
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
        setPlace(place) {
            const action = {
                type: Actions.place.setPlace,
                value: place
            };

            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);