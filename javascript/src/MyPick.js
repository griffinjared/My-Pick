import React from 'react';

import NavBar from './nav-bar';
import {Layout, Drawer, Content, Header, Navigation, Card, CardTitle, CardText, Grid, Cell} from 'react-mdl';
import '../sass/my-pick.scss';

//IMPORTANT: Google API Key: AIzaSyCqiZCrNTIzSUQKj__ZZq2wN7NwtRCkKKo

export default class MyPick extends React.Component {
    render() {
        return (
            <Layout fixedHeader fixedDrawer>
                <Header title="MyPick"/>
                <Content>
                    <Grid>
                        <Cell col={12}>
                            <Card shadow={0}>
                                <CardTitle>What sound's good?</CardTitle>
                                <CardText></CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </Content>
            </Layout>
        )
    }
}
