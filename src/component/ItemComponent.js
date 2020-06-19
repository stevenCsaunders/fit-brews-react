import React from 'react'

const ItemComponent = ({name, description, ingredients, instructions, rating, id, image}) => {  // Need to import all info from  JSON file
	return (
		<div className="container">
			<div className="row">
				<div classNamel="col">
					<div className="row">
						<img
							src={image} 
							alt={name}
						/>
					</div>
					<div className="row drink-title">
						<h2>{name}</h2>
						<h5>{description}</h5>
						<p>Rating: {rating}/5</p>
					</div>
					<div className="row drink-ingredients">
						<h4>What's In It?</h4>
						<ul className="ingredient-list"> {/*  looping over drink ingredients array using drink id as key*/}
							
							<li className="ingredient">Ingredient 1</li>

						</ul>
					</div>
					<div className="row drink-instructions">
						<h4>How Do You Make It?</h4>
                        <ol className='instructions-list'> {/*  pulling from drink instructions array using drink id as key */}
                            
							<li className='instruction-step'>1- Consectetur Aute proident et occaecat commodo esse mollit.</li>
                        
						</ol>
					</div>
				</div>
			</div>
		</div>
	)
}


export default ItemComponent
