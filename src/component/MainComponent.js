import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DRINKS } from '../shared/drinks'
import Hero from './NavBarComponent'
import HomePage from './HomeComponent'
import CategoryList from './CategoryListComponent'
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
		const categories = this.state.drinks.map((drink) => drink.category[0])
		const uniqueCategories = [...new Set(categories)]

		const Home = () => {
			return (
				<HomePage
					drinks={this.state.drinks}
					uniqueCategories={uniqueCategories}
				/>
			)
		}

		const CategoryWithItems = ({ match }) => {
			console.log(match);
			const filteredDrinks = this.state.drinks.filter(
				(drink) => drink.category[0] === match.params.drink_category
			)[0].category[0];

			return (
				<CategoryItems
					category={filteredDrinks}
					drinks={this.state.drinks}
				/>
			)
		}

		const DrinkItem = ({ match }) => {
			const filteredDrinks = this.state.drinks.filter(
				(drink) => drink.name === match.params.drink_name
			)[0].name;
			console.log(filteredDrinks)

			return (
				<CategoryItems
					category={filteredDrinks}
					drinks={this.state.drinks}
				/>
			)
		}


		return (
			<div className="wrapper">
				<Hero />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/categories"
						render={() => (
							<CategoryList
								drinks={this.state.drinks}
								uniqueCategories={uniqueCategories}
							/>
						)}
					/>
					<Route path="/:drink_name" exact component={DrinkItem} />
					<Route
						path="/:drink_category"
						exact
						component={CategoryWithItems}
					/>
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default Main
