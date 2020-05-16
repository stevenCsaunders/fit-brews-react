import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";

function RenderItemCard() {
    return (
        <div className="col-3">
            <Card className="itemCard">
                <CardImg src="https://images.unsplash.com/photo-1514994960127-ed3ef9239d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Item picture"/>
                <CardBody>
                    <CardTitle>Item Name</CardTitle>
                    <CardText>Item Description</CardText>
                    <CardSubtitle>Tags Here?</CardSubtitle>
                </CardBody>
                <Button color="info" className="m-3">
                    See Recipe {/* Switch to items page component when clicked */}
                </Button>
            </Card>
        </div>
    )
}

export default RenderItemCard;