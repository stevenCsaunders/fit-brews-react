import React from 'react'
import RenderItemCard from './ItemCard';

function RenderItems({drinks}) {
	
	const drinkArray = drinks.map(drink => {
		return (
			<div className="col-3 d-inline-block" key={drink.id}>
				<RenderItemCard 						
					name={drink.name}
					image={drink.image}
					description={drink.description}
					category={drink.category}
				/>
			</div>
		)
	});

	return (
		<div>{drinkArray}</div>
	)
}

const CategoryItems = ({drinks}) => {
	return (
		<div className="container">
			<div className="row">
				<RenderItems drinks={drinks}/>
			</div>
		</div>
	)
}

export default CategoryItems
