import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import HeaderNav from './NavBarComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from '../shared/Drinks';

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
            <div/>
        );
    }
};

export default Main;