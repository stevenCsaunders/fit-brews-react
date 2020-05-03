import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import HeaderNav from './NavBarComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from '../shared/Drinks';
//import Body
//import Footer

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS,
        };
    }

    render() {
        return (
            <>
                <HeaderNav />
                {/*
                <Switch>
                    <Route path='/home' component={}></Route>
                    <Route path='/tags' component={}></Route>
                    <Route path='/saved' component={}></Route>
                    <Redirect to='/home' />
                </Switch>
                */}
                
                {/*
                <Footer />
                */}
            </>
        );
    }
};

export default Main;