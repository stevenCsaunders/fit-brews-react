import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DRINKS } from '../shared/drinks'
import Hero from './NavBarComponent'
import HomePage from './HomeComponent'
import CategoryListComponent from './CategoryListComponent'
import CategoryItems from './CategoryItemsComponent'
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
    const DrinkWithCategory = ({ match }) => {
      return(
        <CategoryItems 
            drinks={this.props.drinks.filter(drink => drink.category === +match.params.drinkCategory)[0]}
        />
      );
    }

    return (
      <div className="wrapper">
        <Hero />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/categories" render={() => <CategoryListComponent drinks={this.state.drinks} />} />
          <Route path='category/:drinkCategory' component={DrinkWithCategory} />
          <Route exact path="/drink test" component={ItemComponent} />  {/* Needs to be based on drink id */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main
