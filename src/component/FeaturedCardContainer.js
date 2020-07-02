import React from 'react'
import RenderItemCard from './ItemCard'
import { Col, Row, Container } from 'reactstrap'

const FeaturedCardContainer = ({ drinks }) => {
	const checkFeatured = (drink) => drink.featured === true
	const featuredDrinks = drinks
		.filter(checkFeatured)
		.slice(0, 3)
		.map((drink) => {
			return (
				<Col className="col col-md-4" key={drink.id}>
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
		<Container className="container item-card-container featured">
			<Row>
				<h3 className="mb-0 item-container-title">
					Featured Drinks for Spring
				</h3>
			</Row>
			<Row xs="1" md="3">{featuredDrinks}</Row>
		</Container>
	)
}

export default FeaturedCardContainer
