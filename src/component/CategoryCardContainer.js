import React from 'react'
import { Link } from 'react-router-dom';
import RenderItemCard from './ItemCard'

const CategoryCardContainer = ({ drinks, category }) => {
	
	const checkCategory = checkCat => checkCat.toLowerCase() === category.toLowerCase()

	const drinkCategory = drinks
		.filter((drink) => drink.category.some(checkCategory))
		.slice(0, 4)
		.map((drink) => {
			return (
				<div className="col col-md-3 test" key={drink.id}>
					<RenderItemCard
						name={drink.name}
						image={drink.image}
						description={drink.description}
						category={drink.category}
					/>
				</div>
			)
		})
		


	return (
		<div className="container item-card-container category">
				<Link to={`/categories/${category}`}>
					<h3 className="item-container-title">Best {category} Drinks</h3>
				</Link>
				<div className="row">{drinkCategory}</div>
		</div>
	)
}

export default CategoryCardContainer
