import React from 'react'
import RenderItemCard from './ItemCard'


const FeaturedCardContainer = ({ drinks }) => {
    const checkFeatured = drink => drink.featured === true;
    const featuredDrinks = drinks
        .filter(checkFeatured)
        .slice(0, 4)
        .map((drink) => {
            return (
                <RenderItemCard
                    key={drink.id} // Have to add the id for the map
                    name={drink.name}
                    image={drink.image}
                    description={drink.description}
                />
            )
        })

    return (
        <div className="container item-card-container">
            <h3 className="mb-0 item-container-title">Featured Drinks</h3>
            <div className="row mt-0 pt-0">{featuredDrinks}</div>

        </div>
    )
}

export default FeaturedCardContainer
