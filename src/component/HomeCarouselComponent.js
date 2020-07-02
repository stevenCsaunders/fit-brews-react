import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const RenderCarousel = ({ drinks }) => {
	const checkFeatured = (drink) => drink.featured === true
	const heroDrinks = drinks.filter(checkFeatured).map((drink) => {
		return (
			{
				src:drink.image,
				altText: drink.name,
				caption: drink.description,
				header: drink.name,
				key: drink.id[0],
            }
        )
	})
	return <UncontrolledCarousel items={heroDrinks} />
}

export default RenderCarousel
