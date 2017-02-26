import React from 'react';
import Container from './container';
import {Layout, Drawer, Content, Header, Navigation, Card, CardTitle, CardText, Grid, Cell} from 'react-mdl';
import '../sass/my-pick.scss';

//IMPORTANT: Google API Key: AIzaSyCqiZCrNTIzSUQKj__ZZq2wN7NwtRCkKKo

export default class MyPick extends React.Component {
    render() {
        return (
            <Layout fixedHeader fixedDrawer style={{background: 'url(https://wallpaperscraft.com/image/restaurant_tables_chairs_comfort_interior_39213_2560x1440.jpg) center / cover'}}>
                <Header title="MyPick"/>
                <Content>
                    <Grid>
                        <Cell col={12}>
                            <Container/>
                        </Cell>
                    </Grid>
                </Content>
                <div
                    id="map"
                />
            </Layout>
        )
    }
}
