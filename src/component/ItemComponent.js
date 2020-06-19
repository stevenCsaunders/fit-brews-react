import React from 'react'

const ItemComponent = ({
	name,
	description,
	rating,
	image,
	ingredients,
	instructions,
}) => (
	<div className="container">
		<div className="row">
			<div classNamel="col">
				<div className="row">
					<img src={image} alt={name} width="50%" />
				</div>
				<div className="row drink-title flex-column">
					<h2>{name}</h2>
					<h5>{description}</h5>
					<p>Rating: {rating}/5</p>
				</div>
				<div className="row drink-ingredients flex-column">
					<h4>What's In It?</h4>
					<ul className="ingredients-list">
						{ingredients.map((ingredient) => {
							return <li>{ingredient}</li>
						})}
					</ul>
				</div>
				<div className="row drink-instructions flex-column">
					<h4>How Do You Make It?</h4>
					<ol className="instructions-list">
						{instructions.map((instruction) => {
							return <li>{instruction}</li>
						})}
					</ol>
				</div>
			</div>
		</div>
	</div>
)

export default ItemComponent
