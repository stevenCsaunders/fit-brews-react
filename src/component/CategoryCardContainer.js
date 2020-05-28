import React from 'react'
import RenderItemCard from './ItemCard'

const CategoryCardContainer = ({ drinks }) => {
	const checkCategory = (category) => category.toLowerCase() === 'fruit';
	const drinkCategory = drinks
		.filter((drink) => drink.category.some(checkCategory))
		.slice(0, 4)
		.map((drink) => {
			return (
				<div className="col col-md-3" key={drink.id}>
					<RenderItemCard
						name={drink.name}
						image={drink.image}
						description={drink.description}
					/>
				</div>
			);
		})

	return (
		<div className="container item-card-container category">
			<h3 className="item-container-title">Best Fruit Drinks</h3>
			<div className="row">{drinkCategory}</div>
		</div>
	);
}

export default CategoryCardContainer
