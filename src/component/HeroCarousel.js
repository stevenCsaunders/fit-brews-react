import React from 'react';
import { UncontrolledCarousel } from 'reactstrap'


const RenderCarousel = ({ drinks }) => {
    
    const checkFeatured = (drink) => drink.featured === true
    const featuredDrinks = drinks.filter(checkFeatured).slice(0, 3);

    const slides = [
        {
            src: featuredDrinks[0].image,
            altText: featuredDrinks[0].name,
            caption: featuredDrinks[0].description,
            header: featuredDrinks[0].name,
            key: '1',
        },
        {
            src: featuredDrinks[1].image,
            altText: featuredDrinks[1].name,
            caption: featuredDrinks[1].description,
            header: featuredDrinks[1].name,
            key: '2',
        },
        {
            src: featuredDrinks[2].image,
            altText: featuredDrinks[2].name,
            caption: featuredDrinks[2].description,
            header: featuredDrinks[2].name,
            key: '3',
        },
    ]

    return (
        <div className="carouselImage">
            <UncontrolledCarousel items={slides} />
        </div>
    )
}

export default RenderCarousel;