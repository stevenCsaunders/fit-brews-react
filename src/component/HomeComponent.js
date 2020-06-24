import React from 'react'
import FeaturedCardContainer from './FeaturedCardContainer'
import CategoryCardContainer from './CategoryCardContainer'
import ReviewHomeComponent from './ReviewHomeComponent'
import RenderCarousel from './CarouselComponent'

const HomePage = ({ drinks, uniqueCategories }) => {

	//Randomized Dynamic Category Containers
	const categoryCopy = [...uniqueCategories];
	let randomizer = Math.floor(Math.random() * categoryCopy.length);

	const RandomizedCategories = () => {
		randomizer = Math.floor(Math.random() * categoryCopy.length);
		let category = categoryCopy.splice(randomizer, 1);

		return (
			<div className="row">
				<CategoryCardContainer
					drinks={drinks}
					category={category[0]}
				/>
			</div>
		)
	}

	const DynamicMap = [];
	while (DynamicMap.length < uniqueCategories.length) {
		DynamicMap.push(<RandomizedCategories />);
		console.log(DynamicMap);
	};
	//End Randomized Dynamic Category Containers

	return (
		<>
			<RenderCarousel drinks={drinks} />
			<div className="container">
				<div className="row">
					<FeaturedCardContainer drinks={drinks} />
				</div>
				{DynamicMap.map(category => category)}
			</div>
			<ReviewHomeComponent drinks={drinks} />
		</>
	)
}

export default HomePage
