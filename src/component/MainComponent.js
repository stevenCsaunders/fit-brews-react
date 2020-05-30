import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from '../shared/drinks';
import Hero from './NavBarComponent';
import HomePage  from './HomeComponent';
import CategoryComponent from './CategoryComponent';
import ReviewHomeComponent from './ReviewHomeComponent';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: DRINKS
    };
  }

  render() {
    
    //Tags is placeholder until Tags component is made.

    // Placeholder ends.

    return (
      <div className='wrapper'>
        <Hero />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/categories' component={CategoryComponent} />
          <Route exact path='/saved' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
        <ReviewHomeComponent drinks={ this.state.drinks } />
        <Footer />
      </div>
    );
  }
}

export default Main;
