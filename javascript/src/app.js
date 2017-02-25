import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import MyPick from './MyPick';
import reducers from './reducers';

import '../css/material.min.css';
import '../css/material-icons.css';
import '../sass/common-styles.scss';

export default class App extends React.Component {
    constructor() {
        super();

        const store = createStore(reducers);

        this.state = {
            store
        };

        store.subscribe(() => {
            console.log('store.getState()', store.getState()); // eslint-disable-line no-console
        });
    }

    render() {
        return (
            <div className="app">
                <Provider store={this.state.store}>
                    <MyPick/>
                </Provider>
            </div>
        );
    }
}
