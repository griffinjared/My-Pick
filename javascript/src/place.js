import React from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import {Card, CardTitle, CardText, CardActions, Grid, Cell, Button} from "react-mdl";
import "../sass/place.scss";

const Actions = require('./reducers/actions')();

function createMap(position) {
    console.log(position);
    const {distance, food, price} = this.props,
        location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        },
        map = new google.maps.Map(document.getElementsByName("map-container"), {
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
        openNow: true
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(_.sample(results));
        }
    });
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        createMap.call(this, position);
        console.log("map created and result logged");
    })
}

export class Place extends React.Component {
    componentWillMount() {
        getLocation();
    }

    render() {
        const {resetValues} = this.props;

        console.log("inside render");

        return (
            <Card shadow={0}>
                <CardTitle>Here's my pick!</CardTitle>
                <CardText>

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
                                    onClick={getLocation.bind(this)}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);