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

		const DrinkWithCategory = ({ match }) => {
			console.log("Below!")
			console.log(match);
			return (
				<CategoryItems
					category={this.state.drinks.filter(
						(drink) =>
							drink.category === +match.params.drink_category
					)}
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
					<Route
						path="/:drink_category"
						component={DrinkWithCategory}
					/>
					<Route path="/:drink_category/:drink_name" component={ItemComponent} />
					{/* Needs to be based on drink id */}
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default Main
