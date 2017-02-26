import React from 'react';
import FrontPage from './FrontPage'
import Place from './place'
import NavBar from './nav-bar';
import {Layout, Drawer, Content, Header, Navigation, Card, CardTitle, CardText, Grid, Cell} from 'react-mdl';
import '../sass/my-pick.scss';

//IMPORTANT: Google API Key: AIzaSyCqiZCrNTIzSUQKj__ZZq2wN7NwtRCkKKo

export default class MyPick extends React.Component {
    render() {
        return (
            <Layout fixedHeader fixedDrawer style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                <Header title="MyPick"/>
                <Content>
                    <Grid>
                        <Cell col={12}>
                            <FrontPage/>
                        </Cell>
                    </Grid>
                </Content>
                <div id="map-container"/>
            </Layout>
        )
    }
}
