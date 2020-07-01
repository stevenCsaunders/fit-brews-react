import React from 'react'
import { Link } from 'react-router-dom'
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap'

function RenderItemCard({ name, image, description, category }) {
	return (
		<Card className="item-card text-center">
			<Link to={`/drink/${name}`}>
				<CardImg
					className="item-card-image"
					src={image}
					alt="Item picture"
				/>
			</Link>
			<CardBody className="item-card-body">
				<Link to={`/drink/${name}`}>
					<CardTitle className="item-card-name">
						<h5>{name}</h5>
					</CardTitle>
				</Link>
				<CardText className="item-card-description">
					{description}
				</CardText>
				
				<CardText className="item-card-category">
				<Link to={`category/${category}`} className="category-link">
					{category}
					</Link>
				</CardText>
			</CardBody>
			<Link to={`/drink/${name}`}>
				<Button className="item-card-button w-100">See Recipe</Button>
			</Link>
		</Card>
	)
}

export default RenderItemCard
