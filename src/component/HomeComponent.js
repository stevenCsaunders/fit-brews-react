import React from 'react'
import FeaturedCardContainer from './FeaturedCardContainer'
import CategoryCardContainer from './CategoryCardContainer'
import ReviewHomeComponent from './ReviewHomeComponent'
import RenderCarousel from './HomeCarouselComponent'
import { Row, Container } from 'reactstrap'

	const HomePage = ({ drinks, uniqueCategories }) => {

		//Randomized Dynamic Category Containers
		const categoryCopy = [...uniqueCategories];
		let randomizer = Math.floor(Math.random() * categoryCopy.length);
	
		const RandomizedCategories = () => {
			randomizer = Math.floor(Math.random() * categoryCopy.length);
			let category = categoryCopy.splice(randomizer, 1);
	
			return (
				<Row>
					<CategoryCardContainer
						drinks={drinks}
						category={category[0]}
					/>
				</Row>
			)
		}
	
		const DynamicMap = [];
		while (DynamicMap.length < uniqueCategories.length) {
			DynamicMap.push(<RandomizedCategories />);
		};
	return (
		<>
			<RenderCarousel drinks={drinks} />
			<FeaturedCardContainer drinks={drinks} />
			<Container>
				{DynamicMap.map(category => category)}
			</Container>
			<ReviewHomeComponent drinks={drinks} />
		</>
	)
}

export default HomePage
