import React from 'react';
import { Row } from 'reactstrap';
import ItemCard from './ItemCard';

const CategoryItems = () => {
    return (
        <Row>
            <ItemCard className="col-md-2"/>
            <ItemCard className="col-md-2"/>
            <ItemCard className="col-md-2"/>
            <ItemCard className="col-md-2"/>
            <ItemCard className="col-md-2"/>
            <ItemCard className="col-md-2"/>
        </Row>
    );
};

export default CategoryItems;