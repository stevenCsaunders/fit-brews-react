import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

function RenderItemCard({name, image, description}) {
    return (
        <div className="col-3">
            <Card className="item-card">
                <CardImg src={image} alt="Item picture"/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
                <Button className="item-card-button">
                    See Recipe {/* Switch to items page component when clicked */}
                </Button>
            </Card>
        </div>
    )
}

export default RenderItemCard;