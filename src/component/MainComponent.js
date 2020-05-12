import React, { Component } from "react";
import HeaderNav from "./NavBarComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from "../shared/Drinks";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: DRINKS
    };
  }

  render() {
    const HomePage = () => {
      return (
      <>
        <h1>Welcome to Fit Brews Homepage!</h1>
        <p>Join us for healthy and fit drink recipes</p>
      </>
      )};

    //Tags is placeholder until Tags component is made.
    const Tags = () => {
      return (
      <h1>This is the tags page!</h1>
      )};
    // Placeholder ends.

    return (
      <div>
        <HeaderNav />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/tags' component={Tags}/>
          <Route exact path='/saved' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
