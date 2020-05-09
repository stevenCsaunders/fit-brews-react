import React, { Component } from 'react';
import HeaderNav from './NavBarComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from '../shared/drinks';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS,
        };
    }

    render() {
        return (
            <div>
                <HeaderNav />
            </div>
        );
    }
}

export default Main;