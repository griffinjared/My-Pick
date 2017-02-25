/**
 * Created by DGXU on 2/25/2017.
 */
import React from 'react';
import '../sass/nav-bar.scss';

export default class leftBar extends React.Component {
    render() {
        return (
            <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">My Pick</span>
                </div>
            </header>
        );
    }
}


