import React, { Component } from 'react';
import Hero from './NavBarComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DRINKS } from '../shared/drinks';
import HomePage  from './HomeComponent';
import Tags from './TagsComponent';
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
          <Route exact path='/tags' component={Tags}/>
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
