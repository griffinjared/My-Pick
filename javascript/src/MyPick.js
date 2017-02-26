import React from 'react';
import Place from './place';
import {Layout, Drawer, Content, Header, Navigation, Card, CardTitle, CardText, Grid, Cell} from 'react-mdl';
import '../sass/my-pick.scss';


export default class MyPick extends React.Component {
    render() {
        return (
            <Layout fixedHeader fixedDrawer>
                <Header title="MyPick"/>
                <Content>
                    <Grid>
                        <Cell col={12}>
                            {/*<Card shadow={0}>*/}
                                {/*<CardTitle>What sound's good?</CardTitle>*/}
                                {/*<CardText>*/}
                                    {/**/}
                                {/*</CardText>*/}
                            {/*</Card>*/}
                            <Place/>
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
