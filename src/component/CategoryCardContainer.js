import React from 'react';
import RenderItemCard from './ItemCard';

const CategoryCardContainer = () => {
    return (

        <div className="container ItemCardContainer">
                <h3 className="mb-0 ItemContainerTitle">Category 1</h3>
                <div className="row mt-0 pt-0">
                    <RenderItemCard />
                    <RenderItemCard />
                    <RenderItemCard />
                    <RenderItemCard />
            </div>
        </div>
    )
}

export default CategoryCardContainer;