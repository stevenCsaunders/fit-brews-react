import React from 'react'
import RenderItemCard from './ItemCard'

const CategoryCardContainer = ({ drinks }) => {
	const checkCategory = (category) => category.toLowerCase() === 'fruit';
	const drinkCategory = drinks
		.filter((drink) => drink.category.some(checkCategory))
		.slice(0, 4)
		.map((drink) => {
			return (
                <RenderItemCard
                    key={drink.id} // Have to add the id for the map method
                    name={drink.name}
                    image={drink.image}
                    description={drink.description}
                />
			)
		})

	return (
		<div className="container item-card-container">
			<h3 className="mb-0 item-container-title">Fruit Drinks</h3>
			<div className="row mt-0 pt-0">{drinkCategory}</div>
		</div>
	)
}

export default CategoryCardContainer
