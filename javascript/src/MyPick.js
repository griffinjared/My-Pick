import React from 'react';

import NavBar from './nav-bar';
import '../sass/all-watch.scss';

export default class MyPick extends React.Component {
    render() {
        return (
            <div className="all-watch">
                <div className="mdl-layout mdl-js-layout">
                    <NavBar/>
                    <main className="mdl-layout__content">
                        <div className="header-space"/>
                        <div className="page-content">
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
