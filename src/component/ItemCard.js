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
		<Card className="item-card">
			<Link to={`/${category}/${name}`}>
				<CardImg
					className="item-card-image"
					src={image}
					alt="Item picture"
				/>
			</Link>
			<CardBody className="item-card-body">
				<Link to={`/${category}/${name}`}>
					<CardTitle className="item-card-name">
						<h5>{name}</h5>
					</CardTitle>
				</Link>
				<CardText className="item-card-description">
					{description}
				</CardText>
				<Link to={`/${category}`}>
				<CardText className="item-card-description">
					{category}
				</CardText>
				</Link>
			</CardBody>
			<Button className="item-card-button">See Recipe</Button>
		</Card>
	)
}

export default RenderItemCard
