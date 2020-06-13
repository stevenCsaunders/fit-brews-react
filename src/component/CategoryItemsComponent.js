import React from 'react'
import RenderItemCard from './ItemCard';

function RenderItems({drinks, category}) {
	
	const drinkArray = drinks.map(drink => {
		if(drink.category[0] === category) {
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
		}
	});

	return (
		<div>{drinkArray}</div>
	)
}

const CategoryItems = ({drinks, category}) => {
	return (
		<div className="container">
			<div className="row">
				<RenderItems drinks={drinks} category={category}/>
			</div>
		</div>
	)
}

export default CategoryItems
