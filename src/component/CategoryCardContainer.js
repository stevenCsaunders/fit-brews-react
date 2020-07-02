import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import RenderItemCard from './ItemCard'

const CategoryCardContainer = ({ drinks, category }) => {
	const checkCategory = (checkCat) =>
		checkCat.toLowerCase() === category.toLowerCase()

	const drinkCategory = drinks
		.filter((drink) => drink.category.some(checkCategory))
		.slice(0, 4)
		.map((drink) => {
			return (
				<Col key={drink.id}>
					<RenderItemCard
						name={drink.name}
						image={drink.image}
						description={drink.description}
						category={drink.category}
					/>
				</Col>
			)
		})

	return (
		<Container className="container item-card-container category">
			<h3 className="item-container-title">
				<Link
					to={`category/${category}`}
					className="category-title-link"
				>
					Best {category} Drinks
				</Link>
			</h3>
			<Row xs="1" sm="2" lg="4">
				{drinkCategory}
			</Row>
		</Container>
	)
}

export default CategoryCardContainer
