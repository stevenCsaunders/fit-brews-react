import React from 'react'
import RenderItemCard from './ItemCard'


const FeaturedCardContainer = ({ drinks }) => {
	const checkFeatured = (drink) => drink.featured === true
	const featuredDrinks = drinks
		.filter(checkFeatured)
		.slice(0, 3)
		.map((drink) => {
			return (
				<div className="col col-md-4" key={drink.id}>
					<RenderItemCard
						name={drink.name}
						image={drink.image}
						description={drink.description}
					/>
				</div>
			)
		})

	return (
		<div className="container item-card-container featured">
			<h3 className="mb-0 item-container-title">Featured Drinks for Spring</h3>
			<div className="row mt-0 pt-0">{featuredDrinks}</div>
		</div>
	)
}

export default FeaturedCardContainer
