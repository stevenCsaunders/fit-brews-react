import React from 'react';
import RenderItemCard from './ItemCard';


//Need name, image, description, featured
const FeaturedCardContainer = ({drinks}) => {
    const {name, image, description, featured} = drinks;
    
    const featuredDrinks = drinks.filter(drink => drink.featured === true);
    const myFeatured = featuredDrinks.slice(0, 4).map((drink) => {
            return (
                <RenderItemCard name={drink.name} image={drink.image} description={drink.description}/>
            )
    });

    console.log("Below is my Featured");
    console.log(myFeatured);

    return (

        <div className="container item-card-container">
                <h3 className="mb-0 item-container-title">Featured Drinks</h3>
                <div className="row mt-0 pt-0">
                    {myFeatured}
            </div>
        </div>
    )
}

export default FeaturedCardContainer;