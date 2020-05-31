import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DRINKS } from '../shared/drinks'
import Hero from './NavBarComponent'
import HomePage from './HomeComponent'
import CategoryListComponent from './CategoryComponent'
import Footer from './Footer'
import ItemComponent from './ltemComponent'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drinks: DRINKS,
    }
  }

  render() {
    //Tags is placeholder until Tags component is made.

    // Placeholder ends.

    return (
      <div className="wrapper">
        <Hero />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/categories" component={CategoryListComponent} />
          <Route exact path="/drink test" component={ItemComponent} />  {/*  This can be moved when we start routing with the drink ID */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main
