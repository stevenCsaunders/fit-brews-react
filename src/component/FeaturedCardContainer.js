import React from 'react';
import RenderItemCard from './ItemCard';

const FeaturedCardContainer = () => {
    return (

        <div className="container item-card-container">
                <h3 className="mb-0 item-container-title">Featured Drinks</h3>
                <div className="row mt-0 pt-0">
                    <RenderItemCard />
                    <RenderItemCard />
                    <RenderItemCard />
                    <RenderItemCard />
            </div>
        </div>
    )
}

export default FeaturedCardContainer;