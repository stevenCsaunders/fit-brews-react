import React from 'react'

const ItemComponent = () => {
	return (
		<div className="container">
			<div className="row">
				<div classNamel="col">
					<div className="row">
						<img
							src={require("../shared/images/categoryPhoto5.png")}
							alt="Drink Name"
						/>
					</div>
					<div className="row drink-title">
						<h2>Drink Name</h2>
						<h5>Drink description will go here.</h5>
						<p>Rating: 4/5</p>
					</div>
					<div className="row drink-ingredients">
						<h4>What's In It?</h4>
						<ul className="ingredient-list">
							<li className="ingredient">Ingredient 1</li>
							<li className="ingredient">Ingredient 1</li>
							<li className="ingredient">Ingredient 2</li>
							<li className="ingredient">Ingredient 3</li>
							<li className="ingredient">Ingredient 4</li>
							<li className="ingredient">Ingredient 5</li>
							<li className="ingredient">Ingredient 6</li>
							<li className="ingredient">Ingredient 7</li>
							<li className="ingredient">Ingredient 8</li>
							<li className="ingredient">Ingredient 9</li>
							<li className="ingredient">Ingredient 10</li>
							<li className="ingredient">Ingredient 11</li>
						</ul>
					</div>
					<div className="row drink-instructions">
						<h4>How Do You Make It?</h4>
                        <ol className='instructions-list'>
                            <li className='instruction-step'>1- Consectetur Aute proident et occaecat commodo esse mollit.</li>
                            <li className='instruction-step'>2- Anim ut laboris est et nostrud et occaecat nulla nulla.</li>
                            <li className='instruction-step'>3- Consectetur labore pariatur ullamco ipsum in exercitation et amet. Et sint laboris aliquip culpa pariatur aute ea.</li>
                            <li className='instruction-step'>4- Consectetur labore pariatur ullamco ipsum in exercitation et amet.</li>
                            <li className='instruction-step'>5- Pariatur ea culpa officia non aute dolor eu pariatur id non culpa dolor dolore ad.</li>
                        </ol>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemComponent;
