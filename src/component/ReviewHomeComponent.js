import React from 'react'

const ReviewComponent = ({ drinks }) => {
	const randomDrink = drinks[Math.floor(Math.random() * drinks.length)]
	console.log(randomDrink)
	return (
		<div className="home-review-wrapper">
			<h5 className="home-drink-review">"{randomDrink.review}"
			</h5>
			<span className="home-drink-rating">{randomDrink.rating}</span>
		</div>
	)
}

export default ReviewComponent
