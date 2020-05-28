import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

function RenderItemCard({name, image, description}) {
    return (
            <Card className="item-card">
                <CardImg className="item-card-image" src={image} alt="Item picture"/>
                <CardBody className="item-card-body">
                    <CardTitle className="item-card-name"><h5>{name}</h5></CardTitle>
                    <CardText className="item-card-description">{description}</CardText>
                </CardBody>
                <Button className="item-card-button">
                    See Recipe {/* Switch to items page component when clicked */}
                </Button>
            </Card>
    )
}

export default RenderItemCard;