import React from 'react'
import FeaturedCardContainer from './FeaturedCardContainer'
import CategoryCardContainer from './CategoryCardContainer'
import ReviewHomeComponent from './ReviewHomeComponent'
import RenderCarousel from './HomeCarouselComponent'

const HomePage = ({ drinks }) => {
	const randomDrink = drinks[Math.floor(Math.random() * drinks.length)]

	return (
		<>
			<RenderCarousel drinks={drinks} />
			<FeaturedCardContainer drinks={drinks} />
			<CategoryCardContainer
				drinks={drinks}
				category={randomDrink.category[0]}
			/>
			<ReviewHomeComponent drinks={drinks} />
		</>
	)
}

export default HomePage
